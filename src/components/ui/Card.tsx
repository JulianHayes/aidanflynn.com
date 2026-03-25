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
    <div className={cn(
      'bg-white border border-stone rounded-card shadow-card',
      paddingStyles[padding],
      className
    )}>
      {children}
    </div>
  )
}
