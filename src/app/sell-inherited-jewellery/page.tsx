import { Metadata } from 'next'
import { Heart, Shield, RotateCcw, Clock, FileText } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import TrustBar from '@/components/TrustBar'
import ProcessSteps from '@/components/ProcessSteps'

export const metadata: Metadata = {
  title: 'Selling Inherited Jewellery',
  description:
    'Selling inherited jewellery is not a neutral decision. Aidan Flynn handles inherited items with care, offers free returns, and provides HMRC-compliant valuations for probate.',
  openGraph: {
    title: 'Selling Inherited Jewellery | Aidan Flynn',
    description:
      'We understand that parting with inherited jewellery is personal. No pressure, no rush, free insured returns.',
  },
}

export default function SellInheritedJewelleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
              Selling inherited jewellery
            </h1>
            <p className="text-subheading text-warm-grey">
              Some of the items people send us carry real history. A mother&rsquo;s wedding ring. A
              grandmother&rsquo;s bracelet. We understand that parting with them is not a neutral
              decision.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding */}
      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-2xl space-y-6 text-body text-warm-grey">
            <p>
              If you have inherited jewellery and are considering selling, there is no rush. Getting
              an estimate does not commit you to anything. Our calculator gives you an idea of what
              your items might be worth, and requesting a free kit does not oblige you to accept any
              offer.
            </p>
            <p>
              We handle every item with care — not just efficiency. We know that behind every ring,
              chain, or bracelet there may be a story, and we treat that with the respect it
              deserves.
            </p>
            <p>
              If you decide to proceed, here is how the process works. If you decide not to, that is
              completely fine too.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="process">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <h2
            id="process"
            className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
          >
            How it works
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* Key Reassurances */}
      <section
        className="bg-surface py-section-mobile md:py-section"
        aria-labelledby="reassurances"
      >
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <h2
            id="reassurances"
            className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
          >
            What you should know
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <RotateCcw size={24} className="mb-3 text-navy" />
              <h3 className="mb-2 font-serif text-lg text-charcoal">Free returns, always</h3>
              <p className="text-small text-warm-grey">
                If you change your mind at any point, we return your items fully insured at no cost.
                You have 7 days to decide after receiving your valuation. No pressure.
              </p>
            </Card>
            <Card>
              <Clock size={24} className="mb-3 text-navy" />
              <h3 className="mb-2 font-serif text-lg text-charcoal">Take your time</h3>
              <p className="text-small text-warm-grey">
                There are no expiring offers and no countdown timers. Your valuation stands for 7
                days, and if the gold price moves significantly in your favour, we will update it.
              </p>
            </Card>
            <Card>
              <Heart size={24} className="mb-3 text-navy" />
              <h3 className="mb-2 font-serif text-lg text-charcoal">Handled with care</h3>
              <p className="text-small text-warm-grey">
                We understand the emotional weight of inherited items. Every piece is handled
                individually, tested carefully, and stored securely. Nothing is processed until you
                give explicit consent.
              </p>
            </Card>
            <Card>
              <FileText size={24} className="mb-3 text-navy" />
              <h3 className="mb-2 font-serif text-lg text-charcoal">Probate valuations</h3>
              <p className="text-small text-warm-grey">
                We provide HMRC-compliant valuations for probate purposes (IHT407). For Irish
                customers, we also provide CAT-compliant valuations. These can be arranged
                separately from any sale.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Soft CTA */}
      <section className="bg-cream py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
          <h2 className="mb-4 font-serif text-page-heading-mobile text-charcoal md:text-page-heading">
            When you are ready, we are here
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-body text-warm-grey">
            There is no rush. If you would like to know what your inherited jewellery is worth, our
            calculator gives you an instant estimate. Or get in touch and we will talk you through
            it.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/pricing" variant="gold" size="lg">
              See what yours is worth
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
