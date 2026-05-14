import { useReducedMotion } from 'framer-motion'

export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const cardHover = {
  y: -5,
  scale: 1.015,
  transition: { duration: 0.2, ease: 'easeOut' as const },
}

export const viewportConfig = { once: true, margin: '-80px' }

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion()
  return {
    prefersReducedMotion,
    sectionVariants: prefersReducedMotion
      ? { hidden: {}, show: {} }
      : sectionVariants,
    staggerContainer: prefersReducedMotion
      ? { hidden: {}, show: {} }
      : staggerContainer,
    staggerChild: prefersReducedMotion ? { hidden: {}, show: {} } : staggerChild,
    cardHover: prefersReducedMotion ? {} : cardHover,
    viewportConfig,
  }
}
