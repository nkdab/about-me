import { TimelineItem } from "@/entities/experience/ui/timeline-item";
import type { LocalizedExperienceEntry } from "@/entities/experience/model/types";
import type { Locale } from "@/shared/config/locales";

export function ExperienceTimeline({
  entries,
  locale
}: {
  entries: LocalizedExperienceEntry[];
  locale: Locale;
}) {
  return (
    <ul className="grid gap-16">
      {entries.map((entry) => (
        <TimelineItem entry={entry} key={entry.id} locale={locale} />
      ))}
    </ul>
  );
}
