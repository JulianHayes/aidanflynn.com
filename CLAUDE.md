# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

aidanflynn.com — a Next.js 14 website for a precious metals buying business (gold, silver, platinum) operating in Brighton, Belfast, and Dublin. Static marketing site with one dynamic element: a client-side gold price calculator.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — validates TypeScript and all routes
npm run start    # Serve production build locally
npm run lint     # ESLint via next lint
```

No test framework is configured.

## Architecture

**Next.js 14 App Router** with TypeScript, Tailwind CSS 3, and framer-motion. Path alias `@/*` maps to `src/*`. Icons via lucide-react.

### Rendering strategy
- Most pages are statically rendered server components
- `'use client'` components: `Navigation`, `MobileMenu`, `AnimatedHeadline`, `AnimatedSection`, `FAQAccordion`, `GoldPriceCalculator`, `KitRequestForm`. Also `contact/page.tsx` and `locations/dublin/page.tsx` are client pages.
- `/api/gold-price` is a Route Handler returning hardcoded spot prices (placeholder for GoldAPI.io)

### Key files
- `src/lib/constants.ts` — Central data store: spot prices, buy percentages, locations, nav items, testimonials, FAQ content, blog posts. Most page content pulls from here.
- `src/lib/utils.ts` — `cn()` for classnames, `formatCurrency()`, `formatDate()`
- `src/app/layout.tsx` — Root layout with Navigation, Footer, Google Fonts via `<link>`, skip-to-content link
- `tailwind.config.ts` — Full design system: custom colors, typography scale (hero through caption), card border-radius and shadow

### Component patterns
- `Button` is polymorphic: renders `<Link>` when `href` is provided, `<button>` otherwise. Variants: `primary` (navy), `secondary` (navy border), `gold` (gold bg).
- UI components (`src/components/ui/`) are atomic building blocks. Section components (`src/components/`) compose them for specific use cases.
- Gold price calculation: `weight × spotPrice × buyPercentage`. Spot prices and buy percentages are in `constants.ts`.
- `MobileMenu` uses `createPortal` to render its overlay into `document.body`. This is required because `Navigation` uses framer-motion's `motion.header` which applies a CSS `transform`, creating a new containing block that breaks `position: fixed` for children. Do not move the menu overlay back inside the header.

### Design system
- Colour palette: navy `#1B474A`, gold `#C9A96E` (used sparingly — prices, CTAs, calculator only), cream `#FAF7F2` (page bg), stone `#E8E2D8`, warm-grey `#6B6560` (body text), charcoal `#2D2926` (headings)
- Fonts: Libre Baskerville (serif, headings), Inter (sans, body/data/nav)
- Max content width: `max-w-content` = 1200px. Generous whitespace. Single-column for text-heavy pages.
- Custom spacing: `section` (80px), `section-mobile` (48px)
- The aesthetic is modern fintech (Wise/Monzo), not cash-for-gold. No gold gradients, no stock photos, no visual noise.

### SEO
- Per-page metadata via Next.js Metadata API with template `%s | Aidan Flynn`
- JSON-LD LocalBusiness schema on homepage
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`

## Sensitive pages

`/sell-inherited-jewellery` targets bereaved customers. Tone must be respectful, measured, no urgency tactics, no countdown timers, no "limited time" language.

## Future integration points

Look for `// TODO:` comments marking where to swap in:
- Live gold price API (GoldAPI.io or Metals-API) in `GoldPriceCalculator` and `/api/gold-price`
- Trustpilot reviews API replacing placeholder testimonials
- Form submission endpoints (Resend/SendGrid) in `KitRequestForm` and contact form
- Google Maps embeds replacing placeholder boxes on location pages
