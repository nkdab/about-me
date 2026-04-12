import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";

describe("buildPageMetadata", () => {
  it("generates localized canonical url", () => {
    const metadata = buildPageMetadata({
      locale: "ru",
      title: "Title",
      description: "Description",
      pathname: "/portfolio",
    });

    expect(metadata.alternates?.canonical).toContain("/ru/portfolio");
  });

  it("generates x-default and social preview metadata", () => {
    const metadata = buildPageMetadata({
      locale: "en",
      title: "Title",
      description: "Description",
      pathname: "/portfolio",
    });

    expect(metadata.alternates?.languages).toMatchObject({
      "x-default": expect.stringContaining("/en/portfolio"),
    });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: expect.stringContaining("/og-image.png"),
        width: 1200,
        height: 630,
      }),
    ]);
  });
});
