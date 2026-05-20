import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ShimmerButton } from './ui/ShimmerButton'
import { nav } from '../data/content'
import { cn } from '../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-black/[0.06] shadow-sm'
            : 'bg-transparent',
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#"
              className="flex items-baseline gap-1.5 group"
              aria-label="Aoomle Technology home"
            >
              <span className="text-[#111827] font-extrabold text-xl tracking-tight group-hover:text-[#2563EB] transition-colors">
                Aoomle
              </span>
              <span className="text-[#525252] font-normal text-lg tracking-tight group-hover:text-[#111827] transition-colors">
                Technology
              </span>
            </a>

            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {nav.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-200 pb-0.5',
                    activeLink === link.href
                      ? 'text-[#111827]'
                      : 'text-[#525252] hover:text-[#111827]',
                  )}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <ShimmerButton
                onClick={() => handleNavClick('#contact')}
                className="text-sm px-5 py-2.5 rounded-lg"
              >
                {nav.cta}
              </ShimmerButton>
            </div>

            <button
              className="lg:hidden text-[#525252] hover:text-[#111827] transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
            aria-label="Mobile navigation"
          >
            <button
              className="absolute top-5 right-4 text-[#525252] hover:text-[#111827] transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {nav.links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-semibold text-[#525252] hover:text-[#111827] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: nav.links.length * 0.07 }}
            >
              <ShimmerButton
                onClick={() => handleNavClick('#contact')}
                className="text-base px-8 py-3 rounded-xl"
              >
                {nav.cta}
              </ShimmerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
