import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalHubView } from "@/components/legal/LegalHubView";
import { legalApps } from "@/config/legal";
import { buildLegalHubJsonLd } from "@/lib/json-ld";
import { createLegalHubMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createLegalHubMetadata();

export default function LegalHubPage() {
  const jsonLd = buildLegalHubJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <LegalHubView apps={legalApps} />
      </main>
      <Footer />
    </>
  );
}
