import { andrometricsDocuments } from "@/config/legal/andrometrics";
import { preventivoRapidoDocuments } from "@/config/legal/preventivo-rapido";
import type { LegalApp, LegalDocument } from "@/config/legal/types";
import {
  CIELOSTORIE_LEGAL_EN_PATHS,
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_PATH,
  CIELOSTORIE_PRIVACY_UPDATED_ISO,
  CIELOSTORIE_SUPPORT_EN_PATH,
  CIELOSTORIE_SUPPORT_PATH,
  CIELOSTORIE_SUPPORT_UPDATED_ISO,
  CIELOSTORIE_TERMS_EN_PATH,
  CIELOSTORIE_TERMS_PATH,
  CIELOSTORIE_TERMS_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

export const LEGAL_HUB_PATH = "/legal";

export const legalApps: readonly LegalApp[] = [
  {
    id: "andrometrics",
    name: "AndroMetrics",
    blurb:
      "Monitoraggio benessere maschile con privacy, chiarezza e controllo dei tuoi dati. Qui trovi la documentazione legale e il supporto dell'app.",
    icon: "/images/apps/andrometrics/icon.png",
    caseStudyHref: "/apps/andrometrics",
    documents: andrometricsDocuments,
  },
  {
    id: "preventivo-rapido",
    name: "PreventivoRapido PRO",
    blurb:
      "Preventivi, clienti e documenti sul dispositivo. Privacy, termini e supporto dell'app.",
    icon: "/images/apps/preventivorapido/icon.png",
    caseStudyHref: "/apps/preventivorapido",
    documents: preventivoRapidoDocuments,
  },
  {
    id: "cielostorie",
    name: "CieloStorie",
    blurb:
      "Storie illustrate per famiglie: privacy, termini di utilizzo e supporto dell’app iOS e iPadOS.",
    documents: [
      {
        slug: "privacy",
        kind: "privacy",
        title: "Informativa sulla privacy",
        hubLabel: "Privacy Policy",
        metaTitle: "Privacy Policy — CieloStorie",
        metaDescription:
          "Informativa sulla privacy di CieloStorie, inclusi dati locali, pubblicità, consenso, acquisti e servizi di terze parti.",
        updatedISO: CIELOSTORIE_PRIVACY_UPDATED_ISO,
        updatedDisplay: "18 agosto 2026",
        sections: [],
        renderer: "cielostorie-privacy",
        extraLocales: [{ label: "English", href: CIELOSTORIE_PRIVACY_EN_PATH }],
      },
      {
        slug: "terms",
        kind: "terms",
        title: "Termini di utilizzo",
        hubLabel: "Termini di utilizzo",
        metaTitle: "Termini di utilizzo — CieloStorie",
        metaDescription:
          "Termini di utilizzo di CieloStorie: storie gratuite, uso familiare, pubblicità, acquisto una tantum Rimuovi pubblicità e proprietà intellettuale.",
        updatedISO: CIELOSTORIE_TERMS_UPDATED_ISO,
        updatedDisplay: "19 agosto 2026",
        sections: [],
        renderer: "cielostorie-terms",
        extraLocales: [{ label: "English", href: CIELOSTORIE_TERMS_EN_PATH }],
      },
      {
        slug: "support",
        kind: "support",
        title: "Supporto",
        hubLabel: "Supporto",
        metaTitle: "Supporto — CieloStorie",
        metaDescription:
          "Supporto ufficiale CieloStorie: Reader, profili bambini, preferiti, annunci, Rimuovi pubblicità, ripristino acquisti e opzioni privacy.",
        updatedISO: CIELOSTORIE_SUPPORT_UPDATED_ISO,
        updatedDisplay: "19 agosto 2026",
        sections: [],
        renderer: "cielostorie-support",
        extraLocales: [{ label: "English", href: CIELOSTORIE_SUPPORT_EN_PATH }],
      },
    ],
  },
] satisfies readonly LegalApp[];

export function legalAppPath(appId: string): string {
  return `${LEGAL_HUB_PATH}/${appId}`;
}

export function legalDocumentPath(appId: string, docSlug: string): string {
  return `${LEGAL_HUB_PATH}/${appId}/${docSlug}`;
}

export function getLegalApp(appId: string): LegalApp | undefined {
  return legalApps.find((app) => app.id === appId);
}

export function getLegalDocument(
  appId: string,
  docSlug: string,
): { app: LegalApp; document: LegalDocument } | undefined {
  const app = getLegalApp(appId);
  const document = app?.documents.find((item) => item.slug === docSlug);
  if (!app || !document) return undefined;
  return { app, document };
}

export function getAllLegalAppParams(): { app: string }[] {
  return legalApps.map((app) => ({ app: app.id }));
}

export function getAllLegalDocumentParams(): { app: string; doc: string }[] {
  return legalApps.flatMap((app) =>
    app.documents.map((document) => ({ app: app.id, doc: document.slug })),
  );
}

export function getAllLegalSitemapEntries(): {
  path: string;
  lastModified?: string;
}[] {
  const entries: { path: string; lastModified?: string }[] = [
    { path: LEGAL_HUB_PATH },
  ];

  for (const app of legalApps) {
    entries.push({ path: legalAppPath(app.id) });
    for (const document of app.documents) {
      entries.push({
        path: legalDocumentPath(app.id, document.slug),
        lastModified: document.updatedISO,
      });
    }
  }

  for (const path of CIELOSTORIE_LEGAL_EN_PATHS) {
    entries.push({
      path,
      lastModified:
        path === CIELOSTORIE_PRIVACY_EN_PATH
          ? CIELOSTORIE_PRIVACY_UPDATED_ISO
          : path === CIELOSTORIE_TERMS_EN_PATH
            ? CIELOSTORIE_TERMS_UPDATED_ISO
            : CIELOSTORIE_SUPPORT_UPDATED_ISO,
    });
  }

  return entries;
}

export function documentHref(appId: string, document: LegalDocument): string {
  if (document.renderer === "cielostorie-privacy") {
    return CIELOSTORIE_PRIVACY_PATH;
  }
  if (document.renderer === "cielostorie-terms") {
    return CIELOSTORIE_TERMS_PATH;
  }
  if (document.renderer === "cielostorie-support") {
    return CIELOSTORIE_SUPPORT_PATH;
  }
  return legalDocumentPath(appId, document.slug);
}
