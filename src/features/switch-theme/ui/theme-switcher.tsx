"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { buildThemeCookieValue } from "@/shared/theme/theme-cookie";
import { type Dictionary } from "@/shared/i18n/get-dictionary";
import { type ThemePreference } from "@/shared/config/theme";

function applyTheme(theme: ThemePreference) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("preferred-theme", theme);
  document.cookie = buildThemeCookieValue(theme);
}

export function ThemeSwitcher({
  dictionary,
  initialTheme
}: {
  dictionary: Dictionary;
  initialTheme: ThemePreference;
}) {
  const [theme, setTheme] = useState<ThemePreference>(initialTheme);

  useEffect(() => {
    const activeTheme = document.documentElement.dataset.theme;
    if (activeTheme === "light" || activeTheme === "dark") {
      setTheme(activeTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";
  const Icon = theme === "light" ? Moon : Sun;
  const label = theme === "light" ? dictionary.theme.dark : dictionary.theme.light;

  return (
    <button
      aria-label={label}
      className="rounded-md p-1.5 text-[var(--foreground)] transition-colors hover:bg-[var(--button-ghost-hover)]"
      onClick={() => setTheme(nextTheme)}
      title={label}
      type="button"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
