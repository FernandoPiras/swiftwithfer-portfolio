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
import { getSiteUrl } from "@/lib/site-url";

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

  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/apps/${slug}`;

  return {
    title: `${app.name} — Case Study`,
    description: study.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${app.name} — Case Study | ${siteConfig.brand}`,
      description: study.seoDescription,
      url,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const app = siteConfig.apps.find((item) => item.id === study.appId);
  if (!app) notFound();

  return (
    <>
      <Header />
      <main id="main-content">
        <CaseStudyView study={study} app={app} />
      </main>
      <Footer />
    </>
  );
}
