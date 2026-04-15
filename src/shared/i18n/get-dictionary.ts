import type en from "@/shared/i18n/dictionaries/en.json";
import { type Locale, resolveLocale } from "@/shared/config/locales";

export type Dictionary = typeof en;

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("@/shared/i18n/dictionaries/en.json"),
  ru: () =>
    import("@/shared/i18n/dictionaries/ru.json") as Promise<{
      default: Dictionary;
    }>,
};

export async function getDictionary(
  locale: string | undefined,
): Promise<Dictionary> {
  const resolved = resolveLocale(locale);
  const mod = await loaders[resolved]();
  return mod.default;
}
