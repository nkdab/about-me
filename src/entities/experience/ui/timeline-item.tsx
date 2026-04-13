import { formatMonthRange } from "@/shared/lib/utils/dates";
import type { LocalizedExperienceEntry } from "@/entities/experience/model/types";
import type { Locale } from "@/shared/config/locales";

export function TimelineItem({
  entry,
  locale,
}: {
  entry: LocalizedExperienceEntry;
  locale: Locale;
}) {
  return (
    <li className="relative border-l-2 border-[var(--accent)] pb-4 pl-8">
      <div
        aria-hidden="true"
        className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[var(--accent)]"
      />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {entry.company}
          </p>
          <h3 className="display-font text-3xl font-semibold leading-tight md:text-4xl">
            {entry.role}
          </h3>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            {entry.summary}
          </p>
        </div>
        <p className="text-sm text-[var(--muted)]">
          {formatMonthRange(entry.start, entry.end, locale)}
        </p>
      </div>
      <ul className="mt-6 grid gap-2 text-base leading-8 text-[var(--foreground)]">
        {entry.highlights.map((highlight) => (
          <li
            className="relative pl-4 before:absolute before:left-0 before:text-[var(--accent)] before:content-['-']"
            key={highlight}
          >
            {highlight}
          </li>
        ))}
      </ul>
    </li>
  );
}
