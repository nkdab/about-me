import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

const repositoryMocks = vi.hoisted(() => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO;
  delete process.env.RESEND_FROM;

  return {
    createMessage: vi.fn(async () => ({
      createdAt: new Date(),
      email: "alex@example.com",
      id: "message-id",
      ipHash: "hashed-ip",
      locale: "en",
      message: "This is a detailed enough message for the validator.",
      name: "Alex",
      resendMessageId: null,
      status: "received",
      userAgent: "vitest",
    })),
    hasMessageStorage: vi.fn(() => false),
    hashIp: vi.fn(() => "hashed-ip"),
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
    body: JSON.stringify({
      captchaToken: "token",
      company: "",
      email: "alex@example.com",
      locale: "en",
      message: "This is a detailed enough message for the validator.",
      name: "Alex",
      website: "",
    }),
    method: "POST",
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
        body: JSON.stringify({}),
        method: "POST",
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
      code: "STORAGE_FAILED",
      ok: false,
    });
    expect(repositoryMocks.createMessage).not.toHaveBeenCalled();
  });

  it("accepts valid messages when database storage is configured", async () => {
    repositoryMocks.hasMessageStorage.mockReturnValue(true);

    const response = await POST(createValidRequest());
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toEqual({
      messageId: "message-id",
      ok: true,
    });
    expect(repositoryMocks.createMessage).toHaveBeenCalled();
  });
});
