import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Search, Paintbrush, Code2, Headphones, type LucideIcon } from 'lucide-react'
import { useRef } from 'react'
import { process as processData } from '../data/content'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Paintbrush,
  Code2,
  Headphones,
}

export function Process() {
  const { sectionVariants, viewportConfig } = useAnimationConfig()
  const prefersReducedMotion = useReducedMotion()
  const lineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start end', 'end start'],
  })
  const scaleX = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-black/[0.06]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#2563EB] mb-4">
            {processData.badge}
          </span>
          <h2
            id="process-heading"
            className="font-bold text-[#111827]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {processData.heading}
          </h2>
        </motion.div>

        <div ref={lineRef} className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-black/[0.08]"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-[#2563EB] origin-left"
              style={{ scaleX: prefersReducedMotion ? 1 : scaleX }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {processData.steps.map((step, i) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="relative w-16 h-16 rounded-2xl bg-white border border-[#2563EB]/30 flex items-center justify-center mb-5 z-10 shadow-sm">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    {Icon && (
                      <Icon
                        size={24}
                        className="text-[#2563EB]"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {i < processData.steps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-8 top-16 w-px h-10 bg-black/[0.08]"
                      aria-hidden="true"
                    />
                  )}

                  <h3 className="text-lg font-semibold text-[#111827] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#525252] text-sm leading-relaxed max-w-xs lg:max-w-none">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
