import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiziHubView } from "@/components/servizi/ServiziHubView";
import { buildServiziHubJsonLd } from "@/lib/json-ld";
import { createServiziHubMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createServiziHubMetadata();

export default function ServiziPage() {
  const jsonLd = buildServiziHubJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <ServiziHubView />
      </main>
      <Footer />
    </>
  );
}
