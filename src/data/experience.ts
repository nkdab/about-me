import type { ExperienceEntry } from "@/entities/experience/model/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "group-collective",
    company: "Group Collective",
    companyUrl: "https://group-collective.com/",
    location: "Remote",
    employmentType: "full-time",
    start: "2024-08-01",
    end: "2026-02-28",
    current: false,
    role: {
      en: "Lead Frontend Developer",
      ru: "Lead Frontend Developer"
    },
    summary: {
      en: "Led frontend development for a reusable CPA network platform and an internal CRM, combining architecture ownership, delivery coordination, and hands-on implementation.",
      ru: "Руководил фронтенд-разработкой переиспользуемой CPA platform и внутренней CRM: отвечал за архитектуру, координацию delivery и прикладную реализацию."
    },
    highlights: {
      en: [
        "Managed a frontend team of three engineers and handled task decomposition, distribution, and delivery flow.",
        "Designed frontend architecture for a white-label platform model that could be deployed behind different brands and landing pages.",
        "Worked on an MVP CRM with messenger integrations for affiliate-facing workflows."
      ],
      ru: [
        "Руководил фронтенд-командой из трех человек, занимался декомпозицией, распределением задач и организацией delivery.",
        "Спроектировал фронтенд-архитектуру white-label платформы, которая могла разворачиваться под разными брендами и лендингами.",
        "Участвовал в разработке MVP CRM с интеграцией мессенджеров для affiliate-менеджеров."
      ]
    },
    stack: ["Nuxt", "Vue", "Pinia", "Vite", "TypeScript", "Centrifugo"]
  },
  {
    id: "sprintf",
    company: "SprintF",
    companyUrl: "https://sprintf.ru/",
    location: "Remote",
    employmentType: "full-time",
    start: "2020-07-01",
    end: "2024-07-31",
    current: false,
    role: {
      en: "Senior Frontend Developer -> Frontend Team Lead",
      ru: "Senior Frontend Developer -> Frontend Team Lead"
    },
    summary: {
      en: "Grew from mid-level delivery into lead ownership across insurance, commerce, logistics, fintech, and legacy product streams.",
      ru: "Вырос от middle-разработчика до lead-роли на проектах в страховании, e-commerce, логистике, финтехе и поддержке legacy-систем."
    },
    highlights: {
      en: [
        "Led frontend development for a maritime logistics platform used by multiple departments across different offices.",
        "Owned a Nuxt 2 insurance product solo, refactoring the codebase, extracting reusable components, and separating the API layer from page logic.",
        "Implemented automated SEO metadata, Open Graph output, and part of the product structured data layer in a storefront builder powered by GraphQL."
      ],
      ru: [
        "Руководил фронтенд-разработкой логистической платформы для морских перевозок, которой пользовались несколько отделов в разных офисах.",
        "В одиночку поддерживал и рефакторил Nuxt 2-продукт в страховании: вынес переиспользуемые компоненты и отделил API-слой от страниц.",
        "Реализовал автоматическую SEO-разметку, Open Graph и часть товарной structured data в конструкторе storefront-страниц на GraphQL."
      ]
    },
    stack: ["React", "Redux Toolkit", "TypeScript", "Nuxt 2", "GraphQL", "Apollo"]
  },
  {
    id: "seo-saas-engagement",
    company: "SEO SaaS Engagement",
    location: "Remote",
    employmentType: "contract",
    start: "2023-12-01",
    end: "2024-03-31",
    current: false,
    role: {
      en: "Senior Frontend Developer",
      ru: "Senior Frontend Developer"
    },
    summary: {
      en: "Modernized a paused SEO SaaS product by extracting the frontend from a monolith and rebuilding it around dedicated APIs.",
      ru: "Модернизировал paused SEO SaaS-продукт: вынес фронтенд из монолита и пересобрал его вокруг выделенных API."
    },
    highlights: {
      en: [
        "Migrated the codebase from Vue 2 to Vue 3 and helped redesign the architecture.",
        "Used the project pause window to rebuild the frontend without release pressure.",
        "Worked as the senior frontend engineer alongside one middle-level developer."
      ],
      ru: [
        "Перевел кодовую базу с Vue 2 на Vue 3 и участвовал в перепроектировании архитектуры.",
        "Использовал паузу в проекте, чтобы спокойно перестроить фронтенд без давления релизов.",
        "Работал как senior frontend engineer в связке с одним middle-разработчиком."
      ]
    },
    stack: ["Vue 3", "Vite", "Vue Router", "Tailwind CSS", "Testing"]
  },
  {
    id: "delivery-studio",
    company: "Product Delivery Studio",
    location: "Remote",
    employmentType: "contract",
    start: "2022-04-01",
    end: "2022-10-31",
    current: false,
    role: {
      en: "Frontend Developer",
      ru: "Frontend Developer"
    },
    summary: {
      en: "Worked on greenfield product delivery for workforce operations and a streaming marketplace, balancing hands-on implementation with day-to-day ownership.",
      ru: "Работал над greenfield-продуктами для операционного учета персонала и streaming marketplace, совмещая hands-on разработку с ежедневным ownership."
    },
    highlights: {
      en: [
        "Built frontend features for a workforce time-tracking product with QR attendance, timesheet export, and role-based access.",
        "Contributed to a streaming marketplace with multi-role accounts, digital and physical goods, and a broader microservice setup.",
        "Handled frontend work in a very small actual frontend setup as the senior frontend engineer plus one junior engineer."
      ],
      ru: [
        "Делал фронтенд-функциональность для системы учета рабочего времени: QR-отметки, экспорт табелей и role-based access.",
        "Участвовал в разработке streaming marketplace с multi-role аккаунтами, цифровыми и физическими товарами и более широкой микросервисной архитектурой.",
        "Работал в очень маленьком реальном frontend-составе как senior frontend engineer плюс один junior-разработчик."
      ]
    },
    stack: ["VueJS", "NuxtJS", "Vuex", "GRPC"]
  },
  {
    id: "freelance",
    company: "Freelance",
    location: "Tyumen / Remote",
    employmentType: "freelance",
    start: "2019-01-01",
    end: "2021-06-30",
    current: false,
    role: {
      en: "Frontend Developer",
      ru: "Frontend Developer"
    },
    summary: {
      en: "Delivered small commercial and local projects that formed the base for later product, architecture, and client-facing work.",
      ru: "Делал небольшие коммерческие и локальные проекты, на которых сформировалась база для дальнейшей продуктовой, архитектурной и клиентской работы."
    },
    highlights: {
      en: [
        "Worked on projects for small businesses, educational organizations, and local clients.",
        "Built up practical experience in commercial frontend delivery before moving into larger product environments."
      ],
      ru: [
        "Работал над проектами для малого бизнеса, образовательных организаций и локальных заказчиков.",
        "Набрал практический опыт коммерческой frontend-разработки до перехода в более крупные продуктовые среды."
      ]
    },
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Vue", "Nuxt"]
  }
];
