import { motion } from 'framer-motion'
import { Phone, MapPin, Mail } from 'lucide-react'
import { ShimmerButton } from './ui/ShimmerButton'
import { cta, contact } from '../data/content'
import { useAnimationConfig } from '../hooks/useScrollAnimation'

export function CTA() {
  const { sectionVariants, viewportConfig } = useAnimationConfig()

  const handleContact = () => {
    window.location.href = `mailto:${contact.email}?subject=Consultation%20Request`
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white border-t border-black/[0.06]"
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
            className="font-bold text-[#111827] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {cta.heading}
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed mb-12 max-w-2xl">
            {cta.subtext}
          </p>

          <div className="relative mb-12">
            <div
              className="absolute inset-0 -z-10 blur-3xl scale-150"
              style={{
                background:
                  'radial-gradient(circle, rgba(17,24,39,0.2) 0%, transparent 70%)',
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-left">
            <a
              href={contact.phoneHref}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-black/[0.08] hover:border-[#111827]/30 transition-colors duration-200 group"
            >
              <Phone
                size={20}
                className="text-[#111827] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] mb-1">
                  Phone
                </p>
                <p className="text-sm font-medium text-[#111827] group-hover:text-[#111827] transition-colors">
                  {contact.phone}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-black/[0.08]">
              <MapPin
                size={20}
                className="text-[#111827] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] mb-1">
                  Address
                </p>
                <p className="text-sm font-medium text-[#111827] leading-relaxed">
                  {contact.address}
                </p>
              </div>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-black/[0.08] hover:border-[#111827]/30 transition-colors duration-200 group"
            >
              <Mail
                size={20}
                className="text-[#111827] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] mb-1">
                  Email
                </p>
                <p className="text-sm font-medium text-[#111827] group-hover:text-[#111827] transition-colors break-all">
                  {contact.email}
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
