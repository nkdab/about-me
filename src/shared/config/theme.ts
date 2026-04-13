export const themeCookieName = "preferred_theme";

export const themes = ["light", "dark"] as const;

export type ThemePreference = (typeof themes)[number];

export function isThemePreference(
  value: string | undefined,
): value is ThemePreference {
  return value !== undefined && themes.includes(value as ThemePreference);
}
