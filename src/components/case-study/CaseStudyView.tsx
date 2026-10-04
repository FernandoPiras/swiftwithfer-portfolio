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
import {
  FAMILYPLUS_DELETE_DATA_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_TERMS_PATH,
} from "@/config/familyplus-legal-paths";
import { cn, getStatusLabel, getWebsiteLinkLabel, isInternalHref } from "@/lib/utils";
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

function ProductVisualSection({
  section,
  priorityFirst = false,
}: {
  section: NonNullable<CaseStudyContent["productVisuals"]>[number];
  priorityFirst?: boolean;
}) {
  const layout = section.layout ?? (section.images.length === 1 ? "hero" : "pair");
  const isHero = layout === "hero";
  const hasIpad = section.images.some((image) => image.device === "ipad");
  const hasCanvas = section.images.some((image) => image.device === "canvas");

  return (
    <section aria-label={section.title}>
      <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
        {section.title}
      </h2>
      {section.description ? (
        <p className="mb-8 max-w-2xl text-sm text-muted">{section.description}</p>
      ) : (
        <div className="mb-8" />
      )}
      <ul
        className={cn(
          "grid justify-items-center gap-8 lg:gap-10",
          isHero && !hasCanvas && "mx-auto max-w-sm",
          isHero && hasCanvas && "mx-auto max-w-md",
          !isHero && section.images.length === 2 && "sm:grid-cols-2",
          !isHero && section.images.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3",
          hasIpad && !isHero && "sm:max-w-4xl sm:mx-auto",
        )}
      >
        {section.images.map((image, index) => {
          const isIpad = image.device === "ipad";
          const isCanvas = image.device === "canvas";
          return (
            <li
              key={image.src}
              className={cn(
                "w-full",
                isCanvas
                  ? isHero
                    ? "max-w-[320px] sm:max-w-[360px]"
                    : "max-w-[280px] sm:max-w-[300px]"
                  : isIpad
                    ? "max-w-[360px] sm:max-w-[400px]"
                    : "max-w-[260px]",
                isHero && !isIpad && !isCanvas && "max-w-[280px] sm:max-w-[300px]",
              )}
            >
              {isCanvas ? (
                <div className="relative aspect-[1290/2796] w-full overflow-hidden rounded-[1.75rem] bg-background/80 shadow-md ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isHero
                        ? "(max-width: 640px) 320px, 360px"
                        : "(max-width: 640px) 280px, 300px"
                    }
                    priority={priorityFirst && index === 0}
                    quality={82}
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <PhoneFrame
                  src={image.src}
                  alt={image.alt}
                  device={isIpad ? "ipad" : "iphone"}
                  size={isHero ? "hero" : "compact"}
                  priority={priorityFirst && index === 0}
                  className={cn(
                    "bg-background/80 ring-1 ring-black/5 dark:ring-white/10",
                    isIpad && "shadow-lg",
                  )}
                />
              )}
              {image.caption ? (
                <p className="mt-4 text-center text-xs text-muted">{image.caption}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ProductLegalLinks({ appId }: { appId: CaseStudyContent["appId"] }) {
  if (appId !== "familyplus") return null;

  const links = [
    { href: FAMILYPLUS_PRIVACY_PATH, label: "Privacy" },
    { href: FAMILYPLUS_TERMS_PATH, label: "Termini" },
    { href: FAMILYPLUS_SUPPORT_PATH, label: "Supporto" },
    { href: FAMILYPLUS_DELETE_DATA_PATH, label: "Eliminazione dati" },
  ] as const;

  return (
    <section aria-label="Informazioni legali Family Plus">
      <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
        Privacy e fiducia
      </h2>
      <p className="mb-6 max-w-2xl text-sm text-muted">
        Local-first. iCloud quando serve. Nessun account custom. Documentazione
        ufficiale allineata a Family Plus v1.1.2.
      </p>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-glass-border bg-background/50 px-4 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CaseStudyView({ study, app }: CaseStudyViewProps) {
  const statusStyles = {
    published: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
    beta: "bg-amber-500/12 text-amber-700 dark:text-amber-400",
    "in-development": "bg-blue-500/12 text-blue-700 dark:text-blue-400",
  };

  const architectureCaption = study.architecture || app.architecture;
  const isProductPresentation = study.presentation === "product";
  let chapter = 1;

  const productVisualStory =
    study.productVisuals && study.productVisuals.length > 1 ? (
      <div className="space-y-14 sm:space-y-16">
        {study.productVisuals.slice(1).map((section, index) => (
          <Reveal key={section.title} delay={0.04 + index * 0.02}>
            <ProductVisualSection section={section} />
          </Reveal>
        ))}
      </div>
    ) : null;

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
                <p className="text-eyebrow text-accent">
                  {isProductPresentation ? "Prodotto" : "Case Study"}
                </p>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    statusStyles[app.status],
                  )}
                >
                  {getStatusLabel(app.status)}
                </span>
              </div>
              {app.wordmark ? (
                <div className="mt-4 flex justify-center md:justify-start">
                  {app.wordmarkLight ? (
                    <>
                      <Image
                        src={app.wordmarkLight}
                        alt={app.name}
                        width={app.wordmarkSize?.width ?? 480}
                        height={app.wordmarkSize?.height ?? 160}
                        priority
                        className="h-10 w-auto object-contain sm:h-12 dark:hidden"
                      />
                      <Image
                        src={app.wordmark}
                        alt=""
                        width={app.wordmarkSize?.width ?? 480}
                        height={app.wordmarkSize?.height ?? 160}
                        priority
                        aria-hidden
                        className="hidden h-10 w-auto object-contain sm:h-12 dark:block"
                      />
                    </>
                  ) : (
                    <Image
                      src={app.wordmark}
                      alt={app.name}
                      width={app.wordmarkSize?.width ?? 480}
                      height={app.wordmarkSize?.height ?? 160}
                      priority
                      className={cn(
                        "h-10 w-auto object-contain sm:h-12",
                        app.wordmarkInk === "on-dark"
                          ? "brightness-0 dark:brightness-100"
                          : app.wordmarkInk === "on-light"
                            ? "dark:invert"
                            : undefined,
                      )}
                    />
                  )}
                  <h1 className="sr-only">{app.name}</h1>
                </div>
              ) : (
                <h1 className="text-section-title mt-2 text-foreground">{app.name}</h1>
              )}
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
                    variant={app.demoVideo ? "secondary" : undefined}
                    className="w-full sm:w-auto"
                  >
                    {app.demoVideo ? "App Store" : "Scarica su App Store"}
                  </ButtonLink>
                ) : null}
                {app.websiteUrl ? (
                  <ButtonLink
                    href={app.websiteUrl}
                    external={!isInternalHref(app.websiteUrl)}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    {getWebsiteLinkLabel(app.websiteUrl)}
                  </ButtonLink>
                ) : null}
                {app.businessUrl ? (
                  <ButtonLink
                    href={app.businessUrl}
                    external
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    {getWebsiteLinkLabel(app.businessUrl)}
                  </ButtonLink>
                ) : null}
              </div>
            </div>

            {study.productVisuals?.[0]?.images[0] ? (
              <div
                className={cn(
                  "hero-phone-stage mx-auto w-full shrink-0 md:mx-0",
                  study.productVisuals[0].images[0].device === "canvas"
                    ? "max-w-[300px] md:max-w-[280px] lg:max-w-[300px]"
                    : "max-w-[280px] md:max-w-[260px] lg:max-w-[280px]",
                )}
              >
                {study.productVisuals[0].images[0].device === "canvas" ? (
                  <div className="relative aspect-[1290/2796] w-full overflow-hidden rounded-[1.75rem] bg-background/80 shadow-md ring-1 ring-black/5 dark:ring-white/10">
                    <Image
                      src={study.productVisuals[0].images[0].src}
                      alt={study.productVisuals[0].images[0].alt}
                      fill
                      sizes="(max-width: 768px) 300px, 280px"
                      priority
                      quality={82}
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <PhoneFrame
                    src={study.productVisuals[0].images[0].src}
                    alt={study.productVisuals[0].images[0].alt}
                    device={
                      study.productVisuals[0].images[0].device === "ipad"
                        ? "ipad"
                        : "iphone"
                    }
                    size="hero"
                    priority
                    className="bg-background/80 ring-1 ring-black/5 dark:ring-white/10"
                  />
                )}
                <p className="hero-product-caption mt-4 text-center text-xs text-muted md:text-left">
                  {study.productVisuals[0].images[0].caption ?? "Schermata reale"}
                </p>
              </div>
            ) : null}
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
        {isProductPresentation && productVisualStory ? (
          <div className="pt-2">{productVisualStory}</div>
        ) : null}

        {study.ecosystem?.length ? (
          <Reveal>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                {isProductPresentation ? "Come si vive" : "L\u2019ecosistema"}
              </h2>
              <p className="mb-8 max-w-2xl text-sm text-muted">
                {isProductPresentation
                  ? "Il ritmo della casa, ciò che resta, il controllo quieto — un unico sistema."
                  : "Come si articola il prodotto: superfici chiare, un unico sistema."}
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
                  description={
                    group.items.length ? group.description : undefined
                  }
                >
                  {group.items.length ? (
                    <FeatureGrid items={group.items} />
                  ) : group.description ? (
                    <p>{group.description}</p>
                  ) : null}
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

            {!isProductPresentation ? (
              <>
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
              </>
            ) : (
              <StoryChapter
                index={chapter++}
                title="Scelte che contano"
                description="Pochi principi, tenuti con disciplina."
              >
                <DecisionsList decisions={study.decisions.slice(0, 4)} />
              </StoryChapter>
            )}

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

        {!isProductPresentation && productVisualStory}

        {isProductPresentation ? (
          <Reveal delay={0.06}>
            <ProductLegalLinks appId={study.appId} />
          </Reveal>
        ) : null}

        {!study.productVisuals?.length && app.screenshots.length > 0 ? (
        <Reveal delay={0.06}>
          <section aria-label={`Screenshot ${app.name}`}>
            <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
              Il prodotto in immagini
            </h2>
            <p className="mb-8 max-w-xl text-sm text-muted">
              Schermate reali del prodotto in uso — non mockup.
            </p>
            <ul className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {app.screenshots.map((screenshot, index) => (
                <li key={screenshot} className="w-full max-w-[260px]">
                  <PhoneFrame
                    src={screenshot}
                    alt={
                      app.screenshotAlts?.[index] ??
                      `Screenshot ${index + 1} di ${app.name}`
                    }
                    size="compact"
                  />
                  <p className="mt-4 text-center text-xs text-muted">
                    {app.screenshotAlts?.[index]?.split("—")[0]?.trim() ??
                      `Schermata ${index + 1}`}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
        ) : null}

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
