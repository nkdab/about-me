import { expect, test } from "@playwright/test";

test("case study page renders content", async ({ page }) => {
  await page.goto("/en/portfolio/cpa-network-platform");
  await expect(
    page.getByRole("heading", { name: /CPA Network Platform/i }),
  ).toBeVisible();
  await expect(page.getByText("What Changed")).toBeVisible();
});
