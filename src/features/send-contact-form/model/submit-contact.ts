"use client";

import type {
  ContactError,
  ContactFormInput,
  ContactSuccess
} from "@/shared/lib/validation/contact";

export async function submitContact(
  input: ContactFormInput
): Promise<ContactSuccess | ContactError> {
  const response = await fetch("/api/contact", {
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  return (await response.json()) as ContactSuccess | ContactError;
}
