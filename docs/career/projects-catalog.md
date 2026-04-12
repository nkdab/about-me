# Projects Catalog

This file is the normalized catalog of currently known career projects.

## SprintF

### POS lending

Status:

- project initiated by Aleksandr
- last project in the company
- Aleksandr left shortly after the start

Known scope:

- participated in project launch
- planned architecture
- established processes
- participated in hiring
- selected architecture
- parallel internal tooling work
- user confirmed:
  - frontend codebase was split by domains
  - stack included `React` and `Redux Toolkit`
  - Aleksandr conducted frontend technical interviews
  - remembered interview volume: approximately 5 frontend interviews

Known artifacts:

- mock Kazakh passport data generator for manual testing

Open questions:

- what exact role title should be used
- how many people were hired or interviewed
- what problem the internal tooling solved in measurable terms
- whether any launch milestone was reached before exit

### Mortgage insurance

Status:

- frontend fully owned by Aleksandr from start to finish
- publicly referenced in EN resume as `Mortgage insurance website`
- senior-level SprintF project

Known scope:

- sole ownership of frontend part
- full lifecycle responsibility
- legacy optimization
- new feature delivery
- joined an already existing product
- worked alone on frontend maintenance and refactoring
- stack confirmed by user: `Nuxt 2`
- reduced codebase size
- optimized state storage
- stabilized and maintained the product
- user clarified the refactor included:
  - extraction of reusable components
  - separation of API layer from page-level code
  - noticeable refactoring rather than light-touch maintenance

Open questions:

- complexity of domain flows
- launch or business outcome
- major technical challenges

### Store builder

Status:

- contributor as one of the developers
- publicly referenced in RU resume as `Конструктор онлайн-магазинов (Nuxt2 + GraphQL)`
- publicly referenced in EN resume as `online shop constructor`
- middle-level SprintF project

Known scope:

- developed interfaces
- worked on SEO optimization for generated stores
- worked closely with GraphQL and Apollo
- negotiations with clients are mentioned in EN resume
- user confirmed SEO scope included:
  - auto-generation of SEO markup
  - Open Graph generation
  - partial implementation of dynamic e-commerce product structured data
  - product information was pulled from internal systems
  - the same product data flowed into storefront cards and markup
  - separate manual SEO input was mostly unnecessary by design

Open questions:

- exact contribution area inside the product
- whether SEO work affected indexing, performance, or templating quality
- whether the builder had SSR/SSG or client-rendered architecture
- what scale of merchants/stores was involved

### Auto parts

Status:

- support and stabilization of legacy code
- publicly referenced in EN resume as `Order and Workforce Management System for Auto Parts Distribution`
- separate project
- senior-level SprintF project

Known scope:

- cleanup and maintenance of legacy frontend code
- primary emphasis was legacy support
- user confirmed it was a small, low-priority project without standout outcomes

Open questions:

- what stack and framework version were in place

### Sea freight

Status:

- frontend team lead
- publicly referenced in RU resume as `Логистическая система морских грузоперевозок`
- publicly referenced in EN resume as `Logistics Management System for Maritime Freight Transportation`
- lead-level SprintF project

Known scope:

- full ownership of frontend stream
- inter-team coordination
- stakeholder communication
- close work with business
- participation in product and technical decisions
- React 18 / Redux Toolkit / TypeScript mentioned in RU resume
- API contract collaboration with backend mentioned in RU resume
- technical interviews and team formation mentioned in RU resume
- user confirmed:
  - team size: 3 frontend developers
  - formal scope: frontend team lead
  - no higher frontend leader above Aleksandr
  - direct communication with PM, business representative, and backend team lead
  - business-critical workflows included:
    - route planning
    - reporting
    - planned vs actual discrepancy visibility
    - vessel display on maps
  - system was used by multiple departments across different offices

Open questions:

- key business workflows
- what decisions Aleksandr influenced directly
- delivery metrics or project outcome

## Additional Anonymized Projects

### Altessa / Fix Fox

Known scope:

- redesign
- frontend delivery management
- public case page says:
  - target audience: outsourcing companies and businesses controlling field staff
  - product purpose: staff working-hours accounting
  - QR-code based attendance tracking
  - timesheet export to Excel
  - employee mobile app
  - access rights and document handling
  - stack shown: `VueJS`
- project metadata shown: `18 people`, `12 months`, `2022`
- user confirmed:
  - actual frontend staffing on Altessa engagements was effectively Aleksandr plus one junior on frontend
  - this experience should be presented carefully and anonymously enough to avoid inviting validation

Open questions:

- exact type of product
- scope of redesign
- measurable impact
- level of hands-on coding vs leadership

### Altessa / Martlive

Known scope:

- built from scratch
- managed development
- selected technologies
- full-cycle ownership
- public case page says:
  - Canada-based customer
  - streaming marketplace
  - supports physical and digital goods
  - roles include administrator, supplier, influencer/seller, buyer
  - personal accounts for each role
  - microservice architecture
  - native apps for buyer and influencer
  - stack shown: `Golang`, `VueJS`, `NuxtJS`, `Swift`, `Kotlin`
- project metadata shown: `24 people`, `9 months`, `2022`
- user confirmed:
  - frontend staffing was Aleksandr plus one junior
  - public mention is acceptable, but should be phrased to avoid inviting checks with the company
  - project name should preferably be hidden in public screenshots / materials

Open questions:

- product type and audience
- team size
- what "full ownership" included
- shipped outcome

### Codiny / Linkbuilder

Known scope:

- migrated Vue 2 to Vue 3
- split Laravel monolith into frontend and backend
- public site currently presents LinkBuilder as:
  - media publication / sponsored content comparison platform
  - 300k+ / 338k+ site database
  - filters, pricing comparison, SEO / PR tooling
  - pricing tiers and self-serve SaaS
- technical traces from the live site:
  - frontend asset pipeline suggests Vite-built bundles
  - current site is not Nuxt / Next
- EN resume page adds:
  - timeline `December 2023 - March 2024`
  - role `Front-end Developer`
  - modernization and architecture design
  - Vue 2 to Vue 3 migration
  - state management / routing / styling decisions
  - unit and end-to-end testing setup
  - code reviews and mentoring
  - delivery to MVP
- user confirmed:
  - formulations are sufficiently accurate
  - team setup was Aleksandr as senior plus one middle frontend developer
  - public mention is acceptable, but should be anonymized enough to avoid reference-seeking
  - migration approach:
    - frontend was built separately
    - data fetching was moved behind dedicated APIs
    - frontend part was extracted from the monolith
  - migration risk was low because the project was paused, and the team had time/capacity to rebuild carefully

Open questions:

- whether Aleksandr led architecture or executed within a team
- performance or delivery gains

## CrypIM / WildCash

### WildCash / affiliate platform

Known scope from resumes:

- current / latest role area
- planning, task decomposition, and code delivery
- architecture and state management decisions
- stack: `Vue (Nuxt)`, `Pinia`, `Vite`, `TypeScript`, `WebSockets (Centrifugo)`
- core SaaS product optimization
- internal CRM with messenger integrations brought to MVP
- reusable landing template
- real-time layer implementation

Known scope from public site:

- financial affiliate network / performance marketing platform
- separate advertiser and affiliate landing pages
- SaaS platform messaging repeated across site
- AI / analytics / traffic optimization positioning
- support for CPA / CPL / Revenue Share
- APIs and integrations are publicly claimed
- real-time analytics / reporting are publicly claimed
- public legal entity on privacy page: `Blitzzeit GMBH`
- live site uses Nuxt runtime

User-confirmed interpretation:

- public-facing developer company reference should be `https://group-collective.com/`
- work can be linked to the WildCash-type platform model without using exact internal company naming
- the core work was not only a single brand site, but a reusable CPA network platform that can be deployed behind different brand names and landing pages
- Aleksandr's formal level here: `Lead`
- team size: 3 frontend developers
- Aleksandr managed frontend development
- responsibilities included:
  - task definition participation
  - task distribution
  - decomposition
  - frontend architecture design
- second key project in the same company:
  - CRM system
  - tight messenger integrations
  - initially aimed at affiliate managers
  - core workflows:
    - client communication
    - moving leads/clients through funnel stages
  - stage: MVP

Captured screenshots:

- `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/wildcash-home.png`
- `/Users/aleksandrivanov/workspace/portfolio/docs/career/screenshots/wildcash-viewport.png`

Open questions:

- what parts of the live site are your work vs broader team history
- whether the current public claims reflect your tenure or later iteration

## Public Framing Rules

### Use directly

- product domains and project types
- engineering scope
- platform architecture
- role progression

### Prefer anonymized or softened framing

- exact employer names where relationship ended badly
- wording that invites reference checks
- overstated team-size assumptions taken from agency marketing pages
- project names on screenshots when the user asked to keep them out of public materials

### Public-safe employer / company references

- current affiliate-platform work: `Group Collective`
- WildCash should be framed as one public-facing instance of a reusable affiliate / CPA platform model rather than the only product identity
