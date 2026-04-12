import { getFeaturedProjects } from "@/entities/project/model/queries";
import { Hero } from "@/widgets/hero/ui/hero";
import { FeaturedProjects } from "@/widgets/featured-projects/ui/featured-projects";
import { ContactSection } from "@/widgets/contact-section/ui/contact-section";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";
import { personJsonLd } from "@/shared/lib/seo/jsonld";
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
    title: dictionary.seo.siteTitle,
    description: dictionary.seo.siteDescription,
    pathname: "",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);
  const featured = await getFeaturedProjects(locale);

  return (
    <>
      <Hero dictionary={dictionary} locale={locale} />
      <FeaturedProjects
        dictionary={dictionary}
        items={featured}
        locale={locale}
      />
      <ContactSection dictionary={dictionary} locale={locale} />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()),
        }}
        type="application/ld+json"
      />
    </>
  );
}
