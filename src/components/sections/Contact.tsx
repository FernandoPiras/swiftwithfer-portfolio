"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

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
      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
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
            className="group rounded-2xl border border-glass-border bg-glass/50 p-6 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
      subtitle="Hai un progetto iOS o vuoi collaborare? Scrivimi."
      className="bg-section-alt/50"
    >
      <GlassCard>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Parliamo del tuo prossimo progetto
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Disponibile per consulenze, sviluppo app native, revisione architetturale
              e supporto fino alla pubblicazione su App Store.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <EmailIcon />
              {siteConfig.email}
            </a>
          </div>

          <ul className="space-y-3" aria-label="Collegamenti rapidi">
            {siteConfig.social.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
        </div>
      </GlassCard>
    </Section>
  );
}
