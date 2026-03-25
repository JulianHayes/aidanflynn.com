import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import TrustBar from '@/components/TrustBar'
import ProcessSteps from '@/components/ProcessSteps'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TestimonialCard from '@/components/TestimonialCard'
import LocationCard from '@/components/LocationCard'
import PriceTable from '@/components/PriceTable'
import { TESTIMONIALS, LOCATIONS, SPOT_PRICES, BUY_PERCENTAGES } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'
import { Eye, Heart, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aidan Flynn | Sell Gold, Silver & Platinum — UK & Ireland',
  description: 'Sell your gold, silver, and platinum with Aidan Flynn. Transparent pricing published online. Free insured postage. Same-day payment. Serving Brighton, Belfast, and Dublin.',
  openGraph: {
    title: 'Aidan Flynn | Sell Gold, Silver & Platinum — UK & Ireland',
    description: 'Transparent precious metals buying. Free insured postage. Same-day payment.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Your gold is worth more than you think. We&rsquo;ll show you exactly how much.
            </h1>
            <p className="text-body md:text-subheading text-warm-grey mb-10 max-w-2xl">
              Aidan Flynn buys gold, silver, and platinum from people across the UK and Ireland. Transparent pricing. Free insured postage. Same-day payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/pricing" variant="gold" size="lg">
                See what yours is worth
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                How it works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* How It Works */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="how-it-works">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="how-it-works" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            How it works
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* Price Calculator Preview */}
      <section className="bg-white py-section-mobile md:py-section" aria-labelledby="pricing-preview">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 id="pricing-preview" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal mb-4">
              See exactly what we pay
            </h2>
            <p className="text-body text-warm-grey max-w-2xl mx-auto">
              We publish our rates because we think you deserve to know. Updated every 60 seconds during market hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Card>
                <h3 className="font-serif text-xl text-charcoal mb-4">Current rates per gram</h3>
                <PriceTable />
              </Card>
            </div>
            <GoldPriceCalculator compact />
          </div>

          <div className="text-center mt-8">
            <Button href="/pricing" variant="secondary">
              Use the full calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Why People Choose Aidan Flynn */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="why-choose">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="why-choose" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            Why people choose Aidan Flynn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cream border border-stone mb-4">
                <Eye size={22} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Radical transparency</h3>
              <p className="text-small text-warm-grey">
                We publish exactly what we pay, per gram, per carat. No surprises. No hidden fees. The price you see on our site is the price you get.
              </p>
            </Card>
            <Card>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cream border border-stone mb-4">
                <Heart size={22} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Your items matter</h3>
              <p className="text-small text-warm-grey">
                Some of what we receive carries real history. We handle everything with care, not just efficiency. Every item is treated with the respect it deserves.
              </p>
            </Card>
            <Card>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cream border border-stone mb-4">
                <User size={22} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">A real person, not a PO box</h3>
              <p className="text-small text-warm-grey">
                My name is on this business. If something goes wrong, you know who to find. That accountability is the foundation of everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-section-mobile md:py-section" aria-labelledby="testimonials">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="testimonials" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            What our customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          {/* TODO: Replace with real Trustpilot reviews via API integration */}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="locations">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="locations" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            Our locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.slug} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-serif text-page-heading-mobile md:text-page-heading text-white mb-4">
            Ready to find out what your gold is worth?
          </h2>
          <p className="text-body text-white/70 mb-8 max-w-xl mx-auto">
            Free insured postage. No obligation. Free returns if you change your mind.
          </p>
          <Button href="/contact" variant="gold" size="lg">
            Get your free posting kit
          </Button>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aidan Flynn',
            description: 'Precious metals buyer serving the UK and Ireland. Transparent pricing, free insured postage, same-day payment.',
            url: 'https://aidanflynn.com',
            telephone: '+441234567890',
            email: 'hello@aidanflynn.com',
            areaServed: ['United Kingdom', 'Ireland'],
            priceRange: '££',
            location: [
              {
                '@type': 'Place',
                name: 'Aidan Flynn Brighton',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '14 The Lanes',
                  addressLocality: 'Brighton',
                  postalCode: 'BN1 1HB',
                  addressCountry: 'GB',
                },
              },
              {
                '@type': 'Place',
                name: 'Aidan Flynn Belfast',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '22 Royal Avenue',
                  addressLocality: 'Belfast',
                  postalCode: 'BT1 1DA',
                  addressCountry: 'GB',
                },
              },
              {
                '@type': 'Place',
                name: 'Aidan Flynn Dublin',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Grafton Street',
                  addressLocality: 'Dublin',
                  addressCountry: 'IE',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
