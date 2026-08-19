import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStoriePrivacyView } from "@/components/legal/CieloStoriePrivacyView";
import {
  CIELOSTORIE_PRIVACY_EN_PATH,
  getCieloStoriePrivacyDocument,
} from "@/config/cielostorie-privacy";
import { siteConfig } from "@/config/site";
import { buildCieloStoriePrivacyJsonLd } from "@/lib/json-ld";
import { createCieloStoriePrivacyMetadata } from "@/lib/seo-metadata";

const doc = getCieloStoriePrivacyDocument("en", siteConfig.email);

/** Request-time render so middleware can set `<html lang="en">`. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = createCieloStoriePrivacyMetadata({
  path: CIELOSTORIE_PRIVACY_EN_PATH,
  description: doc.metaDescription,
  locale: "en_US",
});

export default function CieloStoriePrivacyEnglishPage() {
  const jsonLd = buildCieloStoriePrivacyJsonLd({
    path: CIELOSTORIE_PRIVACY_EN_PATH,
    name: "CieloStorie Privacy Policy",
    description: doc.metaDescription,
    inLanguage: "en",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <CieloStoriePrivacyView doc={doc} />
      </main>
      <Footer />
    </>
  );
}
