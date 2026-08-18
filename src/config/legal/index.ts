import { andrometricsDocuments } from "@/config/legal/andrometrics";
import { preventivoRapidoDocuments } from "@/config/legal/preventivo-rapido";
import type { LegalApp, LegalDocument } from "@/config/legal/types";
import {
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_PATH,
} from "@/config/cielostorie-privacy";

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
    blurb: "Documentazione legale ufficiale dell'app.",
    icon: "/images/apps/preventivorapido/icon.png",
    caseStudyHref: "/apps/preventivorapido",
    documents: preventivoRapidoDocuments,
  },
  {
    id: "cielostorie",
    name: "CieloStorie",
    blurb:
      "Informativa sulla privacy dell'app: dati locali, pubblicità, consenso e acquisti.",
    documents: [
      {
        slug: "privacy",
        kind: "privacy",
        title: "Informativa sulla privacy",
        hubLabel: "Privacy Policy",
        metaTitle: "Privacy Policy — CieloStorie",
        metaDescription:
          "Informativa sulla privacy di CieloStorie, inclusi dati locali, pubblicità, consenso, acquisti e servizi di terze parti.",
        updatedISO: "2026-08-18",
        updatedDisplay: "18 agosto 2026",
        sections: [],
        renderer: "cielostorie-privacy",
        extraLocales: [{ label: "English", href: CIELOSTORIE_PRIVACY_EN_PATH }],
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

  entries.push({
    path: CIELOSTORIE_PRIVACY_EN_PATH,
    lastModified: "2026-08-18",
  });

  return entries;
}

export function documentHref(appId: string, document: LegalDocument): string {
  if (document.renderer === "cielostorie-privacy") {
    return CIELOSTORIE_PRIVACY_PATH;
  }
  return legalDocumentPath(appId, document.slug);
}
