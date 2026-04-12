import Image from "next/image";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import { ProjectMeta } from "@/entities/project/ui/project-meta";
import type { CaseStudyFrontmatter } from "@/entities/project/model/types";

export function CaseStudyHeader({
  frontmatter,
  dictionary
}: {
  frontmatter: CaseStudyFrontmatter;
  dictionary: Dictionary;
}) {
  return (
    <section className="page-container pb-12 pt-44 md:pb-16 md:pt-40">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div className="space-y-5">
          <p className="kicker text-[var(--accent)]">
            {dictionary.portfolio.title}
          </p>
          <h1 className="section-title md:text-6xl">
            {frontmatter.title}
          </h1>
          <p className="body-copy max-w-xl text-[var(--muted)]">
            {frontmatter.summary}
          </p>
          <ProjectMeta roles={frontmatter.roles} tags={frontmatter.tags} />
        </div>
        <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)]">
          <Image
            alt={frontmatter.cover.alt}
            height={frontmatter.cover.height}
            priority
            src={frontmatter.cover.src}
            width={frontmatter.cover.width}
          />
        </div>
      </div>
    </section>
  );
}
