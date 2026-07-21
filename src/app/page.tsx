import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductProof } from "@/components/sections/ProductProof";
import { Process } from "@/components/sections/Process";
import { ProductBody } from "@/components/sections/ProductBody";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { buildHomeJsonLd } from "@/lib/json-ld";
import { createHomeMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createHomeMetadata();

function JsonLd() {
  const schema = buildHomeJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Manifesto narrative architecture:
 * I Dichiarazione (Hero) → II Prova → III Principio → IV Corpo → V Offerta → VI Soglia
 */
export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <ProductProof />
        <Process />
        <ProductBody />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
