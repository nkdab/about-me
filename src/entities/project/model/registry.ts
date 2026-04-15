import fs from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import type { CaseStudyFrontmatter } from "@/entities/project/model/types";
import {
  type Locale,
  locales,
  resolveLocale,
} from "@/shared/config/locales";

interface CaseStudyModule {
  default: MDXContent;
  metadata: CaseStudyFrontmatter;
}

const CONTENT_ROOT = path.join(
  process.cwd(),
  "src",
  "content",
  "case-studies",
);

function discoverSlugs(locale: Locale): string[] {
  const dir = path.join(CONTENT_ROOT, locale);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.slice(0, -".mdx".length))
    .toSorted();
}

const slugsByLocale: Record<Locale, Set<string>> = Object.fromEntries(
  locales.map((locale) => [locale, new Set(discoverSlugs(locale))]),
) as Record<Locale, Set<string>>;

export function getRegisteredProjectSlugs(): string[] {
  return [...slugsByLocale[locales[0]]];
}

export function getCaseStudyImporter(locale: string | undefined, slug: string) {
  const resolved = resolveLocale(locale);

  if (!slugsByLocale[resolved].has(slug)) {
    return undefined;
  }

  return () =>
    import(
      `../../../content/case-studies/${resolved}/${slug}.mdx`
    ) as Promise<CaseStudyModule>;
}
