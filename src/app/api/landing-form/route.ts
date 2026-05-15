import { NextResponse } from 'next/server'
import { CONTACT } from '@/lib/constants'

// Route handler for the temporary landing-page form.
// 1. Validates the payload
// 2. Writes the submission to Supabase (table: public.landing_submissions) via PostgREST
// 3. Emails Aidan via Resend
//
// Environment variables expected (set in Vercel project settings):
//   SUPABASE_URL                  e.g. https://nwjucsabytvsfytdhipq.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY     server-only, do not expose to the client
//   RESEND_API_KEY                server-only
//   RESEND_FROM                   verified sender, e.g. "Aidan Flynn website <noreply@aidanflynn.com>"
//   AIDAN_NOTIFICATION_EMAIL      where Aidan wants the alerts (defaults to CONTACT.email)
//
// If Supabase or Resend env vars are missing, the route still returns 200 so the
// customer is not left staring at an error — but it logs the failure to the
// Vercel function logs so Julian can spot and fix it.

export const runtime = 'nodejs'

const ALLOWED_TYPES = ['enquiry', 'kit_request'] as const
type SubmissionType = (typeof ALLOWED_TYPES)[number]

interface IncomingBody {
  submissionType?: SubmissionType
  name?: string
  email?: string
  phone?: string
  enquiryMessage?: string
  itemsDescription?: string
  country?: 'GB' | 'IE'
  postcode?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  county?: string
}

function clean(input: string | undefined, max = 2000): string {
  if (!input) return ''
  return String(input).trim().slice(0, max)
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let body: IncomingBody
  try {
    body = (await request.json()) as IncomingBody
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const submissionType: SubmissionType =
    body.submissionType && ALLOWED_TYPES.includes(body.submissionType) ? body.submissionType : 'enquiry'

  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  const phone = clean(body.phone, 60)

  if (!name) return NextResponse.json({ error: 'name_required' }, { status: 400 })
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }

  const payload = {
    submission_type: submissionType,
    name,
    email,
    phone: phone || null,
    enquiry_message: submissionType === 'enquiry' ? clean(body.enquiryMessage, 4000) || null : null,
    items_description:
      submissionType === 'kit_request' ? clean(body.itemsDescription, 2000) || null : null,
    address_line1: submissionType === 'kit_request' ? clean(body.addressLine1, 200) || null : null,
    address_line2: submissionType === 'kit_request' ? clean(body.addressLine2, 200) || null : null,
    city: submissionType === 'kit_request' ? clean(body.city, 120) || null : null,
    county: submissionType === 'kit_request' ? clean(body.county, 120) || null : null,
    postcode: submissionType === 'kit_request' ? clean(body.postcode, 20) || null : null,
    country:
      submissionType === 'kit_request' && (body.country === 'GB' || body.country === 'IE')
        ? body.country
        : null,
    user_agent: clean(request.headers.get('user-agent') || '', 500) || null,
    source: 'temp_landing',
    email_status: 'pending' as const,
  }

  // Write to Supabase via PostgREST (no SDK dependency required).
  let dbOk = false
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (supabaseUrl && supabaseKey) {
    try {
      const insertRes = await fetch(`${supabaseUrl}/rest/v1/landing_submissions`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          authorization: `Bearer ${supabaseKey}`,
          'content-type': 'application/json',
          prefer: 'return=minimal',
        },
        body: JSON.stringify(payload),
      })
      dbOk = insertRes.ok
      if (!insertRes.ok) {
        console.error('[landing-form] supabase insert failed', insertRes.status, await insertRes.text())
      }
    } catch (err) {
      console.error('[landing-form] supabase insert threw', err)
    }
  } else {
    console.warn('[landing-form] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — skipping DB write')
  }

  // Send the email notification via Resend.
  let mailOk = false
  const resendKey = process.env.RESEND_API_KEY
  const resendFrom = process.env.RESEND_FROM
  const aidanInbox = process.env.AIDAN_NOTIFICATION_EMAIL || CONTACT.email
  if (resendKey && resendFrom) {
    try {
      const subject =
        submissionType === 'kit_request'
          ? `New posting-pack request from ${name}`
          : `New enquiry from ${name}`
      const html = buildEmailHtml(subject, payload)
      const text = buildEmailText(subject, payload)
      const mailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${resendKey}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [aidanInbox],
          reply_to: email,
          subject,
          html,
          text,
        }),
      })
      mailOk = mailRes.ok
      if (!mailRes.ok) {
        console.error('[landing-form] resend send failed', mailRes.status, await mailRes.text())
      }
    } catch (err) {
      console.error('[landing-form] resend send threw', err)
    }
  } else {
    console.warn('[landing-form] RESEND_API_KEY or RESEND_FROM not set — skipping email')
  }

  // We deliberately do not block on these. Logging tells us if we need to retry.
  return NextResponse.json({ ok: true, stored: dbOk, emailed: mailOk })
}

// Plain helpers — kept inline so the file stays single-purpose.

function row(label: string, value: string | null | undefined): string {
  if (!value) return ''
  const safe = String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<tr><td style="padding:6px 12px 6px 0;color:#6B6560;font-family:Arial,sans-serif;font-size:14px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#2D2926;font-family:Arial,sans-serif;font-size:14px;vertical-align:top;">${safe}</td></tr>`
}

function buildEmailHtml(subject: string, p: Record<string, unknown>): string {
  const rows = [
    row('Name', p.name as string),
    row('Email', p.email as string),
    row('Phone', p.phone as string | null),
    row('Type', p.submission_type as string),
    row('Enquiry', p.enquiry_message as string | null),
    row('Items', p.items_description as string | null),
    row('Country', p.country as string | null),
    row('Address 1', p.address_line1 as string | null),
    row('Address 2', p.address_line2 as string | null),
    row('Town', p.city as string | null),
    row('County', p.county as string | null),
    row('Postcode', p.postcode as string | null),
  ]
    .filter(Boolean)
    .join('')

  return `<!doctype html><html><body style="margin:0;padding:24px;background:#FAF7F2;font-family:Arial,sans-serif;color:#2D2926;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border:1px solid #E8E2D8;border-radius:12px;padding:24px;">
      <tr><td style="padding-bottom:16px;border-bottom:1px solid #E8E2D8;">
        <div style="font-family:Georgia,serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#0F241C;">Aidan Flynn</div>
        <div style="font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-top:6px;">${subject}</div>
      </td></tr>
      <tr><td style="padding-top:16px;">
        <table role="presentation" cellpadding="0" cellspacing="0">${rows}</table>
      </td></tr>
      <tr><td style="padding-top:16px;font-family:Arial,sans-serif;font-size:11px;color:#8A9A92;">
        Sent from the temporary aidanflynn.com landing page. Reply directly to this email to respond to the customer.
      </td></tr>
    </table>
  </body></html>`
}

function buildEmailText(subject: string, p: Record<string, unknown>): string {
  const lines = [
    subject,
    '',
    `Name: ${p.name as string}`,
    `Email: ${p.email as string}`,
    p.phone ? `Phone: ${p.phone as string}` : '',
    `Type: ${p.submission_type as string}`,
    p.enquiry_message ? `Enquiry: ${p.enquiry_message as string}` : '',
    p.items_description ? `Items: ${p.items_description as string}` : '',
    p.country ? `Country: ${p.country as string}` : '',
    p.address_line1 ? `Address 1: ${p.address_line1 as string}` : '',
    p.address_line2 ? `Address 2: ${p.address_line2 as string}` : '',
    p.city ? `Town: ${p.city as string}` : '',
    p.county ? `County: ${p.county as string}` : '',
    p.postcode ? `Postcode: ${p.postcode as string}` : '',
    '',
    'Sent from the temporary aidanflynn.com landing page.',
  ]
  return lines.filter(Boolean).join('\n')
}
                            