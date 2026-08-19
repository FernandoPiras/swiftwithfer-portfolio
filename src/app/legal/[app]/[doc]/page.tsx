import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStorieLegalDocumentView } from "@/components/legal/CieloStorieLegalDocumentView";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import {
  getAllLegalDocumentParams,
  getLegalDocument,
} from "@/config/legal";
import { getCieloStoriePrivacyDocument } from "@/config/cielostorie-privacy";
import { getCieloStorieSupportDocument } from "@/config/cielostorie-support";
import { getCieloStorieTermsDocument } from "@/config/cielostorie-terms";
import { siteConfig } from "@/config/site";
import {
  buildCieloStorieLegalJsonLd,
  buildLegalDocumentJsonLd,
} from "@/lib/json-ld";
import {
  createCieloStorieBilingualMetadata,
  createLegalDocumentMetadata,
} from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ app: string; doc: string }>;
}

export function generateStaticParams() {
  return getAllLegalDocumentParams();
}

export const dynamicParams = false;

function cielostorieMetadataForRenderer(
  renderer: string | undefined,
  appId: string,
  docSlug: string,
): Metadata | null {
  switch (renderer) {
    case "cielostorie-privacy": {
      const doc = getCieloStoriePrivacyDocument("it", siteConfig.email);
      return createCieloStorieBilingualMetadata({
        kind: "privacy",
        path: `/legal/${appId}/${docSlug}`,
        description: doc.metaDescription,
        locale: "it_IT",
      });
    }
    case "cielostorie-terms": {
      const doc = getCieloStorieTermsDocument("it", siteConfig.email);
      return createCieloStorieBilingualMetadata({
        kind: "terms",
        path: `/legal/${appId}/${docSlug}`,
        description: doc.metaDescription,
        locale: "it_IT",
      });
    }
    case "cielostorie-support": {
      const doc = getCieloStorieSupportDocument("it", siteConfig.email);
      return createCieloStorieBilingualMetadata({
        kind: "support",
        path: `/legal/${appId}/${docSlug}`,
        description: doc.metaDescription,
        locale: "it_IT",
      });
    }
    default:
      return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { app: appId, doc: docSlug } = await params;
  const match = getLegalDocument(appId, docSlug);
  if (!match) return {};

  const cielostorie = cielostorieMetadataForRenderer(
    match.document.renderer,
    appId,
    docSlug,
  );
  if (cielostorie) return cielostorie;

  return createLegalDocumentMetadata(match.app, match.document);
}

function cielostorieDocumentForRenderer(renderer: string | undefined) {
  switch (renderer) {
    case "cielostorie-privacy":
      return getCieloStoriePrivacyDocument("it", siteConfig.email);
    case "cielostorie-terms":
      return getCieloStorieTermsDocument("it", siteConfig.email);
    case "cielostorie-support":
      return getCieloStorieSupportDocument("it", siteConfig.email);
    default:
      return null;
  }
}

export default async function LegalDocumentPage({ params }: PageProps) {
  const { app: appId, doc: docSlug } = await params;
  const match = getLegalDocument(appId, docSlug);
  if (!match) notFound();

  const cielostorieDoc = cielostorieDocumentForRenderer(match.document.renderer);
  if (cielostorieDoc) {
    const jsonLd = buildCieloStorieLegalJsonLd({
      path: `/legal/${appId}/${docSlug}`,
      name: cielostorieDoc.metaTitle,
      description: cielostorieDoc.metaDescription,
      inLanguage: "it-IT",
    });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">
          <CieloStorieLegalDocumentView doc={cielostorieDoc} />
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = buildLegalDocumentJsonLd(match.app, match.document);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <LegalDocumentView app={match.app} document={match.document} />
      </main>
      <Footer />
    </>
  );
}
