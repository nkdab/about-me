# Repository Instructions

## Architecture

- Use the lightweight FSD structure already present in `src/`.
- Keep `app` limited to routing, metadata, and handler composition.
- Prefer server components by default. Add client components only when browser APIs or interactivity require them.

## Context7 Rule

Use Context7 as the default source of truth for framework and library decisions during development.

Required:
- Verify current versions and compatibility in Context7 before introducing or upgrading major dependencies.
- Use Context7 before making implementation decisions involving Next.js, React, Tailwind, shadcn/ui, Playwright, Resend, Drizzle, hCaptcha, oxlint, or oxfmt.
- Prefer official documentation sources surfaced through Context7.
- If Context7 does not provide a reliable entry for a package, document the gap explicitly and verify the package from its official docs at implementation time.
- Do not rely on memory for version-specific behavior when a Context7 lookup is available.

## Upgrade Rule

Before changing dependency versions:
1. Verify the target version in Context7.
2. Record the decision in `docs/stack-versions.md`.
3. Re-run typecheck, build, lint, and Playwright smoke tests.

## Content

- Case studies live in `src/content/case-studies/{locale}`.
- Slugs must match across `en` and `ru`.
- UI translations belong in `src/shared/i18n/dictionaries`.

## Quality

- Maintain type safety.
- Add or update tests when behavior changes.
- Preserve accessibility and SEO behavior.
