import { MessageSquare, Package, Search, Banknote } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProcessStepsProps {
  className?: string
  variant?: 'compact' | 'detailed'
}

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell us what you have',
    description:
      'Use the calculator or describe your items. We will give you a realistic estimate before you commit to anything.',
    detailedDescription:
      'Use our online calculator to get an instant estimate, or simply describe what you have. Send photos if it helps. We will give you a realistic range so you know what to expect — no inflated promises.',
  },
  {
    icon: Package,
    title: 'Post it free',
    description: 'We send a free insured kit to your door. Drop it at any post office.',
    detailedDescription:
      'Request your free posting kit and it arrives within 24 hours. It comes with a padded, tamper-evident, pre-paid envelope, a simple guide, and everything you need. Drop it at any post office or arrange a collection. Fully insured from the moment it leaves your hands.',
  },
  {
    icon: Search,
    title: 'Get your valuation',
    description:
      'Every item weighed, tested, and priced transparently. You see the full breakdown.',
    detailedDescription:
      'Every item is weighed on calibrated scales and tested individually for purity. You receive a full breakdown: weight, purity, the spot price at the moment of testing, and the exact amount we are offering. No hidden fees, no vague estimates.',
  },
  {
    icon: Banknote,
    title: 'Get paid same day',
    description:
      'Accept the offer and the money is in your account today. Or get everything back, free.',
    detailedDescription:
      'Accept our offer and the money is in your bank account the same day — most customers see it within 2–4 hours. Decline and we return everything to you, fully insured, at no cost. No pressure, no expiring offers. You have 7 days to decide.',
  },
]

export default function ProcessSteps({ className, variant = 'compact' }: ProcessStepsProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4', className)}>
      {steps.map((step, index) => (
        <div key={step.title} className="relative">
          {index < steps.length - 1 && (
            <div className="absolute left-[calc(50%+32px)] top-8 hidden h-px w-[calc(100%-64px)] bg-stone lg:block" />
          )}
          <div className={cn('text-center', variant === 'detailed' && 'text-left')}>
            <div
              className={cn(
                'mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-stone bg-cream',
                variant === 'detailed' && 'mb-6'
              )}
            >
              <step.icon size={24} className="text-navy" />
            </div>
            <div className="mb-2 text-caption font-medium uppercase tracking-wider text-gold">
              Step {index + 1}
            </div>
            <h3 className="mb-2 font-serif text-lg text-charcoal">{step.title}</h3>
            <p className="text-small text-warm-grey">
              {variant === 'detailed' ? step.detailedDescription : step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
