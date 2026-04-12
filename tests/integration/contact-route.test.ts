import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

const repositoryMocks = vi.hoisted(() => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO;
  delete process.env.RESEND_FROM;

  return {
    createMessage: vi.fn(async () => ({
      id: "message-id",
      createdAt: new Date(),
      locale: "en",
      name: "Alex",
      email: "alex@example.com",
      message: "This is a detailed enough message for the validator.",
      ipHash: "hashed-ip",
      status: "received",
      resendMessageId: null,
      userAgent: "vitest",
    })),
    hashIp: vi.fn(() => "hashed-ip"),
    hasMessageStorage: vi.fn(() => false),
    updateMessageDelivery: vi.fn(),
  };
});

vi.mock("next/headers", () => ({
  headers: async () =>
    new Headers({
      "user-agent": "vitest",
      "x-forwarded-for": "203.0.113.10",
    }),
}));

vi.mock("@/entities/contact-message/model/repository", () => repositoryMocks);

vi.mock("@/shared/lib/security/captcha", () => ({
  verifyCaptcha: vi.fn(async () => true),
}));

vi.mock("@/shared/lib/security/rate-limit", () => ({
  isRateLimited: vi.fn(() => false),
}));

function createValidRequest() {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name: "Alex",
      email: "alex@example.com",
      message: "This is a detailed enough message for the validator.",
      company: "",
      website: "",
      locale: "en",
      captchaToken: "token",
    }),
  });
}

describe("contact route", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    repositoryMocks.hasMessageStorage.mockReturnValue(false);
  });

  it("rejects invalid payload", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({}),
      }),
    );

    expect(response.status).toBe(400);
  });

  it("rejects valid messages when no durable contact sink is configured", async () => {
    repositoryMocks.hasMessageStorage.mockReturnValue(false);

    const response = await POST(createValidRequest());
    const payload = await response.json();

    expect(response.status).toBe(500);
    expect(payload).toMatchObject({
      ok: false,
      code: "STORAGE_FAILED",
    });
    expect(repositoryMocks.createMessage).not.toHaveBeenCalled();
  });

  it("accepts valid messages when database storage is configured", async () => {
    repositoryMocks.hasMessageStorage.mockReturnValue(true);

    const response = await POST(createValidRequest());
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toEqual({
      ok: true,
      messageId: "message-id",
    });
    expect(repositoryMocks.createMessage).toHaveBeenCalled();
  });
});
