import { describe, expect, it } from "vitest";
import {
  getCaseStudyImporter,
  getRegisteredProjectSlugs,
} from "@/entities/project/model/registry";

describe("case study registry", () => {
  it("registers slugs and importers", () => {
    expect(getRegisteredProjectSlugs()).toContain("cpa-network-platform");
    expect(getRegisteredProjectSlugs()).toContain("platform-redesign");
    expect(getCaseStudyImporter("en", "cpa-network-platform")).toBeTypeOf(
      "function",
    );
    expect(getCaseStudyImporter("ru", "platform-redesign")).toBeTypeOf(
      "function",
    );
  });
});
