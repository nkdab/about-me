import { createHash, randomUUID } from "node:crypto";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import { Pool } from "pg";
import type {
  ContactMessageRecord,
  CreateContactMessageInput,
} from "@/entities/contact-message/model/types";

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

const db = pool ? drizzle(pool) : null;

export function hasMessageStorage() {
  return Boolean(db);
}

export function hashIp(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

async function ensureTable() {
  if (!db) {
    return;
  }

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id text PRIMARY KEY,
      created_at timestamptz NOT NULL,
      locale text NOT NULL,
      name text NOT NULL,
      email text NOT NULL,
      company text,
      message text NOT NULL,
      ip_hash text NOT NULL,
      user_agent text,
      status text NOT NULL,
      resend_message_id text
    )
  `);
}

export async function createMessage(
  input: CreateContactMessageInput,
): Promise<ContactMessageRecord> {
  const record: ContactMessageRecord = {
    id: randomUUID(),
    createdAt: new Date(),
    status: "received",
    resendMessageId: null,
    ...input,
  };

  if (!db) {
    return record;
  }

  await ensureTable();
  await db.execute(sql`
    INSERT INTO contact_messages (
      id, created_at, locale, name, email, company, message, ip_hash, user_agent, status, resend_message_id
    ) VALUES (
      ${record.id},
      ${record.createdAt},
      ${record.locale},
      ${record.name},
      ${record.email},
      ${record.company ?? null},
      ${record.message},
      ${record.ipHash},
      ${record.userAgent ?? null},
      ${record.status},
      ${record.resendMessageId}
    )
  `);

  return record;
}

export async function updateMessageDelivery(
  id: string,
  status: ContactMessageRecord["status"],
  resendMessageId?: string,
) {
  if (!db) {
    return;
  }

  await ensureTable();
  await db.execute(sql`
    UPDATE contact_messages
    SET status = ${status}, resend_message_id = ${resendMessageId ?? null}
    WHERE id = ${id}
  `);
}
