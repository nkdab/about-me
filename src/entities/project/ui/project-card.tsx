import Link from "next/link";
import Image from "next/image";
import type { ElementType } from "react";
import type { Locale } from "@/shared/config/locales";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type {
  CaseStudyFrontmatter,
  PortfolioItem,
} from "@/entities/project/model/types";

export function ProjectCard({
  item,
  frontmatter,
  locale,
  dictionary,
  headingLevel = "h3",
}: {
  item: PortfolioItem;
  frontmatter?: CaseStudyFrontmatter;
  locale: Locale;
  dictionary: Dictionary;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel as ElementType;
  const href = `/${locale}/portfolio/${item.slug}`;
  const title = frontmatter?.title ?? item.slug;

  return (
    <article className="group">
      <Link className="block space-y-3" href={href}>
        {frontmatter?.cover && (
          <div className="aspect-[16/10] overflow-hidden rounded-md bg-[var(--surface-strong)]">
            <Image
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              height={frontmatter.cover.height}
              src={frontmatter.cover.src}
              width={frontmatter.cover.width}
            />
          </div>
        )}
        <div className="flex items-baseline justify-between gap-4">
          <Heading className="card-title transition-colors group-hover:text-[var(--accent)]">
            {title}
          </Heading>
          <span className="shrink-0 text-sm text-[var(--muted)]">
            {item.year}
          </span>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          {item.status === "live" ? dictionary.portfolio.live : item.status}
        </p>
        <p className="max-w-[54ch] text-base leading-8 text-[var(--foreground)]">
          {frontmatter?.summary ?? item.tech.join(", ")}
        </p>
        <span className="flex flex-wrap gap-2 pt-1">
          {(frontmatter?.tags ?? item.tech).slice(0, 4).map((tag) => (
            <span
              className="rounded-md bg-[var(--badge-surface)] px-2.5 py-1 text-xs text-[var(--accent)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </span>
        <span className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
          {item.tech.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < item.tech.length - 1 && <span className="ml-2">/</span>}
            </span>
          ))}
        </span>
      </Link>
    </article>
  );
}
