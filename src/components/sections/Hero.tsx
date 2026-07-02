"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { ButtonLink } from "@/components/layout/Header";

export function Hero() {
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");
  const { metrics } = siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[calc(var(--header-offset)+env(safe-area-inset-top,0px)+1.5rem)]"
    >
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-glass-border bg-glass/50 px-3.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            <span className="h-5 w-5 shrink-0">
              <SwiftWithFerLogo variant="mark" />
            </span>
            {siteConfig.brand}
          </p>
          <h1 className="text-[2rem] font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent sm:mt-4 sm:text-xl md:text-2xl">
            {siteConfig.role}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:mx-0">
            {siteConfig.tagline}
          </p>

          <dl className="mx-auto mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 lg:mx-0 lg:justify-start">
            {[
              { label: "App Store", value: `${metrics.publishedApps} app pubblicate` },
              { label: "Stack", value: "Swift & SwiftUI" },
              { label: "Brand", value: "@swiftwithfer" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-glass-border bg-glass/40 px-3.5 py-2 text-center backdrop-blur-md sm:px-4"
              >
                <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                  {item.label}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <ButtonLink href="#apps" className="w-full sm:w-auto">
              Le mie app
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
              Richiedi consulenza
            </ButtonLink>
            {instagram ? (
              <ButtonLink href={instagram.url} external variant="secondary" className="w-full sm:w-auto">
                Instagram
              </ButtonLink>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto flex w-full max-w-[240px] justify-center sm:max-w-xs lg:order-2 lg:max-w-sm"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-secondary/15 blur-3xl sm:-inset-6"
            aria-hidden
          />
          <SwiftWithFerLogo variant="hero" priority className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
