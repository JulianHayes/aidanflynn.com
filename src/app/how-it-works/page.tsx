import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import ProcessSteps from '@/components/ProcessSteps'
import TrustBar from '@/components/TrustBar'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Shield, RotateCcw, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Sell your gold in five simple steps. Get an estimate, request a free insured posting kit, receive a transparent valuation, and get paid the same day.',
  openGraph: {
    title: 'How It Works | Aidan Flynn',
    description:
      'Five simple steps to sell your gold. Free insured postage, transparent valuations, same-day payment.',
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection direction="none">
            <div className="max-w-2xl">
              <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
                How it works
              </h1>
              <p className="text-body text-warm-grey md:text-subheading">
                Selling your precious metals should be straightforward and stress-free. Here is
                exactly what happens, step by step, with no surprises.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <ProcessSteps variant="detailed" />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="different">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2
              id="different"
              className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
            >
              What makes us different
            </h2>
          </AnimatedSection>
          <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-stone bg-surface">
                  <Shield size={24} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">The transparency promise</h3>
                <p className="text-small text-warm-grey">
                  We publish our buy rates online, updated throughout the day. You see the spot
                  price, our percentage, and the exact calculation. No black boxes.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-stone bg-surface">
                  <RotateCcw size={24} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">
                  Free returns, no questions
                </h3>
                <p className="text-small text-warm-grey">
                  If you do not accept our offer, we return everything to you at our expense. Fully
                  insured. No restocking fee. No awkward phone call. Just your items, back safely.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-stone bg-surface">
                  <User size={24} className="text-navy" />
                </div>
                <h3 className="mb-3 font-serif text-lg text-charcoal">Personal accountability</h3>
                <p className="text-small text-warm-grey">
                  My name is Aidan Flynn, and my name is on this business. I am not hiding behind a
                  brand or a PO box. If you have a question or a concern, I am here.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <TrustBar background="white" />

      <section className="bg-navy-deep py-section-mobile md:py-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,110,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
          <AnimatedSection>
            <h2 className="mb-4 font-serif text-page-heading-mobile text-white md:text-page-heading">
              Ready to get started?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body text-white/70">
              Request your free posting kit and we will have it with you within 24 hours.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get your free kit
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
