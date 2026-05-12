'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Brand from './Brand'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-surface backdrop-blur-md border-b border-stone'
          : 'bg-surface backdrop-blur-sm border-b border-stone'
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-12 lg:px-20" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Brand />

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-sans text-small font-medium uppercase tracking-wider transition-colors duration-200',
                  pathname === item.href ? 'text-navy' : 'text-warm-grey hover:text-navy'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${CONTACT.phone}`}
              className="group flex items-center gap-2 text-small font-medium text-warm-grey hover:text-navy transition-colors"
            >
              <span className="phone-ic">
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="0.75" y="0.75" width="12.5" height="18.5" rx="2.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M5.2 2.6 H8.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="7" cy="16.6" r="0.9" fill="currentColor" />
                </svg>
              </span>
              {CONTACT.phoneDisplay}
            </a>
            <ThemeToggle />
            <Button href="/contact" variant="primary" size="sm">
              Get Your Free Kit
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
