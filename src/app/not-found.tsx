import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-cream py-section-mobile md:py-section">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-4">
          Page not found
        </h1>
        <p className="text-body text-warm-grey mb-8 max-w-md mx-auto">
          Sorry, we could not find the page you are looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
