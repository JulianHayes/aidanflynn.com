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

**Next.js App Router** with TypeScript and Tailwind CSS. Path alias `@/*` maps to `src/*`.

### Rendering strategy
- All pages are statically rendered. Client components (`'use client'`): `Navigation`, `MobileMenu`, `FAQAccordion`, `GoldPriceCalculator`, `KitRequestForm`, `ThemeToggle`, `AnimatedHeadline`, `AnimatedSection`. Two page-level client components: `contact/page.tsx` (form state), `locations/dublin/page.tsx` (kit form).
- `/api/gold-price` is a Route Handler returning hardcoded spot prices (placeholder for GoldAPI.io)

### Key files
- `src/lib/constants.ts` — Central data store: spot prices, buy percentages, locations, nav items, testimonials, FAQ content, blog posts. Most page content pulls from here.
- `src/lib/utils.ts` — `cn()` for classnames, `formatCurrency()`, `formatDate()`
- `src/app/layout.tsx` — Root layout with Navigation, Footer, Google Fonts via `<link>`, skip-to-content link, `data-theme="light"` attribute
- `tailwind.config.ts` — Design system: theme-aware legacy palette, reference colour scales, semantic token colours, typography, spacing, motion

### Component patterns
- `Button` is polymorphic: renders `<Link>` when `href` is provided, `<button>` otherwise. Variants: `primary` (navy), `secondary` (navy border), `gold` (gold bg). All sizes meet 44px minimum touch target.
- UI components (`src/components/ui/`) are atomic building blocks. Section components (`src/components/`) compose them for specific use cases.
- Gold price calculation: `weight × spotPrice × buyPercentage`. Spot prices and buy percentages are in `constants.ts`.

### Design token system

Three-tier token architecture: **reference → system → component**.

#### Token files (source of truth)
- `tokens/reference.json` — Primitive values: green scale (350–950), neutral scale (0–800), text colours, state colours, fonts, spacing, radius, motion
- `tokens/components.json` — Component-level token mappings (card, button, hero, input, nav, valuation, divider)
- `tokens/themes/light.json` — Light theme: resolves system tokens to reference tokens
- `tokens/themes/dark.json` — Dark theme: resolves system tokens to reference tokens

#### CSS files
- `styles/tokens.css` — CSS custom properties for typography (`--type-*`), spacing (`--space-*`), radius (`--radius-*`), motion (`--motion-*`, `--ease-*`)
- `styles/theme.css` — Resolved colour CSS variables for light and dark themes via `[data-theme]` attribute. Also contains legacy palette variables (`--color-navy`, `--color-cream`, etc.) that switch per theme. Includes `prefers-color-scheme` fallbacks for pre-JS rendering.

#### How colours work
The legacy Tailwind palette (`navy`, `gold`, `cream`, `stone`, `warm-grey`, `charcoal`) is wired to CSS variables in `tailwind.config.ts`, not hardcoded hex values. When `data-theme` changes, every class like `bg-cream`, `text-charcoal`, `border-stone` automatically switches to its dark equivalent. **Never add hardcoded hex values to component code** — always use Tailwind classes that reference the token system.

Key colour class mappings:
- Page backgrounds: `bg-cream` (switches per theme) or `bg-surface` (white/dark surface)
- Headings: `text-charcoal` (switches per theme)
- Body text: `text-warm-grey` (switches per theme)
- Brand accent: `text-navy`, `bg-navy` = `#174634` light / muted sage `#8E9B94` dark (switches per theme)
- Deepest green (footer, CTA band, logo lockup): `bg-navy-deep`, `text-navy-deep` = `#0D2E22` light / `#081B14` dark
- Borders: `border-stone` (switches per theme)
- Cards/inputs/nav: `bg-surface` (white in light, dark surface in dark)
- Gold accent: `bg-gold`, `text-gold` (same in both themes) — prices and step eyebrows only, never on CTAs

Semantic system tokens are also available as Tailwind classes: `bg-background`, `bg-surface-elevated`, `text-foreground`, `text-foreground-secondary`, `bg-brand`, `text-brand-accent`, `border-border-subtle`, etc.

#### Dark mode
- Controlled via `data-theme` attribute on `<html>` (not CSS class)
- Tailwind config: `darkMode: ['selector', '[data-theme="dark"]']`
- `ThemeToggle` component (slider next to hamburger): reads `prefers-color-scheme` on mount, persists choice to `localStorage`, listens for OS changes
- `layout.tsx` uses `suppressHydrationWarning` to prevent mismatch warnings
- `prefers-reduced-motion` is respected globally (animations disabled)

### Design system
- **Colour palette:** deep-green system. Brand green `#174634` at rest, `#1F5C45` on hover (light mode). In dark mode: muted sage `#8E9B94` at rest, `#A8B3AD` on hover. A third darker green `#0D2E22` (`--color-deep`) is reserved for the footer, pre-footer CTA band, and brand lockup. Gold `#C9A96E` used sparingly — **prices and step eyebrows only**, never on CTAs.
- **Fonts:** PT Serif (headings, body long-form, buttons), PT Sans (UI labels, nav, forms), PT Serif Caption italic (small disclaimers/captions). Loaded via `--font-heading`, `--font-body`, `--font-caption`.
- **Elevation:** three shadow families — `--elev-card` / `--elev-card-hover` (embossed lift for cards), `--elev-btn` / `--elev-btn-hover` / `--elev-btn-active` (raised buttons with top-highlight + floor shadow), `--elev-inset` / `--elev-inset-focus` / `--elev-chip-inset` (pressed-in inputs, chips, icon niches). Each has a dark-mode variant so the depth reads correctly on dark surfaces.
- **Logo:** inline SVG at `public/logo.svg`, unified single-colour lockup with the PT Serif wordmark (see `components/layout/Brand.tsx`). Uses `--color-deep` in light mode, `--color-navy-light` in dark mode, white in the footer.
- Max content width: 1200px. Generous whitespace. Single-column for text-heavy pages.
- The aesthetic is modern fintech (Wise/Monzo), not cash-for-gold. No gold gradients, no stock photos, no visual noise.
- Accessibility: 44px minimum touch targets, focus rings via `--color-focus-ring`, disabled states on all interactive elements, `aria-invalid`/`aria-describedby` on form fields

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
