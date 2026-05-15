import type { Metadata } from 'next'
import { Mail, Phone, Eye, Heart, User } from 'lucide-react'
import Card from '@/components/ui/Card'
import LandingForm from '@/components/LandingForm'
import { CONTACT } from '@/lib/constants'

// Temporary landing page. Replaces the homepage while the main site is in
// development. Switch back by setting LANDING_MODE = false in constants.ts.

export const metadata: Metadata = {
  title: 'Aidan Flynn | Sell Gold, Silver & Platinum — UK & Ireland',
  description:
    'Aidan Flynn buys gold, silver and platinum from people across the UK and Ireland. Transparent pricing. Free insured postage. Same-day payment. Request your free posting pack or send a quick enquiry.',
  openGraph: {
    title: 'Aidan Flynn | Sell Gold, Silver & Platinum',
    description:
      'Transparent precious metals buying. Free insured postage. Same-day payment. UK and Ireland.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-content px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="max-w-3xl">
            <p className="caption-fine--bold mb-5 text-navy">The full site is on its way</p>
            <h1 className="mb-6 font-serif text-hero-mobile leading-tight text-charcoal md:text-hero">
              Your gold is worth more than you think.
            </h1>
            <p className="mb-8 max-w-2xl text-body text-warm-grey md:text-subheading">
              Aidan Flynn buys gold, silver and platinum from people across the UK and Ireland.
              Transparent pricing. Free insured postage. Same-day payment.
            </p>
            <p className="max-w-2xl text-body text-warm-grey">
              While we finish the main site, you can already request a free insured posting pack or
              send Aidan a question. Either way you will hear back personally, usually within one
              working day.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-surface py-section-mobile md:py-section" aria-labelledby="why-aidan">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <h2
            id="why-aidan"
            className="mb-12 text-center font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
          >
            What sets Aidan apart
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-background shadow-elev-chip-inset">
                <Eye size={22} className="text-navy" />
              </div>
              <h3 className="mb-3 font-serif text-lg text-charcoal">Radical transparency</h3>
              <p className="text-small text-warm-grey">
                We publish exactly what we pay, per gram, per carat. No surprises. No hidden fees.
                The price you see is the price you get.
              </p>
            </Card>
            <Card className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-background shadow-elev-chip-inset">
                <Heart size={22} className="text-navy" />
              </div>
              <h3 className="mb-3 font-serif text-lg text-charcoal">Your items matter</h3>
              <p className="text-small text-warm-grey">
                Some of what we receive carries real history. We handle everything with care, not
                just efficiency.
              </p>
            </Card>
            <Card className="h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-background shadow-elev-chip-inset">
                <User size={22} className="text-navy" />
              </div>
              <h3 className="mb-3 font-serif text-lg text-charcoal">
                A real person, not a PO box
              </h3>
              <p className="text-small text-warm-grey">
                Aidan&apos;s name is on this business. If something goes wrong, you know who to
                find.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section
        id="get-in-touch"
        className="bg-cream py-section-mobile md:py-section"
        aria-labelledby="get-in-touch-heading"
      >
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            {/* Contact column */}
            <div>
              <h2
                id="get-in-touch-heading"
                className="mb-4 font-serif text-page-heading-mobile text-charcoal md:text-page-heading"
              >
                Talk to Aidan
              </h2>
              <p className="mb-8 text-body text-warm-grey">
                Two ways to start: send a quick question, or request the free insured posting pack
                straight to your door. Whichever you choose, Aidan replies personally.
              </p>

              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-start gap-3 text-charcoal transition-colors hover:text-navy"
                  >
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface shadow-elev-chip-inset">
                      <Mail size={16} className="text-navy" />
                    </span>
                    <span>
                      <span className="caption-fine--bold block text-warm-grey">Email</span>
                      <span className="block text-body">{CONTACT.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="group flex items-start gap-3 text-charcoal transition-colors hover:text-navy"
                  >
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface shadow-elev-chip-inset">
                      <Phone size={16} className="text-navy" />
                    </span>
                    <span>
                      <span className="caption-fine--bold block text-warm-grey">Phone</span>
                      <span className="block text-body">{CONTACT.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
              </ul>

              <p className="caption-serif mt-8 text-warm-grey">
                We reply Monday to Friday, normally within one working day.
              </p>
            </div>

            {/* Form column */}
            <Card className="bg-surface">
              <LandingForm />
            </Card>
          </div>
        </div>
      </section>

      {/* JSON-LD — keep search engines accurate about who and where we are */}
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
            telephone: CONTACT.phone,
            email: CONTACT.email,
            areaServed: ['United Kingdom', 'Ireland'],
            priceRange: '££',
          }),
        }}
      />
    </>
  )
}
