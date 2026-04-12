# Source Index

## Provided Files

- `/Users/aleksandrivanov/Desktop/career_info/Альбом достижений 2024.pdf`
- `/Users/aleksandrivanov/Desktop/career_info/Иванов Александр.pdf`
- `/Users/aleksandrivanov/Desktop/career_info/Profile.pdf`
- `/Users/aleksandrivanov/Desktop/career_info/projects.rtf`

## Extraction Notes

### `projects.rtf`

Successfully extracted with `textutil`.

Captured facts:

- Altessa
  - `fix-fox`: redesign, frontend delivery ownership/management
  - `martlive`: built from scratch, technology choice, full ownership
- Codiny
  - `linkbuilder.com`: migration from Vue 2 to Vue 3, decomposition of Laravel monolith into frontend and backend

### PDF files

Detected and partially recovered through Quick Look previews and browser PDF viewer screenshots.

Recovered assets:

- previews:
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/previews/Profile.pdf.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/previews/Иванов Александр.pdf.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/previews/Альбом достижений 2024.pdf.png`
- browser screenshots:
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/resume-ru-page1-browser.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/resume-ru-page2-browser.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/profile-en-page1-browser.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/profile-en-page2-browser.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/profile-en-page3-browser.png`
  - `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/profile-en-page4-browser.png`

Recovered facts from PDFs:

- current target title in RU resume: `Lead Frontend Developer`
- current target title in EN resume: `Senior Frontend Developer | Leading Frontend Development Projects`
- location: Belgrade, Serbia / Serbia
- CrypIM:
  - role shown as `Senior Frontend Developer` in EN resume
  - role shown as `Lead Frontend Developer` in RU HH-style resume
  - timeline shown as `August 2024 - February 2026` / `Август 2024 - Февраль 2026`
  - stack: `Vue (Nuxt), Pinia, Vite, TypeScript, WebSockets (Centrifugo)`
  - responsibilities mentioned:
    - planning
    - task decomposition and distribution
    - hands-on coding
    - architecture / state management decisions
  - delivered items mentioned:
    - optimized core SaaS product for advertising platforms
    - built internal CRM with messenger integrations to MVP
    - implemented real-time layer via WebSockets / Centrifugo
    - built reusable landing template
- SprintF:
  - timeline shown as `July 2020 - July 2024`
  - RU resume role: `Senior frontend developer`
  - EN resume role: `Frontend Developer`
  - RU resume explicitly mentions:
    - maritime freight logistics system
    - React 18, Redux Toolkit, TypeScript
    - modular architecture design
    - API contract participation with backend
    - technical interviews and team formation
    - online store constructor with `Nuxt2 + GraphQL`
  - EN resume explicitly mentions:
    - mortgage insurance website
    - online shop constructor
    - logistics management system for maritime freight transportation
    - auto parts order/workforce management system
- Altessa:
  - timeline shown in RU resume: `April 2022 - October 2022`
  - role shown: `Frontend-разработчик`
  - general wording: frontend development of applications from scratch
- Freelance:
  - timeline shown in RU resume: `January 2019 - June 2021`

Observed constraints:

- `pdftotext` is not installed
- `textutil` returned PDF internals rather than readable text
- the browser PDF viewer only exposes visible page content, so extraction is partial and manual

Implication:

- We now have enough extracted detail to ask narrower questions
- We still need user confirmation where the resumes contain generalized or outdated wording
