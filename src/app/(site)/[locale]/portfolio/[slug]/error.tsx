"use client";

export default function CaseStudyError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main className="page-container py-20">
      <div className="space-y-4">
        <p className="kicker text-[var(--muted)]">Case study</p>
        <h1 className="section-title">This case study could not be loaded.</h1>
        <p className="max-w-2xl text-[var(--muted)]">
          Try again or return to the portfolio page.
        </p>
        <button
          className="subtle-link"
          onClick={() => unstable_retry()}
          type="button"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
