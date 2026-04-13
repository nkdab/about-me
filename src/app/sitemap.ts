import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/entities/project/model/queries";
import { locales } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllProjectSlugs();
  const staticPaths = ["", "/portfolio", "/experience", "/contact"];

  const pages = locales.flatMap((locale) =>
    staticPaths.map((pathname) => ({
      lastModified: new Date(),
      url: `${siteConfig.url}/${locale}${pathname}`
    }))
  );

  const caseStudies = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      lastModified: new Date(),
      url: `${siteConfig.url}/${locale}/portfolio/${slug}`
    }))
  );

  return [...pages, ...caseStudies];
}
