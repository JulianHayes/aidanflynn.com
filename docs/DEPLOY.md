# Deployment & rollback

The site is hosted on **Vercel**. Vercel keeps every prior production build
immutable and reachable at a unique URL, which is what makes zero-downtime
rollback possible. The host does the heavy lifting; this doc explains the
workflow around it.

## How a change reaches production

1. Work happens on a branch (`claude/<task>-<slug>` or `feature/<slug>`).
2. Opening a PR against `main` triggers:
   - A Vercel **preview deployment** at `https://aidanflynn-git-<branch>-<team>.vercel.app` — this is the URL to share with the client for sign-off.
   - The GitHub Actions CI workflow (`.github/workflows/ci.yml`) runs lint + build.
3. When the PR is merged into `main`, Vercel promotes that build to production.

**Client sign-off should happen on the preview URL, not after the fact on
production.** Every change gets its own preview URL so the client can review
copy, layout, and flows in isolation before anything goes live.

## Rolling back a bad production release

If a bad release reaches production — either the client rejects it or a fault
is discovered post-deploy — the previous good version is still sitting on
Vercel, immutable. Rolling back is a matter of telling Vercel to point the
production alias (`aidanflynn.com`) at that older build.

### Option A — Vercel dashboard (fastest, non-technical)

1. Go to the project in the Vercel dashboard → **Deployments** tab.
2. Find the last known-good deployment (each is tagged with its branch, commit SHA, and timestamp).
3. Click `⋯` → **Promote to Production**.
4. The swap is atomic. Production is on the old build in seconds. No downtime.

### Option B — Vercel CLI (fastest for engineers)

```bash
# List recent production deployments
vercel ls aidanflynn.com

# Promote a specific prior deployment
vercel promote <deployment-url>

# Or roll back the latest one in one command
vercel rollback
```

### Option C — revert the offending commit on `main`

Only do this if you also want the change removed from code history (not just
unpromoted). Vercel will auto-deploy the revert.

```bash
git revert <bad-commit-sha>
git push origin main
```

The revert is itself a new deployment, so you still keep the bad build in the
deployment history (and can roll forward again if needed).

## Which rollback option to use

| Situation                                                  | Use        |
| ---------------------------------------------------------- | ---------- |
| Production is broken right now, need it fixed in < 60s     | Option A (dashboard) or B (CLI) |
| The bad change was a copy or design regression caught by the client | Option A, then open a fix PR |
| The change was shipped from a bad commit and shouldn't be kept in history | Option C (revert on `main`) |

## Feature flags (future)

Once there are features too large to ship behind a single PR (live gold prices,
secure envelope dispatch, exJewel.ai integration in the calculator), consider
wrapping them in a feature flag (GrowthBook, LaunchDarkly, or an env var) so
the flag can be toggled without redeploying. Not needed yet — noted here so
we remember.

## First-time Vercel setup

For the person setting the project up:

1. In Vercel, **Add New → Project → Import `julianhayes/aidanflynn.com`**.
2. Framework preset is auto-detected as Next.js. Root directory: `./`.
3. Under **Domains**, add `aidanflynn.com` and `www.aidanflynn.com`, set `www` to redirect to apex.
4. Environment variables — none required for the current codebase. Add these when the integrations land:
   - `GOLD_API_KEY` (when swapping `/api/gold-price` to a live feed)
   - `RESEND_API_KEY` / `SENDGRID_API_KEY` (when form submission endpoints land)
   - `EXJEWEL_API_KEY` (when the photo-estimate integration lands)
5. Under **Git**, make sure **Production Branch** is `main` and **Preview Deployments** is enabled for all branches.

That's it — the rest is automatic.
