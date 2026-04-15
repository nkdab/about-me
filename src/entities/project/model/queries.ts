import { portfolioItems } from "@/data/portfolio";
import type { CaseStudy, PortfolioItem } from "@/entities/project/model/types";
import {
  getCaseStudyImporter,
  getRegisteredProjectSlugs,
} from "@/entities/project/model/registry";
import { caseStudyFrontmatterSchema } from "@/entities/project/model/schema";
import { type Locale, locales } from "@/shared/config/locales";

export function getPortfolioItems(): PortfolioItem[] {
  return portfolioItems.toSorted((left, right) => left.order - right.order);
}

export async function getFeaturedProjects(locale: Locale) {
  const cases = await getAllCaseStudies(locale);
  return getPortfolioItems().filter((item) =>
    cases.some(
      (entry) =>
        entry.frontmatter.slug === item.slug && entry.frontmatter.featured,
    ),
  );
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return getRegisteredProjectSlugs();
}

export async function getCaseStudyBySlug(
  locale: Locale,
  slug: string,
): Promise<CaseStudy | null> {
  const importer = getCaseStudyImporter(locale, slug);

  if (!importer) {
    return null;
  }

  const module = await importer().catch(() => null);

  if (!module) {
    return null;
  }

  const frontmatter = caseStudyFrontmatterSchema.parse(module.metadata);

  if (frontmatter.locale !== locale || frontmatter.slug !== slug) {
    throw new Error(
      `Invalid case study metadata for ${locale}/${slug}: got ${frontmatter.locale}/${frontmatter.slug}`,
    );
  }

  return {
    Component: module.default,
    frontmatter,
  };
}

export async function getAllCaseStudies(locale: Locale): Promise<CaseStudy[]> {
  const slugs = await getAllProjectSlugs();
  const result = await Promise.all(
    slugs.map((slug) => getCaseStudyBySlug(locale, slug)),
  );
  return result.filter((entry): entry is CaseStudy => Boolean(entry));
}

export async function getProjectAlternates(slug: string) {
  const result = await Promise.all(
    locales.map(async (locale) => ({
      caseStudy: await getCaseStudyBySlug(locale, slug),
      locale,
    })),
  );

  return result.filter((entry) => entry.caseStudy !== null);
}
