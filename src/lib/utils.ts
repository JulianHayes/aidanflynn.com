export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(amount: number, currency: 'GBP' | 'EUR' = 'GBP'): string {
  const symbol = currency === 'GBP' ? '£' : '€'
  return `${symbol}${amount.toFixed(2)}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
