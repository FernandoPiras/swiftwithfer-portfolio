import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudyContent } from "@/config/case-studies";
import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppDemoVideo } from "@/components/ui/AppDemoVideo";
import { AppStoreReviews } from "@/components/ui/AppStoreReviews";
import { GlassCard } from "@/components/ui/GlassCard";
import { getWebsiteLinkLabel } from "@/lib/utils";

interface CaseStudyViewProps {
  study: CaseStudyContent;
  app: AppProject;
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-muted sm:text-base">{children}</div>
    </section>
  );
}

export function CaseStudyView({ study, app }: CaseStudyViewProps) {
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+2rem)] pb-10 sm:pb-12">
        <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#apps"
            className="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            ← Torna alle app
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:mt-10 md:flex-row md:items-start md:text-left">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] shadow-lg shadow-black/10 ring-1 ring-black/5 sm:h-28 sm:w-28">
              <Image
                src={app.icon}
                alt={`Icona ${app.name}`}
                fill
                sizes="112px"
                priority
                className="object-cover"
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Case Study
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {app.name}
              </h1>
              <p className="mt-3 text-base font-medium text-accent sm:text-lg">{app.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {app.description}
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-start">
                {app.demoVideo ? (
                  <ButtonLink href="#demo" className="w-full sm:w-auto">
                    Guarda demo reale
                  </ButtonLink>
                ) : null}
                {app.appStoreUrl ? (
                  <ButtonLink href={app.appStoreUrl} external variant="secondary" className="w-full sm:w-auto">
                    App Store
                  </ButtonLink>
                ) : null}
                {app.websiteUrl ? (
                  <ButtonLink href={app.websiteUrl} external variant="secondary" className="w-full sm:w-auto">
                    {getWebsiteLinkLabel(app.websiteUrl)}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo — subito sotto l'hero per massima visibilità */}
      {app.demoVideo ? (
        <section
          id="demo"
          aria-label={`Demo reale ${app.name}`}
          className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-12"
        >
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Demo reale
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-muted sm:text-base">
            Registrazione diretta da iPhone mentre l&apos;app è in esecuzione — nessun mockup,
            l&apos;esperienza così com&apos;è su dispositivo.
          </p>
          <AppDemoVideo
            src={app.demoVideo.src}
            poster={app.demoVideo.poster}
            title={app.demoVideo.title}
            size="full"
          />
        </section>
      ) : null}

      {/* Content */}
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 sm:space-y-12 sm:px-6 sm:pb-20 md:pb-28">
        <GlassCard className="space-y-8 sm:space-y-10">
          <CaseSection title="Il problema">
            <p>{study.problem}</p>
          </CaseSection>

          <CaseSection title="La soluzione">
            <p>{study.solution}</p>
          </CaseSection>

          <CaseSection title="Funzionalità principali">
            <ul className="grid gap-2 sm:grid-cols-2">
              {study.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-xl border border-glass-border bg-background/40 px-3 py-2.5 text-sm text-foreground"
                >
                  <span className="mt-0.5 text-accent" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Tecnologie utilizzate">
            <ul className="flex flex-wrap gap-2">
              {app.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs text-foreground sm:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Sfide affrontate">
            <ul className="space-y-3">
              {study.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Risultato finale">
            <p>{study.result}</p>
          </CaseSection>
        </GlassCard>

        {/* Screenshots */}
        <section aria-label={`Screenshot ${app.name}`}>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Screenshot
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {app.screenshots.map((screenshot, index) => (
              <li
                key={screenshot}
                className="relative mx-auto aspect-[9/19.5] w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-glass-border bg-background/60 p-2 shadow-2xl shadow-black/10"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-black">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1} di ${app.name}`}
                    fill
                    sizes="(max-width: 640px) 220px, 260px"
                    className="object-cover object-top"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {app.reviews?.length ? (
          <GlassCard>
            <AppStoreReviews app={app} className="mt-0 border-0 pt-0" />
          </GlassCard>
        ) : null}

        {/* CTA */}
        <GlassCard className="text-center">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            Vuoi un&apos;app come {app.name}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {app.appStoreUrl ? (
              <ButtonLink href={app.appStoreUrl} external variant="primary" className="w-full sm:w-auto">
                Scarica su App Store
              </ButtonLink>
            ) : null}
            {app.websiteUrl ? (
              <ButtonLink href={app.websiteUrl} external variant="secondary" className="w-full sm:w-auto">
                {getWebsiteLinkLabel(app.websiteUrl)}
              </ButtonLink>
            ) : null}
            <ButtonLink
              href={`mailto:${siteConfig.email}?subject=Consulenza%20iOS%20-%20${encodeURIComponent(app.name)}`}
              external
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Contattami
            </ButtonLink>
          </div>
        </GlassCard>
      </div>
    </article>
  );
}
