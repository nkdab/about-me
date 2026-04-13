import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/shared/config/locales";
import { getDictionary } from "@/shared/i18n/get-dictionary";

export default async function NotFound() {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-current-locale");
  const locale =
    headerLocale && isLocale(headerLocale) ? headerLocale : defaultLocale;
  const dictionary = await getDictionary(locale);

  return (
    <main className="page-container py-32">
      <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)]">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          404
        </p>
        <h1 className="display-font mt-4 text-4xl font-semibold">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          {dictionary.notFound.description}
        </p>
        <Link className="mt-6 inline-block underline" href={`/${locale}`}>
          {dictionary.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
