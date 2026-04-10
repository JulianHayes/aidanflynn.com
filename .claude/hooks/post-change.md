# Post-Change Verification

After making changes, verify:

1. **Static generation**: All pages should remain statically renderable unless there is a specific reason for client-side rendering
2. **Metadata**: New or renamed pages must have exported `metadata` for SEO and be added to `sitemap.ts`
3. **Constants sync**: If new data structures are added to `constants.ts`, ensure all consumers are updated
4. **Portal rule**: Any `position: fixed` element inside the Navigation header must use `createPortal` to `document.body`
