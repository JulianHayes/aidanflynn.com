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
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&family=PT+Serif+Caption:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
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
