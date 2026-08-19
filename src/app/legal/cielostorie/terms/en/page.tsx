import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import { CIELOSTORIE_TERMS_EN_PATH } from "@/config/cielostorie-legal-paths";
import { getCieloStorieTermsDocument } from "@/config/cielostorie-terms";
import { siteConfig } from "@/config/site";
import { buildCieloStorieLegalJsonLd } from "@/lib/json-ld";
import { createCieloStorieBilingualMetadata } from "@/lib/seo-metadata";

const doc = getCieloStorieTermsDocument("en", siteConfig.email);

/** Request-time render so middleware can set `<html lang="en">`. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = createCieloStorieBilingualMetadata({
  kind: "terms",
  path: CIELOSTORIE_TERMS_EN_PATH,
  description: doc.metaDescription,
  locale: "en_US",
});

export default function CieloStorieTermsEnglishPage() {
  const jsonLd = buildCieloStorieLegalJsonLd({
    path: CIELOSTORIE_TERMS_EN_PATH,
    name: doc.metaTitle,
    description: doc.metaDescription,
    inLanguage: "en",
    dateModified: doc.updatedISO,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <CieloStorieLegalDocumentView doc={doc} />
      </main>
      <Footer />
    </>
  );
}
