"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { FormField } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import {
  type ContactFormInput,
  contactSchema,
} from "@/shared/lib/validation/contact";
import { submitContact } from "@/features/send-contact-form/model/submit-contact";

function getErrorMessage(value: unknown) {
  if (typeof value === "string") {return value;}
  return value instanceof Error ? value.message : undefined;
}

const devCaptchaToken =
  process.env.NODE_ENV === "development" ? "dev-token" : "";

export function ContactForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const [status, setStatus] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const formId = useId();
  const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    defaultValues: {
      captchaToken: devCaptchaToken,
      company: "",
      locale,
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    setStatus(undefined);

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setStatus(dictionary.contact.error);
      setSubmitting(false);
      return;
    }

    try {
      const result = await submitContact(parsed.data);
      if (result.ok) {
        reset({
          captchaToken: devCaptchaToken,
          company: "",
          email: "",
          locale,
          message: "",
          name: "",
          website: "",
        });
        captchaRef.current?.resetCaptcha();
        setStatus(dictionary.contact.success);
      } else {
        setStatus(result.message);
      }
    } catch {
      setStatus(dictionary.contact.error);
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <form
      className="grid gap-4 rounded-md border border-[var(--border)] bg-[var(--surface-tint)] p-4 shadow-[var(--shadow)] sm:p-5"
      onSubmit={onSubmit}
    >
      <input type="hidden" {...register("locale")} />
      <input type="hidden" {...register("captchaToken")} />
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label={dictionary.form.name}
          error={errors.name?.message}
          errorId={`${formId}-name-error`}
        >
          <Input
            {...register("name", {
              minLength: {
                message: dictionary.form.shortName,
                value: 2,
              },
              required: dictionary.form.requiredName,
            })}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            aria-invalid={errors.name ? "true" : "false"}
            aria-required="true"
            autoComplete="name"
          />
        </FormField>
        <FormField
          label={dictionary.form.email}
          error={errors.email?.message}
          errorId={`${formId}-email-error`}
        >
          <Input
            {...register("email", {
              required: dictionary.form.requiredEmail,
            })}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
            aria-invalid={errors.email ? "true" : "false"}
            aria-required="true"
            autoComplete="email"
            type="email"
          />
        </FormField>
      </div>
      <FormField
        label={dictionary.form.company}
        error={errors.company?.message}
        errorId={`${formId}-company-error`}
      >
        <Input
          {...register("company")}
          aria-describedby={
            errors.company ? `${formId}-company-error` : undefined
          }
          aria-invalid={errors.company ? "true" : "false"}
          autoComplete="organization"
        />
      </FormField>
      <div aria-hidden="true" style={{ display: "none" }}>
        <FormField
          label={dictionary.form.website}
          error={errors.website?.message}
        >
          <Input {...register("website")} tabIndex={-1} autoComplete="off" />
        </FormField>
      </div>
      <FormField
        label={dictionary.form.message}
        error={errors.message?.message}
        errorId={`${formId}-message-error`}
      >
        <Textarea
          {...register("message", {
            minLength: {
              message: dictionary.form.shortMessage,
              value: 20,
            },
            required: dictionary.form.requiredMessage,
          })}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          aria-invalid={errors.message ? "true" : "false"}
          aria-required="true"
        />
      </FormField>
      {hcaptchaSiteKey ? (
        <HCaptcha
          ref={captchaRef}
          languageOverride={locale}
          onChalExpired={() => setValue("captchaToken", "")}
          onError={() => setValue("captchaToken", "")}
          onExpire={() => setValue("captchaToken", "")}
          onVerify={(token) =>
            setValue("captchaToken", token, { shouldValidate: true })
          }
          sitekey={hcaptchaSiteKey}
        />
      ) : null}
      <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-2">
        <p aria-live="polite" className="text-sm text-[var(--muted)]">
          {status}
        </p>
        <Button
          className="w-full justify-center sm:w-auto"
          disabled={submitting}
          type="submit"
        >
          {submitting ? dictionary.contact.sending : dictionary.contact.submit}
        </Button>
      </div>
      {Object.keys(errors).length ? (
        <div className="sr-only" role="alert">
          {Object.values(errors)
            .map(
              (error) =>
                getErrorMessage(error?.message) ?? dictionary.form.invalidValue,
            )
            .join(". ")}
        </div>
      ) : undefined}
    </form>
  );
}
