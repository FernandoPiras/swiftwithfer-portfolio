import Image from "next/image";
import Link from "next/link";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { documentHref, LEGAL_HUB_PATH } from "@/config/legal";
import type { LegalApp } from "@/config/legal/types";

function AppLegalCard({ app }: { app: LegalApp }) {
  return (
    <article className="h-full rounded-2xl border border-glass-border/80 bg-glass/60 p-6 transition hover:border-glass-border hover:bg-glass/90 sm:p-7">
      <div className="flex items-start gap-4">
        {app.icon ? (
          <Image
            src={app.icon}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl border border-glass-border/70"
          />
        ) : (
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-glass-border/70 bg-glass/80 text-sm font-semibold text-foreground"
          >
            {app.name.slice(0, 1)}
          </span>
        )}
        <div className="min-w-0">
          <h2 className="text-lg font-medium tracking-[-0.02em] text-foreground">
            <Link
              href={`${LEGAL_HUB_PATH}/${app.id}`}
              className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {app.name}
            </Link>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
            {app.blurb}
          </p>
          {app.caseStudyHref ? (
            <Link
              href={app.caseStudyHref}
              className="mt-2 inline-flex text-sm text-muted underline decoration-glass-border underline-offset-4 hover:text-foreground"
            >
              Case study
            </Link>
          ) : null}
        </div>
      </div>

      <ul className="mt-6 space-y-2">
        {app.documents.map((document) => (
          <li key={document.slug}>
            <Link
              href={documentHref(app.id, document)}
              className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {document.hubLabel}
              <span aria-hidden className="ml-1">
                →
              </span>
            </Link>
            {document.extraLocales?.map((locale) => (
              <Link
                key={locale.href}
                href={locale.href}
                className="ml-3 text-sm text-muted underline decoration-glass-border underline-offset-4 hover:text-foreground"
              >
                {locale.label}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function LegalHubView({ apps }: { apps: readonly LegalApp[] }) {
  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal" },
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-eyebrow mb-4 text-accent">Legal</p>
          <h1 className="text-display text-foreground text-balance">
            Informazioni legali
          </h1>
          <p className="text-lead mt-6 text-pretty">
            Informazioni legali, privacy e condizioni relative alle applicazioni
            sviluppate da Fernando Piras.
          </p>
        </header>

        <section className="mt-16" aria-labelledby="legal-apps-heading">
          <h2 id="legal-apps-heading" className="sr-only">
            Applicazioni
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {apps.map((app) => (
              <li key={app.id}>
                <AppLegalCard app={app} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
