import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  p: (props) => (
    <p
      className="mt-4 text-base leading-8 text-[var(--muted)] first:mt-0"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-[var(--muted)]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
