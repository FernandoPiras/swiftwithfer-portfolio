"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-glass-border bg-glass/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur-md">
            <span className="h-5 w-5 shrink-0">
              <SwiftWithFerLogo variant="mark" />
            </span>
            {siteConfig.brand}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent md:text-2xl">
            {siteConfig.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#apps">Le mie app</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contattami
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent-secondary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-glass-border bg-glass/40 p-3 shadow-glass backdrop-blur-xl">
            <SwiftWithFerLogo variant="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
