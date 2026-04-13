import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/shared/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-semibold tracking-[0.02em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      variant: "primary"
    },
    variants: {
      variant: {
        ghost:
          "px-3 py-2 text-[var(--foreground)] hover:bg-[var(--button-ghost-hover)] focus-visible:ring-[var(--accent)]",
        primary:
          "bg-[var(--button-primary-bg)] px-5 py-3 text-[var(--button-primary-fg)] hover:bg-[var(--button-primary-hover)] focus-visible:ring-[var(--accent)]",
        secondary:
          "border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--foreground)] hover:bg-[var(--surface-strong)] focus-visible:ring-[var(--accent)]"
      }
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
