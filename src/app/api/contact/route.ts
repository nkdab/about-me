import { headers } from "next/headers";
import { Resend } from "resend";
import {
  createMessage,
  hasMessageStorage,
  hashIp,
  updateMessageDelivery,
} from "@/entities/contact-message/model/repository";
import { verifyCaptcha } from "@/shared/lib/security/captcha";
import { isRateLimited } from "@/shared/lib/security/rate-limit";
import {
  type ContactError,
  type ContactSuccess,
  contactSchema,
} from "@/shared/lib/validation/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function json(status: number, payload: ContactSuccess | ContactError) {
  return Response.json(payload, { status });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return json(400, {
      code: "INVALID_INPUT",
      fieldErrors: parsed.error.flatten().fieldErrors,
      message: "Invalid form payload.",
      ok: false,
    });
  }

  if (parsed.data.website) {
    return json(400, {
      code: "INVALID_INPUT",
      message: "Invalid form payload.",
      ok: false,
    });
  }

  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "127.0.0.1";

  if (isRateLimited(ip)) {
    return json(429, {
      code: "RATE_LIMITED",
      message: "Too many requests. Try again later.",
      ok: false,
    });
  }

  const captchaValid = await verifyCaptcha(parsed.data.captchaToken, ip);

  if (!captchaValid) {
    return json(400, {
      code: "CAPTCHA_FAILED",
      message: "Captcha verification failed.",
      ok: false,
    });
  }

  const contactTo = process.env.CONTACT_TO;
  const resendFrom = process.env.RESEND_FROM;
  const deliveryClient =
    resend && contactTo && resendFrom
      ? {
          contactTo,
          resend,
          resendFrom,
        }
      : null;

  if (!deliveryClient && !hasMessageStorage()) {
    return json(500, {
      code: "STORAGE_FAILED",
      message: "Contact delivery is not configured.",
      ok: false,
    });
  }

  const record = await createMessage({
    company: parsed.data.company || null,
    email: parsed.data.email,
    ipHash: hashIp(ip),
    locale: parsed.data.locale,
    message: parsed.data.message,
    name: parsed.data.name,
    userAgent: headerStore.get("user-agent"),
  }).catch(() => null);

  if (!record) {
    return json(500, {
      code: "STORAGE_FAILED",
      message: "Unable to persist message.",
      ok: false,
    });
  }

  if (!deliveryClient) {
    return json(200, {
      messageId: record.id,
      ok: true,
    });
  }

  const { data, error } = await deliveryClient.resend.emails.send({
    from: deliveryClient.resendFrom,
    replyTo: parsed.data.email,
    subject: `Portfolio contact from ${parsed.data.name}`,
    text: parsed.data.message,
    to: [deliveryClient.contactTo],
  });

  if (error) {
    await updateMessageDelivery(record.id, "delivery_failed");
    return json(502, {
      code: "DELIVERY_FAILED",
      message: "Email delivery failed.",
      ok: false,
    });
  }

  await updateMessageDelivery(record.id, "delivered", data?.id);

  return json(200, {
    messageId: record.id,
    ok: true,
  });
}
