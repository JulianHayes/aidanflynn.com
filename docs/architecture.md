# Architecture Decisions

## Static-First Rendering

All pages are statically generated at build time. Only components requiring browser APIs or interactivity use `'use client'`. This keeps the site fast and SEO-friendly with no server runtime needed.

Client components: `Navigation`, `MobileMenu`, `AnimatedHeadline`, `AnimatedSection`, `FAQAccordion`, `GoldPriceCalculator`, `KitRequestForm`, `contact/page.tsx`, `locations/dublin/page.tsx`.

## Centralised Content in constants.ts

All structured content (nav items, locations, pricing, FAQs, testimonials, blog posts) lives in `src/lib/constants.ts`. Pages import from this single source. This avoids content duplication and makes bulk updates straightforward.

## MobileMenu Portal Pattern

`MobileMenu` renders its overlay via `createPortal` into `document.body` rather than inline. This is necessary because the parent `<motion.header>` in `Navigation` applies a CSS `transform` (via framer-motion), which creates a new containing block. Without the portal, `position: fixed` on the menu overlay would be relative to the 80px-tall header instead of the viewport.

## Polymorphic Button

The `Button` component renders as `<Link>` when an `href` prop is provided, and `<button>` otherwise. This avoids separate link-button and button components while keeping the API simple. Three visual variants: `primary`, `secondary`, `gold`.

## Design System via Tailwind Config

All design tokens (colors, typography scale, spacing, shadows, border-radius) are defined in `tailwind.config.ts`. Components use these tokens exclusively — no arbitrary hex values or pixel sizes in component files. The palette is intentionally restrained: navy and gold are the only accent colors.

## SEO Strategy

Each page exports Next.js `Metadata` with the title template `%s | Aidan Flynn`. The homepage includes JSON-LD `LocalBusiness` structured data. `sitemap.ts` and `robots.ts` auto-generate their respective files.

## Future API Integration Points

The site is designed for easy swap-in of live services. Placeholder implementations are marked with `// TODO:` comments:
- Gold price API (currently hardcoded in `/api/gold-price`)
- Trustpilot reviews (currently placeholder testimonials)
- Form submission (currently no backend)
- Google Maps embeds (currently placeholder boxes)
