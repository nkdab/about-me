import { type Locale, defaultLocale, isLocale } from "@/shared/config/locales";

export function getLocalePath({
  pathname,
  targetLocale
}: {
  pathname: string;
  targetLocale: Locale;
}) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (isLocale(segments[0] ?? "")) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}${pathname === "/" ? "" : pathname}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0] ?? "")) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || `/${defaultLocale}`;
}
