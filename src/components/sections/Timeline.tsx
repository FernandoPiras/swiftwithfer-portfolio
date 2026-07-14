"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { EASE_OUT } from "@/lib/motion";

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Storia"
      title="Percorso"
      subtitle="Dalla prima app al portfolio di prodotti live."
      className="section-surface"
    >
      <ol className="relative space-y-0 border-l border-glass-border pl-6 sm:pl-8">
        {siteConfig.timeline.map((entry, index) => (
          <motion.li
            key={`${entry.year}-${entry.title}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[2.15rem]"
              aria-hidden
            />
            <time className="text-eyebrow text-accent">{entry.year}</time>
            <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
