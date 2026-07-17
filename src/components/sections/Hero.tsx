"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { EASE_OUT } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const slotiva = siteConfig.apps.find((app) => app.id === "slotiva");
  const heroVisual = slotiva?.screenshots[0] ?? siteConfig.logo.full;

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(100dvh,920px)] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))]"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="text-eyebrow mb-5 inline-flex items-center gap-2 text-accent">
            <span className="h-4 w-4 shrink-0">
              <SwiftWithFerLogo variant="mark" />
            </span>
            {siteConfig.brand}
          </p>

          <h1 className="text-display text-foreground">
            {siteConfig.hero.headline}
          </h1>

          <p className="text-lead mx-auto mt-5 max-w-xl lg:mx-0">
            {siteConfig.hero.subhead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href="#apps" className="w-full sm:w-auto">
              Vedi i progetti
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
              Parliamo del tuo progetto
            </ButtonLink>
          </div>

          <p className="mt-8 text-xs text-muted sm:text-sm">
            {siteConfig.name} · {siteConfig.role} · App Store verificato
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: EASE_OUT }}
          className="relative order-1 mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:order-2"
        >
          <div
            className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-accent/15 via-transparent to-transparent blur-3xl"
            aria-hidden
          />
          {slotiva ? (
            <div className="relative">
              <PhoneFrame
                src={heroVisual}
                alt={`Anteprima ${slotiva.name}`}
                priority
                sizes="(max-width: 640px) 240px, 280px"
              />
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-glass-border bg-glass/90 px-3 py-1.5 shadow-md backdrop-blur-md">
                <Image
                  src={slotiva.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="rounded-md"
                  aria-hidden
                />
                <span className="whitespace-nowrap text-xs font-medium text-foreground">
                  {slotiva.name} — case study
                </span>
              </div>
            </div>
          ) : (
            <SwiftWithFerLogo variant="hero" priority className="mx-auto" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
