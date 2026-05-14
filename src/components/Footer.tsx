import { footer } from '../data/content'

const TwitterX = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export function Footer() {
  return (
    <footer
      className="bg-[#0D0D0D] border-t border-white/[0.06] pt-16 pb-8"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top — brand + columns */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-[#F2F2F2] font-extrabold text-xl tracking-tight">
                Aoomle
              </span>
              <span className="text-[#A3A3A3] font-normal text-lg tracking-tight">
                Technology
              </span>
            </div>
            <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Nav columns */}
          {footer.columns.map((col) => (
            <nav key={col.heading} aria-label={`${col.heading} links`}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] mb-5">
              Contact Us
            </h3>
            <p className="text-sm text-[#A3A3A3] leading-relaxed mb-3">
              {footer.address}
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="text-sm text-[#A3A3A3] hover:text-[#2563EB] transition-colors duration-200 break-all"
            >
              {footer.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B6B] text-sm">{footer.copyright}</p>

            {/* Social icons */}
            <div className="flex items-center gap-4" aria-label="Social media links">
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-[#6B6B6B] hover:text-[#2563EB] transition-colors duration-200"
              >
                <TwitterX size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#6B6B6B] hover:text-[#2563EB] transition-colors duration-200"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#6B6B6B] hover:text-[#2563EB] transition-colors duration-200"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
