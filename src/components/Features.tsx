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
          'group relative p-6 rounded-2xl border border-white/[0.07] bg-[#141414]',
          'hover:border-[#2563EB]/40 transition-colors duration-300 overflow-hidden h-full',
        )}
      >
        {/* Border beam on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'linear-gradient(#141414, #141414) padding-box, linear-gradient(135deg, #2563EB, #60A5FA, transparent) border-box',
            border: '1px solid transparent',
            borderRadius: 'inherit',
          }}
          aria-hidden="true"
        />

        {/* Blue glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
            {Icon && (
              <Icon
                size={22}
                className="text-[#2563EB]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            )}
          </div>
          <h3 className="text-[1.1rem] font-semibold text-[#F2F2F2] mb-2.5 leading-snug">
            {title}
          </h3>
          <p className="text-[#A3A3A3] text-sm leading-relaxed">{description}</p>
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
      className="py-24 lg:py-32 bg-[#0D0D0D]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#2563EB] mb-4">
            {features.badge}
          </span>
          <h2
            id="features-heading"
            className="font-bold text-[#F2F2F2]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {features.heading}
          </h2>
        </motion.div>

        {/* Grid */}
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
