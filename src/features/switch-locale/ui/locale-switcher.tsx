"use client";

import { useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type Locale,
  localeLabels,
  localeShortLabels
} from "@/shared/config/locales";
import { getLocalePath } from "@/features/switch-locale/model/get-locale-path";
import { setLocale } from "@/features/switch-locale/model/set-locale";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const targetLocale = locale === "en" ? "ru" : "en";
  const href = getLocalePath({ pathname, targetLocale });

  return (
    <Link
      aria-label={localeLabels[targetLocale]}
      className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
      href={href}
      lang={targetLocale}
      onClick={() =>
        startTransition(async () => {
          await setLocale(targetLocale);
        })
      }
      prefetch={!isPending}
      title={localeLabels[targetLocale]}
    >
      {localeShortLabels[targetLocale]}
    </Link>
  );
}
