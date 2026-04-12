declare module "*.mdx" {
  import type { JSX } from "react";

  const MDXComponent: () => JSX.Element;
  export const metadata: Record<string, unknown>;
  export default MDXComponent;
}
