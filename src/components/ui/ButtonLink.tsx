import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonLinkVariant = 'primary' | 'outline' | 'ghost'
type ButtonLinkSize = 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonLinkVariant
  size?: ButtonLinkSize
  icon?: ReactNode
  children: ReactNode
}

const VARIANT_CLASS_NAMES: Record<ButtonLinkVariant, string> = {
  primary: 'bg-brand text-ink hover:bg-brand-light',
  outline: 'border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/5',
  ghost: 'text-cream hover:bg-cream/10',
}

const SIZE_CLASS_NAMES: Record<ButtonLinkSize, string> = {
  md: 'min-h-11 px-4 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href)
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...anchorAttributes
}: ButtonLinkProps) {
  const externalAttributes = isExternalHref(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none',
        VARIANT_CLASS_NAMES[variant],
        SIZE_CLASS_NAMES[size],
        className,
      )}
      {...externalAttributes}
      {...anchorAttributes}
    >
      {icon}
      {children}
    </a>
  )
}
