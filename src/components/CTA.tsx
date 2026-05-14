import { motion } from 'framer-motion'
import { ShimmerButton } from './ui/ShimmerButton'
import { cta } from '../data/content'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

export function CTA() {
  const { sectionVariants, viewportConfig } = useAnimationConfig()

  const handleContact = () => {
    window.location.href = 'mailto:malik@aoomle.xyz?subject=Consultation%20Request'
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#141414] border-t border-white/[0.06]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          <h2
            id="cta-heading"
            className="font-bold text-[#F2F2F2] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {cta.heading}
          </h2>
          <p className="text-[#A3A3A3] text-lg leading-relaxed mb-12 max-w-2xl">
            {cta.subtext}
          </p>

          {/* Button with radial glow */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl scale-150"
              style={{
                background:
                  'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <ShimmerButton
              onClick={handleContact}
              className="text-base px-10 py-4 rounded-xl font-semibold text-white"
            >
              {cta.button}
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
