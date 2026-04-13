import { siteConfig } from "@/shared/config/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    description: siteConfig.description,
    name: siteConfig.name,
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.telegram],
    url: siteConfig.url,
  };
}
