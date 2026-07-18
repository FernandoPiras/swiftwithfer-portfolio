"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

function HeroMeta() {
  return (
    <p className="hero-meta mt-8">
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
      className="relative flex min-h-[min(100dvh,960px)] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))]"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pb-16 pt-10 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:pb-24 lg:pt-16 xl:gap-20">
        <div className="order-1 text-center lg:text-left">
          <motion.h1
            className="text-display text-foreground text-balance"
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
            className="text-lead mx-auto mt-6 max-w-md text-pretty lg:mx-0 lg:max-w-lg"
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
          className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-gradient-to-b from-accent/12 via-transparent to-transparent blur-3xl sm:-inset-14"
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
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 392px"
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

        <motion.div
          className="order-3 text-center lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: MOTION.duration.base,
            delay: 0.18,
            ease: EASE_OUT_SOFT,
          }}
        >
          <HeroCtas className="flex flex-col gap-3 sm:flex-row sm:justify-center" />
          <HeroMeta />
        </motion.div>
      </div>
    </section>
  );
}
