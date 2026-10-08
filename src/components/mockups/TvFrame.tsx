import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TvFrameProps {
  children: ReactNode
  accessibleDescription: string
  screenNumber?: number
  pairingPin?: string
  className?: string
}

const MAX_SCREENS_PER_ACCOUNT = 5

export function TvFrame({
  children,
  accessibleDescription,
  screenNumber = 1,
  pairingPin = '4821',
  className,
}: TvFrameProps) {
  return (
    <figure className={cn('relative w-full', className)}>
      <div
        role="img"
        aria-label={accessibleDescription}
        className="rounded-[14px] bg-ink-sunken p-[1.1%] shadow-[0_40px_80px_-30px_hsl(var(--brand)/0.35)] ring-1 ring-line"
      >
        <div className="tv-viewport relative aspect-video overflow-hidden rounded-[6px] bg-ink-raised">
          <div aria-hidden="true" className="h-full w-full">
            {children}
          </div>
          <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-3 w-1/5 rounded-b-lg bg-ink-sunken ring-1 ring-line" />
      <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cream-dim">
        <span className="inline-flex items-center gap-1.5 text-signal">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden="true" />
          No ar
        </span>
        <span aria-hidden="true">·</span>
        <span>PIN {pairingPin}</span>
        <span aria-hidden="true">·</span>
        <span>
          Tela {screenNumber} de {MAX_SCREENS_PER_ACCOUNT}
        </span>
      </figcaption>
    </figure>
  )
}
