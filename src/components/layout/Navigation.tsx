'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone">
      <nav className="max-w-content mx-auto px-6 md:px-12 lg:px-20" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-navy text-xl md:text-2xl font-bold tracking-tight">
            Aidan Flynn
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-sans text-small font-medium uppercase tracking-wider transition-colors duration-200',
                  pathname === item.href
                    ? 'text-navy border-b-2 border-gold pb-1'
                    : 'text-warm-grey hover:text-navy'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-small font-medium text-warm-grey hover:text-navy transition-colors"
            >
              <Phone size={16} />
              {CONTACT.phoneDisplay}
            </a>
            <Button href="/contact" variant="gold" size="sm">
              Get Your Free Kit
            </Button>
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
