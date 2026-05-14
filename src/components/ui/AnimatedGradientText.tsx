import { cn } from '../../lib/utils'

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        'inline-block bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] bg-[length:200%_auto] bg-clip-text text-transparent',
        'animate-[gradient-x_3s_ease_infinite]',
        className,
      )}
    >
      {children}
    </span>
  )
}
