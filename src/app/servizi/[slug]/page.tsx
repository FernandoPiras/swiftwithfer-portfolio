import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServizioPageView } from "@/components/servizi/ServizioPageView";
import {
  getAllServizioSlugs,
  getServizioBySlug,
} from "@/config/servizi";
import { buildServizioJsonLd } from "@/lib/json-ld";
import { createServizioMetadata } from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServizioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServizioBySlug(slug);
  if (!page) return {};
  return createServizioMetadata(page);
}

export default async function ServizioSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServizioBySlug(slug);
  if (!page) notFound();

  const jsonLd = buildServizioJsonLd(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <ServizioPageView page={page} />
      </main>
      <Footer />
    </>
  );
}
