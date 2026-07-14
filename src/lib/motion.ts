/** Shared motion tokens — Apple / Linear easing */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const MOTION = {
  duration: {
    fast: 0.4,
    base: 0.5,
    slow: 0.6,
  },
  stagger: 0.04,
  viewport: { once: true, margin: "-60px" as const },
} as const;

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: MOTION.viewport,
    transition: { duration: MOTION.duration.base, delay, ease: EASE_OUT },
  };
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: MOTION.duration.slow, delay, ease: EASE_OUT },
  };
}

export function scaleIn(delay = 0) {
  return {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: MOTION.duration.slow, delay, ease: EASE_OUT },
  };
}

export function gridItem(index: number) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: {
      duration: MOTION.duration.fast,
      delay: index * MOTION.stagger,
      ease: EASE_OUT,
    },
  };
}
