import { describe, expect, it } from "vitest";
import { contactSchema } from "@/shared/lib/validation/contact";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      message: "This is a detailed enough message for the validator.",
      company: "",
      website: "",
      locale: "en",
      captchaToken: "token"
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects a short message", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      message: "short",
      locale: "en",
      captchaToken: "token"
    });

    expect(parsed.success).toBe(false);
  });
});
