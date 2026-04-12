import { experienceEntries } from "@/data/experience";
import type {
  ExperienceEntry,
  LocalizedExperienceEntry
} from "@/entities/experience/model/types";
import { resolveLocale, type Locale } from "@/shared/config/locales";

export function getExperienceEntries(): ExperienceEntry[] {
  return [...experienceEntries];
}

export function getExperience(locale: Locale): LocalizedExperienceEntry[] {
  const resolvedLocale = resolveLocale(locale);

  return getExperienceEntries().map((entry) => ({
    ...entry,
    role: entry.role[resolvedLocale],
    summary: entry.summary[resolvedLocale],
    highlights: entry.highlights[resolvedLocale]
  }));
}
