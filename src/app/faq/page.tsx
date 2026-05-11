import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'
import TrustBar from '@/components/TrustBar'
import Button from '@/components/ui/Button'
import { FAQ_SECTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about selling gold, silver, and platinum with Aidan Flynn. Process, pricing, trust, and information for Irish customers.',
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
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
              Frequently asked questions
            </h1>
            <p className="text-body text-warm-grey md:text-subheading">
              Everything you need to know about selling your precious metals with Aidan Flynn. If
              your question is not here, get in touch and we will answer it directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion sections={FAQ_SECTIONS} />
          </div>
        </div>
      </section>

      <TrustBar background="stone" />

      {/* CTA */}
      <section className="bg-cream py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
          <h2 className="mb-4 font-serif text-page-heading-mobile text-charcoal md:text-page-heading">
            Still have questions?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-body text-warm-grey">
            We are happy to help. Get in touch by phone, email, or visit one of our locations.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
