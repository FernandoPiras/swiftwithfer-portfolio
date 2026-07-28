"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { slotivaSales } from "@/config/slotiva-sales";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SlotivaSalesViewProps {
  app: AppProject;
}

function SectionShell({
  id,
  children,
  className,
  alt,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-glass-border/70 py-14 sm:py-16 md:py-20",
        alt && "bg-section-alt/60",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-eyebrow text-accent">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}

function BrowserFrame({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-glass-border bg-background shadow-lg ring-1 ring-black/5 dark:ring-white/5",
        className,
      )}
    >
      <div
        className="flex items-center gap-1.5 border-b border-glass-border bg-section-alt/80 px-3 py-2"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-[#0b0f14]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}

function OutcomeCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <li className="border-t border-glass-border/80 pt-5 first:border-t-0 first:pt-0 sm:border-t-0 sm:border-l sm:border-glass-border/80 sm:pl-5 sm:pt-0 sm:first:border-l-0 sm:first:pl-0">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </li>
  );
}

export function SlotivaSalesView({ app }: SlotivaSalesViewProps) {
  const demoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(slotivaSales.cta.mailSubject)}`;
  const discussHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Slotiva — parliamo della mia attività")}`;

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+1.5rem)] pb-12 sm:pb-16 md:pb-20">
        <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#apps"
            className="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            ← Torna ai progetti
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div>
              {app.wordmark ? (
                <Image
                  src={app.wordmark}
                  alt="Slotiva"
                  width={app.wordmarkSize?.width ?? 931}
                  height={app.wordmarkSize?.height ?? 128}
                  priority
                  className={cn(
                    "h-9 w-auto sm:h-11",
                    app.wordmarkInk === "on-light" && "dark:invert",
                  )}
                />
              ) : (
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {slotivaSales.hero.brand}
                </p>
              )}

              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
                {slotivaSales.hero.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {slotivaSales.hero.value}
              </p>
              <p className="mt-3 max-w-xl text-sm text-muted">{slotivaSales.hero.who}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={demoHref} external className="w-full sm:w-auto">
                  {slotivaSales.hero.primaryCta}
                </ButtonLink>
                <ButtonLink
                  href="#ecosistema"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {slotivaSales.hero.secondaryCta}
                </ButtonLink>
              </div>

              <ul
                className="mt-8 flex flex-wrap gap-2"
                aria-label="Canali live"
              >
                {["App Store", "www.slotiva.it", "business.slotiva.it"].map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-full border border-glass-border bg-background/50 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="relative">
              <BrowserFrame
                src="/images/apps/slotiva/brain/pulse-hero.jpg"
                alt="Slotiva Business Brain — Pulse"
                priority
              />
              <p className="mt-3 text-center text-xs text-muted lg:text-left">
                Business Portal · Pulse in produzione
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Problem ──────────────────────────────────────────── */}
      <SectionShell alt>
        <Reveal>
          <SectionIntro
            eyebrow="01 — Problema"
            title={slotivaSales.problem.title}
            body={slotivaSales.problem.body}
          />
        </Reveal>
      </SectionShell>

      {/* ── Ecosystem ────────────────────────────────────────── */}
      <SectionShell id="ecosistema">
        <Reveal>
          <SectionIntro
            eyebrow="02 — Ecosistema"
            title={slotivaSales.ecosystem.title}
            body={slotivaSales.ecosystem.body}
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {slotivaSales.ecosystem.steps.map((step, index) => (
              <li key={step.label} className="relative">
                <p className="text-eyebrow text-accent tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
                {index < slotivaSales.ecosystem.steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-2 top-8 hidden text-muted/40 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </SectionShell>

      {/* ── Consumer ─────────────────────────────────────────── */}
      <SectionShell alt>
        <Reveal>
          <SectionIntro
            eyebrow="03 — Consumer App"
            title={slotivaSales.surfaces.consumer.title}
            body={slotivaSales.surfaces.consumer.outcome}
          />
          <ul className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {slotivaSales.surfaces.consumer.shots.map((shot, index) => (
              <li key={shot.src} className="w-full max-w-[220px]">
                <PhoneFrame
                  src={shot.src}
                  alt={shot.alt}
                  size="compact"
                  priority={index === 0}
                  sizes="(max-width: 640px) 200px, 220px"
                />
                <p className="mt-3 text-center text-xs text-muted">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Marketplace ──────────────────────────────────────── */}
      <SectionShell>
        <Reveal>
          <SectionIntro
            eyebrow="04 — Marketplace"
            title={slotivaSales.surfaces.marketplace.title}
            body={slotivaSales.surfaces.marketplace.outcome}
          />
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {slotivaSales.surfaces.marketplace.shots.map((shot) => (
              <li key={shot.src}>
                <BrowserFrame src={shot.src} alt={shot.alt} />
                <p className="mt-3 text-sm text-muted">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Business Portal ──────────────────────────────────── */}
      <SectionShell alt>
        <Reveal>
          <SectionIntro
            eyebrow="05 — Business Portal"
            title={slotivaSales.surfaces.portal.title}
            body={slotivaSales.surfaces.portal.outcome}
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {slotivaSales.surfaces.portal.shots.map((shot) => (
              <li key={shot.src}>
                <BrowserFrame src={shot.src} alt={shot.alt} />
                <p className="mt-3 text-sm text-muted">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Business Brain ───────────────────────────────────── */}
      <SectionShell>
        <Reveal>
          <SectionIntro
            eyebrow="06 — Business Brain"
            title={slotivaSales.surfaces.brain.title}
            body={slotivaSales.surfaces.brain.outcome}
          />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {slotivaSales.surfaces.brain.shots.map((shot) => (
              <li key={shot.src}>
                <BrowserFrame src={shot.src} alt={shot.alt} />
                <p className="mt-3 text-sm text-muted">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <SectionShell alt>
        <Reveal>
          <SectionIntro
            eyebrow="07 — Risultati"
            title={slotivaSales.outcomes.title}
          />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {slotivaSales.outcomes.items.map((item) => (
              <OutcomeCard key={item.title} title={item.title} body={item.body} />
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Trust ────────────────────────────────────────────── */}
      <SectionShell>
        <Reveal>
          <SectionIntro
            eyebrow="08 — Affidabilità"
            title={slotivaSales.trust.title}
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slotivaSales.trust.items.map((item) => (
              <li key={item.title}>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── Differentiation ──────────────────────────────────── */}
      <SectionShell alt>
        <Reveal>
          <SectionIntro
            eyebrow="09 — Differenza"
            title={slotivaSales.difference.title}
            body={slotivaSales.difference.lead}
          />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {slotivaSales.difference.points.map((point) => (
              <li key={point.label} className="border-t border-glass-border pt-5">
                <h3 className="text-base font-semibold text-foreground">
                  {point.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <SectionShell id="demo" className="pb-24 sm:pb-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-accent">10 — Prossimo passo</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {slotivaSales.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
              {slotivaSales.cta.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={demoHref} external className="w-full sm:w-auto">
                {slotivaSales.cta.primary}
              </ButtonLink>
              <ButtonLink
                href={discussHref}
                external
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {slotivaSales.cta.secondary}
              </ButtonLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
              {app.appStoreUrl ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:opacity-80"
                >
                  App Store
                </a>
              ) : null}
              {app.websiteUrl ? (
                <>
                  <span className="text-muted/40" aria-hidden>
                    ·
                  </span>
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:opacity-80"
                  >
                    www.slotiva.it
                  </a>
                </>
              ) : null}
              {app.businessUrl ? (
                <>
                  <span className="text-muted/40" aria-hidden>
                    ·
                  </span>
                  <a
                    href={app.businessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:opacity-80"
                  >
                    business.slotiva.it
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </article>
  );
}
