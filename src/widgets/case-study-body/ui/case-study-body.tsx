import type { MDXContent } from "mdx/types";

export function CaseStudyBody({ Component }: { Component: MDXContent }) {
  return (
    <section className="page-container py-8 md:py-12">
      <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-12">
        <Component />
      </div>
    </section>
  );
}
