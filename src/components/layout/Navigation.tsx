'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import SiteMenu from '@/components/SiteMenu'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-card border-b border-stone/50'
          : 'bg-white/95 backdrop-blur-sm border-b border-stone'
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-12 lg:px-20" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Aidan Flynn \u2014 Home">
            <Image
              src="/images/logo-mark.svg"
              alt=""
              width={30}
              height={23}
              className="h-6 w-auto"
            />
            <Image
              src="/images/logo-wordmark.svg"
              alt="Aidan Flynn"
              width={160}
              height={16}
              className="hidden sm:block h-4 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-sans text-small font-medium uppercase tracking-wider transition-colors duration-200 whitespace-nowrap',
                  pathname === item.href
                    ? 'text-navy'
                    : 'text-warm-grey hover:text-navy'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-small font-medium text-warm-grey hover:text-navy transition-colors whitespace-nowrap"
            >
              <Phone size={16} />
              {CONTACT.phoneDisplay}
            </a>
            <Button href="/contact" variant="gold" size="sm">
              Get Your Free Kit
            </Button>
          </div>

          {/* Mobile/tablet menu button */}
          <div className="lg:hidden">
            <SiteMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
