import type { Metadata } from "next";
import type { Locale } from "@/shared/config/locales";
import { locales } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";

export function buildAlternates(pathname: string, locale: Locale) {
  const languages = {
    ...Object.fromEntries(
      locales.map((entry) => [entry, `${siteConfig.url}/${entry}${pathname}`]),
    ),
    "x-default": `${siteConfig.url}/${locales[0]}${pathname}`,
  };

  return {
    canonical: `${siteConfig.url}/${locale}${pathname}`,
    languages,
  };
}

export function buildPageMetadata({
  locale,
  title,
  description,
  pathname,
}: {
  locale: Locale;
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const url = `${siteConfig.url}/${locale}${pathname}`;
  const imageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title,
    description,
    alternates: buildAlternates(pathname, locale),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
