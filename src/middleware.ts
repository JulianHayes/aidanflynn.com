import { NextResponse, type NextRequest } from 'next/server'
import { LANDING_MODE } from '@/lib/constants'

// While LANDING_MODE is true, force every public route back to / so the
// half-built pages (about, pricing, how-it-works, blog…) are not exposed
// before the real launch. API routes, Next internals, static assets, and
// the sitemap/robots files are left alone.
//
// To switch back to the full site after launch, set LANDING_MODE = false in
// src/lib/constants.ts. No other change required.

const ALLOWED_PREFIXES = [
  '/api',
  '/_next',
  '/favicon',
  '/robots.txt',
  '/sitemap.xml',
  '/fonts',
  '/images',
  '/icons',
]

export function middleware(request: NextRequest) {
  if (!LANDING_MODE) return NextResponse.next()

  const { pathname } = request.nextUrl
  if (pathname === '/') return NextResponse.next()
  if (ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/'
  return NextResponse.redirect(url)
}

export const config = {
  // Run on every path the matcher does not exclude. The exclusion list mirrors
  // ALLOWED_PREFIXES so the middleware does not even run for assets.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts|images|icons).*)'],
}
