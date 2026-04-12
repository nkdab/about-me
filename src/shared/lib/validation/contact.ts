import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(20).max(4000),
  company: z.string().max(120).optional().or(z.literal("")),
  website: z.string().max(120).optional().or(z.literal("")),
  locale: z.enum(["en", "ru"]),
  captchaToken: z.string().min(1)
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export type ContactSuccess = {
  ok: true;
  messageId: string;
};

export type ContactError = {
  ok: false;
  code:
    | "INVALID_INPUT"
    | "CAPTCHA_FAILED"
    | "RATE_LIMITED"
    | "DELIVERY_FAILED"
    | "STORAGE_FAILED";
  message: string;
  fieldErrors?: Record<string, string[]>;
};
