import { getPortfolioItems } from "@/entities/project/model/queries";
import { PortfolioGrid } from "@/widgets/portfolio-grid/ui/portfolio-grid";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { resolveLocale } from "@/shared/config/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dictionary.portfolio.title,
    description: dictionary.portfolio.description,
    pathname: "/portfolio",
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);
  const items = getPortfolioItems();

  return (
    <section
      aria-label={dictionary.portfolio.title}
      className="page-container pb-20 pt-44 md:pb-24 md:pt-40"
    >
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {dictionary.portfolio.title}
        </p>
        <h1 className="section-title mt-4">
          {dictionary.portfolio.description}
        </h1>
      </div>
      <PortfolioGrid dictionary={dictionary} items={items} locale={locale} />
    </section>
  );
}
