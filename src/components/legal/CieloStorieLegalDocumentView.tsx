import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { BlogCallout, BlogMobileToc } from "@/components/blog/BlogArticleChrome";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import type {
  CieloStorieLegalDocument,
  CieloStorieLegalInline,
} from "@/config/cielostorie-legal-types";
import { siteConfig } from "@/config/site";

function InlineText({ parts }: { parts: CieloStorieLegalInline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }

        const isExternal =
          part.external ?? (!part.href.startsWith("/") && !part.href.startsWith("mailto:"));

        if (part.href.startsWith("mailto:")) {
          return (
            <a
              key={index}
              href={part.href}
              className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {part.label}
            </a>
          );
        }

        if (part.href.startsWith("/")) {
          return (
            <Link
              key={index}
              href={part.href}
              className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {part.label}
            </Link>
          );
        }

        return (
          <a
            key={index}
            href={part.href}
            className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {part.label}
          </a>
        );
      })}
    </>
  );
}

function summaryFor(doc: CieloStorieLegalDocument): { title: string; body: string } {
  switch (doc.kind) {
    case "privacy":
      return doc.locale === "it"
        ? {
            title: "In sintesi",
            body: "CieloStorie è gratuita, senza account. I profili e i progressi restano sul dispositivo. La versione gratuita può mostrare annunci Google configurati in modo non personalizzato e child-directed; se il consenso non è disponibile, gli annunci non partono e le storie restano leggibili.",
          }
        : {
            title: "In short",
            body: "CieloStorie is free and has no account. Profiles and progress stay on the device. The free version may show Google ads configured as non-personalized and child-directed; if consent is unavailable, ads do not run and stories remain readable.",
          };
    case "terms":
      return doc.locale === "it"
        ? {
            title: "In sintesi",
            body: "Tutte le storie restano gratuite. La pubblicità compare solo fuori dal Reader. Rimuovi pubblicità è un acquisto una tantum gestito da Apple. L’area genitori protegge profili, acquisti e opzioni privacy.",
          }
        : {
            title: "In short",
            body: "Every story stays free. Ads appear only outside the Reader. Remove Ads is a one-time Apple-managed purchase. The Parent Area protects profiles, purchases, and privacy options.",
          };
    case "support":
      return doc.locale === "it"
        ? {
            title: "Prima di scrivere",
            body: "Includi versione app, modello dispositivo e passaggi per riprodurre il problema. Per acquisti e rimborsi usa spesso Ripristina acquisti o l’assistenza Apple.",
          }
        : {
            title: "Before you write",
            body: "Include app version, device model, and steps to reproduce. For purchases and refunds, try Restore Purchases or Apple support first.",
          };
  }
}

function contactCopy(doc: CieloStorieLegalDocument): {
  heading: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
} {
  switch (doc.kind) {
    case "privacy":
      return doc.locale === "it"
        ? {
            heading: "Serve un chiarimento?",
            body: "Scrivi all’indirizzo indicato in questa informativa. Non è un modulo di marketing: è il contatto privacy del prodotto.",
            primaryLabel: "Scrivi per la privacy",
            secondaryLabel: "Tutti i documenti",
          }
        : {
            heading: "Need a clarification?",
            body: "Write to the address in this policy. This is the product privacy contact, not a marketing form.",
            primaryLabel: "Email privacy",
            secondaryLabel: "All legal pages",
          };
    case "terms":
      return doc.locale === "it"
        ? {
            heading: "Domande sui Termini?",
            body: "Per chiarimenti su questi Termini di utilizzo scrivi all’indirizzo di contatto del prodotto.",
            primaryLabel: "Scrivi al supporto",
            secondaryLabel: "Tutti i documenti",
          }
        : {
            heading: "Questions about these Terms?",
            body: "For clarifications about these Terms of Use, email the product contact address.",
            primaryLabel: "Email support",
            secondaryLabel: "All legal pages",
          };
    case "support":
      return doc.locale === "it"
        ? {
            heading: "Serve aiuto?",
            body: "Descrivi il problema con versione app e dispositivo. Rispondiamo via email entro circa 2 giorni lavorativi.",
            primaryLabel: "Scrivi al supporto",
            secondaryLabel: "Tutti i documenti",
          }
        : {
            heading: "Need help?",
            body: "Describe the issue with app version and device. We reply by email within about 2 business days.",
            primaryLabel: "Email support",
            secondaryLabel: "All legal pages",
          };
  }
}

export function CieloStorieLegalDocumentView({
  doc,
}: {
  doc: CieloStorieLegalDocument;
}) {
  const summary = summaryFor(doc);
  const contact = contactCopy(doc);
  const ownerLabel =
    doc.kind === "privacy"
      ? doc.locale === "it"
        ? "Titolare · contatto privacy"
        : "Controller · privacy contact"
      : doc.locale === "it"
        ? "Prodotto · supporto"
        : "Product · support";

  return (
    <article
      lang={doc.htmlLang}
      className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: doc.breadcrumbHome, href: "/" },
            { label: doc.breadcrumbLegal, href: "/legal" },
            { label: doc.breadcrumbCurrent },
          ]}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-14">
          <div className="min-w-0">
            <header className="max-w-3xl">
              <p className="text-eyebrow mb-4 text-accent">{doc.eyebrow}</p>
              <h1 className="text-display text-foreground text-balance">
                {doc.title}
              </h1>
              <p className="text-lead mt-6 text-pretty">{doc.lead}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-glass-border/70 py-4">
                <p className="text-sm text-muted">
                  <span className="font-medium text-foreground">
                    {doc.updatedLabel}
                  </span>
                  {" · "}
                  <time dateTime={doc.updatedISO}>{doc.updatedDisplay}</time>
                </p>
                <p
                  className="text-sm text-muted"
                  aria-label={doc.languageLabel}
                >
                  <span className="font-medium text-foreground">
                    {doc.languageCurrent}
                  </span>
                  {" · "}
                  <Link
                    href={doc.otherLanguageHref}
                    hrefLang={doc.locale === "it" ? "en" : "it"}
                    className="underline decoration-glass-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {doc.otherLanguageLabel}
                  </Link>
                </p>
              </div>
            </header>

            <BlogCallout title={summary.title} body={summary.body} />
            <BlogMobileToc
              sections={doc.sections}
              summaryLabel={doc.tocLabel}
            />

            <div className="mt-4 space-y-14">
              {doc.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`heading-${section.id}`}
                  className="scroll-mt-[calc(var(--header-offset)+1rem)]"
                >
                  <h2
                    id={`heading-${section.id}`}
                    className="text-section-title text-foreground"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs?.map((paragraph, index) => (
                      <p
                        key={`${section.id}-p-${index}`}
                        className="max-w-3xl text-base leading-[1.75] text-muted text-pretty"
                      >
                        <InlineText parts={paragraph} />
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 max-w-3xl space-y-2">
                      {section.bullets.map((bullet, index) => (
                        <li
                          key={`${section.id}-b-${index}`}
                          className="rounded-xl border border-glass-border/70 bg-glass/40 px-4 py-3 text-sm leading-relaxed text-foreground"
                        >
                          <InlineText parts={bullet} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-16 max-w-3xl" aria-labelledby="legal-contact-cta">
              <GlassCard className="p-6 sm:p-8">
                <h2
                  id="legal-contact-cta"
                  className="text-lg font-semibold tracking-[-0.02em] text-foreground"
                >
                  {contact.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {contact.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${siteConfig.email}`}>
                    {contact.primaryLabel}
                  </ButtonLink>
                  <ButtonLink href="/legal" variant="secondary">
                    {contact.secondaryLabel}
                  </ButtonLink>
                </div>
              </GlassCard>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-offset)+1rem)] space-y-4">
              <GlassCard className="p-5">
                <p className="text-sm font-medium text-foreground">
                  {doc.tocLabel}
                </p>
                <nav aria-label={doc.tocLabel} className="mt-3">
                  <ol className="space-y-2.5">
                    {doc.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm leading-snug text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </GlassCard>
              <GlassCard className="p-5">
                <p className="text-xs text-muted">{doc.product}</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {ownerLabel}
                </p>
              </GlassCard>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

/** @deprecated Use CieloStorieLegalDocumentView */
export function CieloStoriePrivacyView({
  doc,
}: {
  doc: CieloStorieLegalDocument;
}) {
  return <CieloStorieLegalDocumentView doc={doc} />;
}
