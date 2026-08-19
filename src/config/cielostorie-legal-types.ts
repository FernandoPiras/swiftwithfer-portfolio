export type CieloStorieLegalLocale = "it" | "en";

export type CieloStorieLegalInline =
  | string
  | { href: string; label: string; external?: boolean };

export interface CieloStorieLegalSection {
  id: string;
  heading: string;
  paragraphs?: CieloStorieLegalInline[][];
  bullets?: CieloStorieLegalInline[][];
}

export type CieloStorieLegalDocKind = "privacy" | "terms" | "support";

export interface CieloStorieLegalDocument {
  kind: CieloStorieLegalDocKind;
  locale: CieloStorieLegalLocale;
  htmlLang: string;
  product: string;
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  updatedDisplay: string;
  updatedISO: string;
  tocLabel: string;
  languageLabel: string;
  languageCurrent: string;
  otherLanguageLabel: string;
  otherLanguageHref: string;
  breadcrumbHome: string;
  breadcrumbLegal: string;
  breadcrumbCurrent: string;
  metaTitle: string;
  metaDescription: string;
  contactEmail: string;
  sections: CieloStorieLegalSection[];
}
