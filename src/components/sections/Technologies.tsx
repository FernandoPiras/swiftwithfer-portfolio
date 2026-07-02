"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";

export function Technologies() {
  return (
    <Section
      id="technologies"
      title="Tecnologie"
      subtitle="Strumenti e framework che uso ogni giorno per costruire app iOS di livello professionale."
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {siteConfig.technologies.map((tech, index) => (
          <motion.li
            key={tech.name}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-glass-border bg-glass/50 p-5 backdrop-blur-md transition-colors hover:border-accent/30">
              <div className="relative h-10 w-10">
                <Image
                  src={tech.icon}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <span className="text-center text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
