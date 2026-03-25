import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import ProcessSteps from '@/components/ProcessSteps'
import TrustBar from '@/components/TrustBar'
import { Shield, RotateCcw, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Sell your gold in five simple steps. Get an estimate, request a free insured posting kit, receive a transparent valuation, and get paid the same day.',
  openGraph: {
    title: 'How It Works | Aidan Flynn',
    description: 'Five simple steps to sell your gold. Free insured postage, transparent valuations, same-day payment.',
  },
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              How it works
            </h1>
            <p className="text-body md:text-subheading text-warm-grey">
              Selling your precious metals should be straightforward and stress-free. Here is exactly what happens, step by step, with no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <ProcessSteps variant="detailed" />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="different">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="different" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-stone mb-4">
                <Shield size={24} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">The transparency promise</h3>
              <p className="text-small text-warm-grey">
                We publish our buy rates online, updated throughout the day. You see the spot price, our percentage, and the exact calculation. No black boxes.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-stone mb-4">
                <RotateCcw size={24} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Free returns, no questions</h3>
              <p className="text-small text-warm-grey">
                If you do not accept our offer, we return everything to you at our expense. Fully insured. No restocking fee. No awkward phone call. Just your items, back safely.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-stone mb-4">
                <User size={24} className="text-navy" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Personal accountability</h3>
              <p className="text-small text-warm-grey">
                My name is Aidan Flynn, and my name is on this business. I am not hiding behind a brand or a PO box. If you have a question or a concern, I am here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar background="white" />

      {/* Final CTA */}
      <section className="bg-navy py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-serif text-page-heading-mobile md:text-page-heading text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-body text-white/70 mb-8 max-w-xl mx-auto">
            Request your free posting kit and we will have it with you within 24 hours.
          </p>
          <Button href="/contact" variant="gold" size="lg">
            Get your free kit
          </Button>
        </div>
      </section>
    </>
  )
}
