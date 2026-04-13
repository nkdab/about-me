import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { SiteFooter } from "@/widgets/site-footer/ui/site-footer";
import { SiteHeader } from "@/widgets/site-header/ui/site-header";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { LocaleDocumentSync } from "@/shared/i18n/locale-document-sync";
import { type Locale, isLocale, locales } from "@/shared/config/locales";
import { getServerThemePreference } from "@/shared/theme/get-server-theme";
import { themeCookieName } from "@/shared/config/theme";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const cookieStore = await cookies();
  const theme =
    getServerThemePreference(cookieStore.get(themeCookieName)?.value) ??
    "light";

  return (
    <>
      <LocaleDocumentSync locale={locale as Locale} />
      <a className="skip-link" href="#main-content">
        {dictionary.nav.skipToContent}
      </a>
      <SiteHeader
        dictionary={dictionary}
        initialTheme={theme}
        locale={locale as Locale}
      />
      <main id="main-content">{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale as Locale} />
    </>
  );
}
