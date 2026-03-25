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
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal">
              Dublin
            </h1>
            <Badge variant="gold">Coming soon</Badge>
          </div>
          <p className="text-body md:text-subheading text-warm-grey max-w-2xl">
            We are opening in Dublin soon. In the meantime, our postal service is available to customers across the Republic of Ireland, with payment in Euro.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-6">
                  Dublin location
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <MapPin size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Address</p>
                      <p>Grafton Street, Dublin 2, Ireland</p>
                      <p className="text-small text-gold">Opening soon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Opening hours</p>
                      <p>To be confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">About our Dublin plans</h3>
                <p className="text-body text-warm-grey">
                  Dublin is our next location. We are excited to bring transparent precious metals buying to the Republic of Ireland with a physical presence on Grafton Street. Until we open, our full postal service is available to Irish customers, with payment in Euro and An Post insured delivery.
                </p>
                <p className="text-body text-warm-grey mt-3">
                  We provide CAT-compliant valuations for Irish tax purposes and can assist with probate valuations under Irish inheritance rules.
                </p>
              </div>

              {/* Register Interest */}
              <Card>
                <h3 className="font-serif text-xl text-charcoal mb-3">Register your interest</h3>
                <p className="text-small text-warm-grey mb-4">
                  Be the first to know when our Dublin location opens. We will email you once — no spam.
                </p>
                {registered ? (
                  <p className="text-body text-success font-medium">
                    Thank you. We will let you know when Dublin opens.
                  </p>
                ) : (
                  <form onSubmit={handleRegister} className="flex gap-3">
                    <div className="flex-grow">
                      <Input
                        label=""
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                        error={emailError}
                        placeholder="your@email.com"
                        aria-label="Email address"
                      />
                    </div>
                    <Button type="submit" variant="gold" size="sm" className="self-start mt-1">
                      Notify me
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div>
              <GoldPriceCalculator />
              <div className="mt-6 text-center">
                <Button href="/contact" variant="gold" size="lg" className="w-full">
                  Use our postal service
                </Button>
                <p className="text-small text-warm-grey mt-3">
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
