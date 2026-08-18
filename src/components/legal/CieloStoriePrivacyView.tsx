import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { BlogCallout, BlogMobileToc } from "@/components/blog/BlogArticleChrome";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import type {
  PrivacyDocument,
  PrivacyInline,
} from "@/config/cielostorie-privacy";
import { CIELOSTORIE_PRIVACY_UPDATED_ISO } from "@/config/cielostorie-privacy";
import { siteConfig } from "@/config/site";

function InlineText({ parts }: { parts: PrivacyInline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }

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

        return (
          <a
            key={index}
            href={part.href}
            className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            {...(part.external
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

export function CieloStoriePrivacyView({ doc }: { doc: PrivacyDocument }) {
  const summary =
    doc.locale === "it"
      ? "CieloStorie è gratuita, senza account. I profili e i progressi restano sul dispositivo. La versione gratuita può mostrare annunci Google configurati in modo non personalizzato e child-directed; se il consenso non è disponibile, gli annunci non partono e le storie restano leggibili."
      : "CieloStorie is free and has no account. Profiles and progress stay on the device. The free version may show Google ads configured as non-personalized and child-directed; if consent is unavailable, ads do not run and stories remain readable.";

  const summaryTitle = doc.locale === "it" ? "In sintesi" : "In short";

  return (
    <article
      lang={doc.htmlLang}
      className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: doc.breadcrumbHome, href: "/" },
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
                  <time dateTime={CIELOSTORIE_PRIVACY_UPDATED_ISO}>
                    {doc.updatedDisplay}
                  </time>
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

            <BlogCallout title={summaryTitle} body={summary} />
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
                    {section.paragraphs.map((paragraph, index) => (
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

            <section className="mt-16 max-w-3xl" aria-labelledby="privacy-contact-cta">
              <GlassCard className="p-6 sm:p-8">
                <h2
                  id="privacy-contact-cta"
                  className="text-lg font-semibold tracking-[-0.02em] text-foreground"
                >
                  {doc.locale === "it" ? "Serve un chiarimento?" : "Need a clarification?"}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {doc.locale === "it"
                    ? "Scrivi all’indirizzo indicato in questa informativa. Non è un modulo di marketing: è il contatto privacy del prodotto."
                    : "Write to the address in this policy. This is the product privacy contact, not a marketing form."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${siteConfig.email}`}>
                    {doc.locale === "it" ? "Scrivi per la privacy" : "Email privacy"}
                  </ButtonLink>
                  <ButtonLink href="/" variant="secondary">
                    {doc.locale === "it" ? "Torna al sito" : "Back to the site"}
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
                  {doc.locale === "it"
                    ? "Titolare · contatto privacy"
                    : "Controller · privacy contact"}
                </p>
              </GlassCard>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
