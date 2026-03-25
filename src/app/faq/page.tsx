import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'
import TrustBar from '@/components/TrustBar'
import Button from '@/components/ui/Button'
import { FAQ_SECTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about selling gold, silver, and platinum with Aidan Flynn. Process, pricing, trust, and information for Irish customers.',
  openGraph: {
    title: 'FAQ | Aidan Flynn',
    description: 'Everything you need to know about selling precious metals with Aidan Flynn.',
  },
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Frequently asked questions
            </h1>
            <p className="text-body md:text-subheading text-warm-grey">
              Everything you need to know about selling your precious metals with Aidan Flynn. If your question is not here, get in touch and we will answer it directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion sections={FAQ_SECTIONS} />
          </div>
        </div>
      </section>

      <TrustBar background="stone" />

      {/* CTA */}
      <section className="bg-cream py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-serif text-page-heading-mobile md:text-page-heading text-charcoal mb-4">
            Still have questions?
          </h2>
          <p className="text-body text-warm-grey mb-8 max-w-xl mx-auto">
            We are happy to help. Get in touch by phone, email, or visit one of our locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
            <Button href="/pricing" variant="gold" size="lg">
              See what yours is worth
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
