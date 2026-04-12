"use client";

export default function LocaleError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main className="page-container py-20">
      <div className="space-y-4">
        <p className="kicker text-[var(--muted)]">Error</p>
        <h1 className="section-title">Something went wrong.</h1>
        <p className="max-w-2xl text-[var(--muted)]">
          The page could not be loaded right now.
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
