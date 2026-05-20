import { cn } from '../lib/utils'
import { nav } from '../data/content'

interface LogoProps {
  className?: string
  imageClassName?: string
  showWordmark?: boolean
  /** When true, always shows "Technology" beside the wordmark (footer). */
  fullWordmark?: boolean
}

export function Logo({
  className,
  imageClassName,
  showWordmark = true,
  fullWordmark = false,
}: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/logo.png"
        alt="Aoomle Technology"
        width={40}
        height={40}
        className={cn('h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain flex-shrink-0', imageClassName)}
      />
      {showWordmark && (
        <span className="flex items-baseline gap-1.5">
          <span className="text-[#111827] font-extrabold text-xl tracking-tight">
            {nav.brand.name}
          </span>
          <span
            className={cn(
              'text-[#525252] font-normal text-lg tracking-tight',
              !fullWordmark && 'hidden sm:inline',
            )}
          >
            {nav.brand.nameWeight}
          </span>
        </span>
      )}
    </span>
  )
}
