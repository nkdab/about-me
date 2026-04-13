import type { PortfolioItem } from "@/entities/project/model/types";

export const portfolioItems: PortfolioItem[] = [
  {
    links: {
      live: "https://wildcash.io/",
    },
    metrics: [
      { label: "Team", value: "3 frontend engineers" },
      { label: "Focus", value: "White-label platform" },
    ],
    order: 1,
    slug: "cpa-network-platform",
    status: "live",
    tech: ["Nuxt", "Vue", "Pinia", "TypeScript", "WebSockets"],
    year: 2025,
  },
  {
    links: {},
    metrics: [
      { label: "Role", value: "Frontend team lead" },
      { label: "Usage", value: "Multi-department" },
    ],
    order: 2,
    slug: "maritime-logistics-platform",
    status: "shipped",
    tech: ["React 18", "Redux Toolkit", "TypeScript", "Maps"],
    year: 2024,
  },
  {
    links: {},
    metrics: [
      { label: "Scope", value: "Solo ownership" },
      { label: "Focus", value: "Refactor and maintenance" },
    ],
    order: 3,
    slug: "insurance-self-service-product",
    status: "shipped",
    tech: ["Nuxt 2", "Refactoring", "State Management", "API Layer"],
    year: 2022,
  },
  {
    links: {},
    metrics: [
      { label: "SEO", value: "Automated markup" },
      { label: "Data", value: "Internal product feeds" },
    ],
    order: 4,
    slug: "seo-storefront-builder",
    status: "shipped",
    tech: ["Nuxt 2", "GraphQL", "Apollo", "SEO", "Structured Data"],
    year: 2023,
  },
  {
    links: {},
    metrics: [
      { label: "Migration", value: "Vue 2 -> Vue 3" },
      { label: "Context", value: "Paused rebuild" },
    ],
    order: 5,
    slug: "seo-platform-modernization",
    status: "shipped",
    tech: ["Vue 3", "Vite", "API Extraction", "Testing", "Mentoring"],
    year: 2024,
  },
  {
    links: {},
    metrics: [
      { label: "Role", value: "Lead frontend engineer" },
      { label: "Focus", value: "Platform foundations" },
    ],
    order: 6,
    slug: "platform-redesign",
    status: "shipped",
    tech: ["Architecture", "Design Systems", "Accessibility"],
    year: 2024,
  },
];
