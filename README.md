# Portfolio

Bilingual personal portfolio built with Next.js, React 19, Tailwind CSS v4, MDX, and a lightweight feature-sliced architecture.

## Stack

- Next.js 16.2.2
- React 19
- TypeScript
- Tailwind CSS 4.1
- shadcn-style primitives
- MDX content
- Resend + PostgreSQL for contact delivery/persistence
- Playwright + Axe
- oxlint + oxfmt

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run format`
- `npm run typecheck`
- `npm run test`

## Environment

See `.env.example`.

## Architecture

Project structure follows a lightweight FSD approach:

- `app` for routes and handlers
- `shared` for infrastructure, UI primitives, config, i18n, SEO
- `entities` for stable domain models
- `features` for user interactions
- `widgets` for page sections

## CI/CD

GitHub Actions run linting, typechecking, build, tests, and container publishing to GitHub Container Registry.
