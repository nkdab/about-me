export function formatMonthRange(
  start: string,
  end?: string,
  locale: string = "en"
) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : undefined;

  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric"
  });

  const presentLabel = locale === "ru" ? "Сейчас" : "Present";

  return `${formatter.format(startDate)} - ${endDate ? formatter.format(endDate) : presentLabel}`;
}
