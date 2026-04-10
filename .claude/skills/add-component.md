# Add Component

Create a new reusable component following existing patterns.

## Steps

1. Determine if the component is a UI primitive (`src/components/ui/`) or a feature/section component (`src/components/`)
2. Use TypeScript with explicit prop types
3. Apply `cn()` from `@/lib/utils` for conditional classnames
4. Use Tailwind classes from the design system — reference `tailwind.config.ts` for custom tokens
5. Only add `'use client'` if the component needs interactivity (state, effects, event handlers, framer-motion)
6. If the component uses `position: fixed` and lives inside `Navigation`, it must use `createPortal` to `document.body` (framer-motion transform creates a containing block)
7. Run `npm run build` to verify
