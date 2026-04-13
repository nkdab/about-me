import { ContactSection } from "@/widgets/contact-section/ui/contact-section";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { resolveLocale } from "@/shared/config/locales";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);

  return buildPageMetadata({
    description: dictionary.contact.description,
    locale,
    pathname: "/contact",
    title: dictionary.contact.title
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);

  return <ContactSection dictionary={dictionary} headingLevel="h1" locale={locale} />;
}
