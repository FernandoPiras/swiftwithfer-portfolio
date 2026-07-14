"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";
import { fadeIn, scaleIn } from "@/lib/motion";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+1.5rem)]"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          {...fadeIn()}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="text-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass/60 px-4 py-1.5 text-accent backdrop-blur-md">
            <span className="h-4 w-4 shrink-0">
              <SwiftWithFerLogo variant="mark" />
            </span>
            {siteConfig.brand}
          </p>

          <h1 className="text-display text-foreground">{siteConfig.name}</h1>
          <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
            {siteConfig.role}
          </p>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            {siteConfig.tagline}
          </p>

          <ul className="mx-auto mt-7 max-w-lg space-y-3 text-left lg:mx-0">
            {hero.valueProps.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
            {hero.credibility.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-glass-border bg-background/60 px-3 py-1 text-xs font-medium text-muted"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href="#apps" className="w-full sm:w-auto">
              Vedi i progetti
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
              Parliamo del tuo progetto
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          {...scaleIn(0.08)}
          className="relative order-1 mx-auto flex w-full max-w-[220px] justify-center sm:max-w-[260px] lg:order-2 lg:max-w-[280px]"
        >
          <div
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/10 blur-3xl"
            aria-hidden
          />
          <SwiftWithFerLogo variant="hero" priority className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
