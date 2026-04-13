import { type Locale, defaultLocale, isLocale } from "@/shared/config/locales";

function parseAcceptLanguage(acceptLanguage: string) {
  return acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        index,
        quality: Number.isFinite(quality) ? quality : 0,
        tag: rawTag.toLowerCase(),
      };
    })
    .filter((entry) => entry.tag && entry.quality > 0)
    .toSorted(
      (left, right) => right.quality - left.quality || left.index - right.index,
    );
}

export function detectLocale(
  cookieLocale: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (!acceptLanguage) {
    return defaultLocale;
  }

  for (const { tag } of parseAcceptLanguage(acceptLanguage)) {
    const language = tag.split("-")[0];

    if (isLocale(language)) {
      return language;
    }
  }

  return defaultLocale;
}
