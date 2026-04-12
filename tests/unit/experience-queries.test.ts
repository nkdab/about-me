import { describe, expect, it } from "vitest";
import { getExperience } from "@/entities/experience/model/queries";

describe("getExperience", () => {
  it("returns localized text", () => {
    const entries = getExperience("ru");
    expect(entries[0]?.summary).toContain("архитектур");
  });
});
