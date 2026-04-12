import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getCaseStudyBySlug
} from "@/entities/project/model/queries";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { buildPageMetadata } from "@/shared/lib/seo/metadata";
import { CaseStudyBody } from "@/widgets/case-study-body/ui/case-study-body";
import { CaseStudyHeader } from "@/widgets/case-study-header/ui/case-study-header";
import { resolveLocale } from "@/shared/config/locales";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return [
    ...slugs.map((slug) => ({ locale: "en", slug })),
    ...slugs.map((slug) => ({ locale: "ru", slug }))
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const caseStudy = await getCaseStudyBySlug(locale, slug);

  if (!caseStudy) {
    return {};
  }

  return buildPageMetadata({
    locale,
    title: caseStudy.frontmatter.seo?.title ?? caseStudy.frontmatter.title,
    description:
      caseStudy.frontmatter.seo?.description ?? caseStudy.frontmatter.summary,
    pathname: `/portfolio/${slug}`
  });
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const caseStudy = await getCaseStudyBySlug(locale, slug);

  if (!caseStudy) {
    notFound();
  }
  const dictionary = await getDictionary(locale);

  return (
    <>
      <CaseStudyHeader dictionary={dictionary} frontmatter={caseStudy.frontmatter} />
      <CaseStudyBody Component={caseStudy.Component} />
    </>
  );
}
