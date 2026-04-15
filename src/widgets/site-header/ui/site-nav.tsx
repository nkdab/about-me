"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import { stripLocale } from "@/features/switch-locale/model/get-locale-path";
import { cn } from "@/shared/lib/utils/cn";

interface NavItem {
  href: string;
  label: string;
  match: (pathname: string) => boolean;
}

function getNavItems(locale: Locale, dictionary: Dictionary): NavItem[] {
  return [
    {
      href: `/${locale}`,
      label: dictionary.nav.home,
      match: (pathname) => pathname === "/",
    },
    {
      href: `/${locale}/portfolio`,
      label: dictionary.nav.portfolio,
      match: (pathname) =>
        pathname === "/portfolio" || pathname.startsWith("/portfolio/"),
    },
    {
      href: `/${locale}/experience`,
      label: dictionary.nav.experience,
      match: (pathname) => pathname === "/experience",
    },
    {
      href: `/${locale}/contact`,
      label: dictionary.nav.contact,
      match: (pathname) => pathname === "/contact",
    },
  ];
}

export function SiteNav({
  locale,
  dictionary,
  mobile = false,
}: {
  locale: Locale;
  dictionary: Dictionary;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const normalizedPath = stripLocale(pathname);
  const items = getNavItems(locale, dictionary);

  return (
    <>
      {items.map((item) => {
        const active = item.match(normalizedPath);

        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn("nav-link", mobile && "text-center")}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
