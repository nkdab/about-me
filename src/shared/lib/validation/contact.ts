import { z } from "zod";

export const contactSchema = z.object({
  captchaToken: z.string().min(1),
  company: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email(),
  locale: z.enum(["en", "ru"]),
  message: z.string().min(20).max(4000),
  name: z.string().min(2).max(80),
  website: z.string().max(120).optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export interface ContactSuccess {
  ok: true;
  messageId: string;
}

export interface ContactError {
  ok: false;
  code:
    | "INVALID_INPUT"
    | "CAPTCHA_FAILED"
    | "RATE_LIMITED"
    | "DELIVERY_FAILED"
    | "STORAGE_FAILED";
  message: string;
  fieldErrors?: Record<string, string[]>;
}
