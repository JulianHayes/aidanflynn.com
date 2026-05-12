import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string
  options: readonly SelectOption[]
  error?: string
}

export default function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      <label htmlFor={selectId} className="block text-small font-medium text-charcoal">
        {label}
        {props.required && <span className="ml-1 text-error">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            'min-h-[44px] w-full rounded-lg border border-stone bg-surface px-4 py-3 pr-10 text-body text-charcoal',
            'focus:border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring',
            'disabled:bg-stone/30 disabled:cursor-not-allowed disabled:opacity-50',
            'appearance-none transition-colors duration-200',
            error && 'border-error focus:border-error focus:ring-error',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-warm-grey"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {error && (
        <p id={`${selectId}-error`} className="text-small text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
