'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_ITEMS, CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

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

      {isOpen && mounted && createPortal(
        <div
          className="fixed top-16 md:top-20 left-0 right-0 bottom-0 bg-white overflow-y-auto shadow-lg border-t border-stone lg:hidden z-[9999]"
        >
          <div className="flex flex-col p-6 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
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
            ))}

            <hr className="my-4 border-stone" />

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
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
