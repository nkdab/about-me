import { describe, expect, it } from "vitest";
import { getPortfolioItems } from "@/entities/project/model/queries";

describe("getPortfolioItems", () => {
  it("sorts items by order", () => {
    const items = getPortfolioItems();
    expect(items.map((item) => item.slug)).toEqual([
      "cpa-network-platform",
      "maritime-logistics-platform",
      "insurance-self-service-product",
      "seo-storefront-builder",
      "seo-platform-modernization",
      "platform-redesign",
    ]);
  });
});
