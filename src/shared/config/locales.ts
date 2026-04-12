export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ru: "Русский"
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string | null | undefined): Locale {
  if (value && isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
