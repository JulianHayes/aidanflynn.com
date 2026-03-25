import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-light',
  secondary: 'bg-white text-navy border border-navy hover:bg-cream',
  gold: 'bg-gold text-charcoal hover:bg-gold-light',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-small',
  md: 'px-8 py-4 text-body',
  lg: 'px-10 py-5 text-body',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
