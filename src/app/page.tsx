import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import TrustBar from '@/components/TrustBar'
import ProcessSteps from '@/components/ProcessSteps'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TestimonialCard from '@/components/TestimonialCard'
import LocationCard from '@/components/LocationCard'
import PriceTable from '@/components/PriceTable'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import { TESTIMONIALS, LOCATIONS } from '@/lib/constants'
import { Eye, Heart, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aidan Flynn | Sell Gold, Silver & Platinum \u2014 UK & Ireland',
  description:
    'Sell your gold, silver, and platinum with Aidan Flynn. Transparent pricing published online. Free insured postage. Same-day payment. Serving Brighton, Belfast, and Dublin.',
  openGraph: {
    title: 'Aidan Flynn | Sell Gold, Silver & Platinum \u2014 UK & Ireland',
    description: 'Transparent precious metals buying. Free insured postage. Same-day payment.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-content px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
          <AnimatedSection direction="none">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-serif text-hero-mobile leading-tight text-charcoal md:text-hero">
                Your gold is worth more than you think.
                <AnimatedHeadline />
              </h1>
              <p className="mb-10 max-w-2xl text-body text-warm-grey md:text-subheading">
                Aidan Flynn buys gold, silver, and platinum from people across the UK and Ireland.
                Transparent pricing. Free insured postage. Same-day payment.
              </p>
              <div className="hero-cta-pair flex flex-col sm:flex-row gap-4">
                <Button href="/pricing" variant="primary" size="lg">
                  See what yours is worth
                </Button>
                <Button href="/how-it-works" variant="secondary" size="lg">
                  How it works
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* How It Works */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="how-it-works">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2
              id="how-it-works"
              className="mb-4 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
            >
              How it works
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-body text-warm-grey">
              Four simple steps from estimate to payment. No surprises, no pressure.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ProcessSteps />
          </AnimatedSection>
        </div>
      </section>

      {/* Price Calculator Preview */}
      <section
        className="bg-surface py-section-mobile md:py-section"
        aria-labelledby="pricing-preview"
      >
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <h2
                id="pricing-preview"
                className="mb-4 font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
              >
                See exactly what we pay
              </h2>
              <p className="mx-auto max-w-2xl text-body text-warm-grey">
                We publish our rates because we think you deserve to know. Updated every 60 seconds
                during market hours.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <Card>
                <h3 className="mb-4 font-serif text-xl text-charcoal">Current rates per gram</h3>
                <PriceTable />
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <GoldPriceCalculator compact />
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Button href="/pricing" variant="secondary">
              Use the full calculator
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why People Choose Aidan Flynn */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="why-choose">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2
              id="why-choose"
              className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
            >
              Why people choose Aidan Flynn
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StaggerItem>
              <Card className="h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border-subtle shadow-elev-chip-inset mb-4">
                  <Eye size={22} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">Radical transparency</h3>
                <p className="text-small text-warm-grey">
                  We publish exactly what we pay, per gram, per carat. No surprises. No hidden fees.
                  The price you see on our site is the price you get.
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border-subtle shadow-elev-chip-inset mb-4">
                  <Heart size={22} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">Your items matter</h3>
                <p className="text-small text-warm-grey">
                  Some of what we receive carries real history. We handle everything with care, not
                  just efficiency. Every item is treated with the respect it deserves.
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border-subtle shadow-elev-chip-inset mb-4">
                  <User size={22} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">
                  A real person, not a PO box
                </h3>
                <p className="text-small text-warm-grey">
                  My name is on this business. If something goes wrong, you know who to find. That
                  accountability is the foundation of everything we do.
                </p>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-surface py-section-mobile md:py-section"
        aria-labelledby="testimonials"
      >
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2
              id="testimonials"
              className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
            >
              What our customers say
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <TestimonialCard {...testimonial} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          {/* TODO: Replace with real Trustpilot reviews via API integration */}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="locations">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2
              id="locations"
              className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
            >
              Our locations
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {LOCATIONS.map((location) => (
              <StaggerItem key={location.slug}>
                <LocationCard {...location} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep py-section-mobile md:py-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,110,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
          <AnimatedSection>
            <h2 className="mb-4 font-serif text-page-heading-mobile text-white md:text-page-heading">
              Ready to find out what your gold is worth?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body text-white/70">
              Free insured postage. No obligation. Free returns if you change your mind.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get your free posting kit
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Aidan Flynn',
            description:
              'Precious metals buyer serving the UK and Ireland. Transparent pricing, free insured postage, same-day payment.',
            url: 'https://aidanflynn.com',
            telephone: '+441234567890',
            email: 'hello@aidanflynn.com',
            areaServed: ['United Kingdom', 'Ireland'],
            priceRange: '\u00a3\u00a3',
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
