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
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {siteConfig.technologies.map((tech, index) => (
          <motion.li
            key={tech.name}
            initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION.viewportTight}
            transition={{
              duration: MOTION.duration.base,
              delay: Math.min(index * MOTION.stagger, 0.48),
              ease: EASE_OUT_SOFT,
            }}
          >
            <div className="tech-tile flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-glass-border bg-glass/60 p-5 backdrop-blur-md sm:gap-3.5 sm:p-6">
              <TechIcon slug={tech.slug} className="h-8 w-8 sm:h-9 sm:w-9" />
              <span className="text-center text-xs font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>

      <Reveal delay={0.06} className="mt-16 flex justify-center sm:mt-20">
        <ButtonLink href="/#contact">Iniziamo</ButtonLink>
      </Reveal>
    </Section>
  );
}
