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

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Get in touch
            </h1>
            <p className="text-body md:text-subheading text-warm-grey">
              Whether you have a question, want to request a free posting kit, or just want to say hello — we are here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-surface py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-6">
                  Contact details
                </h2>
                <div className="space-y-4">
                  <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 text-body text-warm-grey hover:text-navy transition-colors">
                    <Phone size={20} className="text-navy flex-shrink-0" />
                    {CONTACT.phoneDisplay}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-body text-warm-grey hover:text-navy transition-colors">
                    <Mail size={20} className="text-navy flex-shrink-0" />
                    {CONTACT.email}
                  </a>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="text-navy flex-shrink-0 mt-1" />
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
                <h3 className="font-serif text-xl text-charcoal mb-4">Our locations</h3>
                <div className="space-y-4">
                  {LOCATIONS.filter(l => !l.comingSoon).map((loc) => (
                    <div key={loc.slug} className="flex items-start gap-3 text-body text-warm-grey">
                      <MapPin size={20} className="text-navy flex-shrink-0 mt-1" />
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
              <div className="aspect-video bg-stone rounded-card flex items-center justify-center">
                <p className="text-warm-grey text-small">Map embed placeholder</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-6">
                  Send us a message
                </h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <h3 className="font-serif text-xl text-charcoal mb-3">Message sent</h3>
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
                      <label htmlFor="message" className="block text-small font-medium text-charcoal">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange('message')}
                        className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background text-charcoal text-body placeholder:text-warm-grey/60 shadow-elev-inset focus:outline-none focus:border-navy focus:shadow-elev-inset-focus disabled:opacity-50 disabled:cursor-not-allowed transition-[box-shadow,border-color] duration-200 resize-y min-h-[120px]"
                        rows={5}
                        placeholder="How can we help?"
                        required
                        aria-invalid={errors.message ? 'true' : undefined}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-small text-error" role="alert">{errors.message}</p>
                      )}
                    </div>
                    <Button type="submit" variant="primary" disabled={submitting} className="w-full">
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
