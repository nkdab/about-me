import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const pathname of ["/en", "/ru", "/en/portfolio", "/ru/contact"]) {
  test(`${pathname} has no critical axe violations`, async ({ page }) => {
    await page.goto(pathname);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
