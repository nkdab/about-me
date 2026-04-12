import type { ReactNode } from "react";

export function FormField({
  label,
  error,
  errorId,
  children,
}: {
  label: string;
  error?: string;
  errorId?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[var(--foreground)]">
      <span className="text-[var(--muted-strong)]">{label}</span>
      {children}
      {error ? (
        <span className="text-sm text-[#9d2b1b]" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
