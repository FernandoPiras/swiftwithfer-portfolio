/**
 * Shared motion language — calm, inevitable, almost invisible.
 * Transform + opacity only. No bounce, no overshoot, no elastic.
 */
export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;
/** Primary decelerate: soft start, natural settle (y ≤ 1 → no overshoot) */
export const EASE_OUT_SOFT = [0.33, 0, 0.2, 1] as const;

export const MOTION = {
  duration: {
    /** Micro-interactions (hover-adjacent JS) */
    fast: 0.55,
    /** Section reveals, cards */
    base: 0.78,
    /** Hero / large surfaces */
    slow: 1.0,
  },
  /** Near-imperceptible cascade between siblings */
  stagger: 0.08,
  /** Minimal travel — depth, not drama */
  distance: 7,
  viewport: { once: true, margin: "-8% 0px -5% 0px" as const },
  viewportTight: { once: true, margin: "-4% 0px -2% 0px" as const },
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
    initial: { opacity: 0, scale: 0.985 },
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
    initial: { opacity: 0, y: MOTION.distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: MOTION.viewportTight,
    transition: {
      duration: MOTION.duration.base,
      delay: index * MOTION.stagger,
      ease: EASE_OUT_SOFT,
    },
  };
}

/** Hero / above-the-fold entrance */
export function enterUp(delay = 0, distance = MOTION.distance) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: MOTION.duration.slow,
      delay,
      ease: EASE_OUT_SOFT,
    },
  };
}
