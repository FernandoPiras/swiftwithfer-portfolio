"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Softer / shorter travel for dense grids */
  compact?: boolean;
}

/** Cinematic in-view reveal — soft, once, respects reduced motion */
export function Reveal({
  children,
  className,
  delay = 0,
  compact = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const y = compact ? 12 : MOTION.distance;

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION.viewport}
      transition={{
        duration: compact ? MOTION.duration.fast : MOTION.duration.base,
        delay,
        ease: EASE_OUT_SOFT,
      }}
    >
      {children}
    </motion.div>
  );
}
