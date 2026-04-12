import { siteConfig } from "@/shared/config/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.telegram]
  };
}
