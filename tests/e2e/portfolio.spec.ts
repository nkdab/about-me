import { expect, test } from "@playwright/test";

test("portfolio page lists projects", async ({ page }) => {
  await page.goto("/en/portfolio");
  await expect(
    page.getByRole("link", { name: /CPA Network Platform/i })
  ).toBeVisible();
});
