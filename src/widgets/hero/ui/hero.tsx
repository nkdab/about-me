import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import { Button } from "@/shared/ui/button";

export function Hero({
  dictionary,
  locale
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <section aria-label={dictionary.hero.title} className="page-container flex min-h-[85vh] items-center pb-16 pt-44 md:pb-24 md:pt-40">
      <div className="max-w-[900px]">
        <h1 className="display-title">
          {dictionary.hero.title}
        </h1>
        <p className="mt-6 max-w-[44rem] text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
          {dictionary.hero.summary}
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button asChild className="w-full gap-2 px-6 sm:w-auto">
            <Link href={`/${locale}/portfolio`}>
              {dictionary.hero.ctaPrimary}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto" variant="secondary">
            <Link href={`/${locale}/contact`}>
              {dictionary.hero.ctaSecondary}
            </Link>
          </Button>
        </div>
        <dl className="mt-16 grid gap-x-12 gap-y-8 border-t border-[var(--border)] pt-12 md:grid-cols-2">
          {dictionary.hero.points.map((point) => (
            <div key={point.label}>
              <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {point.label}
              </dt>
              <dd className="text-base leading-8 text-[var(--muted)]">
                {point.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
