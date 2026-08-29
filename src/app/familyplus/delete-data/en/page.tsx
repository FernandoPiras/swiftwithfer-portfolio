import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import {
  FAMILYPLUS_DELETE_DATA_EN_PATH,
  getFamilyPlusDeleteDataDocument,
} from "@/config/familyplus-delete-data";
import { siteConfig } from "@/config/site";
import { buildFamilyPlusLegalJsonLd } from "@/lib/json-ld";
import { createFamilyPlusBilingualMetadata } from "@/lib/seo-metadata";

export const dynamic = "force-dynamic";

const doc = getFamilyPlusDeleteDataDocument("en", siteConfig.email);

export const metadata: Metadata = createFamilyPlusBilingualMetadata({
  kind: "delete-data",
  path: FAMILYPLUS_DELETE_DATA_EN_PATH,
  description: doc.metaDescription,
  locale: "en_US",
});

export default function FamilyPlusDeleteDataEnglishPage() {
  const jsonLd = buildFamilyPlusLegalJsonLd({
    path: FAMILYPLUS_DELETE_DATA_EN_PATH,
    name: doc.metaTitle,
    description: doc.metaDescription,
    inLanguage: "en",
    dateModified: doc.updatedISO,
    breadcrumbLeaf: "Data deletion",
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
