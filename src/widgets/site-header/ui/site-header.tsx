import Link from "next/link";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import type { ThemePreference } from "@/shared/config/theme";
import { siteConfig } from "@/shared/config/site";
import { ThemeSwitcher } from "@/features/switch-theme/ui/theme-switcher";
import { LocaleSwitcher } from "@/features/switch-locale/ui/locale-switcher";
import { SiteNav } from "@/widgets/site-header/ui/site-nav";

export function SiteHeader({
  locale,
  dictionary,
  initialTheme,
}: {
  locale: Locale;
  dictionary: Dictionary;
  initialTheme: ThemePreference;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--chrome-surface)] backdrop-blur-sm">
      <div className="page-container flex flex-col gap-4 py-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
        <div className="flex items-center justify-between gap-3 md:block">
          <Link
            className="display-font text-xl font-medium leading-none text-[var(--foreground)] transition-opacity hover:opacity-60"
            href={`/${locale}`}
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-3 border-l border-[var(--border)] pl-4 md:hidden">
            <ThemeSwitcher
              dictionary={dictionary}
              initialTheme={initialTheme}
            />
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
        <nav
          aria-label="Primary mobile"
          className="grid grid-cols-4 gap-4 text-[0.8rem] font-medium md:hidden"
        >
          <SiteNav dictionary={dictionary} locale={locale} mobile />
        </nav>

        <nav
          aria-label="Primary desktop"
          className="hidden flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem] font-medium md:flex md:justify-end"
        >
          <SiteNav dictionary={dictionary} locale={locale} />
        </nav>
        <div className="hidden items-center gap-3 border-l border-[var(--border)] pl-6 md:flex md:justify-end">
          <LocaleSwitcher locale={locale} />
          <ThemeSwitcher dictionary={dictionary} initialTheme={initialTheme} />
        </div>
      </div>
    </header>
  );
}
