import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { ServiziFaq } from "@/components/servizi/ServiziFaq";
import {
  serviziHub,
  servizioPages,
  type ServizioCluster,
} from "@/config/servizi";
import { siteConfig } from "@/config/site";
import { buildDirectMailto } from "@/config/discovery";

const clusterLabels: Partial<Record<ServizioCluster, string>> = {
  "bologna-app": "App a Bologna",
  "bologna-software": "Software e CRM",
  "bologna-web": "Web e siti",
  valsamoggia: "Valsamoggia",
  regionale: "Emilia-Romagna",
  specialistico: "Specialistici",
};

const clusterOrder: ServizioCluster[] = [
  "bologna-app",
  "bologna-software",
  "bologna-web",
  "valsamoggia",
  "regionale",
  "specialistico",
];

export function ServiziHubView() {
  const mailto = buildDirectMailto(siteConfig.email);

  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Servizi" },
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-eyebrow mb-4 text-accent">Servizi</p>
          <h1 className="text-display text-foreground text-balance">
            {serviziHub.title}
          </h1>
          <p className="text-lead mt-6 text-pretty">{serviziHub.lead}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
            {serviziHub.supporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={mailto}>Parliamone</ButtonLink>
            <ButtonLink href="/#apps" variant="secondary">
              Vedi i prodotti
            </ButtonLink>
          </div>
        </header>

        <section className="mt-20" aria-labelledby="pillars-heading">
          <h2 id="pillars-heading" className="text-section-title text-foreground">
            Aree di intervento
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {serviziHub.pillars.map((pillar) => (
              <li key={pillar.href}>
                <Link
                  href={pillar.href}
                  className="block h-full rounded-2xl border border-glass-border/80 bg-glass/60 p-6 transition hover:border-glass-border hover:bg-glass/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-7"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {clusterOrder.map((cluster) => {
          const pages = servizioPages.filter((page) => page.cluster === cluster);
          if (!pages.length) return null;
          const label = clusterLabels[cluster] ?? cluster;
          return (
            <section
              key={cluster}
              className="mt-20"
              aria-labelledby={`cluster-${cluster}`}
            >
              <h2
                id={`cluster-${cluster}`}
                className="text-section-title text-foreground"
              >
                {label}
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <GlassCard as="article" className="h-full p-6 sm:p-7">
                      <h3 className="text-base font-medium text-foreground">
                        <Link
                          href={`/servizi/${page.slug}`}
                          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {page.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {page.hubCardBlurb}
                      </p>
                      <Link
                        href={`/servizi/${page.slug}`}
                        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
                      >
                        Apri pagina
                      </Link>
                    </GlassCard>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section className="mt-20" aria-labelledby="proof-hub-heading">
          <h2
            id="proof-hub-heading"
            className="text-section-title text-foreground"
          >
            Prova nei prodotti live
          </h2>
          <p className="mt-4 max-w-3xl text-base text-muted">
            AndroMetrics e PreventivoRapido PRO sono pubblicati su App Store e
            documentati nei case study. Sono la base di credibilità di questa
            sezione servizi.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/apps/andrometrics"
              className="text-sm font-medium text-accent hover:underline"
            >
              Case study AndroMetrics
            </Link>
            <Link
              href="/apps/preventivorapido"
              className="text-sm font-medium text-accent hover:underline"
            >
              Case study PreventivoRapido PRO
            </Link>
            <a
              href={siteConfig.metrics.appStoreDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground"
            >
              Profilo sviluppatore App Store
            </a>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="guides-hub-heading">
          <h2
            id="guides-hub-heading"
            className="text-section-title text-foreground"
          >
            Guide e approfondimenti
          </h2>
          <p className="mt-4 max-w-3xl text-base text-muted">
            Approfondimenti su costi, tempi, scelte tecniche e rilascio —
            collegati a questi servizi.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex text-sm font-medium text-accent hover:underline"
          >
            Apri gli approfondimenti
          </Link>
        </section>

        <div className="mt-20">
          <ServiziFaq items={serviziHub.faq} />
        </div>

        <section className="mt-20">
          <GlassCard className="p-8 sm:p-10">
            <h2 className="text-section-title text-foreground">
              Parliamo del tuo progetto
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Se hai un problema operativo da risolvere con software, partiamo da
              lì — non da una lista di tecnologie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={mailto}>Scrivimi</ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Contatti
              </ButtonLink>
            </div>
          </GlassCard>
        </section>
      </div>
    </article>
  );
}
