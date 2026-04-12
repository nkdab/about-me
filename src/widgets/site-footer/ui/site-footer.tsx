import type { Locale } from "@/shared/config/locales";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import { siteConfig } from "@/shared/config/site";

export function SiteFooter({
  dictionary
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <footer className="mt-10 border-t border-[var(--border)]">
      <div className="page-container flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between">
        <p className="display-font text-2xl font-medium">
          {siteConfig.name}
        </p>
        <div className="text-right text-sm text-[var(--muted)]">
          <p>{dictionary.footer.role}</p>
          <p className="mt-1">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
