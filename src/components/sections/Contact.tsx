"use client";

import { motion } from "framer-motion";
import { siteConfig, type SocialLink } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const paths = {
    instagram:
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.8 6.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z",
    github:
      "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 12 2z",
    appstore:
      "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
    email:
      "M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 10V9.25l-8 6.99-8-6.99V16h16z",
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d={paths[icon]} />
    </svg>
  );
}

export function Social() {
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
            className="group rounded-2xl border border-glass-border bg-glass/50 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <SocialIcon icon={link.icon} />
              </span>
              <div>
                <p className="font-medium text-foreground">{link.name}</p>
                <p className="text-sm text-muted">Apri profilo</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
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
              <SocialIcon icon="email" />
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
                    <SocialIcon icon={link.icon} />
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
