import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({ children, className, padding = 'lg' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-stone bg-surface shadow-card transition-shadow duration-300 hover:shadow-md',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
