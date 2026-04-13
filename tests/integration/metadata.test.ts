import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";

describe("buildPageMetadata", () => {
  it("generates localized canonical url", () => {
    const metadata = buildPageMetadata({
      description: "Description",
      locale: "ru",
      pathname: "/portfolio",
      title: "Title",
    });

    expect(metadata.alternates?.canonical).toContain("/ru/portfolio");
  });

  it("generates x-default and social preview metadata", () => {
    const metadata = buildPageMetadata({
      description: "Description",
      locale: "en",
      pathname: "/portfolio",
      title: "Title",
    });

    expect(metadata.alternates?.languages).toMatchObject({
      "x-default": expect.stringContaining("/en/portfolio"),
    });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        height: 630,
        url: expect.stringContaining("/og-image.png"),
        width: 1200,
      }),
    ]);
  });
});
