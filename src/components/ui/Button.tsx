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
  primary: 'btn-primary text-white',
  secondary: 'btn-secondary',
  gold: 'btn-gold',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 min-h-[40px] rounded-[8px] text-[14px]',
  md: 'px-[22px] py-[12px] min-h-[48px] rounded-[10px] text-[15px]',
  lg: 'px-[26px] py-[14px] min-h-[52px] rounded-[10px] text-[15px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-serif font-bold tracking-[.01em] transition-[transform,box-shadow,background-color,border-color] duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
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
