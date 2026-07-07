"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { DiscoveryDocumentPicker } from "@/components/sections/DiscoveryDocumentPicker";
import { buildDirectMailto } from "@/config/discovery";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 10V9.25l-8 6.99-8-6.99V16h16z" />
    </svg>
  );
}

export function Social() {
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");

  return (
    <Section
      id="social"
      title="Social"
      subtitle="Seguimi per aggiornamenti su iOS, Swift e nuove release."
    >
      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
        {siteConfig.social.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group rounded-2xl border border-glass-border bg-glass/50 p-4 backdrop-blur-md transition-all active:scale-[0.99] sm:p-6 md:hover:-translate-y-0.5 md:hover:border-accent/40"
          >
            <div className="flex items-center gap-4">
              <span
                className={
                  link.icon === "instagram"
                    ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                    : "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f5f7] shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
                }
              >
                <SocialBrandIcon icon={link.icon} />
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground">{link.name}</p>
                <p className="text-sm text-muted">
                  {link.icon === "instagram" ? "@swiftwithfer" : "Fernando Piras"}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {instagram ? (
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted">
          Su Instagram condivido aggiornamenti su Swift, SwiftUI e le mie release su App Store.
        </p>
      ) : null}
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contatti"
      subtitle="Avvia un progetto con il Discovery Document o scrivimi direttamente."
      className="bg-section-alt/50"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
        <GlassCard>
          <DiscoveryDocumentPicker />
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              Parliamo del tuo prossimo progetto
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Disponibile per consulenze, sviluppo app native, revisione architetturale
              e supporto fino alla pubblicazione su App Store.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={buildDirectMailto(siteConfig.email)} external>
                Scrivimi ora
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                Vedi i servizi
              </ButtonLink>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 break-all text-sm font-medium text-muted transition-opacity hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base"
            >
              <EmailIcon />
              {siteConfig.email}
            </a>
          </GlassCard>

          <GlassCard className="p-4 sm:p-6">
            <ul className="space-y-3" aria-label="Collegamenti rapidi">
              {siteConfig.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                        <SocialBrandIcon icon={link.icon} className="h-5 w-5" />
                      </span>
                      {link.name}
                    </span>
                    <span className="text-muted" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
