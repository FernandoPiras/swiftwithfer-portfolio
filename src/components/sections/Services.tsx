"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { EASE_OUT, MOTION } from "@/lib/motion";

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="services"
      eyebrow="Servizi"
      title="Cosa posso fare per te"
      subtitle="Offerte chiare, orientate al risultato — non a un elenco di tecnologie."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {siteConfig.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: MOTION.duration.fast,
              delay: index * MOTION.stagger,
              ease: EASE_OUT,
            }}
            className="h-full"
          >
            <GlassCard className="premium-card h-full">
              <p className="text-eyebrow text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
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
