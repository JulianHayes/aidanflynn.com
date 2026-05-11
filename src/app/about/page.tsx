import { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Shield, Award, Eye, RotateCcw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Aidan Flynn. A precious metals buyer built on transparency, personal accountability, and fair dealing. Serving Brighton, Belfast, and Dublin.',
  openGraph: {
    title: 'About | Aidan Flynn',
    description:
      'My name is on this business. Learn why I started Aidan Flynn and what makes us different.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <AnimatedSection direction="none">
            <div className="max-w-2xl">
              <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
                My name is on this business
              </h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div className="flex aspect-[3/4] items-center justify-center rounded-card bg-stone">
                <p className="text-small font-medium text-warm-grey">Founder photo</p>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6 text-body text-warm-grey lg:col-span-3">
              <p className="text-subheading text-charcoal">
                I started this business because the precious metals buying sector has a trust
                problem, and I wanted to build something different.
              </p>
              <p>
                For years, selling gold has meant walking into a shop with no idea whether you are
                getting a fair price. The industry has relied on information asymmetry \u2014 the
                buyer knows what your gold is worth, and you don&rsquo;t. That imbalance has allowed
                too many businesses to pay people far less than they should.
              </p>
              <p>
                I believe you deserve to know exactly what your gold is worth and exactly how I
                calculate my offer. That is why we publish our rates online, updated throughout the
                day. No hidden margins. No vague &ldquo;we&rsquo;ll give you the best price&rdquo;
                promises. Just transparent numbers.
              </p>
              <p>
                My name is on this business for a reason. Personal accountability. If you are not
                happy with the service, you know exactly who to find. There is no faceless
                corporation to hide behind, and I do not want one. The trust people place in us is
                earned one transaction at a time, and I take that seriously.
              </p>
              <p>
                We operate from Brighton, Belfast, and soon Dublin. Whether you visit us in person
                or use our postal service, the experience is the same: fair prices, transparent
                process, and genuine care for the items you are entrusting to us.
              </p>
              <p className="font-medium text-charcoal">\u2014 Aidan Flynn</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="different">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <h2
            id="different"
            className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
          >
            How we are different
          </h2>
          <StaggerContainer className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            <StaggerItem>
              <Card>
                <Shield size={24} className="mb-3 text-navy" />
                <h3 className="mb-2 font-serif text-lg text-charcoal">HMRC registered</h3>
                <p className="text-small text-warm-grey">
                  Registered with HMRC for anti-money laundering supervision. Fully compliant with
                  the Money Laundering Regulations.
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <Award size={24} className="mb-3 text-navy" />
                <h3 className="mb-2 font-serif text-lg text-charcoal">
                  Trading Standards accredited
                </h3>
                <p className="text-small text-warm-grey">
                  Buy With Confidence accredited by Trading Standards. Independently vetted and
                  approved.
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <Eye size={24} className="mb-3 text-navy" />
                <h3 className="mb-2 font-serif text-lg text-charcoal">Published pricing</h3>
                <p className="text-small text-warm-grey">
                  Our rates are published online and updated throughout the day. No hidden fees, no
                  surprises, no &ldquo;we&rsquo;ll call you back with a price.&rdquo;
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <RotateCcw size={24} className="mb-3 text-navy" />
                <h3 className="mb-2 font-serif text-lg text-charcoal">Free insured returns</h3>
                <p className="text-small text-warm-grey">
                  If you do not accept our offer, we return everything at our expense. Fully
                  insured. No questions asked.
                </p>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBar background="white" />

      {/* Final CTA */}
      <section className="bg-navy py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
          <h2 className="mb-4 font-serif text-page-heading-mobile text-white md:text-page-heading">
            Ready to see what your gold is worth?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-body text-white/70">
            Use our calculator for an instant estimate, or request a free posting kit.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/pricing" variant="gold" size="lg">
              See what yours is worth
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
