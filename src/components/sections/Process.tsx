"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { developmentProcess } from "@/config/process";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { EASE_OUT, MOTION } from "@/lib/motion";

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

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="process"
      eyebrow="Metodo"
      title="Come sviluppo un prodotto"
      subtitle="Un processo end-to-end: dal problema reale al software in produzione, con aggiornamenti continui."
      className="section-surface"
    >
      <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {developmentProcess.map((step, index) => (
          <motion.li
            key={step.id}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: MOTION.duration.fast,
              delay: index * MOTION.stagger,
              ease: EASE_OUT,
            }}
          >
            <GlassCard className="premium-card relative h-full">
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
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </GlassCard>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
