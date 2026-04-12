import { describe, expect, it } from "vitest";
import { getLocalePath, stripLocale } from "@/features/switch-locale/model/get-locale-path";

describe("locale path helpers", () => {
  it("switches locale while preserving slug", () => {
    expect(
      getLocalePath({
        pathname: "/en/portfolio/platform-redesign",
        targetLocale: "ru"
      })
    ).toBe("/ru/portfolio/platform-redesign");
  });

  it("strips locale prefix", () => {
    expect(stripLocale("/ru/contact")).toBe("/contact");
  });
});
