import { Shield, Award, Star, PackageCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT } from '@/lib/constants'

interface TrustBarProps {
  className?: string
  background?: 'stone' | 'white'
}

const trustItems = [
  { icon: Shield, label: 'HMRC Registered' },
  { icon: Award, label: 'Trading Standards Approved' },
  { icon: Star, label: `Trustpilot ${CONTACT.trustpilotScore}/5` },
  { icon: PackageCheck, label: 'Free Insured Returns' },
]

export default function TrustBar({ className, background = 'stone' }: TrustBarProps) {
  return (
    <section
      className={cn(
        'py-6 md:py-8',
        background === 'stone' ? 'bg-stone' : 'bg-white',
        className
      )}
      aria-label="Trust credentials"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-small font-medium text-warm-grey">
              <item.icon size={18} className="text-navy" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
