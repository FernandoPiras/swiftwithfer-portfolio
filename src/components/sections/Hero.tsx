"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

function HeroMeta({ className }: { className?: string }) {
  return (
    <p className={className ?? "hero-meta mt-8"}>
      <span>{siteConfig.name}</span>
      <span className="hero-meta__sep" aria-hidden />
      <span>{siteConfig.role}</span>
      <span className="hero-meta__sep" aria-hidden />
      <span>App Store verificato</span>
    </p>
  );
}

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
      className="relative flex min-h-[min(100dvh,960px)] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] max-sm:min-h-0 max-sm:items-start"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />

      {/*
        Desktop/tablet: unchanged two-column / phone-then-CTA rhythm.
        Mobile (<640): wordmark → headline → description → mockup → CTA.
      */}
      <div className="hero-shell relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pb-24 lg:pt-12 xl:gap-20 max-sm:gap-8 max-sm:px-5 max-sm:pb-14 max-sm:pt-5">
        <div className="order-1 min-w-0 text-center lg:text-left">
          <motion.h1
            className="text-display text-foreground text-balance max-sm:mx-auto max-sm:w-full max-sm:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              ease: EASE_OUT_SOFT,
            }}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          <motion.p
            className="text-lead mx-auto mt-6 max-w-lg text-pretty lg:mx-0 max-sm:mt-4 max-sm:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              delay: 0.07,
              ease: EASE_OUT_SOFT,
            }}
          >
            {siteConfig.hero.subhead}
          </motion.p>

          <motion.div
            className="mt-10 hidden lg:block"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: MOTION.duration.base,
              delay: 0.14,
              ease: EASE_OUT_SOFT,
            }}
          >
            <HeroCtas className="flex flex-col gap-3 sm:flex-row sm:justify-start" />
            <HeroMeta />
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: MOTION.duration.slow,
            delay: 0.08,
            ease: EASE_OUT_SOFT,
          }}
          className="hero-phone-stage relative order-2 w-full min-w-0 justify-self-center lg:justify-self-center"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-b from-accent/10 via-accent/3 to-transparent blur-3xl"
            aria-hidden
          />
          {slotiva ? (
            <Link
              href={`/apps/${slotiva.id}`}
              className="hero-product-link relative mx-auto block w-full sm:max-w-[248px] lg:max-w-[288px] xl:max-w-[308px]"
              aria-label={`Esplora il case study di ${slotiva.name}`}
            >
              <PhoneFrame
                src={heroVisual}
                alt={`Anteprima ${slotiva.name}`}
                priority
                size="hero"
                sizes="(max-width: 359px) 72vw, (max-width: 389px) 72vw, (max-width: 429px) 72vw, (max-width: 639px) 72vw, (max-width: 1024px) 248px, (max-width: 1280px) 288px, 308px"
              />
              <div className="hero-product-caption">
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

        {/* Mobile + tablet: CTAs directly under the mockup */}
        <motion.div
          className="hero-ctas-below order-3 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: MOTION.duration.base,
            delay: 0.16,
            ease: EASE_OUT_SOFT,
          }}
        >
          <HeroCtas className="flex flex-col gap-3 sm:flex-row sm:justify-center" />
          <HeroMeta className="hero-meta mt-6 sm:mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
