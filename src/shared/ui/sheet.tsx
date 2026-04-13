import type { ReactNode } from "react";

export function Sheet({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
      {children}
    </div>
  );
}
