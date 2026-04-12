import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-[var(--border)] bg-[var(--badge-surface)] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
      {children}
    </span>
  );
}
