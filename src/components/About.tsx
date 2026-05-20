import { motion } from 'framer-motion'
import { NumberTicker } from './ui/NumberTicker'
import { about } from '../data/content'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

export function About() {
  const { viewportConfig } = useAnimationConfig()

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-black/[0.06]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#111827] mb-4">
              {about.badge}
            </span>
            <h2
              id="about-heading"
              className="font-bold text-[#111827] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {about.heading}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[#525252] leading-[1.7] mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="relative p-6 rounded-2xl bg-white border border-black/[0.08] overflow-hidden shadow-sm"
                style={{ borderLeft: '3px solid #111827' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 0% 50%, rgba(17,24,39,0.06) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div
                    className="text-3xl lg:text-4xl font-extrabold text-[#111827] mb-1.5"
                    aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                  >
                    <NumberTicker
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm text-[#525252] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
