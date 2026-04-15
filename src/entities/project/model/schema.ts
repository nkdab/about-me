import { z } from "zod";

export const caseStudyFrontmatterSchema = z.object({
  cover: z.object({
    alt: z.string().min(1),
    height: z.number().int().positive(),
    src: z.string().min(1),
    width: z.number().int().positive(),
  }),
  excerpt: z.string().min(1),
  featured: z.boolean(),
  locale: z.enum(["en", "ru"]),
  publishedAt: z.string().date(),
  roles: z.array(z.string().min(1)).min(1),
  seo: z
    .object({
      description: z.string().min(1).optional(),
      title: z.string().min(1).optional(),
    })
    .optional(),
  slug: z.string().min(1),
  summary: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  title: z.string().min(1),
  updatedAt: z.string().date().optional(),
});
