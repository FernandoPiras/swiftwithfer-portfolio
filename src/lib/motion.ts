/** Shared motion tokens — cinematic, never flashy */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

export const MOTION = {
  duration: {
    fast: 0.4,
    base: 0.55,
    slow: 0.7,
  },
  stagger: 0.05,
  /** Refined travel — precision over drama */
  distance: 10,
  viewport: { once: true, margin: "-10% 0px -6% 0px" as const },
  viewportTight: { once: true, margin: "-5% 0px -3% 0px" as const },
} as const;

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: MOTION.distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: MOTION.viewport,
    transition: {
      duration: MOTION.duration.base,
      delay,
      ease: EASE_OUT_SOFT,
    },
  };
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: MOTION.duration.slow,
      delay,
      ease: EASE_OUT_SOFT,
    },
  };
}

export function scaleIn(delay = 0) {
  return {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: MOTION.duration.slow,
      delay,
      ease: EASE_OUT_SOFT,
    },
  };
}

export function gridItem(index: number) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: MOTION.viewportTight,
    transition: {
      duration: MOTION.duration.fast,
      delay: index * MOTION.stagger,
      ease: EASE_OUT_SOFT,
    },
  };
}

/** Hero / above-the-fold entrance */
export function enterUp(delay = 0, distance = 16) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: MOTION.duration.base,
      delay,
      ease: EASE_OUT_SOFT,
    },
  };
}
