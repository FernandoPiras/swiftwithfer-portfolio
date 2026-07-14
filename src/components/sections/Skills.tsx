"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { gridItem } from "@/lib/motion";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Competenze"
      title="Cosa so fare"
      subtitle="Competenze validate su prodotti reali — non su tutorial o side project abbandonati."
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {siteConfig.skills.map((skill, index) => (
          <motion.li
            key={skill}
            {...gridItem(index)}
            className="rounded-xl border border-glass-border bg-glass/60 px-3 py-3.5 text-center text-xs font-medium text-foreground backdrop-blur-md transition-colors hover:border-accent/20 sm:px-4 sm:py-4 sm:text-sm"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
