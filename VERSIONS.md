# Versions

Each iteration of aidanflynn.com is reachable as an annotated git tag. Check
one out with `git checkout v0.x.0` or compare with
`git diff v0.x.0..v0.y.0`.

| Tag      | Commit    | Iteration |
| -------- | --------- | --------- |
| `v0.1.0` | `6b2e094` | Initial Next.js 14 build — all core pages, gold price calculator (hardcoded spot), SEO + JSON-LD, sitemap. |
| `v0.2.0` | `dd62c7a` | Framer Motion redesign — scroll animations, gradient accents, `AnimatedSection`, logo SVGs in Navigation/Footer. |
| `v0.3.0` | `91adba8` | Teal primary, legal pages — primary switched to `#1B474A`, illuminated hero glow, mobile menu hardened, Privacy/Terms pages. |
| `v0.4.0` | `c0ff106` | Mobile menu portal fix — overlay portalled out of transformed header so full viewport height renders. |
| `v0.5.0` | `cbeb3ee` | Design tokens + dark mode toggle — three-tier token system (reference → system → component), `ThemeToggle` slider, `prefers-color-scheme` + `localStorage`. |
| `v0.6.0` | `8a0fa25` | Dark mode wired through UI — legacy palette utilities switch per theme via CSS variables, accessibility/token compliance audit pass. Current `main`. |

## Roadmap

These are out of scope for the v0.x line and will be planned as separate
workstreams once foundations are locked in.

- **Live gold price feed** — swap hardcoded spot prices in `src/lib/constants.ts` and `/api/gold-price` for GoldAPI.io or Metals-API.
- **Secure return envelope dispatch** — mechanism to trigger dispatch of the secure return envelope to the customer after they request a kit.
- **exJewel.ai integration** — photo-based jewellery estimates wired into `GoldPriceCalculator` so customers can upload an image for a valuation.
- **Form submission endpoints** — replace `setTimeout` placeholders in contact form, `KitRequestForm`, and Dublin interest form with a real provider (Resend/SendGrid).
- **Trustpilot reviews API** — replace placeholder testimonials on the homepage.
- **Google Maps embeds** — replace placeholder boxes on location pages.

## Known review items

Small housekeeping picked up in the v0.6.0 review; deferred to a dedicated
branch so this one stays focused on structure:

- Unused `cn` import in `GoldPriceCalculator`.
- Orphaned `src/components/ui/illuminated-hero.tsx` (not imported anywhere).
- Email regex in forms is permissive; lean on HTML5 `type="email"` plus a stricter pattern.
- Currency toggle in `GoldPriceCalculator` should use `role="radio"` / `aria-checked`.
- Verify whether `tokens/*.json` compiles to CSS at build time or whether `styles/theme.css` is hand-maintained.
