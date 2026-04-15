import { Metadata } from 'next'
import { MapPin, Phone, Clock, Train } from 'lucide-react'
import Button from '@/components/ui/Button'
import GoldPriceCalculator from '@/components/GoldPriceCalculator'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Brighton — Sell Gold in Brighton & Hove',
  description: 'Sell your gold, silver, and platinum in Brighton. Visit Aidan Flynn in The Lanes or use our free insured postal service. Same-day payment, transparent pricing.',
  openGraph: {
    title: 'Sell Gold in Brighton | Aidan Flynn',
    description: 'Visit us in The Lanes, Brighton. Transparent pricing, same-day payment.',
  },
}

export default function BrightonPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
            Brighton
          </h1>
          <p className="text-body md:text-subheading text-warm-grey max-w-2xl">
            Serving Brighton, Hove, and the Sussex coast. Visit us in The Lanes or use our free insured postal service from anywhere in the UK.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-surface py-section-mobile md:py-section">
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
                      <p>14 The Lanes, Brighton, BN1 1HB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-body text-warm-grey">
                    <Phone size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <p>01234 567 890</p>
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
                    <Train size={20} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Getting here</p>
                      <p>A 5-minute walk from Brighton station. Located in the heart of The Lanes, near the junction with Duke Street.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">About our Brighton location</h3>
                <p className="text-body text-warm-grey">
                  Our Brighton office has been serving the local community since 2024. Whether you are clearing a house, settling an estate, or simply want to know what your jewellery is worth, you are welcome to walk in during opening hours. No appointment needed.
                </p>
                <p className="text-small text-warm-grey mt-3">
                  Serving Brighton and Hove since 2024.
                </p>
              </div>

              {/* Map placeholder */}
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
