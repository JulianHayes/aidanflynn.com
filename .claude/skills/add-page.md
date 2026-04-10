# Add Page

Create a new static page in the Next.js App Router.

## Steps

1. Create `src/app/<slug>/page.tsx` as a server component (no `'use client'`)
2. Export metadata using the Next.js Metadata API with the title template `%s | Aidan Flynn`
3. Use the design system: `max-w-content mx-auto`, section spacing, serif headings, sans body text
4. Add the route to `NAV_ITEMS` in `src/lib/constants.ts` if it belongs in navigation
5. Add the route to `sitemap.ts`
6. Run `npm run build` to verify the page renders and TypeScript passes
