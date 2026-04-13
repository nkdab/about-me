import { type ThemePreference, themeCookieName } from "@/shared/config/theme";

export function buildThemeCookieValue(theme: ThemePreference) {
  return `${themeCookieName}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
