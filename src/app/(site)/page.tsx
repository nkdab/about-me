import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocale } from "@/shared/i18n/locale-detect";
import { localeCookieName } from "@/shared/i18n/locale-cookie";

export default async function RootRedirectPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale = detectLocale(
    cookieStore.get(localeCookieName)?.value,
    headerStore.get("accept-language"),
  );

  redirect(`/${locale}`);
}
