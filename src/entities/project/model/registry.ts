import type { JSX } from "react";
import type { CaseStudyFrontmatter } from "@/entities/project/model/types";
import { type Locale, resolveLocale } from "@/shared/config/locales";

interface CaseStudyModule {
  default: () => JSX.Element;
  metadata: CaseStudyFrontmatter;
}

type Importer = () => Promise<CaseStudyModule>;

const caseStudyImports: Record<Locale, Record<string, Importer>> = {
  en: {
    "cpa-network-platform": () =>
      import("@/content/case-studies/en/cpa-network-platform.mdx") as Promise<CaseStudyModule>,
    "insurance-self-service-product": () =>
      import("@/content/case-studies/en/insurance-self-service-product.mdx") as Promise<CaseStudyModule>,
    "maritime-logistics-platform": () =>
      import("@/content/case-studies/en/maritime-logistics-platform.mdx") as Promise<CaseStudyModule>,
    "platform-redesign": () =>
      import("@/content/case-studies/en/platform-redesign.mdx") as Promise<CaseStudyModule>,
    "seo-platform-modernization": () =>
      import("@/content/case-studies/en/seo-platform-modernization.mdx") as Promise<CaseStudyModule>,
    "seo-storefront-builder": () =>
      import("@/content/case-studies/en/seo-storefront-builder.mdx") as Promise<CaseStudyModule>,
  },
  ru: {
    "cpa-network-platform": () =>
      import("@/content/case-studies/ru/cpa-network-platform.mdx") as Promise<CaseStudyModule>,
    "insurance-self-service-product": () =>
      import("@/content/case-studies/ru/insurance-self-service-product.mdx") as Promise<CaseStudyModule>,
    "maritime-logistics-platform": () =>
      import("@/content/case-studies/ru/maritime-logistics-platform.mdx") as Promise<CaseStudyModule>,
    "platform-redesign": () =>
      import("@/content/case-studies/ru/platform-redesign.mdx") as Promise<CaseStudyModule>,
    "seo-platform-modernization": () =>
      import("@/content/case-studies/ru/seo-platform-modernization.mdx") as Promise<CaseStudyModule>,
    "seo-storefront-builder": () =>
      import("@/content/case-studies/ru/seo-storefront-builder.mdx") as Promise<CaseStudyModule>,
  },
};

export function getRegisteredProjectSlugs() {
  return Object.keys(caseStudyImports.en);
}

export function getCaseStudyImporter(locale: string | undefined, slug: string) {
  return caseStudyImports[resolveLocale(locale)]?.[slug];
}
