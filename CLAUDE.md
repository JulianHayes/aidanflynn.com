# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

aidanflynn.com — a Next.js 14 website for a precious metals buying business (gold, silver, platinum) operating in Brighton, Belfast, and Dublin. Static marketing site with one dynamic element: a client-side gold price calculator. Deployed to Vercel from branch `claude/build-aidanflynn-website-kMDbu`.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — validates TypeScript and all routes
npm run start    # Serve production build locally
npm run lint     # ESLint via next lint (config in .eslintrc.json)
```

No test framework is configured.

## Architecture

**Next.js App Router** with TypeScript and Tailwind CSS. Path alias `@/*` maps to `src/*`.

### Rendering strategy
- Most pages are statically rendered
- `'use client'` components: `SiteMenu`, `AnimatedHeadline`, `FAQAccordion`, `GoldPriceCalculator`, `KitRequestForm`, plus `contact/page.tsx` and `locations/dublin/page.tsx`
- Client-component pages (`contact`, `dublin`) have metadata defined in sibling `layout.tsx` files since client components cannot export metadata
- `/api/gold-price` is a Route Handler returning hardcoded spot prices (placeholder for GoldAPI.io)
- `MobileMenu.tsx` exists but is unused — `SiteMenu.tsx` replaced it

### Key files
- `src/lib/constants.ts` — Central data store: spot prices, buy percentages, locations, nav items, testimonials, FAQ content, blog posts. Most page content pulls from here.
- `src/lib/utils.ts` — `cn()` for classnames, `formatCurrency()`, `formatDate()`
- `src/app/layout.tsx` — Root layout with Navigation, Footer, Google Fonts via `<link>`, skip-to-content link
- `tailwind.config.ts` — Full design system: custom colors, typography scale (hero through caption), card border-radius, shadow, keyframe animations

### Navigation
- `Navigation.tsx` — Sticky header with logo, desktop nav links (`hidden lg:flex`), and `SiteMenu` for mobile/tablet (`lg:hidden`)
- `SiteMenu.tsx` — Full-screen slide-in overlay triggered by hamburger. Uses Framer Motion for nav item hover animations. Overlay uses inline styles for positioning/background to avoid Tailwind purging issues.
- `MobileMenu.tsx` — Legacy component, no longer imported. Can be deleted.

### Component patterns
- `Button` is polymorphic: renders `<Link>` when `href` is provided, `<button>` otherwise. Variants: `primary` (navy), `secondary` (navy border), `gold` (gold bg).
- `AnimatedSection`, `StaggerContainer`, `StaggerItem` — Framer Motion scroll-reveal wrappers used on homepage, how-it-works, and about pages.
- `AnimatedHeadline` — Client component for the hero's animated second line.
- UI components (`src/components/ui/`) are atomic building blocks. Section components (`src/components/`) compose them for specific use cases.
- Gold price calculation: `weight × spotPrice × buyPercentage`. Spot prices and buy percentages are in `constants.ts`.
- Reference components (`illuminated-hero.tsx`, `curved-menu.tsx`) in `ui/` are design references, not used in production.

### Design system
- Colour palette: navy `#1B474A` (teal green), gold `#C9A96E` (used sparingly — prices, CTAs, calculator only), cream `#FAF7F2` (page bg), stone `#E8E2D8`, warm-grey `#6B6560` (body text), charcoal `#2D2926` (headings)
- Fonts: Libre Baskerville (serif, headings), Inter (sans, body/data/nav) — loaded via Google Fonts `<link>` in layout.tsx
- Max content width: 1200px. Generous whitespace. Single-column for text-heavy pages.
- The aesthetic is modern fintech (Wise/Monzo), not cash-for-gold. No gold gradients, no stock photos, no visual noise.

### SEO
- Per-page metadata via Next.js Metadata API with template `%s | Aidan Flynn`
- JSON-LD LocalBusiness schema on homepage
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`

## Sensitive pages

`/sell-inherited-jewellery` targets bereaved customers. Tone must be respectful, measured, no urgency tactics, no countdown timers, no "limited time" language.

## Deployment notes

- Deployed to **Vercel** from branch `claude/build-aidanflynn-website-kMDbu`
- Git push from this environment often fails with 503 errors. Use `mcp__github__create_or_update_file` (with SHA parameter for existing files) as a reliable alternative. Always verify the file landed by checking the commit response.
- `mcp__github__push_files` creates commits that can diverge from the branch HEAD — avoid using it for critical updates.
- After pushing via API, sync local with: `git fetch origin <branch> && git reset --hard origin/<branch>`

## Known issues

- **Menu overlay**: The SiteMenu full-screen overlay may not render its background correctly in production. If fixing, verify by deploying and checking visually — local builds are not sufficient.

## Future integration points

Look for `// TODO:` comments marking where to swap in:
- Live gold price API (GoldAPI.io or Metals-API) in `GoldPriceCalculator` and `/api/gold-price`
- Trustpilot reviews API replacing placeholder testimonials
- Form submission endpoints (Resend/SendGrid) in `KitRequestForm` and contact form
- Google Maps embeds replacing placeholder boxes on location pages
