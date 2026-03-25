'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  items: readonly FAQItem[]
}

interface FAQAccordionProps {
  sections: readonly FAQSection[]
  className?: string
}

export default function FAQAccordion({ sections, className }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className={cn('space-y-12', className)}>
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-6">
            {section.title}
          </h2>
          <div className="space-y-0 border-t border-stone">
            {section.items.map((item, itemIndex) => {
              const id = `faq-${sectionIndex}-${itemIndex}`
              const isOpen = openItems.has(id)

              return (
                <div key={id} className="border-b border-stone">
                  <h3>
                    <button
                      onClick={() => toggleItem(id)}
                      className="flex items-center justify-between w-full py-5 text-left text-body font-medium text-charcoal hover:text-navy transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-content`}
                      id={`${id}-trigger`}
                    >
                      <span className="pr-4">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className={cn(
                          'flex-shrink-0 text-warm-grey transition-transform duration-200',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`${id}-content`}
                    role="region"
                    aria-labelledby={`${id}-trigger`}
                    className={cn(
                      'overflow-hidden transition-all duration-200',
                      isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                    )}
                  >
                    <p className="text-body text-warm-grey pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
