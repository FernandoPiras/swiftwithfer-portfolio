"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Services() {
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");

  return (
    <Section
      id="services"
      eyebrow="Offerta"
      title="Servizi"
      subtitle="Supporto professionale per chi vuole portare un'idea iOS su App Store con qualità da prodotto finito."
      className="bg-section-alt/50"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {siteConfig.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <ButtonLink href="#contact">Richiedi una consulenza</ButtonLink>
        {instagram ? (
          <ButtonLink href={instagram.url} external variant="secondary">
            Seguimi su Instagram
          </ButtonLink>
        ) : null}
      </div>
    </Section>
  );
}
