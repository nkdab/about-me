import type { Locale } from "@/shared/config/locales";

export type ContactMessageStatus = "received" | "delivered" | "delivery_failed";

export interface ContactMessageRecord {
  id: string;
  createdAt: Date;
  locale: Locale;
  name: string;
  email: string;
  company?: string | null;
  message: string;
  ipHash: string;
  userAgent?: string | null;
  status: ContactMessageStatus;
  resendMessageId?: string | null;
}

export type CreateContactMessageInput = Omit<
  ContactMessageRecord,
  "id" | "createdAt" | "status" | "resendMessageId"
>;
