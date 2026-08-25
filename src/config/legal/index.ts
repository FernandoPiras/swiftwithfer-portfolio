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
import {
  FAMILYPLUS_LEGAL_EN_PATHS,
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_PRIVACY_UPDATED_ISO,
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_SUPPORT_UPDATED_ISO,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
  FAMILYPLUS_TERMS_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

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
    icon: "/images/apps/cielostorie/icon.png",
    caseStudyHref: "/apps/cielostorie",
    documents: [
      {
        slug: "privacy",
        kind: "privacy",
        title: "Informativa sulla privacy",
        hubLabel: "Privacy Policy",
        metaTitle: "Privacy Policy — CieloStorie",
        metaDescription:
          "Informativa sulla privacy di CieloStorie: app gratuita, dati locali sul dispositivo, nessuna raccolta dati tramite l’app.",
        updatedISO: CIELOSTORIE_PRIVACY_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
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
          "Termini di utilizzo di CieloStorie: app gratuita, uso familiare, storie e funzioni senza acquisti in-app e proprietà intellettuale.",
        updatedISO: CIELOSTORIE_TERMS_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
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
          "Supporto ufficiale CieloStorie: Reader, profili bambini, preferiti, audio e risoluzione problemi.",
        updatedISO: CIELOSTORIE_SUPPORT_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
        sections: [],
        renderer: "cielostorie-support",
        extraLocales: [{ label: "English", href: CIELOSTORIE_SUPPORT_EN_PATH }],
      },
    ],
  },
  {
    id: "familyplus",
    name: "Family Plus",
    blurb:
      "Organizer famigliare local-first con iCloud/CloudKit: privacy, termini e supporto dell’app iOS e iPadOS, inclusa la pubblicità AdMob/UMP.",
    icon: "/images/apps/familyplus/icon.png",
    documents: [
      {
        slug: "privacy",
        kind: "privacy",
        title: "Informativa sulla privacy",
        hubLabel: "Privacy Policy",
        metaTitle: "Family Plus — Privacy Policy",
        metaDescription:
          "Informativa privacy di Family Plus: dati locali, iCloud/CloudKit, condivisione famiglia, Google AdMob, UMP e scelte pubblicitarie.",
        updatedISO: FAMILYPLUS_PRIVACY_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
        sections: [],
        renderer: "familyplus-privacy",
        extraLocales: [{ label: "English", href: FAMILYPLUS_PRIVACY_EN_PATH }],
      },
      {
        slug: "terms",
        kind: "terms",
        title: "Termini di utilizzo",
        hubLabel: "Termini di utilizzo",
        metaTitle: "Family Plus — Terms of Use",
        metaDescription:
          "Termini di utilizzo di Family Plus: app gratuita con pubblicità, iCloud, spazi famiglia, contenuti utente e responsabilità.",
        updatedISO: FAMILYPLUS_TERMS_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
        sections: [],
        renderer: "familyplus-terms",
        extraLocales: [{ label: "English", href: FAMILYPLUS_TERMS_EN_PATH }],
      },
      {
        slug: "support",
        kind: "support",
        title: "Supporto",
        hubLabel: "Supporto",
        metaTitle: "Family Plus — Support",
        metaDescription:
          "Supporto ufficiale Family Plus: famiglia iCloud, sync, moduli organizer, promemoria, lingua e privacy pubblicitaria.",
        updatedISO: FAMILYPLUS_SUPPORT_UPDATED_ISO,
        updatedDisplay: "25 agosto 2026",
        sections: [],
        renderer: "familyplus-support",
        extraLocales: [{ label: "English", href: FAMILYPLUS_SUPPORT_EN_PATH }],
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
        path: documentHref(app.id, document),
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

  for (const path of FAMILYPLUS_LEGAL_EN_PATHS) {
    entries.push({
      path,
      lastModified:
        path === FAMILYPLUS_PRIVACY_EN_PATH
          ? FAMILYPLUS_PRIVACY_UPDATED_ISO
          : path === FAMILYPLUS_TERMS_EN_PATH
            ? FAMILYPLUS_TERMS_UPDATED_ISO
            : FAMILYPLUS_SUPPORT_UPDATED_ISO,
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
  if (document.renderer === "familyplus-privacy") {
    return FAMILYPLUS_PRIVACY_PATH;
  }
  if (document.renderer === "familyplus-terms") {
    return FAMILYPLUS_TERMS_PATH;
  }
  if (document.renderer === "familyplus-support") {
    return FAMILYPLUS_SUPPORT_PATH;
  }
  return legalDocumentPath(appId, document.slug);
}
