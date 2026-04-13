import type { Locale } from "@/shared/config/locales";

export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  location?: string;
  employmentType: "full-time" | "contract" | "freelance";
  start: string;
  end?: string;
  current: boolean;
  role: Record<Locale, string>;
  summary: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  stack: string[];
}

export type LocalizedExperienceEntry = Omit<
  ExperienceEntry,
  "role" | "summary" | "highlights"
> & {
  role: string;
  summary: string;
  highlights: string[];
};
