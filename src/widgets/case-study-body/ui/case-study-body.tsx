import type { JSX } from "react";

export function CaseStudyBody({
  Component
}: {
  Component: () => JSX.Element;
}) {
  return (
    <section className="page-container py-8 md:py-12">
      <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-12">
        <Component />
      </div>
    </section>
  );
}
