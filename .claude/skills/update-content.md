# Update Content

Modify site content (text, pricing, locations, FAQs, testimonials, etc.).

## Steps

1. Most content lives in `src/lib/constants.ts` — check there first
2. Spot prices and buy percentages affect the gold price calculator output
3. Location data (address, phone, hours) is in the `LOCATIONS` array
4. FAQ content is in `FAQ_ITEMS`; blog posts in `BLOG_POSTS`
5. For page-specific copy not in constants, edit the page file directly in `src/app/`
6. Run `npm run build` to verify no TypeScript errors from changed data shapes
