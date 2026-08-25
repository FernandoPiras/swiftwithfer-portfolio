import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import {
  FAMILYPLUS_PRIVACY_PATH,
  getFamilyPlusPrivacyDocument,
} from "@/config/familyplus-privacy";
import { siteConfig } from "@/config/site";
import { buildFamilyPlusLegalJsonLd } from "@/lib/json-ld";
import { createFamilyPlusBilingualMetadata } from "@/lib/seo-metadata";

const doc = getFamilyPlusPrivacyDocument("it", siteConfig.email);

export const metadata: Metadata = createFamilyPlusBilingualMetadata({
  kind: "privacy",
  path: FAMILYPLUS_PRIVACY_PATH,
  description: doc.metaDescription,
  locale: "it_IT",
});

export default function FamilyPlusPrivacyItalianPage() {
  const jsonLd = buildFamilyPlusLegalJsonLd({
    path: FAMILYPLUS_PRIVACY_PATH,
    name: doc.metaTitle,
    description: doc.metaDescription,
    inLanguage: "it-IT",
    dateModified: doc.updatedISO,
    breadcrumbLeaf: "Privacy",
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
