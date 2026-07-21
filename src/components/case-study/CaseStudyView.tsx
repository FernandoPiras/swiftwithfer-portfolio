"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudyContent } from "@/config/case-studies";
import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppDemoVideo } from "@/components/ui/AppDemoVideo";
import { AppStoreReviews } from "@/components/ui/AppStoreReviews";
import { GlassCard } from "@/components/ui/GlassCard";
import { FlowSteps } from "@/components/ui/FlowSteps";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn, getStatusLabel, getWebsiteLinkLabel } from "@/lib/utils";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

interface CaseStudyViewProps {
  study: CaseStudyContent;
  app: AppProject;
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION.viewport}
      transition={{ duration: MOTION.duration.slow, delay, ease: EASE_OUT_SOFT }}
    >
      {children}
    </motion.div>
  );
}

function StoryChapter({
  index,
  title,
  description,
  children,
}: {
  index: number;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5 border-t border-glass-border/80 pt-10 first:border-t-0 first:pt-0 sm:space-y-6 sm:pt-14">
      <div className="flex items-baseline gap-3">
        <span className="text-eyebrow text-accent tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-1.5 text-sm text-muted">{description}</p>
          ) : null}
        </div>
      </div>
      <div className="text-sm leading-relaxed text-muted sm:text-base sm:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function FeatureGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2.5 rounded-lg border border-glass-border bg-background/40 px-3 py-2.5 text-sm text-foreground"
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

function SignalList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground sm:text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function DecisionsList({
  decisions,
}: {
  decisions: CaseStudyContent["decisions"];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {decisions.map((decision) => (
        <li
          key={decision.title}
          className="rounded-xl border border-glass-border bg-background/40 px-4 py-3"
        >
          <p className="text-sm font-semibold text-foreground">{decision.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{decision.reason}</p>
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

  const architectureCaption = study.architecture || app.architecture;
  let chapter = 1;

  return (
    <article>
      <section className="relative overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+2.5rem)] pb-14 sm:pb-16 md:pb-20">
        <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#apps"
            className="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            ← Torna ai progetti
          </Link>

          <div className="mt-10 flex flex-col items-center gap-8 text-center sm:mt-12 md:flex-row md:items-start md:gap-10 md:text-left">
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
                {study.positioning}
              </p>

              {study.trustSignals.length ? (
                <ul
                  className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start"
                  aria-label="Segnali di affidabilità"
                >
                  {study.trustSignals.map((signal) => (
                    <li
                      key={signal}
                      className="rounded-full border border-glass-border bg-background/50 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {signal}
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
        <Reveal>
          <section
            id="demo"
            aria-label={`Demo ${app.name}`}
            className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 md:pb-20 lg:px-8"
          >
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">Demo reale</h2>
            <p className="mb-8 mt-3 max-w-lg text-sm text-muted">
              Registrazione diretta da iPhone — il prodotto in uso, non un mockup.
            </p>
            <AppDemoVideo
              src={app.demoVideo.src}
              poster={app.demoVideo.poster}
              title={app.demoVideo.title}
              size="full"
            />
          </section>
        </Reveal>
      ) : null}

      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20 sm:space-y-16 sm:px-6 sm:pb-28 lg:px-8">
        {study.ecosystem?.length ? (
          <Reveal>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                L&apos;ecosistema
              </h2>
              <p className="mb-8 max-w-2xl text-sm text-muted">
                Tre superfici, una piattaforma: così Slotiva copre l&apos;intera attività.
              </p>
              <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6">
                {study.ecosystem.map((layer, index) => (
                  <li key={layer.title}>
                    <GlassCard className="premium-card h-full">
                      <p className="text-eyebrow text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-semibold text-foreground">{layer.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {layer.summary}
                      </p>
                    </GlassCard>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.04}>
          <GlassCard className="space-y-0">
            <StoryChapter index={chapter++} title="Il problema">
              <p>{study.problem}</p>
            </StoryChapter>

            <StoryChapter index={chapter++} title="La soluzione">
              <p>{study.solution}</p>
            </StoryChapter>

            {study.featureGroups?.length ? (
              study.featureGroups.map((group) => (
                <StoryChapter
                  key={group.title}
                  index={chapter++}
                  title={group.title}
                  description={group.description}
                >
                  <FeatureGrid items={group.items} />
                </StoryChapter>
              ))
            ) : (
              <StoryChapter index={chapter++} title="Funzionalità principali">
                <FeatureGrid items={study.features} />
              </StoryChapter>
            )}

            {study.architectureFlow.length ? (
              <StoryChapter
                index={chapter++}
                title="Architettura"
                description="Come è strutturato il sistema — flusso, non documentazione."
              >
                <div className="space-y-8">
                  <FlowSteps
                    steps={study.architectureFlow}
                    label={`Architettura di ${app.name}`}
                  />
                  {study.journeyFlow?.length ? (
                    <div className="space-y-4 border-t border-glass-border/60 pt-8">
                      <p className="text-eyebrow text-accent">Flusso operativo</p>
                      <FlowSteps
                        steps={study.journeyFlow}
                        label={`Flusso operativo di ${app.name}`}
                      />
                    </div>
                  ) : null}
                  {architectureCaption ? (
                    <p className="text-sm text-muted">{architectureCaption}</p>
                  ) : null}
                </div>
              </StoryChapter>
            ) : null}

            <StoryChapter
              index={chapter++}
              title="Decisioni tecniche"
              description="Scelte di prodotto e architettura che contano davvero."
            >
              <DecisionsList decisions={study.decisions} />
            </StoryChapter>

            <StoryChapter
              index={chapter++}
              title="Timeline del prodotto"
              description="Dal concetto alla produzione — e oltre."
            >
              <FlowSteps
                steps={study.productTimeline}
                label={`Timeline di ${app.name}`}
              />
            </StoryChapter>

            <StoryChapter
              index={chapter++}
              title="Qualità in produzione"
              description="Segnali che il prodotto è mantenuto, scalabile e pensato per il reale."
            >
              <div className="space-y-4">
                <SignalList
                  items={study.qualitySignals}
                  label="Segnali di qualità"
                />
                <SignalList
                  items={study.capabilities}
                  label="Capacità del sistema"
                />
              </div>
            </StoryChapter>

            <StoryChapter index={chapter++} title="Tecnologie">
              <ul className="flex flex-wrap gap-2">
                {app.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground sm:text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </StoryChapter>

            <StoryChapter index={chapter++} title="Sfide affrontate">
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
            </StoryChapter>

            <StoryChapter index={chapter++} title="Il risultato">
              <ul className="space-y-2.5">
                {study.results.map((result) => (
                  <li key={result} className="flex gap-3 text-foreground">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </StoryChapter>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.06}>
          <section aria-label={`Screenshot ${app.name}`}>
            <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
              Il prodotto in immagini
            </h2>
            <p className="mb-8 max-w-xl text-sm text-muted">
              Screenshot reali, stesso formato e stessa cornice — per leggere il prodotto senza rumore.
            </p>
            <ul className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {app.screenshots.map((screenshot, index) => (
                <li key={screenshot} className="w-full max-w-[260px]">
                  <PhoneFrame
                    src={screenshot}
                    alt={`Screenshot ${index + 1} di ${app.name}`}
                    size="compact"
                  />
                  <p className="mt-4 text-center text-xs text-muted">
                    Schermata {index + 1}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {app.reviews?.length ? (
          <Reveal delay={0.08}>
            <GlassCard>
              <AppStoreReviews app={app} className="mt-0 border-0 pt-0" />
            </GlassCard>
          </Reveal>
        ) : null}

        <Reveal delay={0.1}>
          <GlassCard className="text-center">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Vuoi un prodotto come {app.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              Dalla discovery al rilascio — un unico partner. Rispondo entro 48 ore lavorative.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </Reveal>
      </div>
    </article>
  );
}
