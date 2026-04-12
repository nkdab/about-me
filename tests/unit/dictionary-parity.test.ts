import { describe, expect, it } from "vitest";
import en from "@/shared/i18n/dictionaries/en.json";
import ru from "@/shared/i18n/dictionaries/ru.json";

function collectKeyPaths(value: unknown, prefix = ""): string[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, nestedValue]) =>
    collectKeyPaths(nestedValue, prefix ? `${prefix}.${key}` : key),
  );
}

describe("dictionary parity", () => {
  it("keeps locale dictionary keys in sync", () => {
    expect(collectKeyPaths(ru).toSorted()).toEqual(
      collectKeyPaths(en).toSorted(),
    );
  });
});
