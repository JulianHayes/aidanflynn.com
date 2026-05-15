import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import LandingShell from '@/components/landing/LandingShell'
import { LANDING_MODE } from '@/lib/constants'
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
  // While LANDING_MODE is true we render a minimal shell (Brand + footer) so
  // the half-built navigation links never appear. Flip the flag in constants.ts
  // to swap back to the full nav + footer once the main site is ready.
  return (
    <html lang="en" data-theme="light" suppressHydrati