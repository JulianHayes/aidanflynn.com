# aidanflynn.com

Marketing site for **Aidan Flynn**, a precious metals buying business (gold,
silver, platinum) operating in Brighton, Belfast, and Dublin. Built with
Next.js 14 (App Router), TypeScript, and Tailwind.

## Quick start

```bash
npm install
npm run dev              # http://localhost:3000
```

## Scripts

```bash
npm run dev              # local dev server
npm run build            # production build (validates TypeScript and all routes)
npm run start            # serve the production build locally
npm run lint             # ESLint via next lint
npm run format           # Prettier, write mode
npm run format:check     # Prettier, check mode (used in CI)
```

No test framework is configured yet.

## Documentation

| Doc                                | What's in it                                                       |
| ---------------------------------- | ------------------------------------------------------------------ |
| [`CLAUDE.md`](./CLAUDE.md)         | Project guidance for Claude Code — architecture, token system, conventions |
| [`CHANGELOG.md`](./CHANGELOG.md)   | Every tagged iteration `v0.1.0..v0.6.0`, roadmap, known review items |
| [`docs/DEPLOY.md`](./docs/DEPLOY.md) | Vercel deploy workflow, rollback, preview URLs for client sign-off |

## Architecture at a glance

- **App Router** with path alias `@/*` → `src/*`
- **Static render** everywhere; only a handful of client components (calculator, forms, nav, theme toggle, FAQ accordion)
- **`src/lib/constants.ts`** is the copy bank — spot prices, percentages, testimonials, FAQ content, blog posts
- **Three-tier token system** — `tokens/reference.json` → `tokens/themes/*.json` + `tokens/components.json` → `styles/tokens.css` + `styles/theme.css`. Dark mode switches via `data-theme` on `<html>`.

See `CLAUDE.md` for the full picture.

## Deployment & rollback

The site is hosted on **Vercel**. Every push to `main` deploys to production;
every PR gets its own preview URL so the client can sign off before a change
ships.

If a production release needs to be rolled back, the previous deployment is
still immutable on Vercel — promote it from the dashboard or run
`vercel rollback`. Step-by-step in [`docs/DEPLOY.md`](./docs/DEPLOY.md).

## Branching

- `main` — production
- `claude/<task>-<slug>` — feature branches opened by Claude Code

Feature branches open a PR against `main`, get a Vercel preview URL, and merge
once CI passes and the client signs off.

## Versions

Each iteration is tagged. Check out any previous version with:

```bash
git checkout v0.6.0
```

Full list in [`CHANGELOG.md`](./CHANGELOG.md).
