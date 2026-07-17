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
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn, getStatusLabel, getWebsiteLinkLabel } from "@/lib/utils";

interface CaseStudyViewProps {
  study: CaseStudyContent;
  app: AppProject;
}

function CaseSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-muted">{description}</p>
        ) : null}
      </div>
      <div className="text-sm leading-relaxed text-muted sm:text-base">{children}</div>
    </section>
  );
}

function FeatureGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2 rounded-lg border border-glass-border bg-background/40 px-3 py-2 text-sm text-foreground"
        >
          <span
            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          {feature}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyView({ study, app }: CaseStudyViewProps) {
  const statusStyles = {
    published: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
    beta: "bg-amber-500/12 text-amber-700 dark:text-amber-400",
    "in-development": "bg-blue-500/12 text-blue-700 dark:text-blue-400",
  };

  return (
    <article>
      <section className="relative overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+2rem)] pb-10 sm:pb-14">
        <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#apps"
            className="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            ← Torna ai progetti
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:mt-10 md:flex-row md:items-start md:gap-8 md:text-left">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-black/5 sm:h-28 sm:w-28">
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
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <p className="text-eyebrow text-accent">Case Study</p>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    statusStyles[app.status],
                  )}
                >
                  {getStatusLabel(app.status)}
                </span>
              </div>
              <h1 className="text-section-title mt-2 text-foreground">{app.name}</h1>
              <p className="mt-3 text-base font-medium text-accent">{app.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {app.description}
              </p>

              {app.outcomes?.length ? (
                <ul className="mt-5 space-y-2 text-left">
                  {app.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-start">
                {app.demoVideo ? (
                  <ButtonLink href="#demo" className="w-full sm:w-auto">
                    Guarda demo
                  </ButtonLink>
                ) : null}
                {app.appStoreUrl ? (
                  <ButtonLink
                    href={app.appStoreUrl}
                    external
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    App Store
                  </ButtonLink>
                ) : null}
                {app.websiteUrl ? (
                  <ButtonLink
                    href={app.websiteUrl}
                    external
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    {getWebsiteLinkLabel(app.websiteUrl)}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {app.demoVideo ? (
        <section
          id="demo"
          aria-label={`Demo ${app.name}`}
          className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14"
        >
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Demo reale</h2>
          <p className="mb-6 mt-2 max-w-lg text-sm text-muted">
            Registrazione diretta da iPhone — nessun mockup.
          </p>
          <AppDemoVideo
            src={app.demoVideo.src}
            poster={app.demoVideo.poster}
            title={app.demoVideo.title}
            size="full"
          />
        </section>
      ) : null}

      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 sm:space-y-12 sm:px-6 sm:pb-24">
        <GlassCard className="space-y-8 sm:space-y-10">
          <CaseSection title="Il problema">
            <p>{study.problem}</p>
          </CaseSection>

          <CaseSection title="La soluzione">
            <p>{study.solution}</p>
          </CaseSection>

          {app.architecture ? (
            <CaseSection title="Architettura">
              <p>{app.architecture}</p>
            </CaseSection>
          ) : null}

          {study.featureGroups?.length ? (
            study.featureGroups.map((group) => (
              <CaseSection
                key={group.title}
                title={group.title}
                description={group.description}
              >
                <FeatureGrid items={group.items} />
              </CaseSection>
            ))
          ) : (
            <CaseSection title="Funzionalità">
              <FeatureGrid items={study.features} />
            </CaseSection>
          )}

          <CaseSection title="Stack tecnico">
            <ul className="flex flex-wrap gap-2">
              {app.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Sfide">
            <ul className="space-y-2.5">
              {study.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Risultati">
            <ul className="space-y-2.5">
              {study.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </CaseSection>
        </GlassCard>

        <section aria-label={`Screenshot ${app.name}`}>
          <h2 className="mb-6 text-lg font-semibold text-foreground sm:text-xl">
            Screenshot
          </h2>
          <ul className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {app.screenshots.map((screenshot, index) => (
              <li key={screenshot}>
                <PhoneFrame
                  src={screenshot}
                  alt={`Screenshot ${index + 1} di ${app.name}`}
                  size="compact"
                />
              </li>
            ))}
          </ul>
        </section>

        {app.reviews?.length ? (
          <GlassCard>
            <AppStoreReviews app={app} className="mt-0 border-0 pt-0" />
          </GlassCard>
        ) : null}

        <GlassCard className="text-center">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Vuoi un prodotto come {app.name}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Raccontami la tua idea — rispondo entro 48 ore lavorative.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={`mailto:${siteConfig.email}?subject=Consulenza%20-%20${encodeURIComponent(app.name)}`}
              external
              className="w-full sm:w-auto"
            >
              Contattami
            </ButtonLink>
            {app.appStoreUrl ? (
              <ButtonLink
                href={app.appStoreUrl}
                external
                variant="secondary"
                className="w-full sm:w-auto"
              >
                App Store
              </ButtonLink>
            ) : null}
          </div>
        </GlassCard>
      </div>
    </article>
  );
}
