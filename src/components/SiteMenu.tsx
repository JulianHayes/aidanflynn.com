'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail } from 'lucide-react'
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
      className="group relative flex items-center border-b border-charcoal/10 py-5 md:py-7"
    >
      <Link ref={ref} href={href} className="flex items-start w-full">
        <span className="text-gold/60 text-2xl md:text-3xl font-thin mr-3 font-sans">
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
            className="relative z-10 block text-2xl md:text-3xl font-serif text-charcoal transition-colors duration-300 group-hover:text-navy"
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

function Curve() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!height) return null

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] h-full stroke-none hidden md:block"
      style={{ fill: '#FAF7F2' }}
    >
      <motion.path
        initial={{ d: initialPath }}
        animate={{ d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }}
        exit={{ d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }}
      />
    </svg>
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
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="relative w-7 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-7 bg-navy transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-navy transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-navy transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm"
            style={{ zIndex: 9990 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: 'calc(100% + 100px)' }}
            animate={{ x: '0', transition: menuSlideTransition }}
            exit={{ x: 'calc(100% + 100px)', transition: menuSlideTransition }}
            className="fixed right-0 top-0 h-[100dvh] w-screen max-w-md bg-cream"
            style={{ zIndex: 9995 }}
          >
            <div className="h-full flex flex-col justify-between pt-20 pb-8">
              {/* Nav items */}
              <div className="px-8 md:px-12">
                <p className="text-caption uppercase tracking-wider text-warm-grey border-b border-charcoal/10 pb-3 mb-2 font-sans">
                  Navigation
                </p>
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
              <div className="px-8 md:px-12 space-y-4">
                <div className="border-t border-charcoal/10 pt-6 space-y-3">
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
                <Button href="/contact" variant="gold" size="md" className="w-full">
                  Get Your Free Kit
                </Button>
              </div>
            </div>

            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
