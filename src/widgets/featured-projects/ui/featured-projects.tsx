import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudyBySlug } from "@/entities/project/model/queries";
import { ProjectCard } from "@/entities/project/ui/project-card";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import type { PortfolioItem } from "@/entities/project/model/types";

export async function FeaturedProjects({
  dictionary,
  locale,
  items
}: {
  dictionary: Dictionary;
  locale: Locale;
  items: PortfolioItem[];
}) {
  const studies = await Promise.all(
    items.map(async (item) => ({
      item,
      caseStudy: await getCaseStudyBySlug(locale, item.slug)
    }))
  );

  return (
    <section aria-label={dictionary.portfolio.featured} className="bg-[var(--surface-tint)] py-20 md:py-24">
      <div className="page-container">
      <div className="mb-12 flex items-end justify-between gap-4">
        <h2 className="section-title">
          {dictionary.portfolio.title}
        </h2>
        <Link
          className="inline-flex shrink-0 items-center gap-1.5 text-[0.95rem] font-medium text-[var(--link-subtle)] transition-colors hover:text-[var(--foreground)]"
          href={`/${locale}/portfolio`}
        >
          {dictionary.portfolio.viewAll}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {studies.map(({ item, caseStudy }) => (
          <ProjectCard
            dictionary={dictionary}
            frontmatter={caseStudy?.frontmatter}
            headingLevel="h3"
            item={item}
            key={item.slug}
            locale={locale}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
