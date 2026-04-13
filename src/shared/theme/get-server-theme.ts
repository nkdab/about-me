import { type ThemePreference, isThemePreference } from "@/shared/config/theme";

export function getServerThemePreference(value: string | undefined): ThemePreference | undefined {
  if (!isThemePreference(value)) {
    return undefined;
  }

  return value;
}
