import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Aidan Flynn precious metals buying services. How we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">
              Privacy Policy
            </h1>
            <p className="text-small text-warm-grey">Last updated: 1 April 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl space-y-8 text-body text-warm-grey">
            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                Who we are
              </h2>
              <p>
                Aidan Flynn is a precious metals buying business operating in Brighton, Belfast, and
                Dublin. We are registered with HMRC for anti-money laundering supervision. When we
                refer to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; in this policy, we
                mean Aidan Flynn.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                What data we collect
              </h2>
              <p className="mb-3">
                When you use our services or website, we may collect the following personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Your name, email address, phone number, and postal address (when you request a kit
                  or contact us)
                </li>
                <li>Details of items you send us for valuation</li>
                <li>Payment information necessary to process transactions</li>
                <li>Identification documents required under anti-money laundering regulations</li>
                <li>Website usage data through cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                How we use your data
              </h2>
              <p className="mb-3">We use your personal data to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Process your enquiries and kit requests</li>
                <li>Provide valuations and process transactions</li>
                <li>
                  Comply with our legal and regulatory obligations, including anti-money laundering
                  requirements
                </li>
                <li>Communicate with you about your items and our services</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                How we protect your data
              </h2>
              <p>
                We take reasonable technical and organisational measures to protect your personal
                data against unauthorised access, loss, or misuse. All data transmitted through our
                website is encrypted using SSL/TLS. We do not sell or share your personal data with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                Data retention
              </h2>
              <p>
                We retain your personal data for as long as necessary to fulfil the purposes for
                which it was collected, and to comply with our legal obligations. Transaction
                records are retained for a minimum of five years as required by anti-money
                laundering regulations.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                Your rights
              </h2>
              <p className="mb-3">Under UK and Irish data protection law, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Object to processing of your data</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at hello@aidanflynn.com.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                Cookies
              </h2>
              <p>
                Our website uses essential cookies to ensure it functions correctly. We may also use
                analytics cookies to understand how visitors use our site. You can control cookie
                settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-section-heading-mobile text-charcoal md:text-section-heading">
                Contact us
              </h2>
              <p>
                If you have any questions about this privacy policy or how we handle your data,
                please contact us at hello@aidanflynn.com or write to us at 14 The Lanes, Brighton,
                BN1 1HB.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
