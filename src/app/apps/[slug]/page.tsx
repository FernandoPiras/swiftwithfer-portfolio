import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/config/case-studies";
import { siteConfig } from "@/config/site";
import { buildCaseStudyJsonLd } from "@/lib/json-ld";
import { createCaseStudyMetadata } from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const app = siteConfig.apps.find((item) => item.id === study.appId);
  if (!app) return {};

  return createCaseStudyMetadata(app.name, study.seoDescription, slug);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const app = siteConfig.apps.find((item) => item.id === study.appId);
  if (!app) notFound();

  const jsonLd = buildCaseStudyJsonLd(app, slug, study.seoDescription);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <CaseStudyView study={study} app={app} />
      </main>
      <Footer />
    </>
  );
}
