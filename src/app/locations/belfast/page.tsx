import { Metadata } from 'next'
import { MapPin, Phone, Clock, Bus } from 'lucide-react'
import Button from '@/components/ui/Button'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Belfast — Sell Gold in Belfast & Northern Ireland',
  description:
    'Sell your gold, silver, and platinum in Belfast. Visit Aidan Flynn on Royal Avenue or use our free insured postal service. Same-day payment, transparent pricing.',
  openGraph: {
    title: 'Sell Gold in Belfast | Aidan Flynn',
    description: 'Visit us on Royal Avenue, Belfast. Transparent pricing, same-day payment.',
  },
}

export default function BelfastPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">Belfast</h1>
          <p className="max-w-2xl text-body text-warm-grey md:text-subheading">
            Serving Belfast and all of Northern Ireland. Visit us on Royal Avenue or use our free
            insured postal service.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                  Visit us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Address</p>
                      <p>22 Royal Avenue, Belfast, BT1 1DA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Phone size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <p>028 9012 3456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Opening hours</p>
                      <p>Monday – Friday: 9am – 5pm</p>
                      <p>Saturday: 10am – 3pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Bus size={20} className="mt-1 flex-shrink-0 text-navy" />
                    <div>
                      <p className="font-medium text-charcoal">Getting here</p>
                      <p>
                        Located on Royal Avenue in Belfast city centre, a short walk from City Hall
                        and the Cathedral Quarter. Well served by Metro bus routes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-charcoal">
                  About our Belfast location
                </h3>
                <p className="text-body text-warm-grey">
                  Our Belfast office serves customers across Northern Ireland. Whether you are local
                  to the city or posting from further afield, we offer the same transparent pricing
                  and personal service. Walk-ins are welcome during opening hours.
                </p>
                <p className="mt-3 text-small text-warm-grey">
                  Serving Belfast and Northern Ireland.
                </p>
              </div>

              <div className="flex aspect-video items-center justify-center rounded-card bg-stone">
                <p className="text-small text-warm-grey">Map embed placeholder</p>
              </div>
            </div>

            <div>
              <GoldPriceCalculator />
              <div className="mt-6 text-center">
                <Button href="/contact" variant="gold" size="lg" className="w-full">
                  Request a free kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
