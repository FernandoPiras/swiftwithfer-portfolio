import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { BlogMobileToc } from "@/components/blog/BlogArticleChrome";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  LEGAL_HUB_PATH,
  legalAppPath,
  legalDocumentPath,
} from "@/config/legal";
import type {
  LegalApp,
  LegalBlock,
  LegalDocument,
  LegalInline,
} from "@/config/legal/types";
import { siteConfig } from "@/config/site";

function InlineText({ parts }: { parts: LegalInline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }

        if ("strong" in part) {
          return <strong key={index}>{part.strong}</strong>;
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

        if (part.href.startsWith("/")) {
          return (
            <Link
              key={index}
              href={part.href}
              className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {part.label}
            </Link>
          );
        }

        return (
          <a
            key={index}
            href={part.href}
            className="font-medium text-foreground underline decoration-glass-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

function BlockList({ block }: { block: Extract<LegalBlock, { type: "bullets" | "ordered" }> }) {
  const List = block.type === "ordered" ? "ol" : "ul";
  const itemClass =
    block.type === "ordered"
      ? "list-decimal pl-1"
      : "";

  return (
    <List
      className={`mt-5 max-w-3xl space-y-2 ${block.type === "ordered" ? "list-decimal pl-5" : ""}`}
    >
      {block.items.map((item, index) => (
        <li
          key={index}
          className={`rounded-xl border border-glass-border/70 bg-glass/40 px-4 py-3 text-sm leading-relaxed text-foreground ${itemClass}`}
        >
          <InlineText parts={item} />
        </li>
      ))}
    </List>
  );
}

function DocumentBlocks({ blocks }: { blocks: readonly LegalBlock[] }) {
  return (
    <div className="mt-5 space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="max-w-3xl text-base leading-[1.75] text-muted text-pretty"
            >
              <InlineText parts={block.parts} />
            </p>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3
              key={index}
              className="pt-2 text-base font-semibold tracking-[-0.02em] text-foreground"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={index}
              className="max-w-3xl rounded-2xl border border-glass-border/80 bg-glass/50 px-5 py-4 text-sm leading-relaxed text-foreground"
            >
              <InlineText parts={block.parts} />
            </div>
          );
        }

        if (block.type === "faq") {
          return (
            <div
              key={index}
              className="max-w-3xl rounded-2xl border border-glass-border/70 bg-glass/40 px-5 py-4"
            >
              <p className="text-sm font-semibold text-foreground">{block.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <InlineText parts={block.parts} />
              </p>
            </div>
          );
        }

        return <BlockList key={index} block={block} />;
      })}
    </div>
  );
}

export function LegalDocumentView({
  app,
  document,
}: {
  app: LegalApp;
  document: LegalDocument;
}) {
  const tocSections = document.sections
    .filter((section) => section.heading)
    .map((section) => ({ id: section.id, heading: section.heading! }));

  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal", href: LEGAL_HUB_PATH },
            { label: app.name, href: legalAppPath(app.id) },
            { label: document.title },
          ]}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-14">
          <div className="min-w-0">
            <header className="max-w-3xl">
              <p className="text-eyebrow mb-4 text-accent">{app.name}</p>
              <h1 className="text-display text-foreground text-balance">
                {document.title}
              </h1>
              {document.lead ? (
                <p className="text-lead mt-6 text-pretty">{document.lead}</p>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-glass-border/70 py-4">
                {document.updatedDisplay ? (
                  <p className="text-sm text-muted">
                    <span className="font-medium text-foreground">
                      Ultimo aggiornamento
                    </span>
                    {" · "}
                    {document.updatedISO ? (
                      <time dateTime={document.updatedISO}>
                        {document.updatedDisplay}
                      </time>
                    ) : (
                      document.updatedDisplay
                    )}
                  </p>
                ) : null}
                <nav aria-label="Altri documenti" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {app.documents.map((item) => (
                    <Link
                      key={item.slug}
                      href={legalDocumentPath(app.id, item.slug)}
                      aria-current={item.slug === document.slug ? "page" : undefined}
                      className={
                        item.slug === document.slug
                          ? "font-medium text-foreground"
                          : "text-muted underline decoration-glass-border underline-offset-4 transition-colors hover:text-foreground"
                      }
                    >
                      {item.hubLabel}
                    </Link>
                  ))}
                </nav>
              </div>
            </header>

            {tocSections.length > 1 ? (
              <BlogMobileToc
                sections={tocSections}
                summaryLabel="Indice"
              />
            ) : null}

            <div className="mt-4 space-y-14">
              {document.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={
                    section.heading ? `heading-${section.id}` : undefined
                  }
                  className="scroll-mt-[calc(var(--header-offset)+1rem)]"
                >
                  {section.heading ? (
                    <h2
                      id={`heading-${section.id}`}
                      className="text-section-title text-foreground"
                    >
                      {section.heading}
                    </h2>
                  ) : null}
                  <DocumentBlocks blocks={section.blocks} />
                </section>
              ))}
            </div>

            <section className="mt-16 max-w-3xl" aria-labelledby="legal-contact-cta">
              <GlassCard className="p-6 sm:p-8">
                <h2
                  id="legal-contact-cta"
                  className="text-lg font-semibold tracking-[-0.02em] text-foreground"
                >
                  Serve un chiarimento?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Scrivi all’indirizzo indicato in questo documento. Non è un modulo di marketing.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${siteConfig.email}`}>
                    Scrivi
                  </ButtonLink>
                  <ButtonLink href={LEGAL_HUB_PATH} variant="secondary">
                    Tutti i documenti
                  </ButtonLink>
                </div>
              </GlassCard>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-offset)+1rem)] space-y-4">
              {tocSections.length ? (
                <GlassCard className="p-5">
                  <p className="text-sm font-medium text-foreground">Indice</p>
                  <nav aria-label="Indice del documento" className="mt-3">
                    <ol className="space-y-2.5">
                      {tocSections.map((section) => (
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
              ) : null}
              <GlassCard className="p-5">
                <p className="text-xs text-muted">{app.name}</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Titolare · contatto legale
                </p>
              </GlassCard>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
