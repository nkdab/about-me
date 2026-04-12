import * as React from "react";
import { cn } from "@/shared/lib/utils/cn";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full rounded-md border border-[var(--border)] bg-[var(--field-surface)] px-4 py-3 text-sm text-[var(--foreground)] shadow-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:bg-[var(--field-surface-focus)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_30%,white)]",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";
