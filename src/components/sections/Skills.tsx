"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Competenze"
      subtitle="Competenze full stack per prodotti enterprise: app native, web app, backend cloud e UX di livello professionale."
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {siteConfig.skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group rounded-2xl border border-glass-border bg-glass/50 px-3 py-3.5 text-center text-xs font-medium text-foreground backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-glass sm:px-4 sm:py-4 sm:text-sm"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
