"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

/** Atto V — Offerta. Porte d'ingresso + identità breve (bio assorbita, non capitolo CV). */
export function Services() {
  const reduceMotion = useReducedMotion();
  const { bio, photo, name, role, brand, email } = siteConfig;
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");
  const publishedApps = siteConfig.apps.filter((app) => app.status === "published");

  return (
    <Section
      id="services"
      eyebrow="Offerta"
      title="Come entrare"
      subtitle="Stessa house, porte diverse — orientate al risultato, non a un elenco di tecnologie."
      tone="surface"
    >
      <div id="bio" className="scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))]">
        <Reveal>
          <div className="mb-14 flex flex-col items-center gap-8 border-b border-glass-border/40 pb-12 text-center sm:mb-16 sm:flex-row sm:items-start sm:gap-10 sm:pb-14 sm:text-left md:mb-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={MOTION.viewportTight}
              transition={{ duration: MOTION.duration.slow, ease: EASE_OUT_SOFT }}
              className="shrink-0"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-1 ring-glass-border sm:mx-0 sm:h-32 sm:w-32">
                <Image
                  src={photo.bio}
                  alt={photo.alt}
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {name}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-accent">{role}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted text-pretty sm:text-base">
                {bio.short}
              </p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                {bio.highlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[0.6875rem] font-medium uppercase tracking-wider text-muted/70">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start" aria-label="Aree di focus">
                {bio.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-glass-border/45 px-3 py-1 text-xs text-muted/80 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
                {instagram ? (
                  <Link
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    @{brand.toLowerCase()}
                  </Link>
                ) : null}
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {email}
                </a>
              </div>
              <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start" aria-label="App pubblicate">
                {publishedApps.map((app) => (
                  <li
                    key={app.id}
                    className="rounded-full border border-glass-border/45 px-3 py-1 text-xs text-muted/80"
                  >
                    {app.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {siteConfig.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION.viewportTight}
            transition={{
              duration: MOTION.duration.base,
              delay: index * MOTION.stagger,
              ease: EASE_OUT_SOFT,
            }}
            className="h-full"
          >
            <GlassCard className="premium-card h-full">
              <p className="text-eyebrow text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.06} className="mt-16 flex justify-center sm:mt-20">
        <ButtonLink href="/#contact">Avvia un progetto</ButtonLink>
      </Reveal>
    </Section>
  );
}
