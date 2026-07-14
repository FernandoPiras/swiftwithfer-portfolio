"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { gridItem } from "@/lib/motion";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Offerta"
      title="Cosa posso fare per te"
      subtitle="Servizi pensati per chi ha bisogno di un prodotto che funziona — non solo codice."
      className="section-surface"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {siteConfig.services.map((service, index) => (
          <motion.div key={service.id} {...gridItem(index)} className="h-full">
            <GlassCard className="premium-card h-full">
              <p className="text-eyebrow text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <ButtonLink href="#contact">Avvia un progetto</ButtonLink>
        <ButtonLink href="#apps" variant="secondary">
          Vedi i risultati
        </ButtonLink>
      </div>
    </Section>
  );
}
