import { cn } from '../../lib/utils'

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteors = Array.from({ length: number }, (_, i) => i)

  return (
    <>
      {meteors.map((i) => (
        <span
          key={i}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-[meteor_linear_infinite] rounded-[9999px] bg-[#3B82F6] shadow-[0_0_0_1px_#3b82f620]',
            'before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#3B82F6] before:to-transparent before:content-[""]',
            className,
          )}
          style={{
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.floor(Math.random() * 8 + 4)}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </>
  )
}
