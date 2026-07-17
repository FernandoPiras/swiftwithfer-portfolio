"use client";

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

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contatti"
      title="Iniziamo"
      subtitle="Compila il Discovery Document o scrivimi direttamente. Rispondo entro 48 ore lavorative."
      className="section-surface"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
        <GlassCard>
          <DiscoveryDocumentPicker />
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-lg font-semibold text-foreground">
              Parliamo del tuo progetto
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              App iOS, gestionali o CRM — un unico partner dalla prima call al rilascio.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={buildDirectMailto(siteConfig.email)}>
                Scrivimi ora
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                Vedi i servizi
              </ButtonLink>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2 break-all text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <EmailIcon />
              {siteConfig.email}
            </a>
          </GlassCard>

          <GlassCard>
            <ul className="space-y-2" aria-label="Collegamenti">
              {siteConfig.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between rounded-lg border border-glass-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-black/5 dark:bg-white/10">
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
