"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      eyebrow="Competenze"
      title="Cosa so fare"
      subtitle="Competenze validate su prodotti reali — non su tutorial o side project abbandonati."
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {siteConfig.skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION.viewportTight}
            transition={{
              duration: MOTION.duration.base,
              delay: index * MOTION.stagger,
              ease: EASE_OUT_SOFT,
            }}
            className="rounded-xl border border-glass-border bg-glass/60 px-3.5 py-4 text-center text-xs font-medium text-foreground backdrop-blur-md transition-[border-color] duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] hover:border-accent/20 sm:px-4 sm:py-5 sm:text-sm"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
