import { Metadata } from 'next'
import { MapPin, Phone, Clock, Bus } from 'lucide-react'
import Button from '@/components/ui/Button'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Belfast — Sell Gold in Belfast & Northern Ireland',
  description: 'Sell your gold, silver, and platinum in Belfast. Visit Aidan Flynn on Royal Avenue or use our free insured postal service. Same-day payment, transparent pricing.',
  openGraph: {
    title: 'Sell Gold in Belfast | Aidan Flynn',
    description: 'Visit us on Royal Avenue, Belfast. Transparent pricing, same-day payment.',
  },
}

export default function BelfastPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
            Belfast
          </h1>
          <p className="text-body md:text-subheading text-warm-grey max-w-2xl">
            Serving Belfast and all of Northern Ireland. Visit us on Royal Avenue or use our free insured postal service.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-6">
                  Visit us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <MapPin size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Address</p>
                      <p>22 Royal Avenue, Belfast, BT1 1DA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Phone size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <p>028 9012 3456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Clock size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Opening hours</p>
                      <p>Monday – Friday: 9am – 5pm</p>
                      <p>Saturday: 10am – 3pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Bus size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Getting here</p>
                      <p>Located on Royal Avenue in Belfast city centre, a short walk from City Hall and the Cathedral Quarter. Well served by Metro bus routes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">About our Belfast location</h3>
                <p className="text-body text-warm-grey">
                  Our Belfast office serves customers across Northern Ireland. Whether you are local to the city or posting from further afield, we offer the same transparent pricing and personal service. Walk-ins are welcome during opening hours.
                </p>
                <p className="text-small text-warm-grey mt-3">
                  Serving Belfast and Northern Ireland.
                </p>
              </div>

              <div className="aspect-video bg-stone rounded-card flex items-center justify-center">
                <p className="text-warm-grey text-small">Map embed placeholder</p>
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
