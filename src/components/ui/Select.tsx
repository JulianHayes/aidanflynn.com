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
      <select
        id={selectId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border border-stone bg-white text-charcoal text-body',
          'focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold',
          'transition-colors duration-200 appearance-none',
          'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B6560%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:24px] bg-[right_12px_center] bg-no-repeat',
          error && 'border-error focus:ring-error focus:border-error',
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
      {error && (
        <p id={`${selectId}-error`} className="text-small text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
