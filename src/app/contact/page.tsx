'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { CONTACT, LOCATIONS } from '@/lib/constants'

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message'
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
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field as keyof ContactFormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
              Get in touch
            </h1>
            <p className="text-body text-warm-grey md:text-subheading">
              Whether you have a question, want to request a free posting kit, or just want to say
              hello — we are here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                  Contact details
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-3 text-body text-warm-grey transition-colors hover:text-navy"
                  >
                    <Phone size={20} className="flex-shrink-0 text-navy" />
                    {CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-body text-warm-grey transition-colors hover:text-navy"
                  >
                    <Mail size={20} className="flex-shrink-0 text-navy" />
                    {CONTACT.email}
                  </a>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Opening hours</p>
                      <p>Monday – Friday: 9am – 5pm</p>
                      <p>Saturday: 10am – 3pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="mb-4 font-serif text-xl text-charcoal">Our locations</h3>
                <div className="space-y-4">
                  {LOCATIONS.filter((l) => !l.comingSoon).map((loc) => (
                    <div key={loc.slug} className="flex items-start gap-3 text-body text-warm-grey">
                      <MapPin size={20} className="mt-1 flex-shrink-0 text-navy" />
                      <div>
                        <p className="font-medium text-charcoal">{loc.city}</p>
                        <p>{loc.address}</p>
                        <p>{loc.phoneDisplay}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="flex aspect-video items-center justify-center rounded-card bg-stone">
                <p className="text-small text-warm-grey">Map embed placeholder</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="mb-6 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                  Send us a message
                </h2>
                {submitted ? (
                  <div className="py-8 text-center">
                    <h3 className="mb-3 font-serif text-xl text-charcoal">Message sent</h3>
                    <p className="text-body text-warm-grey">
                      Thank you for getting in touch. We will reply within one working day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <Input
                      label="Name"
                      value={formData.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                      required
                      placeholder="Your name"
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                      required
                      placeholder="you@example.com"
                    />
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="block text-small font-medium text-charcoal"
                      >
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange('message')}
                        className="placeholder:text-warm-grey/60 min-h-[120px] w-full resize-y rounded-lg border border-stone bg-surface px-4 py-3 text-body text-charcoal transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50"
                        rows={5}
                        placeholder="How can we help?"
                        required
                        aria-invalid={errors.message ? 'true' : undefined}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-small text-error" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Button type="submit" variant="gold" disabled={submitting} className="w-full">
                      {submitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
