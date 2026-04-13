import type { JSX } from "react";
import type { Locale } from "@/shared/config/locales";

export interface PortfolioItem {
  slug: string;
  year: number;
  status: "shipped" | "live" | "archived" | "concept";
  tech: string[];
  links: {
    live?: string;
    repo?: string;
  };
  metrics?: { label: string; value: string }[];
  order: number;
}

export interface CaseStudyFrontmatter {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  tags: string[];
  roles: string[];
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  Component: () => JSX.Element;
}
