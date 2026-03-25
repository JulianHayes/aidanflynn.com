import { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Shield, Award, Star, Eye, RotateCcw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Aidan Flynn. A precious metals buyer built on transparency, personal accountability, and fair dealing. Serving Brighton, Belfast, and Dublin.',
  openGraph: {
    title: 'About | Aidan Flynn',
    description: 'My name is on this business. Learn why I started Aidan Flynn and what makes us different.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              My name is on this business
            </h1>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-stone rounded-card flex items-center justify-center">
                <p className="text-warm-grey text-small font-medium">Founder photo</p>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3 space-y-6 text-body text-warm-grey">
              <p className="text-subheading text-charcoal">
                I started this business because the precious metals buying sector has a trust problem, and I wanted to build something different.
              </p>
              <p>
                For years, selling gold has meant walking into a shop with no idea whether you are getting a fair price. The industry has relied on information asymmetry — the buyer knows what your gold is worth, and you don&rsquo;t. That imbalance has allowed too many businesses to pay people far less than they should.
              </p>
              <p>
                I believe you deserve to know exactly what your gold is worth and exactly how I calculate my offer. That is why we publish our rates online, updated throughout the day. No hidden margins. No vague &ldquo;we&rsquo;ll give you the best price&rdquo; promises. Just transparent numbers.
              </p>
              <p>
                My name is on this business for a reason. Personal accountability. If you are not happy with the service, you know exactly who to find. There is no faceless corporation to hide behind, and I do not want one. The trust people place in us is earned one transaction at a time, and I take that seriously.
              </p>
              <p>
                We operate from Brighton, Belfast, and soon Dublin. Whether you visit us in person or use our postal service, the experience is the same: fair prices, transparent process, and genuine care for the items you are entrusting to us.
              </p>
              <p className="text-charcoal font-medium">
                — Aidan Flynn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="different">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="different" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal text-center mb-12">
            How we are different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card>
              <Shield size={24} className="text-navy mb-3" />
              <h3 className="font-serif text-lg text-charcoal mb-2">HMRC registered</h3>
              <p className="text-small text-warm-grey">
                Registered with HMRC for anti-money laundering supervision. Fully compliant with the Money Laundering Regulations.
              </p>
            </Card>
            <Card>
              <Award size={24} className="text-navy mb-3" />
              <h3 className="font-serif text-lg text-charcoal mb-2">Trading Standards accredited</h3>
              <p className="text-small text-warm-grey">
                Buy With Confidence accredited by Trading Standards. Independently vetted and approved.
              </p>
            </Card>
            <Card>
              <Eye size={24} className="text-navy mb-3" />
              <h3 className="font-serif text-lg text-charcoal mb-2">Published pricing</h3>
              <p className="text-small text-warm-grey">
                Our rates are published online and updated throughout the day. No hidden fees, no surprises, no &ldquo;we&rsquo;ll call you back with a price.&rdquo;
              </p>
            </Card>
            <Card>
              <RotateCcw size={24} className="text-navy mb-3" />
              <h3 className="font-serif text-lg text-charcoal mb-2">Free insured returns</h3>
              <p className="text-small text-warm-grey">
                If you do not accept our offer, we return everything at our expense. Fully insured. No questions asked.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBar background="white" />

      {/* Final CTA */}
      <section className="bg-navy py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-serif text-page-heading-mobile md:text-page-heading text-white mb-4">
            Ready to see what your gold is worth?
          </h2>
          <p className="text-body text-white/70 mb-8 max-w-xl mx-auto">
            Use our calculator for an instant estimate, or request a free posting kit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="gold" size="lg">
              See what yours is worth
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
