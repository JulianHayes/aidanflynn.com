import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-7',
}

export default function Card({ children, className, padding = 'lg' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border-subtle rounded-[14px] shadow-elev-card hover:shadow-elev-card-hover transition-[box-shadow,transform] duration-[250ms] ease-standard',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
