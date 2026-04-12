import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/shared/styles/globals.css";
import { defaultLocale, isLocale } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";
import { getServerThemePreference } from "@/shared/theme/get-server-theme";
import { themeCookieName } from "@/shared/config/theme";

const uiFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700", "800"]
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const headerLocale = headerStore.get("x-current-locale");
  const locale = headerLocale && isLocale(headerLocale) ? headerLocale : defaultLocale;
  const savedTheme = getServerThemePreference(cookieStore.get(themeCookieName)?.value);
  const initialTheme = savedTheme ?? "light";

  return (
    <html data-theme={initialTheme} lang={locale} suppressHydrationWarning>
      <body className={`${uiFont.variable} ${displayFont.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var stored = document.cookie.match(/(?:^|; )preferred_theme=([^;]+)/);
                var theme = stored ? decodeURIComponent(stored[1]) : null;
                if (!theme) {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
              })();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
