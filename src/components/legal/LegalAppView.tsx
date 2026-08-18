import Image from "next/image";
import Link from "next/link";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { documentHref, LEGAL_HUB_PATH } from "@/config/legal";
import type { LegalApp } from "@/config/legal/types";

export function LegalAppView({ app }: { app: LegalApp }) {
  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal", href: LEGAL_HUB_PATH },
            { label: app.name },
          ]}
        />

        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            {app.icon ? (
              <Image
                src={app.icon}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl border border-glass-border/70"
              />
            ) : null}
            <div>
              <p className="text-eyebrow mb-2 text-accent">Legal</p>
              <h1 className="text-display text-foreground text-balance">
                {app.name}
              </h1>
            </div>
          </div>
          <p className="text-lead text-pretty">{app.blurb}</p>
        </header>

        <section className="mt-12" aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="text-section-title text-foreground">
            Documenti
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {app.documents.map((document) => (
              <li key={document.slug}>
                <Link
                  href={documentHref(app.id, document)}
                  className="block h-full rounded-2xl border border-glass-border/80 bg-glass/60 p-6 transition hover:border-glass-border hover:bg-glass/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-7"
                >
                  <h3 className="text-base font-medium text-foreground">
                    {document.hubLabel}
                  </h3>
                  {document.updatedDisplay ? (
                    <p className="mt-2 text-sm text-muted">
                      {document.updatedDisplay}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm font-medium text-accent">
                    Apri
                    <span aria-hidden> →</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
