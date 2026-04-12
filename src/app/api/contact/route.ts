import { headers } from "next/headers";
import { Resend } from "resend";
import {
  createMessage,
  hashIp,
  hasMessageStorage,
  updateMessageDelivery,
} from "@/entities/contact-message/model/repository";
import { verifyCaptcha } from "@/shared/lib/security/captcha";
import { isRateLimited } from "@/shared/lib/security/rate-limit";
import {
  contactSchema,
  type ContactError,
  type ContactSuccess,
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
      ok: false,
      code: "INVALID_INPUT",
      message: "Invalid form payload.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    });
  }

  if (parsed.data.website) {
    return json(400, {
      ok: false,
      code: "INVALID_INPUT",
      message: "Invalid form payload.",
    });
  }

  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "127.0.0.1";

  if (isRateLimited(ip)) {
    return json(429, {
      ok: false,
      code: "RATE_LIMITED",
      message: "Too many requests. Try again later.",
    });
  }

  const captchaValid = await verifyCaptcha(parsed.data.captchaToken, ip);

  if (!captchaValid) {
    return json(400, {
      ok: false,
      code: "CAPTCHA_FAILED",
      message: "Captcha verification failed.",
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
      ok: false,
      code: "STORAGE_FAILED",
      message: "Contact delivery is not configured.",
    });
  }

  const record = await createMessage({
    locale: parsed.data.locale,
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || null,
    message: parsed.data.message,
    ipHash: hashIp(ip),
    userAgent: headerStore.get("user-agent"),
  }).catch(() => null);

  if (!record) {
    return json(500, {
      ok: false,
      code: "STORAGE_FAILED",
      message: "Unable to persist message.",
    });
  }

  if (!deliveryClient) {
    return json(200, {
      ok: true,
      messageId: record.id,
    });
  }

  const { data, error } = await deliveryClient.resend.emails.send({
    from: deliveryClient.resendFrom,
    to: [deliveryClient.contactTo],
    replyTo: parsed.data.email,
    subject: `Portfolio contact from ${parsed.data.name}`,
    text: parsed.data.message,
  });

  if (error) {
    await updateMessageDelivery(record.id, "delivery_failed");
    return json(502, {
      ok: false,
      code: "DELIVERY_FAILED",
      message: "Email delivery failed.",
    });
  }

  await updateMessageDelivery(record.id, "delivered", data?.id);

  return json(200, {
    ok: true,
    messageId: record.id,
  });
}
