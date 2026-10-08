import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  alignment?: 'left' | 'center'
  titleId?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'left',
  titleId,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        alignment === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={titleId}
        className="font-wide mt-3 text-balance text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-cream sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-cream-dim sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
