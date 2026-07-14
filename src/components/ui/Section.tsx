"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] py-16 sm:py-24 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          {eyebrow ? (
            <p className="text-eyebrow mb-3 text-accent">{eyebrow}</p>
          ) : null}
          <h2 className="text-section-title text-foreground">{title}</h2>
          {subtitle ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
