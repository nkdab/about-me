# Stack Versions

Validated baseline:

- Next.js 16.2.2
- React 19
- Tailwind CSS 4.1
- Playwright 1.58.2
- Current shadcn/ui docs with React 19 + Tailwind v4 support
- Current Resend, Drizzle ORM, hCaptcha, oxlint, and oxfmt docs
- `@hcaptcha/react-hcaptcha` 2.0.2

Notes:

- `pg` is used through Drizzle's documented `node-postgres` support.
- Context7 surfaced official hCaptcha and `@hcaptcha/react-hcaptcha` docs, but did not provide a reliable package version list. npm resolved `@hcaptcha/react-hcaptcha` 2.0.2 on 2026-04-12.
- Re-check versions in Context7 before major upgrades.
