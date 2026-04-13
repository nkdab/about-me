import type { Dictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";
import { ContactForm } from "@/features/send-contact-form/ui/contact-form";

export function ContactSection({
  dictionary,
  locale,
  headingLevel = "h2",
}: {
  dictionary: Dictionary;
  locale: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const HeadingTag = headingLevel;
  const SubHeadingTag = headingLevel === "h1" ? "h2" : "h3";
  let sectionClassName = "page-container py-20 md:py-24";

  if (headingLevel === "h1") {
    sectionClassName = "page-container pb-20 pt-44 md:pb-24 md:pt-40";
  }

  return (
    <section aria-label={dictionary.contact.title} className={sectionClassName}>
      <div className="grid gap-10 border-t border-[var(--border)] pt-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div className="space-y-12">
          <div className="space-y-4 md:space-y-5">
            <p className="kicker text-[var(--accent)]">
              {dictionary.contact.title}
            </p>
            <HeadingTag className="section-title max-w-[11ch] md:max-w-none">
              {dictionary.contact.description}
            </HeadingTag>
          </div>

          <section className="border-b border-[var(--border)] pb-8">
            <SubHeadingTag className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {dictionary.contact.availabilityTitle}
            </SubHeadingTag>
            <p className="display-font text-3xl font-semibold leading-tight">
              {dictionary.contact.availabilityStatus}
            </p>
            <p className="mt-2 max-w-xl text-base leading-8 text-[var(--muted)]">
              {dictionary.contact.availabilityDetails}
            </p>
          </section>
        </div>
        <div id="contact-form">
          <ContactForm dictionary={dictionary} locale={locale} />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-10 pt-8 border-t border-[var(--border)]">
        <section>
          <SubHeadingTag className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {dictionary.contact.locationTitle}
          </SubHeadingTag>
          <dl className="grid gap-5 text-base sm:grid-cols-3">
            <div>
              <dt className="text-sm text-[var(--muted)]">
                {dictionary.contact.locationLabel}
              </dt>
              <dd>{dictionary.contact.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--muted)]">
                {dictionary.contact.timezoneLabel}
              </dt>
              <dd>{dictionary.contact.timezone}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--muted)]">
                {dictionary.contact.languagesLabel}
              </dt>
              <dd>{dictionary.contact.languages}</dd>
            </div>
          </dl>
        </section>
        <section>
          <SubHeadingTag className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {dictionary.contact.reachTitle}
          </SubHeadingTag>
          <div className="grid gap-3 text-base">
            <a
              className="rounded-md border border-[var(--border)] px-4 py-3 transition-colors hover:bg-[var(--surface-tint)]"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="block text-sm text-[var(--muted)]">
                {dictionary.footer.email}
              </span>
              <span className="subtle-link">{siteConfig.email}</span>
            </a>
            <a
              className="rounded-md border border-[var(--border)] px-4 py-3 transition-colors hover:bg-[var(--surface-tint)]"
              href={siteConfig.telegram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="block text-sm text-[var(--muted)]">
                {dictionary.footer.telegram}
              </span>
              <span className="subtle-link">
                {siteConfig.telegram.replace("https://", "")}
              </span>
            </a>
            <a
              className="rounded-md border border-[var(--border)] px-4 py-3 transition-colors hover:bg-[var(--surface-tint)]"
              href={siteConfig.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="block text-sm text-[var(--muted)]">
                {dictionary.footer.linkedin}
              </span>
              <span className="subtle-link">
                {siteConfig.linkedin.replace("https://", "")}
              </span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
