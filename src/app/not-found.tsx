import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-cream py-section-mobile md:py-section">
      <div className="mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
        <h1 className="mb-4 font-serif text-hero-mobile text-charcoal md:text-hero">
          Page not found
        </h1>
        <p className="mx-auto mb-8 max-w-md text-body text-warm-grey">
          Sorry, we could not find the page you are looking for. It may have been moved or no longer
          exists.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to homepage
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
