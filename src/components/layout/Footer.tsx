import Link from 'next/link'
import Image from 'next/image'
import { SITE_NAME, CONTACT, LOCATIONS } from '@/lib/constants'
import { Shield, Award, Star, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80" role="contentinfo">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Aidan Flynn — Home">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                width={30}
                height={23}
                className="h-6 w-auto brightness-0 invert"
              />
              <Image
                src="/images/logo-wordmark.svg"
                alt="Aidan Flynn"
                width={140}
                height={14}
                className="h-3.5 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-small text-white/60">
              Transparent precious metals buying across the UK and Ireland. Published pricing, free insured postage, same-day payment.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-small font-semibold text-white uppercase tracking-wider mb-4">
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
                  <Link href={link.href} className="text-small text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-small font-semibold text-white uppercase tracking-wider mb-4">
              Locations
            </h3>
            <ul className="space-y-3">
              {LOCATIONS.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-small text-white/60 hover:text-white transition-colors"
                  >
                    {location.city}
                    {location.comingSoon && <span className="ml-2 text-gold text-caption">(Coming soon)</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-small font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-small text-white/60 hover:text-white transition-colors">
                  <Phone size={14} />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-small text-white/60 hover:text-white transition-colors">
                  <Mail size={14} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-caption text-white/40">
            <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
