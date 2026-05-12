# Changelog

All notable changes to aidanflynn.com are documented here. Every iteration
is reachable as an annotated git tag — check one out with
`git checkout v0.x.0` or compare versions with `git diff v0.x.0..v0.y.0`.

Format loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
The project follows [Semantic Versioning](https://semver.org/) once it hits
`v1.0.0`; the `v0.x.0` line below tracks pre-launch iterations.

## Unreleased

### Added

- `README.md` with setup, commands, deploy, and rollback pointers.
- `docs/DEPLOY.md` covering Vercel deploy, preview URLs for client sign-off, and rollback workflows.
- GitHub Actions CI (`.github/workflows/ci.yml`) running lint, format check, and build on every PR.
- Prettier config (`.prettierrc.json`, `.prettierignore`) plus `format` / `format:check` scripts.
- UX/design critique captured (see PR description) — recommendations to act on in a later branch.

### Changed

- Renamed `VERSIONS.md` → `CHANGELOG.md` (conventional name).
- Consolidated duplicate import from `@/lib/utils` in `GoldPriceCalculator`.

### Removed

- Orphaned `src/components/ui/illuminated-hero.tsx` (not imported anywhere).

## v0.6.0 — 2026-04-18

Dark mode wired through the entire UI. Merges PR #8.

- Legacy Tailwind palette (`navy`, `cream`, `stone`, `warm-grey`, `charcoal`) re-wired to CSS variables so every utility class switches per theme automatically.
- Accessibility, dark mode, and token compliance fixes across UI.
- Consistency fixes from codebase audit.
- `CLAUDE.md` updated to document the token system and dark mode.
- **Commit**: `8a0fa25`

## v0.5.0 — 2026-04-18

Design token system and dark mode toggle. Merges PR #6.

- Three-tier design token system: `tokens/reference.json` → `tokens/themes/*.json` + `tokens/components.json` → `styles/tokens.css` + `styles/theme.css`.
- `ThemeToggle` slider next to hamburger menu; reads `prefers-color-scheme`, persists to `localStorage`.
- Legacy `next.config.js` removed.
- **Commit**: `cbeb3ee`

## v0.4.0 — 2026-04-18

Mobile menu portal fix. Merges PR #4.

- Mobile menu overlay portalled out of the transformed header so full viewport height renders.
- `package-lock.json` updated.
- **Commit**: `c0ff106`

## v0.3.0 — 2026-04-18

Teal primary, legal pages, mobile menu hardened. Merges PR #3.

- Primary colour switched from `#1B2A4A` to `#1B474A` (teal green).
- Hero headline split with animated second line and illuminated glow.
- Mobile menu re-implemented without Framer Motion (z-index 9999, explicit positioning) for reliability.
- Privacy Policy and Terms of Service pages added.
- ESLint config for `next lint`.
- **Commit**: `91adba8`

## v0.2.0 — 2026-04-18

Framer Motion redesign. Merges PR #2.

- Homepage and global layout redesigned with Framer Motion scroll animations and gradient accents.
- `AnimatedSection` component added.
- Logo SVGs integrated into Navigation and Footer.
- Button and Card gain hover effects.
- **Commit**: `dd62c7a`

## v0.1.0 — 2026-04-18

Initial build. Merges PR #1.

- Complete Next.js 14 site with App Router, TypeScript, Tailwind.
- All core pages (home, how it works, about, locations, contact, sell-inherited-jewellery, blog).
- Client-side gold price calculator with hardcoded spot prices.
- SEO metadata, sitemap, robots.txt, JSON-LD LocalBusiness schema.
- **Commit**: `6b2e094`

---

## Roadmap

Tracked as separate workstreams once foundations are locked in. None of these
are in scope for the `v0.x.0` line.

- **Live gold price feed** — swap hardcoded spot prices in `src/lib/constants.ts` and `/api/gold-price` for GoldAPI.io or Metals-API.
- **Secure return envelope dispatch** — mechanism to trigger dispatch of the secure return envelope to the customer after they request a kit.
- **exJewel.ai integration** — photo-based jewellery estimates wired into `GoldPriceCalculator` so customers can upload an image for a valuation.
- **Form submission endpoints** — replace `setTimeout` placeholders in contact form, `KitRequestForm`, and Dublin interest form with a real provider (Resend/SendGrid).
- **Trustpilot reviews API** — replace placeholder testimonials on the homepage (and remove the fake 4.9 / 127 reviews number currently hardcoded).
- **Google Maps embeds** — replace placeholder boxes on location pages.

## Deferred review items

Picked up in UX/design critique and code review; to be handled in a dedicated
housekeeping branch so this one stays focused on foundations.

- Email regex in forms is permissive — use HTML5 `type="email"` plus a stricter pattern.
- Currency toggle in `GoldPriceCalculator` should use `role="radio"` inside `role="radiogroup"` with `aria-checked` (currently plain buttons).
- Verify whether `tokens/*.json` compiles to CSS at build time or whether `styles/theme.css` is hand-maintained.
- Reduce CTA repetition across pages — "Get your free kit" appears 4+ times on several pages.
- Clarify KitRequestForm vs ContactForm distinction (when should a user see which?).
- Replace "since 2024" date lines on location pages (reads new in 2026).
- Add a probate-specific FAQ entry on `sell-inherited-jewellery`.
- Consider confirming with client whether dark mode is on-brand before making it permanent.
