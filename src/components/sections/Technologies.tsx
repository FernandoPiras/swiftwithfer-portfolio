"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechIcon } from "@/components/ui/TechIcon";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

export function Technologies() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="technologies"
      eyebrow="Stack"
      title="Strumenti di produzione"
      subtitle="Tecnologie usate per costruire e rilasciare prodotti reali — non solo demo."
      tone="surface"
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {siteConfig.technologies.map((tech, index) => (
          <motion.li
            key={tech.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION.viewportTight}
            transition={{
              duration: MOTION.duration.fast,
              delay: Math.min(index * MOTION.stagger, 0.35),
              ease: EASE_OUT_SOFT,
            }}
          >
            <div className="tech-tile flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass/60 p-4 backdrop-blur-md sm:gap-3">
              <TechIcon slug={tech.slug} className="h-8 w-8 sm:h-9 sm:w-9" />
              <span className="text-center text-xs font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>

      <Reveal delay={0.06} className="mt-12 flex justify-center">
        <ButtonLink href="/#contact">Iniziamo</ButtonLink>
      </Reveal>
    </Section>
  );
}
