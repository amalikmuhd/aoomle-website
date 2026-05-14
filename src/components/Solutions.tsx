import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { solutions } from '../data/content'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0)
  const { sectionVariants, viewportConfig } = useAnimationConfig()
  const active = solutions.tabs[activeTab]

  return (
    <section
      id="solutions"
      className="py-24 lg:py-32 bg-[#141414] border-t border-white/[0.06]"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
          className="text-center mb-14"
        >
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#2563EB] mb-4">
            {solutions.badge}
          </span>
          <h2
            id="solutions-heading"
            className="font-bold text-[#F2F2F2]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {solutions.heading}
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
        >
          {/* Tab bar */}
          <div
            className="flex items-center gap-0 border-b border-white/[0.08] mb-12 overflow-x-auto no-scrollbar"
            role="tablist"
            aria-label="Industry solutions"
          >
            {solutions.tabs.map((tab, i) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(i)}
                className="relative flex-shrink-0 px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none"
                style={{
                  color: activeTab === i ? '#F2F2F2' : '#6B6B6B',
                }}
              >
                {tab.label}
                {activeTab === i && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="tabpanel"
            id={`tab-panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-video lg:aspect-[4/3]">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#F2F2F2] mb-4">
                  {active.heading}
                </h3>
                <p className="text-[#A3A3A3] leading-[1.7] mb-8">
                  {active.description}
                </p>
                <ul className="space-y-3 mb-8" aria-label={`${active.heading} features`}>
                  {active.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#2563EB] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[#A3A3A3] text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all duration-200 group">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
