# Content Authoring

Case studies are authored as one MDX file per locale under `src/content/case-studies/{locale}`.

Required `export const metadata` fields:

- `slug`
- `locale`
- `title`
- `summary`
- `excerpt`
- `publishedAt`
- `featured`
- `tags`
- `roles`
- `cover`

Slugs must match across locales. Metadata must match the file path: `metadata.slug` matches the filename and `metadata.locale` matches the locale folder.

All images require meaningful alt text. MDX body images should use standard `<img>` syntax with `src`, `alt`, `width`, and `height`; the global MDX component map renders them through `next/image`.
