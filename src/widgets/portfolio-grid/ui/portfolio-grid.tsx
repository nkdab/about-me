import { getCaseStudyBySlug } from "@/entities/project/model/queries";
import { ProjectCard } from "@/entities/project/ui/project-card";
import type { Locale } from "@/shared/config/locales";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { PortfolioItem } from "@/entities/project/model/types";

export async function PortfolioGrid({
  locale,
  items,
  dictionary
}: {
  locale: Locale;
  items: PortfolioItem[];
  dictionary: Dictionary;
}) {
  const studies = await Promise.all(
    items.map(async (item) => ({
      item,
      caseStudy: await getCaseStudyBySlug(locale, item.slug)
    }))
  );

  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {studies.map(({ item, caseStudy }) => (
        <ProjectCard
          dictionary={dictionary}
          frontmatter={caseStudy?.frontmatter}
          headingLevel="h2"
          item={item}
          key={item.slug}
          locale={locale}
        />
      ))}
    </div>
  );
}
