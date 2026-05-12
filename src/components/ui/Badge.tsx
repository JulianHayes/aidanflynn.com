import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'green' | 'stone'
  className?: string
}

const variantStyles = {
  gold: 'bg-gold/10 text-gold border-gold/20',
  navy: 'bg-navy/10 text-navy border-navy/20',
  green: 'bg-success/10 text-success border-success/20',
  stone: 'bg-stone text-warm-grey border-stone',
}

export default function Badge({ children, variant = 'navy', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-small font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
