import { describe, expect, it } from "vitest";
import { contactSchema } from "@/shared/lib/validation/contact";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const parsed = contactSchema.safeParse({
      captchaToken: "token",
      company: "",
      email: "alex@example.com",
      locale: "en",
      message: "This is a detailed enough message for the validator.",
      name: "Alex",
      website: ""
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects a short message", () => {
    const parsed = contactSchema.safeParse({
      captchaToken: "token",
      email: "alex@example.com",
      locale: "en",
      message: "short",
      name: "Alex"
    });

    expect(parsed.success).toBe(false);
  });
});
