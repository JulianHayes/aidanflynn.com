import Link from 'next/link'
import { SITE_NAME, CONTACT, LOCATIONS } from '@/lib/constants'
import { Shield, Award, Star, Mail } from 'lucide-react'
import Brand from './Brand'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80" role="contentinfo">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Brand tone="inverse" />
            <p className="mt-4 text-small text-white/60">
              Transparent precious metals buying across the UK and Ireland. Published pricing, free
              insured postage, same-day payment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-small font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Sell Inherited Jewellery', href: '/sell-inherited-jewellery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-small font-semibold uppercase tracking-wider text-white">
              Locations
            </h3>
            <ul className="space-y-3">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-small text-white/60 transition-colors hover:text-white"
                  >
                    {location.city}
                    {location.comingSoon && (
                      <span className="ml-2 text-caption text-gold">(Coming soon)</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-small font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2 text-small text-white/60 hover:text-white transition-colors"
                >
                  <svg width="12" height="17" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="0.75" y="0.75" width="12.5" height="18.5" rx="2.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M5.2 2.6 H8.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="7" cy="16.6" r="0.9" fill="currentColor" />
                  </svg>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-small text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={14} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-small text-white/60">
              <Shield size={16} />
              HMRC Registered
            </div>
            <div className="flex items-center gap-2 text-small text-white/60">
              <Award size={16} />
              Trading Standards Approved
            </div>
            <div className="flex items-center gap-2 text-small text-white/60">
              <Star size={16} />
              Trustpilot Excellent
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 text-caption text-white/40 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-white/60">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white/60">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
