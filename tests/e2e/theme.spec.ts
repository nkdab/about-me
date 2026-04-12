import { expect, test } from "@playwright/test";

test("theme toggle persists explicit preference", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("button", { name: /Dark/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
