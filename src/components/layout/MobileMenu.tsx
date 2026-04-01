'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-navy"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-[60] bg-white overflow-y-auto shadow-lg border-t border-stone"
          >
            <div className="flex flex-col p-6 gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-3 px-4 rounded-lg text-lg font-sans font-medium transition-colors',
                      pathname === item.href
                        ? 'text-navy bg-cream'
                        : 'text-warm-grey hover:text-navy hover:bg-cream'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <hr className="my-4 border-stone" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 py-3 px-4 text-warm-grey hover:text-navy transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-medium">{CONTACT.phoneDisplay}</span>
                </a>

                <div className="mt-4">
                  <Button href="/contact" variant="gold" size="md" className="w-full">
                    Get Your Free Kit
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
