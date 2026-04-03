'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Phone, Mail } from 'lucide-react'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import Button from '@/components/ui/Button'

const menuSlideTransition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }

function NavLink({
  label,
  href,
  index,
  onClose,
  isActive,
}: {
  label: string
  href: string
  index: number
  onClose: () => void
  isActive: boolean
}) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  return (
    <motion.div
      onClick={onClose}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center border-b border-charcoal/10 py-4 md:py-5"
    >
      <Link ref={ref} href={href} className="flex items-start w-full">
        <span className="text-gold/60 text-xl md:text-2xl font-thin mr-3 font-sans">
          {index}.
        </span>
        <div className="flex flex-col">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: 'spring',
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-xl md:text-2xl font-serif text-charcoal transition-colors duration-300 group-hover:text-navy"
          >
            {label.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: 'spring' }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.span>
          {isActive && (
            <span className="text-caption text-gold font-sans mt-1">Current page</span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export default function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Open menu"
      >
        <div className="relative w-7 h-5 flex flex-col justify-between">
          <span className="block h-0.5 w-7 bg-navy" />
          <span className="block h-0.5 w-7 bg-navy" />
          <span className="block h-0.5 w-7 bg-navy" />
        </div>
      </button>

      {/* Full-screen menu overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%', transition: menuSlideTransition }}
            exit={{ x: '100%', transition: menuSlideTransition }}
            className="fixed inset-0 bg-cream"
            style={{ zIndex: 9999 }}
          >
            {/* Close button \u2014 positioned exactly where the hamburger sits */}
            <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
              <div className="flex items-center justify-end h-16 md:h-20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-navy hover:text-navy-light transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Menu content */}
            <div className="h-[calc(100dvh-5rem)] flex flex-col justify-between">
              {/* Nav items */}
              <div className="max-w-content mx-auto w-full px-8 md:px-16 lg:px-20">
                {NAV_ITEMS.map((item, index) => (
                  <NavLink
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    index={index + 1}
                    onClose={() => setIsOpen(false)}
                    isActive={pathname === item.href}
                  />
                ))}
              </div>

              {/* Footer section */}
              <div className="max-w-content mx-auto w-full px-8 md:px-16 lg:px-20 pb-8">
                <div className="border-t border-charcoal/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="flex items-center gap-3 text-small text-warm-grey hover:text-navy transition-colors"
                    >
                      <Phone size={16} className="text-navy" />
                      {CONTACT.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 text-small text-warm-grey hover:text-navy transition-colors"
                    >
                      <Mail size={16} className="text-navy" />
                      {CONTACT.email}
                    </a>
                  </div>
                  <Button href="/contact" variant="gold" size="sm">
                    Get Your Free Kit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
