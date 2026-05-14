import React from 'react'
import { cn } from '../../lib/utils'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children: React.ReactNode
}

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '8px',
  background = '#2563EB',
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          '--shimmer-color': shimmerColor,
          '--shimmer-size': shimmerSize,
          '--shimmer-duration': shimmerDuration,
          '--border-radius': borderRadius,
          '--background': background,
        } as React.CSSProperties
      }
      className={cn(
        'group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap px-6 py-3 font-semibold text-white transition-all duration-300',
        'hover:brightness-110 active:brightness-95',
        className,
      )}
      style={{
        background,
        borderRadius,
      }}
      {...props}
    >
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <span
          className="absolute inset-[-100%] animate-[shimmer_3s_linear_infinite]"
          style={{
            background: `conic-gradient(from 90deg at 40% 50%, transparent 50%, ${shimmerColor}22 60%, transparent 70%)`,
          }}
        />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}
