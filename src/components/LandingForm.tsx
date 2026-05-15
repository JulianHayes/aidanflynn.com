'use client'

import { useEffect, useRef, useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type SubmissionType = 'enquiry' | 'kit_request'
type Country = 'GB' | 'IE'

interface FormState {
  submissionType: SubmissionType
  name: string
  email: string
  phone: string
  enquiryMessage: string
  itemsDescription: string
  country: Country
  postcode: string
  addressLine1: string
  addressLine2: string
  city: string
  county: string
}

interface FormErrors {
  name?: string
  email?: string
  enquiryMessage?: string
  itemsDescription?: string
  addressLine1?: string
  city?: string
  postcode?: string
}

// Postcodes.io response shape for the bits we care about
interface PostcodeLookup {
  postcode: string
  admin_district: string | null
  admin_county: string | null
  parish: string | null
  region: string | null
  country: string | null
}

const initialState: FormState = {
  submissionType: 'kit_request',
  name: '',
  email: '',
  phone: '',
  enquiryMessage: '',
  itemsDescription: '',
  country: 'GB',
  postcode: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  county: '',
}

export default function LandingForm() {
  const [data, setData] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  // UK postcode lookup state
  const [lookupBusy, setLookupBusy] = useState(false)
  const [lookupError, setLookupError] = useState<string | null>(null)
  const [lookupHit, setLookupHit] = useState(false)
  const lookupAbort = useRef<AbortController | null>(null)

  // Reset address fields when toggling country
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      postcode: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      county: '',
    }))
    setLookupHit(false)
    setLookupError(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.country])

  const update =
    <K extends keyof FormState>(field: K) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = e.target.value as unknown as FormState[K]
      setData((prev) => ({ ...prev, [field]: value }))
      // Only clear an error if this field has one — keeps the FormErrors type honest.
      setErrors((prev) => {
        if (!(field in prev)) return prev
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!data.name.trim()) next.name = 'Please enter your name'
    if (!data.email.trim()) {
      next.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'That email address does not look right'
    }
    if (data.submissionType === 'enquiry') {
      if (!data.enquiryMessage.trim()) {
        next.enquiryMessage = 'Tell us a little about what you would like to ask'
      }
    } else {
      if (!data.itemsDescription.trim()) {
        next.itemsDescription =
          'A short description of what you would like to send helps Aidan prepare your kit'
      }
      if (!data.addressLine1.trim()) next.addressLine1 = 'Please enter the first line of your address'
      if (!data.city.trim()) next.city = 'Please enter your town or city'
      if (!data.postcode.trim()) {
        next.postcode = data.country === 'GB' ? 'Please enter your postcode' : 'Please enter your Eircode'
      }
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  // UK postcode lookup against postcodes.io (free, no key, unlimited).
  const lookupPostcode = async () => {
    const raw = data.postcode.trim().toUpperCase().replace(/\s+/g, '')
    if (!raw) {
      setLookupError('Enter a postcode first')
      return
    }
    setLookupBusy(true)
    setLookupError(null)
    setLookupHit(false)

    lookupAbort.current?.abort()
    const ctrl = new AbortController()
    lookupAbort.current = ctrl

    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(raw)}`, {
        signal: ctrl.signal,
      })
      if (!res.ok) {
        setLookupError(
          'We could not find that postcode. Please check it or enter your address by hand.'
        )
        return
      }
      const json: { result: PostcodeLookup } = await res.json()
      const r = json.result
      setData((prev) => ({
        ...prev,
        postcode: r.postcode,
        city: prev.city || r.admin_district || r.parish || '',
        county: prev.county || r.admin_county || r.region || '',
      }))
      setLookupHit(true)
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setLookupError('Lookup did not respond. Please enter your address by hand.')
      }
    } finally {
      setLookupBusy(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)
    if (!validate()) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/landing-form', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || 'Submission failed')
      }
      setSubmitted(true)
    } catch {
      setServerError(
        'We could not send your message just now. Please email aidan@aidanflynn.com directly and we will pick it up.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-success/30 bg-success/5 px-6 py-12 text-center">
        <h3 className="mb-3 font-serif text-2xl text-charcoal">Thank you. We have your message.</h3>
        <p className="mx-auto max-w-md text-body text-warm-grey">
          {data.submissionType === 'kit_request'
            ? 'Aidan will be in touch within one working day to confirm your free insured posting pack and answer any questions.'
            : 'Aidan will reply personally within one working day. There is no rush — your enquiry does not commit you to anything.'}
        </p>
      </div>
    )
  }

  const isKit = data.submissionType === 'kit_request'

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Submission type toggle */}
      <fieldset>
        <legend className="mb-3 block text-small font-medium text-charcoal">
          What can we help with?
        </legend>
        <div role="radiogroup" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ToggleCard
            checked={isKit}
            onClick={() => setData((p) => ({ ...p, submissionType: 'kit_request' }))}
            title="Request a free posting pack"
            description="We send you a free insured Royal Mail or An Post envelope for your items."
          />
          <ToggleCard
            checked={!isKit}
            onClick={() => setData((p) => ({ ...p, submissionType: 'enquiry' }))}
            title="Ask a question first"
            description="Send a quick enquiry. Aidan will reply personally within one working day."
          />
        </div>
      </fieldset>

      {/* Shared fields */}
      <Input
        label="Your name"
        value={data.name}
        onChange={update('name')}
        error={errors.name}
        required
        autoComplete="name"
        placeholder="Full name"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={update('email')}
          error={errors.email}
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
        <Input
          label="Phone (optional)"
          type="tel"
          value={data.phone}
          onChange={update('phone')}
          autoComplete="tel"
          placeholder="So Aidan can call if it is easier"
        />
      </div>

      {/* Branch: enquiry vs kit */}
      {!isKit && (
        <div className="space-y-1">
          <label htmlFor="enquiry-message" className="block text-small font-medium text-charcoal">
            Your enquiry <span className="ml-1 text-error">*</span>
          </label>
          <textarea
            id="enquiry-message"
            value={data.enquiryMessage}
            onChange={update('enquiryMessage')}
            rows={5}
            placeholder="Tell us what you would like to know. There is no rush and no obligation."
            className={cn(
              'min-h-[120px] w-full resize-y rounded-lg border bg-background px-4 py-3 text-body text-charcoal',
              'placeholder:text-warm-grey/60 shadow-elev-inset focus:shadow-elev-inset-focus focus:border-navy focus:outline-none',
              'transition-[box-shadow,border-color] duration-200',
              errors.enquiryMessage ? 'border-error focus:border-error' : 'border-border-subtle'
            )}
            aria-invalid={errors.enquiryMessage ? 'true' : undefined}
            aria-describedby={errors.enquiryMessage ? 'enquiry-message-error' : undefined}
          />
          {errors.enquiryMessage && (
            <p id="enquiry-message-error" className="text-small text-error" role="alert">
              {errors.enquiryMessage}
            </p>
          )}
        </div>
      )}

      {isKit && (
        <>
          <div className="space-y-1">
            <label htmlFor="items" className="block text-small font-medium text-charcoal">
              What would you like to send? <span className="ml-1 text-error">*</span>
            </label>
            <textarea
              id="items"
              value={data.itemsDescription}
              onChange={update('itemsDescription')}
              rows={4}
              placeholder="A short description is enough. For example: a gold chain, two rings, a watch case."
              className={cn(
                'min-h-[100px] w-full resize-y rounded-lg border bg-background px-4 py-3 text-body text-charcoal',
                'placeholder:text-warm-grey/60 shadow-elev-inset focus:shadow-elev-inset-focus focus:border-navy focus:outline-none',
                'transition-[box-shadow,border-color] duration-200',
                errors.itemsDescription ? 'border-error focus:border-error' : 'border-border-subtle'
              )}
              aria-invalid={errors.itemsDescription ? 'true' : undefined}
              aria-describedby={errors.itemsDescription ? 'items-error' : undefined}
            />
            {errors.itemsDescription && (
              <p id="items-error" className="text-small text-error" role="alert">
                {errors.itemsDescription}
              </p>
            )}
          </div>

          {/* Address */}
          <fieldset>
            <legend className="mb-3 block text-small font-medium text-charcoal">
              Where shall we send your pack?
            </legend>
            <div
              role="radiogroup"
              className="mb-4 inline-flex rounded-lg border border-border-subtle bg-background p-1"
            >
              {(['GB', 'IE'] as const).map((c) => {
                const active = data.country === c
                return (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setData((p) => ({ ...p, country: c }))}
                    className={cn(
                      'rounded-md px-4 py-2 min-h-[44px] text-small font-medium transition-colors duration-200',
                      active ? 'bg-navy text-white' : 'text-warm-grey hover:text-charcoal'
                    )}
                  >
                    {c === 'GB' ? 'United Kingdom' : 'Ireland'}
                  </button>
                )
              })}
            </div>

            {data.country === 'GB' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <Input
                    label="Postcode"
                    value={data.postcode}
                    onChange={update('postcode')}
                    error={errors.postcode}
                    placeholder="e.g. BN1 1HB"
                    autoComplete="postal-code"
                    required
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={lookupPostcode}
                    disabled={lookupBusy}
                    className="sm:mb-[2px]"
                  >
                    {lookupBusy ? 'Looking up…' : 'Find address'}
                  </Button>
                </div>
                {lookupError && (
                  <p className="text-small text-error" role="alert">
                    {lookupError}
                  </p>
                )}
                {lookupHit && (
                  <p className="caption-serif text-warm-grey">
                    We found that postcode. Please fill in the street details below.
                  </p>
                )}
                <Input
                  label="Address line 1"
                  value={data.addressLine1}
                  onChange={update('addressLine1')}
                  error={errors.addressLine1}
                  placeholder="House number and street"
                  autoComplete="address-line1"
                  required
                />
                <Input
                  label="Address line 2 (optional)"
                  value={data.addressLine2}
                  onChange={update('addressLine2')}
                  placeholder="Flat, building, etc."
                  autoComplete="address-line2"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input
                    label="Town or city"
                    value={data.city}
                    onChange={update('city')}
                    error={errors.city}
                    autoComplete="address-level2"
                    required
                  />
                  <Input
                    label="County (optional)"
                    value={data.county}
                    onChange={update('county')}
                    autoComplete="address-level1"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="caption-serif text-warm-grey">
                  Eircode lookup is not available on this page yet, so please type the full address below.
                </p>
                <Input
                  label="Address line 1"
                  value={data.addressLine1}
                  onChange={update('addressLine1')}
                  error={errors.addressLine1}
                  placeholder="House number and street"
                  autoComplete="address-line1"
                  required
                />
                <Input
                  label="Address line 2 (optional)"
                  value={data.addressLine2}
                  onChange={update('addressLine2')}
                  placeholder="Townland, estate, etc."
                  autoComplete="address-line2"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input
                    label="Town or city"
                    value={data.city}
                    onChange={update('city')}
                    error={errors.city}
                    autoComplete="address-level2"
                    required
                  />
                  <Input
                    label="County"
                    value={data.county}
                    onChange={update('county')}
                    autoComplete="address-level1"
                  />
                </div>
                <Input
                  label="Eircode"
                  value={data.postcode}
                  onChange={update('postcode')}
                  error={errors.postcode}
                  placeholder="e.g. D02 X285"
                  autoComplete="postal-code"
                  required
                />
              </div>
            )}
          </fieldset>
        </>
      )}

      {serverError && (
        <div
          role="alert"
          className="rounded-lg border border-error/40 bg-error/5 px-4 py-3 text-small text-error"
        >
          {serverError}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting
            ? 'Sending…'
            : isKit
              ? 'Request my free posting pack'
              : 'Send my enquiry'}
        </Button>
        <p className="caption-fine text-warm-grey">
          We use your details only to reply to you. No marketing. No third parties.
        </p>
      </div>
    </form>
  )
}

function ToggleCard({
  checked,
  onClick,
  title,
  description,
}: {
  checked: boolean
  onClick: () => void
  title: string
  description: string
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        'rounded-card border bg-surface px-5 py-4 text-left transition-[border-color,box-shadow,transform] duration-200',
        'hover:-translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring',
        checked
          ? 'border-navy shadow-elev-card-hover'
          : 'border-border-subtle shadow-elev-card hover:border-border'
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
            checked ? 'border-navy bg-navy' : 'border-border'
          )}
        >
          {checked && <span className="block h-2 w-2 rounded-full bg-white" />}
        </span>
        <span className="block">
          <span className="block