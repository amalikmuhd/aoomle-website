import { cn } from '../../lib/utils'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
}

export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  colorFrom = '#111827',
  colorTo = '#6B7280',
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]',
        '[background:linear-gradient(#F8FAFC,#F8FAFC)_padding-box,linear-gradient(calc(var(--angle,0)*1deg),var(--color-from),var(--color-to),transparent)_border-box]',
        '[animation:border-rotate_calc(var(--duration)*1s)_linear_infinite]',
        className,
      )}
    />
  )
}
