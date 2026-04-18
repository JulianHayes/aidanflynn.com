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
        {props.required && <span className="text-error ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            'w-full px-4 py-3 pr-10 min-h-[44px] rounded-lg border border-border-subtle bg-background text-charcoal text-body',
            'shadow-elev-inset focus:outline-none focus:border-navy focus:shadow-elev-inset-focus',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-stone/30',
            'transition-[box-shadow,border-color] duration-200 appearance-none',
            error && 'border-error focus:border-error',
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
