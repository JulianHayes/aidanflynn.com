'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  items: string
}

interface FormErrors {
  name?: string
  email?: string
  address?: string
}

export default function KitRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    items: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.address.trim()) newErrors.address = 'Please enter your address'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    // TODO: Replace with actual API endpoint (e.g., Resend, SendGrid)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setSubmitting(false)
  }

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }

  if (submitted) {
    return (
      <div className="bg-success/5 border-success/20 rounded-card border px-6 py-12 text-center">
        <h3 className="mb-3 font-serif text-xl text-charcoal">Your kit is on its way</h3>
        <p className="text-body text-warm-grey">
          We will send your free insured posting kit within 24 hours. Check your email for
          confirmation and tracking details.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Input
        label="Full name"
        value={formData.name}
        onChange={handleChange('name')}
        error={errors.name}
        required
        placeholder="Your full name"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
          placeholder="you@example.com"
        />
        <Input
          label="Phone (optional)"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          placeholder="Your phone number"
        />
      </div>
      <Input
        label="Address"
        value={formData.address}
        onChange={handleChange('address')}
        error={errors.address}
        required
        placeholder="Your full postal address"
      />
      <div className="space-y-1">
        <label htmlFor="items" className="block text-small font-medium text-charcoal">
          Tell us about your items
        </label>
        <textarea
          id="items"
          value={formData.items}
          onChange={handleChange('items')}
          className="placeholder:text-warm-grey/60 min-h-[100px] w-full resize-y rounded-lg border border-stone bg-surface px-4 py-3 text-body text-charcoal transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
          rows={4}
          placeholder="Describe what you would like to sell (e.g., gold rings, silver bracelet, etc.)"
        />
      </div>
      <Button type="submit" variant="gold" disabled={submitting} className="w-full md:w-auto">
        {submitting ? 'Sending...' : 'Request your free kit'}
      </Button>
      <p className="text-small text-warm-grey">
        We will send your free insured kit within 24 hours. No obligation.
      </p>
    </form>
  )
}
