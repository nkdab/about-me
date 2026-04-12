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
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  });

  return (await response.json()) as ContactSuccess | ContactError;
}
