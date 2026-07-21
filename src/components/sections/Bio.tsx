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

export function Bio() {
  const reduceMotion = useReducedMotion();
  const { bio, photo, name, role, brand, email } = siteConfig;
  const publishedApps = siteConfig.apps.filter((app) => app.status === "published");
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");

  return (
    <Section
      id="bio"
      eyebrow="Profilo"
      title="Chi sono"
      subtitle="Un partner tecnico che consegna prodotti finiti — dalla discovery al rilascio."
      tone="default"
    >
      <Reveal>
        <GlassCard className="overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:items-start lg:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={MOTION.viewportTight}
              transition={{ duration: MOTION.duration.slow, ease: EASE_OUT_SOFT }}
              className="mx-auto flex flex-col items-center lg:mx-0"
            >
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#f9ce34]/30 via-[#ee2a7b]/25 to-[#6228d7]/30 blur-xl"
                  aria-hidden
                />
                <div className="relative rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-lg shadow-black/10">
                  <div className="relative h-36 w-36 overflow-hidden rounded-full bg-background p-[2px] sm:h-44 sm:w-44">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={photo.bio}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 176px, 208px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {instagram ? (
                <Link
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  @{brand.toLowerCase()}
                </Link>
              ) : null}
            </motion.div>

            <div className="space-y-9 sm:space-y-11">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-accent">{role}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted text-pretty sm:text-base">
                  {bio.short}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted text-pretty sm:text-base">
                  {bio.full}
                </p>
              </div>

              <dl className="grid gap-4 sm:grid-cols-3">
                {bio.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-glass-border bg-background/40 px-4 py-4 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] hover:border-accent/20"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div>
                <h4 className="text-eyebrow text-accent">App pubblicate</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {publishedApps.map((app) => (
                    <li
                      key={app.id}
                      className="rounded-full border border-glass-border bg-background/50 px-3.5 py-1 text-sm text-foreground"
                    >
                      {app.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-8 border-t border-glass-border/70 pt-9 sm:grid-cols-2">
                <div>
                  <h4 className="text-eyebrow text-accent">Percorso</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                    {bio.journey}
                  </p>
                </div>
                <div>
                  <h4 className="text-eyebrow text-accent">Approccio</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                    {bio.philosophy}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label="Aree di focus">
                {bio.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-glass-border bg-background/50 px-3.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 border-t border-glass-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  {email}
                </a>
                <ButtonLink href="/#technologies" variant="ghost" className="w-full sm:w-auto">
                  Stack di produzione →
                </ButtonLink>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
