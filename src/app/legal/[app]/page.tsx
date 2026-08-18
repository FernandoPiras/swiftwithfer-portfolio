import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalAppView } from "@/components/legal/LegalAppView";
import { getAllLegalAppParams, getLegalApp } from "@/config/legal";
import { buildLegalAppJsonLd } from "@/lib/json-ld";
import { createLegalAppMetadata } from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ app: string }>;
}

export function generateStaticParams() {
  return getAllLegalAppParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { app: appId } = await params;
  const app = getLegalApp(appId);
  if (!app) return {};
  return createLegalAppMetadata(app);
}

export default async function LegalAppPage({ params }: PageProps) {
  const { app: appId } = await params;
  const app = getLegalApp(appId);
  if (!app) notFound();

  const jsonLd = buildLegalAppJsonLd(app);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <LegalAppView app={app} />
      </main>
      <Footer />
    </>
  );
}
