import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/config/case-studies";
import { slotivaSales } from "@/config/slotiva-sales";
import { siteConfig } from "@/config/site";
import { buildCaseStudyJsonLd } from "@/lib/json-ld";
import { createCaseStudyMetadata } from "@/lib/seo-metadata";

const CaseStudyView = dynamic(() =>
  import("@/components/case-study/CaseStudyView").then((m) => m.CaseStudyView),
);
const SlotivaSalesView = dynamic(() =>
  import("@/components/case-study/SlotivaSalesView").then(
    (m) => m.SlotivaSalesView,
  ),
);

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

  if (slug === "slotiva") {
    return createCaseStudyMetadata(
      app.name,
      slotivaSales.seo.description,
      slug,
      "Business Brain per attività di servizi",
      slotivaSales.seo.keywords,
    );
  }

  return createCaseStudyMetadata(app.name, study.seoDescription, slug, app.tagline);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const app = siteConfig.apps.find((item) => item.id === study.appId);
  if (!app) notFound();

  const description =
    slug === "slotiva" ? slotivaSales.seo.description : study.seoDescription;
  const jsonLd = buildCaseStudyJsonLd(app, slug, description);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        {slug === "slotiva" ? (
          <SlotivaSalesView app={app} />
        ) : (
          <CaseStudyView study={study} app={app} />
        )}
      </main>
      <Footer />
    </>
  );
}
