import { NextResponse } from 'next/server'

// Server-side proxy to getAddress.io.
//
// We keep the API key on the server so the browser never sees it. The route
// takes a postcode, calls getAddress.io's /find endpoint, and returns a tidy
// list of addresses for the form to render in a dropdown.
//
// Required env var (set in Vercel project settings):
//   GETADDRESS_API_KEY   from getaddress.io dashboard, server-side key

export const runtime = 'nodejs'

interface GetAddressResponse {
  postcode?: string
  latitude?: number
  longitude?: number
  addresses?: Array<{
    formatted_address?: string[]
    line_1?: string
    line_2?: string
    line_3?: string
    line_4?: string
    locality?: string
    town_or_city?: string
    county?: string
    district?: string
    country?: string
    building_number?: string
    building_name?: string
    sub_building_name?: string
    sub_building_number?: string
    thoroughfare?: string
  }>
}

export interface SimpleAddress {
  label: string
  line1: string
  line2: string
  city: string
  county: string
}

export interface PostcodeLookupResponse {
  postcode: string
  addresses: SimpleAddress[]
}

function clean(s: string | undefined): string {
  return (s ?? '').trim()
}

function buildLine1(a: NonNullable<GetAddressResponse['addresses']>[number]): string {
  if (a.line_1 && a.line_1.trim()) return a.line_1.trim()
  const parts = [
    clean(a.sub_building_name),
    clean(a.sub_building_number),
    clean(a.building_name),
    clean(a.building_number),
    clean(a.thoroughfare),
  ].filter(Boolean)
  return parts.join(' ')
}

function buildLine2(a: NonNullable<GetAddressResponse['addresses']>[number]): string {
  if (a.line_2 && a.line_2.trim()) return a.line_2.trim()
  if (a.line_3 && a.line_3.trim()) return a.line_3.trim()
  return ''
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const raw = (url.searchParams.get('postcode') || '').trim().toUpperCase().replace(/\s+/g, '')
  if (!raw) {
    return NextResponse.json({ error: 'postcode_required' }, { status: 400 })
  }

  if (!/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(raw)) {
    return NextResponse.json({ error: 'invalid_postcode_format' }, { status: 400 })
  }

  const apiKey = process.env.GETADDRESS_API_KEY
  if (!apiKey) {
    console.error('[postcode-lookup] GETADDRESS_API_KEY not set')
    return NextResponse.json({ error: 'service_unavailable' }, { status: 503 })
  }

  try {
    const upstream = await fetch(
      `https://api.getAddress.io/find/${encodeURIComponent(raw)}?expand=true&api-key=${encodeURIComponent(apiKey)}`,
      { headers: { accept: 'application/json' } }
    )

    if (upstream.status === 404) {
      return NextResponse.json({ error: 'postcode_not_found' }, { status: 404 })
    }
    if (upstream.status === 401 || upstream.status === 403) {
      console.error('[postcode-lookup] getAddress auth failed', upstream.status)
      return NextResponse.json({ error: 'service_unavailable' }, { status: 503 })
    }
    if (!upstream.ok) {
      const body = await upstream.text().catch(() => '')
      console.error('[postcode-lookup] getAddress error', upstream.status, body)
      return NextResponse.json({ error: 'lookup_failed' }, { status: 502 })
    }

    const data = (await upstream.json()) as GetAddressResponse
    const addresses: SimpleAddress[] = (data.addresses ?? []).map((a) => {
      const line1 = buildLine1(a)
      const line2 = buildLine2(a)
      const city = clean(a.town_or_city) || clean(a.locality) || clean(a.district)
      const county = clean(a.county)
      const labelParts = [line1, line2, city, county].filter(Boolean)
      return {
        label: labelParts.join(', '),
        line1,
        line2,
        city,
        county,
      }
    })

    const payload: PostcodeLookupResponse = {
      postcode: data.postcode || raw,
      addresses,
    }
    return NextResponse.json(payload, {
      headers: {
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    console.error('[postcode-lookup] threw', err)
    return NextResponse.json({ error: 'lookup_failed' }, { status: 502 })
  }
}
