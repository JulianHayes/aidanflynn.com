import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
}

export default function Input({ label, error, helperText, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="block text-small font-medium text-charcoal">
        {label}
        {props.required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border border-stone bg-white text-charcoal text-body',
          'placeholder:text-warm-grey/60',
          'focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold',
          'transition-colors duration-200',
          error && 'border-error focus:ring-error focus:border-error',
          className
        )}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-small text-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-small text-warm-grey">
          {helperText}
        </p>
      )}
    </div>
  )
}
