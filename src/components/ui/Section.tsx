"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Visual rhythm without changing palette */
  tone?: "default" | "surface" | "glow";
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  tone = "default",
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] py-20 sm:py-28 md:py-32",
        tone === "surface" && "section-surface",
        tone === "glow" && "section-glow",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={MOTION.viewport}
          transition={{
            duration: MOTION.duration.base,
            ease: EASE_OUT_SOFT,
          }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          {eyebrow ? (
            <p className="text-eyebrow mb-3.5 text-accent">{eyebrow}</p>
          ) : null}
          <h2 className="text-section-title text-foreground text-balance">{title}</h2>
          {subtitle ? (
            <p className="text-lead mt-5 max-w-xl text-pretty">{subtitle}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
