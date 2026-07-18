"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

function HeroCtas({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ButtonLink href="/apps/slotiva" className="w-full sm:w-auto">
        Esplora Slotiva
      </ButtonLink>
      <ButtonLink href="/#contact" variant="secondary" className="w-full sm:w-auto">
        Parliamo del tuo progetto
      </ButtonLink>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const slotiva = siteConfig.apps.find((app) => app.id === "slotiva");
  const heroVisual = slotiva?.screenshots[0] ?? siteConfig.logo.full;

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(100dvh,980px)] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))]"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:py-20 xl:gap-16">
        {/* 1) Headline — above mockup on all breakpoints */}
        <div className="order-1 text-center lg:text-left">
          <motion.h1
            className="text-display text-foreground text-balance"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              ease: EASE_OUT_SOFT,
            }}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          <motion.p
            className="text-lead mx-auto mt-5 max-w-lg text-pretty lg:mx-0"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              delay: 0.08,
              ease: EASE_OUT_SOFT,
            }}
          >
            {siteConfig.hero.subhead}
          </motion.p>

          <motion.div
            className="mt-9 hidden lg:block"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              delay: 0.16,
              ease: EASE_OUT_SOFT,
            }}
          >
            <HeroCtas className="flex flex-col gap-3 sm:flex-row sm:justify-start" />
            <p className="mt-8 text-xs text-muted sm:text-sm">
              {siteConfig.name} · {siteConfig.role} · App Store verificato
            </p>
          </motion.div>
        </div>

        {/* 2) Mockup — product protagonist */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: MOTION.duration.slow,
            delay: 0.1,
            ease: EASE_OUT_SOFT,
          }}
          className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute -inset-12 rounded-[4rem] bg-gradient-to-b from-accent/20 via-accent/6 to-transparent blur-3xl sm:-inset-16"
            aria-hidden
          />
          {slotiva ? (
            <Link
              href={`/apps/${slotiva.id}`}
              className="hero-product-link relative mx-auto block w-fit"
              aria-label={`Esplora il case study di ${slotiva.name}`}
            >
              <PhoneFrame
                src={heroVisual}
                alt={`Anteprima ${slotiva.name}`}
                priority
                size="hero"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
              />
              <div className="hero-product-caption">
                <span className="hero-product-caption__label">Prodotto in evidenza</span>
                <span className="hero-product-caption__action">
                  Esplora {slotiva.name}
                  <span className="hero-product-caption__arrow" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ) : (
            <SwiftWithFerLogo variant="hero" priority className="mx-auto" />
          )}
        </motion.div>

        {/* 3) CTAs — after mockup on mobile/tablet */}
        <motion.div
          className="order-3 text-center lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: MOTION.duration.base,
            delay: 0.2,
            ease: EASE_OUT_SOFT,
          }}
        >
          <HeroCtas className="flex flex-col gap-3 sm:flex-row sm:justify-center" />
          <p className="mt-8 text-xs text-muted sm:text-sm">
            {siteConfig.name} · {siteConfig.role} · App Store verificato
          </p>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: EASE_OUT_SOFT }}
        aria-hidden
      >
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-glass-border/80 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-muted/50" />
        </span>
      </motion.div>
    </section>
  );
}
