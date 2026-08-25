import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import {
  FAMILYPLUS_SUPPORT_PATH,
  getFamilyPlusSupportDocument,
} from "@/config/familyplus-support";
import { siteConfig } from "@/config/site";
import { buildFamilyPlusLegalJsonLd } from "@/lib/json-ld";
import { createFamilyPlusBilingualMetadata } from "@/lib/seo-metadata";

const doc = getFamilyPlusSupportDocument("it", siteConfig.email);

export const metadata: Metadata = createFamilyPlusBilingualMetadata({
  kind: "support",
  path: FAMILYPLUS_SUPPORT_PATH,
  description: doc.metaDescription,
  locale: "it_IT",
});

export default function FamilyPlusSupportItalianPage() {
  const jsonLd = buildFamilyPlusLegalJsonLd({
    path: FAMILYPLUS_SUPPORT_PATH,
    name: doc.metaTitle,
    description: doc.metaDescription,
    inLanguage: "it-IT",
    dateModified: doc.updatedISO,
    breadcrumbLeaf: "Support",
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
