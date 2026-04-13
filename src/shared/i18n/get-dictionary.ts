import en from "@/shared/i18n/dictionaries/en.json";
import ru from "@/shared/i18n/dictionaries/ru.json";
import { resolveLocale } from "@/shared/config/locales";

const dictionaries = { en, ru };

export type Dictionary = typeof en;

export async function getDictionary(
  locale: string | undefined,
): Promise<Dictionary> {
  return dictionaries[resolveLocale(locale)];
}
