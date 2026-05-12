'use client'

import { useState } from 'react'
import { MapPin, Clock, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TrustBar from '@/components/TrustBar'
import Badge from '@/components/ui/Badge'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'

export default function DublinPage() {
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    // TODO: Replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 500))
    setRegistered(true)
  }

  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="mb-4 flex items-center gap-3">
            <h1 className="font-serif text-hero-mobile text-charcoal md:text-hero">Dublin</h1>
            <Badge variant="gold">Coming soon</Badge>
          </div>
          <p className="max-w-2xl text-body text-warm-grey md:text-subheading">
            We are opening in Dublin soon. In the meantime, our postal service is available to
            customers across the Republic of Ireland, with payment in Euro.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                  Dublin location
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Address</p>
                      <p>Grafton Street, Dublin 2, Ireland</p>
                      <p className="text-small text-gold">Opening soon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Opening hours</p>
                      <p>To be confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-charcoal">About our Dublin plans</h3>
                <p className="text-body text-warm-grey">
                  Dublin is our next location. We are excited to bring transparent precious metals
                  buying to the Republic of Ireland with a physical presence on Grafton Street.
                  Until we open, our full postal service is available to Irish customers, with
                  payment in Euro and An Post insured delivery.
                </p>
                <p className="mt-3 text-body text-warm-grey">
                  We provide CAT-compliant valuations for Irish tax purposes and can assist with
                  probate valuations under Irish inheritance rules.
                </p>
              </div>

              {/* Register Interest */}
              <Card>
                <h3 className="mb-3 font-serif text-xl text-charcoal">Register your interest</h3>
                <p className="mb-4 text-small text-warm-grey">
                  Be the first to know when our Dublin location opens. We will email you once — no
                  spam.
                </p>
                {registered ? (
                  <p className="text-body font-medium text-success">
                    Thank you. We will let you know when Dublin opens.
                  </p>
                ) : (
                  <form onSubmit={handleRegister} className="flex gap-3">
                    <div className="flex-grow">
                      <Input
                        label=""
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setEmailError('')
                        }}
                        error={emailError}
                        placeholder="your@email.com"
                        aria-label="Email address"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="sm" className="self-start mt-1">
                      Notify me
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div>
              <GoldPriceCalculator />
              <div className="mt-6 text-center">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Use our postal service
                </Button>
                <p className="mt-3 text-small text-warm-grey">
                  Free insured postage from anywhere in Ireland. Payment in GBP or EUR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
