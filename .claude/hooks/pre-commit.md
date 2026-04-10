# Pre-Commit Checks

Before committing, ensure:

1. **Build passes**: `npm run build` completes without errors (validates TypeScript and all static routes)
2. **Lint passes**: `npm run lint` reports no errors
3. **No secrets**: Do not commit `.env` files, API keys, or credentials
4. **Design system compliance**: New UI should use tokens from `tailwind.config.ts`, not arbitrary values
5. **Sensitive content**: Changes to `/sell-inherited-jewellery` must use respectful tone — no urgency tactics, countdown timers, or "limited time" language
