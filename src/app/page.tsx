import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Bio } from "@/components/sections/Bio";
import { Apps } from "@/components/sections/Apps";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
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

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Apps />
        <Process />
        <Services />
        <Bio />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
