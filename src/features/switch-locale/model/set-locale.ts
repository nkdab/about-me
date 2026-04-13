"use server";

import { cookies } from "next/headers";
import type { Locale } from "@/shared/config/locales";
import { localeCookieName } from "@/shared/i18n/locale-cookie";

export async function setLocale(locale: Locale) {
  const store = await cookies();
  store.set(localeCookieName, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
