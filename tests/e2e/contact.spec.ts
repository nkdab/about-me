import { expect, test } from "@playwright/test";

test("contact page form is visible", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();
});
