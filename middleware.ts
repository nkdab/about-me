import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocale } from "@/shared/config/locales";
import { localeCookieName } from "@/shared/i18n/locale-cookie";
import { detectLocale } from "@/shared/i18n/locale-detect";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = detectLocale(
    request.cookies.get(localeCookieName)?.value,
    request.headers.get("accept-language"),
  );

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = isLocale(segments[0] ?? "") ? segments[0] : locale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-current-locale", currentLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/", "/(en|ru)/:path*"],
};
