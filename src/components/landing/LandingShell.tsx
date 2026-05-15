import Brand from '@/components/layout/Brand'
import { CONTACT } from '@/lib/constants'

// Minimal layout used only while the landing page is the one public route.
// Top bar holds the brand mark and a contact line. Footer is a single quiet line.
// No navigation links — the rest of the site is hidden via middleware.

export default function LandingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-border-subtle bg-cream">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-5 md:px-12 lg:px-20">
          <Brand />
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden text-small text-warm-grey transition-colors hover:text-charcoal md:inline-block"
          >
            {CONTACT.email}
          </a>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-border-subtle bg-cream">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-6 py-8 md:flex-row md:items-center md:px-12 lg:px-20">
          <p className="caption-fine text-warm-grey">
            © {new Date().getFullYear()} Aidan Flynn. Brighton · Belfast · Dublin.
          </p>
          <p className="caption-fine text-warm-grey">
            HMRC-registered precious metals dealer. The full site is coming soon.
          </p>
        </div>
      </footer>
    </>
  )
}
