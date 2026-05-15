import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Aidan Flynn | Precious Metals Buyer — UK & Ireland',
    template: '%s | Aidan Flynn',
  },
  description:
    'Aidan Flynn buys gold, silver, and platinum from people across the UK and Ireland. Transparent pricing. Free insured postage. Same-day payment.',
  metadataBase: new URL('https://aidanflynn.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Aidan Flynn',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head />
      {/* Fonts self-hosted from public/fonts/ — no external requests */}
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
