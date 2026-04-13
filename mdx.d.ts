declare module "*.mdx" {
  import type { CaseStudyFrontmatter } from "@/entities/project/model/types";
  import type { MDXContent } from "mdx/types";

  const MDXComponent: MDXContent;
  export const metadata: CaseStudyFrontmatter;
  export default MDXComponent;
}
