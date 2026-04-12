import { describe, expect, it } from "vitest";
import { detectLocale } from "@/shared/i18n/locale-detect";

describe("detectLocale", () => {
  it("prefers cookie locale", () => {
    expect(detectLocale("ru", "en-US,en;q=0.9")).toBe("ru");
  });

  it("falls back to accept-language", () => {
    expect(detectLocale(undefined, "ru-RU,ru;q=0.9")).toBe("ru");
  });

  it("respects accept-language quality values", () => {
    expect(detectLocale(undefined, "en-US,en;q=0.9,ru;q=0.3")).toBe("en");
  });

  it("chooses the highest-ranked supported locale", () => {
    expect(detectLocale(undefined, "fr-FR,ru;q=0.8,en;q=0.2")).toBe("ru");
  });

  it("defaults to english", () => {
    expect(detectLocale(undefined, null)).toBe("en");
  });
});
