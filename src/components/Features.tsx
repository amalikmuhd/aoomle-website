import { motion } from 'framer-motion'
import {
  Code2,
  Brain,
  Smartphone,
  ShieldCheck,
  Cloud,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'
import { BlurFade } from './ui/BlurFade'
import { features } from '../data/content'
import { cn } from '../lib/utils'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Smartphone,
  ShieldCheck,
  Cloud,
  BarChart3,
}

function ServiceCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string
  title: string
  description: string
  delay: number
}) {
  const { cardHover } = useAnimationConfig()
  const Icon = iconMap[icon]

  return (
    <BlurFade delay={delay}>
      <motion.div
        whileHover={cardHover}
        className={cn(
          'group relative p-6 rounded-2xl border border-black/[0.08] bg-[#F8FAFC]',
          'hover:border-[#111827]/40 transition-colors duration-300 overflow-hidden h-full shadow-sm',
        )}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'linear-gradient(#F8FAFC, #F8FAFC) padding-box, linear-gradient(135deg, #111827, #6B7280, transparent) border-box',
            border: '1px solid transparent',
            borderRadius: 'inherit',
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(17,24,39,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-[#111827]/10 border border-[#111827]/20 flex items-center justify-center mb-5 group-hover:bg-[#111827]/15 transition-colors duration-300">
            {Icon && (
              <Icon
                size={22}
                className="text-[#111827]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            )}
          </div>
          <h3 className="text-[1.1rem] font-semibold text-[#111827] mb-2.5 leading-snug">
            {title}
          </h3>
          <p className="text-[#525252] text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </BlurFade>
  )
}

export function Features() {
  const { sectionVariants, viewportConfig } = useAnimationConfig()

  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#111827] mb-4">
            {features.badge}
          </span>
          <h2
            id="features-heading"
            className="font-bold text-[#111827]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {features.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
