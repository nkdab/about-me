import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import {
  getCaseStudyImporter,
  getRegisteredProjectSlugs,
} from "@/entities/project/model/registry";
import { caseStudyFrontmatterSchema } from "@/entities/project/model/schema";
import { locales } from "@/shared/config/locales";

function readMetadata(filePath: string) {
  const file = readFileSync(filePath, "utf8");
  const metadataMatch = file.match(/export const metadata = (\{[\s\S]*?\n\});/);

  if (!metadataMatch) {
    throw new Error(`Missing metadata export in ${filePath}`);
  }

  return {
    file,
    metadata: Function(`"use strict"; return (${metadataMatch[1]});`)(),
  };
}

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

  it("loads valid case study metadata for every locale", async () => {
    const slugs = getRegisteredProjectSlugs().toSorted();
    expect(slugs.length).toBeGreaterThan(0);

    for (const locale of locales) {
      const localeDir = join(
        process.cwd(),
        "src",
        "content",
        "case-studies",
        locale,
      );
      const localeSlugs = new Set<string>();

      for (const slug of slugs) {
        expect(
          getCaseStudyImporter(locale, slug),
          `${locale}/${slug} importer`,
        ).toBeTypeOf("function");

        const filePath = join(localeDir, `${slug}.mdx`);
        const { file, metadata: rawMetadata } = readMetadata(filePath);
        const parsed = caseStudyFrontmatterSchema.safeParse(rawMetadata);
        expect(parsed.success, `${locale}/${slug} metadata schema`).toBe(true);

        if (!parsed.success) {
          continue;
        }

        const metadata = parsed.data;
        localeSlugs.add(metadata.slug);

        expect(metadata.locale).toBe(locale);
        expect(metadata.slug).toBe(basename(filePath, ".mdx"));
        expect(
          existsSync(join(process.cwd(), "public", metadata.cover.src)),
        ).toBe(true);

        for (const match of file.matchAll(/src="([^"]+)"/g)) {
          const src = match[1];
          if (src.startsWith("/")) {
            expect(existsSync(join(process.cwd(), "public", src)), src).toBe(
              true,
            );
          }
        }
      }

      expect([...localeSlugs].toSorted()).toEqual(slugs);
      expect(
        readdirSync(localeDir)
          .filter((file) => file.endsWith(".mdx"))
          .map((file) => basename(file, ".mdx"))
          .toSorted(),
      ).toEqual(slugs);
    }
  });
});
