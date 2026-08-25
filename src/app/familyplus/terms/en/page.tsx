import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import {
  FAMILYPLUS_TERMS_EN_PATH,
  getFamilyPlusTermsDocument,
} from "@/config/familyplus-terms";
import { siteConfig } from "@/config/site";
import { buildFamilyPlusLegalJsonLd } from "@/lib/json-ld";
import { createFamilyPlusBilingualMetadata } from "@/lib/seo-metadata";

const doc = getFamilyPlusTermsDocument("en", siteConfig.email);

export const dynamic = "force-dynamic";

export const metadata: Metadata = createFamilyPlusBilingualMetadata({
  kind: "terms",
  path: FAMILYPLUS_TERMS_EN_PATH,
  description: doc.metaDescription,
  locale: "en_US",
});

export default function FamilyPlusTermsEnglishPage() {
  const jsonLd = buildFamilyPlusLegalJsonLd({
    path: FAMILYPLUS_TERMS_EN_PATH,
    name: doc.metaTitle,
    description: doc.metaDescription,
    inLanguage: "en",
    dateModified: doc.updatedISO,
    breadcrumbLeaf: "Terms",
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
