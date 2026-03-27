# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build
npm run lint         # ESLint on .ts/.tsx files
npm run typecheck    # TypeScript strict type checking
npm run preview      # Preview production build locally
```

No test runner is configured.

## Environment Variables

Requires a `.env` file (gitignored) with:
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key

## Architecture

React 18 + TypeScript + Vite dashboard for monitoring algorithmic trust scores.

- **`src/components/Dashboard.tsx`** — Main (and only) component. Fetches from Supabase on mount, renders trust score, component metrics bar chart, audit log, and metric cards. Uses Tremor UI components.
- **`src/lib/supabase.ts`** — Supabase client initialisation and TypeScript interfaces for `TrustScore`, `TrustMetric`, `AuditEvent`.
- **`src/App.tsx`** — Root component, imports Dashboard.
- **`src/index.css`** — Tailwind setup with custom Tremor CSS variable theming. Dark theme, JetBrains Mono font, emerald accents.

## Database Schema (Supabase)

Three tables defined in `supabase/migrations/`:
- **trust_scores** — score (0-100), confidence_level, status (active/calibrating/error)
- **trust_metrics** — metric_name, metric_value, weight (0-1), FK to trust_scores
- **audit_events** — event_type, description, impact_score (can be negative)

Row-level security enabled with public read access.

## Styling

Tailwind CSS 3.4 + Tremor React 3.18 for dashboard components. Lucide React for icons. Do not install other packages for UI themes, icons, or component libraries unless explicitly requested (per `.bolt/prompt` convention).

## Docs

`docs/` contains strategic prompt libraries and research outputs unrelated to the app code:
- `docs/brand-schema/` — 21-prompt Brand Schema Master Prompt Library
- `docs/experiential-marketing/` — Experiential marketing evidence pack
