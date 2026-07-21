"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { developmentProcess } from "@/config/process";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

const icons: Record<string, ReactNode> = {
  analysis: (
    <path
      d="M4 19V5m0 14h16M8 15l3-4 2 2 5-6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  "ux-ui": (
    <path
      d="M4 6h16v12H4V6zm4 12v2m8-2v2M9 10h.01M15 10h.01M9.5 14c.8.8 1.7 1.2 2.5 1.2s1.7-.4 2.5-1.2"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  architecture: (
    <path
      d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 0v18m8-13.5L4 12m16 4.5L4 12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  development: (
    <path
      d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  testing: (
    <path
      d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  deploy: (
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  updates: (
    <path
      d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4M20 4v4h-4M4 20v-4h4"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  support: (
    <path
      d="M12 18h.01M8.5 9.5a3.5 3.5 0 116.3 2.1c-.7.9-1.8 1.4-2.3 2.4-.3.5-.5 1.1-.5 1.7"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

/** Atto III — Principio. Metodo + filosofia; stack assorbito come nota, non atto. */
export function Process() {
  const reduceMotion = useReducedMotion();
  const { bio } = siteConfig;

  return (
    <Section
      id="process"
      eyebrow="Principio"
      title="Come nasce un prodotto"
      subtitle="La prova non è fortuna: è un modo ripetibile — dal problema reale al software in produzione."
      tone="default"
    >
      <Reveal>
        <div className="mb-14 max-w-2xl space-y-5 sm:mb-16">
          <p className="text-sm leading-relaxed text-muted text-pretty sm:text-base">
            {bio.philosophy}
          </p>
          <p className="text-sm leading-relaxed text-muted text-pretty sm:text-base">
            {bio.full}
          </p>
          <p className="text-sm leading-relaxed text-muted text-pretty sm:text-base">
            {bio.journey}
          </p>
        </div>
      </Reveal>

      <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {developmentProcess.map((step, index) => (
          <motion.li
            key={step.id}
            initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION.viewportTight}
            transition={{
              duration: MOTION.duration.base,
              delay: index * MOTION.stagger,
              ease: EASE_OUT_SOFT,
            }}
          >
            <GlassCard className="premium-card relative h-full p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border bg-background/50 text-accent"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    {icons[step.id]}
                  </svg>
                </span>
                <span className="text-eyebrow text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </GlassCard>
          </motion.li>
        ))}
      </ol>

      <div id="technologies" className="mt-20 scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] sm:mt-24">
        <Reveal>
          <p className="text-eyebrow mb-3 text-accent">Strumenti</p>
          <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            Strumenti di produzione
          </h3>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Tecnologie usate per costruire e rilasciare prodotti reali — non solo demo.
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siteConfig.technologies.map((tech, index) => (
            <motion.li
              key={tech.name}
              initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION.viewportTight}
              transition={{
                duration: MOTION.duration.base,
                delay: Math.min(index * MOTION.stagger, 0.48),
                ease: EASE_OUT_SOFT,
              }}
            >
              <div className="tech-tile flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-glass-border bg-glass/60 p-5 backdrop-blur-md sm:gap-3.5 sm:p-6">
                <TechIcon slug={tech.slug} className="h-8 w-8 sm:h-9 sm:w-9" />
                <span className="text-center text-xs font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <Reveal delay={0.08} className="mt-16 flex justify-center sm:mt-20">
        <ButtonLink href="/#apps" variant="ghost">
          Altre prove live →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
