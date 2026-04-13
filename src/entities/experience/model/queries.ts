import { experienceEntries } from "@/data/experience";
import type {
  ExperienceEntry,
  LocalizedExperienceEntry,
} from "@/entities/experience/model/types";
import { type Locale, resolveLocale } from "@/shared/config/locales";

export function getExperienceEntries(): ExperienceEntry[] {
  return [...experienceEntries];
}

export function getExperience(locale: Locale): LocalizedExperienceEntry[] {
  const resolvedLocale = resolveLocale(locale);

  return getExperienceEntries().map((entry) => ({
    ...entry,
    highlights: entry.highlights[resolvedLocale],
    role: entry.role[resolvedLocale],
    summary: entry.summary[resolvedLocale],
  }));
}
