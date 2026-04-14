import { Metadata } from 'next'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import PriceTable from '@/components/PriceTable'
import TrustBar from '@/components/TrustBar'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pricing & Calculator',
  description: 'See exactly what Aidan Flynn pays for gold, silver, and platinum. Live calculator, published rates per gram by carat. Transparent pricing with no hidden fees.',
  openGraph: {
    title: 'Pricing & Calculator | Aidan Flynn',
    description: 'Live gold price calculator and published buy rates. See exactly what we pay per gram.',
  },
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Pricing &amp; calculator
            </h1>
            <p className="text-body md:text-subheading text-warm-grey">
              We publish our rates because we think you deserve to know exactly what your items are worth before you send them.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-surface py-section-mobile md:py-section" aria-labelledby="calculator">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="calculator" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal mb-4">
                What is your gold worth?
              </h2>
              <p className="text-body text-warm-grey mb-8">
                Select your metal type, carat, and enter the weight to get an instant estimate. Toggle between GBP and EUR for Irish customers.
              </p>
              <GoldPriceCalculator />
            </div>

            <div>
              <Card>
                <h3 className="font-serif text-xl text-charcoal mb-6">Published rates</h3>
                <PriceTable />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Margin Transparency */}
      <section className="bg-cream py-section-mobile md:py-section" aria-labelledby="transparency">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto">
            <h2 id="transparency" className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal mb-6">
              Why our price is not 100% of spot
            </h2>
            <div className="space-y-4 text-body text-warm-grey">
              <p>
                We typically pay between 80% and 90% of the live spot price, depending on purity and volume. That margin covers the real costs of running a trustworthy operation:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">—</span>
                  <span><strong className="text-charcoal">Testing and assaying</strong> — every item is individually tested for purity using XRF analysis. This equipment is expensive to buy and maintain.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">—</span>
                  <span><strong className="text-charcoal">Insurance</strong> — your items are insured from the moment they leave your hands until they are returned or processed. That coverage is not free.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">—</span>
                  <span><strong className="text-charcoal">Refining fees</strong> — turning your jewellery back into pure metal costs money. Refiners charge a percentage.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">—</span>
                  <span><strong className="text-charcoal">Free postage and returns</strong> — we pay for your postage both ways. If you decline our offer, we pay to send everything back.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">—</span>
                  <span><strong className="text-charcoal">Running a real business</strong> — premises, staff, compliance, a phone that gets answered. These things cost money, and we think they are worth it.</span>
                </li>
              </ul>
              <p>
                We think our rates are fair. If you find better, take it — we would rather you get the best deal than feel short-changed.
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
            Happy with the numbers?
          </h2>
          <p className="text-body text-white/70 mb-8 max-w-xl mx-auto">
            Request your free insured posting kit and find out exactly what your items are worth.
          </p>
          <Button href="/contact" variant="gold" size="lg">
            Get your free posting kit
          </Button>
        </div>
      </section>
    </>
  )
}
