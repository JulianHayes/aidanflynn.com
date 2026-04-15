import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Aidan Flynn precious metals buying services. Our commitments, your rights, and how transactions work.',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Terms of Service
            </h1>
            <p className="text-small text-warm-grey">Last updated: 1 April 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl space-y-8 text-body text-warm-grey">
            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">About these terms</h2>
              <p>
                These terms govern your use of the Aidan Flynn website and services. By using our website or sending us items for valuation, you agree to these terms. Please read them carefully. If you have any questions, contact us at hello@aidanflynn.com.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Our services</h2>
              <p>
                Aidan Flynn buys gold, silver, and platinum from individuals across the United Kingdom and Ireland. We provide free insured posting kits, test and weigh all items individually, and make offers based on the current spot price and published buy percentages. You are under no obligation to accept any offer we make.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">The valuation process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All items are weighed on calibrated, certified scales and tested for purity using XRF analysis.</li>
                <li>We provide a full breakdown of every item: weight, purity, spot price at the time of testing, and the calculated offer amount.</li>
                <li>Offers are based on our published buy percentages, which are available on our pricing page.</li>
                <li>You have 7 days from receiving your valuation to accept or decline.</li>
                <li>If you decline, we return all items to you, fully insured, at no cost.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Payment</h2>
              <p>
                Once you accept an offer, payment is made to your bank account on the same day. We can pay in GBP or EUR. Once payment has been made and you have confirmed acceptance, the transaction is complete and cannot be reversed.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Insurance and postage</h2>
              <p>
                All posting kits include pre-paid, insured delivery via Royal Mail Special Delivery (UK) or An Post (Ireland). Your items are insured from the moment you hand them to the postal service. If items are lost or damaged in transit, we will work with the postal service to resolve the claim. You will not be left out of pocket.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Free returns</h2>
              <p>
                If you do not accept our offer, we return your items fully insured at our expense. There is no restocking fee, no deduction, and no charge of any kind. Items are returned via the same insured postal service within 3 working days of your decision.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Website pricing estimates</h2>
              <p>
                The prices shown on our website and calculator are estimates based on current spot prices and our published buy percentages. They are updated regularly but are indicative only. Your final valuation is based on the tested weight and purity of your items at the time of assessment, and may differ from any online estimate.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Identity verification</h2>
              <p>
                Under UK and Irish anti-money laundering regulations, we are required to verify the identity of customers for transactions above certain thresholds. We may ask you to provide photographic identification and proof of address. We handle all identity documents securely and in accordance with our privacy policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Limitation of liability</h2>
              <p>
                While we take every reasonable precaution, our liability is limited to the insured value of items in our care. We are not liable for any indirect or consequential losses. Nothing in these terms limits our liability for fraud, death, or personal injury caused by our negligence.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. For customers in the Republic of Ireland, Irish consumer protection law applies where applicable. Any disputes will be resolved through the courts of the relevant jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-section-heading-mobile md:text-section-heading text-charcoal mb-4">Contact</h2>
              <p>
                If you have any questions about these terms, please contact us at hello@aidanflynn.com or write to us at 14 The Lanes, Brighton, BN1 1HB.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
