import type { MDXContent } from "mdx/types";
import type { Locale } from "@/shared/config/locales";
import type { z } from "zod";
import type { caseStudyFrontmatterSchema } from "@/entities/project/model/schema";

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

export type CaseStudyFrontmatter = z.infer<
  typeof caseStudyFrontmatterSchema
> & {
  locale: Locale;
};

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  Component: MDXContent;
}
