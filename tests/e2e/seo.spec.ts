import { expect, test } from "@playwright/test";

test("portfolio page has canonical metadata", async ({ page }) => {
  await page.goto("/en/portfolio");
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", /\/en\/portfolio$/);
});

test("russian page exposes locale-specific metadata", async ({ page }) => {
  await page.goto("/ru/portfolio");
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/ru\/portfolio$/,
  );
  await expect(
    page.locator('link[rel="alternate"][hreflang="en"]'),
  ).toHaveCount(1);
  await expect(
    page.locator('link[rel="alternate"][hreflang="x-default"]'),
  ).toHaveCount(1);
});
