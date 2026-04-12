"use client";

import { useEffect } from "react";
import type { Locale } from "@/shared/config/locales";

export function LocaleDocumentSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
