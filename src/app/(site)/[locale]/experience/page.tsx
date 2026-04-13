import { getExperience } from "@/entities/experience/model/queries";
import { ExperienceTimeline } from "@/widgets/experience-timeline/ui/experience-timeline";
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
    description: dictionary.experience.description,
    locale,
    pathname: "/experience",
    title: dictionary.experience.title,
  });
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);
  const entries = getExperience(locale);

  return (
    <section
      aria-label={dictionary.experience.title}
      className="page-container pb-20 pt-44 md:pb-24 md:pt-40"
    >
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {dictionary.experience.title}
        </p>
        <h1 className="section-title mt-4">
          {dictionary.experience.description}
        </h1>
      </div>
      <ExperienceTimeline entries={entries} locale={locale} />
    </section>
  );
}
