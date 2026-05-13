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

### Key dependencies
- `framer-motion` — page transition animations, nav underline `layoutId`, header entrance
- `lucide-react` — icon set (Phone, Mail, MapPin, Menu, X, Sun, Moon, etc.)

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
- Colour palette: green-based with neutral tones. Brand primary is near-black forest `#0F241C` (green-900). Gold `#C9A96E` used sparingly — prices, CTAs, calculator only. Accents are muted sage, not vibrant emerald.
- Fonts: PT Serif (serif, headings), PT Sans (sans, body/data/nav) — loaded via `--font-heading` and `--font-body` CSS vars. Caption faces PT Sans Caption and PT Serif Caption are self-hosted from `public/fonts/`.
- Max content width: 1200px. Generous whitespace. Single-column for text-heavy pages.
- The aesthetic is modern fintech (Wise/Monzo), not cash-for-gold. No gold gradients, no stock photos, no visual noise.
- Accessibility: 44px minimum touch targets, focus rings via `--color-focus-ring`, disabled states on all interactive elements, `aria-invalid`/`aria-describedby` on form fields

### Caption faces
- **PT Sans Caption** (`font-caption`) — legal text, table footnotes, validation hints, footer copyright, micro-labels. Default fine-print face.
- **PT Serif Caption italic** (`font-caption-serif`) — "Coming soon" markers, italicised micro-prose, kit-insert italic notes. Use sparingly.
- **Never use either above 12px.** PT Sans / PT Serif handle everything else.
- Utility classes: `.caption-fine`, `.caption-fine--bold`, `.caption-serif`

### Brand name casing
- The logo lockup is the **only** place the name appears as `AIDAN FLYNN` (applied via `text-transform: uppercase`).
- Everywhere else — headings, body copy, page titles, metadata, emails — write **Aidan Flynn** in title case.

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
