import { isThemePreference, type ThemePreference } from "@/shared/config/theme";

export function getServerThemePreference(value: string | undefined): ThemePreference | undefined {
  if (!isThemePreference(value)) {
    return undefined;
  }

  return value;
}
