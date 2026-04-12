import { expect, test } from "@playwright/test";

test("landing page renders", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "View portfolio" })).toBeVisible();
});

test("russian landing localizes shared ui copy", async ({ page }) => {
  await page.goto("/ru");
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.locator("main").getByText("Контакты")).toBeVisible();
  await expect(page.getByLabel("Имя")).toBeVisible();
  await expect(page.getByText("Почта")).toBeVisible();
});
