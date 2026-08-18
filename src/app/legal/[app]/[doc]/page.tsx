import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CieloStoriePrivacyView } from "@/components/legal/CieloStoriePrivacyView";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import {
  getAllLegalDocumentParams,
  getLegalDocument,
} from "@/config/legal";
import { getCieloStoriePrivacyDocument } from "@/config/cielostorie-privacy";
import { siteConfig } from "@/config/site";
import {
  buildCieloStoriePrivacyJsonLd,
  buildLegalDocumentJsonLd,
} from "@/lib/json-ld";
import {
  createCieloStoriePrivacyMetadata,
  createLegalDocumentMetadata,
} from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ app: string; doc: string }>;
}

export function generateStaticParams() {
  return getAllLegalDocumentParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { app: appId, doc: docSlug } = await params;
  const match = getLegalDocument(appId, docSlug);
  if (!match) return {};

  if (match.document.renderer === "cielostorie-privacy") {
    const cielostorie = getCieloStoriePrivacyDocument("it", siteConfig.email);
    return createCieloStoriePrivacyMetadata({
      path: `/legal/${appId}/${docSlug}`,
      description: cielostorie.metaDescription,
      locale: "it_IT",
    });
  }

  return createLegalDocumentMetadata(match.app, match.document);
}

export default async function LegalDocumentPage({ params }: PageProps) {
  const { app: appId, doc: docSlug } = await params;
  const match = getLegalDocument(appId, docSlug);
  if (!match) notFound();

  if (match.document.renderer === "cielostorie-privacy") {
    const doc = getCieloStoriePrivacyDocument("it", siteConfig.email);
    const jsonLd = buildCieloStoriePrivacyJsonLd({
      path: `/legal/${appId}/${docSlug}`,
      name: "CieloStorie Privacy Policy",
      description: doc.metaDescription,
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
          <CieloStoriePrivacyView doc={doc} />
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
