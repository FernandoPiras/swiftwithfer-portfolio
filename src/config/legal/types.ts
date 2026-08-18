export type LegalDocKind =
  | "privacy"
  | "terms"
  | "support"
  | "delete-account";

export type LegalInline =
  | string
  | { href: string; label: string; external?: boolean }
  | { strong: string };

export type LegalBlock =
  | { type: "paragraph"; parts: LegalInline[] }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: LegalInline[][] }
  | { type: "ordered"; items: LegalInline[][] }
  | { type: "callout"; variant: "info" | "disclaimer"; parts: LegalInline[] }
  | { type: "faq"; title: string; parts: LegalInline[] };

export interface LegalSection {
  id: string;
  heading?: string;
  blocks: LegalBlock[];
}

export type LegalRenderer = "standard" | "cielostorie-privacy";

export interface LegalDocument {
  slug: string;
  kind: LegalDocKind;
  title: string;
  hubLabel: string;
  metaTitle: string;
  metaDescription: string;
  updatedISO?: string;
  updatedDisplay?: string;
  lead?: string;
  sections: LegalSection[];
  renderer?: LegalRenderer;
  extraLocales?: readonly { label: string; href: string }[];
}

export interface LegalApp {
  id: string;
  name: string;
  blurb: string;
  icon?: string;
  caseStudyHref?: string;
  documents: readonly LegalDocument[];
}
