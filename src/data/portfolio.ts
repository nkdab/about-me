import type { PortfolioItem } from "@/entities/project/model/types";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "cpa-network-platform",
    year: 2025,
    status: "live",
    tech: ["Nuxt", "Vue", "Pinia", "TypeScript", "WebSockets"],
    links: {
      live: "https://wildcash.io/",
    },
    metrics: [
      { label: "Team", value: "3 frontend engineers" },
      { label: "Focus", value: "White-label platform" },
    ],
    order: 1,
  },
  {
    slug: "maritime-logistics-platform",
    year: 2024,
    status: "shipped",
    tech: ["React 18", "Redux Toolkit", "TypeScript", "Maps"],
    links: {},
    metrics: [
      { label: "Role", value: "Frontend team lead" },
      { label: "Usage", value: "Multi-department" },
    ],
    order: 2,
  },
  {
    slug: "insurance-self-service-product",
    year: 2022,
    status: "shipped",
    tech: ["Nuxt 2", "Refactoring", "State Management", "API Layer"],
    links: {},
    metrics: [
      { label: "Scope", value: "Solo ownership" },
      { label: "Focus", value: "Refactor and maintenance" },
    ],
    order: 3,
  },
  {
    slug: "seo-storefront-builder",
    year: 2023,
    status: "shipped",
    tech: ["Nuxt 2", "GraphQL", "Apollo", "SEO", "Structured Data"],
    links: {},
    metrics: [
      { label: "SEO", value: "Automated markup" },
      { label: "Data", value: "Internal product feeds" },
    ],
    order: 4,
  },
  {
    slug: "seo-platform-modernization",
    year: 2024,
    status: "shipped",
    tech: ["Vue 3", "Vite", "API Extraction", "Testing", "Mentoring"],
    links: {},
    metrics: [
      { label: "Migration", value: "Vue 2 -> Vue 3" },
      { label: "Context", value: "Paused rebuild" },
    ],
    order: 5,
  },
  {
    slug: "platform-redesign",
    year: 2024,
    status: "shipped",
    tech: ["Architecture", "Design Systems", "Accessibility"],
    links: {},
    metrics: [
      { label: "Role", value: "Lead frontend engineer" },
      { label: "Focus", value: "Platform foundations" },
    ],
    order: 6,
  },
];
