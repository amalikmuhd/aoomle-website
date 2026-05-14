import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ShimmerButton } from './ui/ShimmerButton'
import { Meteors } from './ui/Meteors'
import { AnimatedGradientText } from './ui/AnimatedGradientText'
import { hero } from '../data/content'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeIn = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  const handleScrollToSolutions = () => {
    document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0D]"
      aria-label="Hero"
    >
      {/* Background meteors */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Meteors number={18} />
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div {...fadeIn(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#A3A3A3] text-sm font-medium">
            <span
              className="w-2 h-2 rounded-full bg-[#2563EB] animate-[pulse-dot_2s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeIn(0.15)}
          className="font-extrabold tracking-tight mb-5"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          <span className="block text-[#F2F2F2]">{hero.headline1}</span>
          <span className="block">
            <AnimatedGradientText>{hero.headline2}</AnimatedGradientText>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeIn(0.3)}
          className="text-[#A3A3A3] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeIn(0.45)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <ShimmerButton
            onClick={handleScrollToContact}
            className="text-base px-8 py-3.5 rounded-xl font-semibold"
          >
            {hero.ctaPrimary}
          </ShimmerButton>
          <button
            onClick={handleScrollToSolutions}
            className="text-base px-8 py-3.5 rounded-xl font-semibold text-[#F2F2F2] border border-white/20 hover:border-[#2563EB]/60 hover:bg-[#2563EB]/10 transition-all duration-200"
          >
            {hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#6B6B6B]"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
