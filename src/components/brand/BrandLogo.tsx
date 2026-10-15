import { cn } from '@/lib/cn'

interface BrandLogoProps {
  className?: string
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src="/brand/tv-studio-logo-horizontal.jpg"
        alt="TV Studio"
        className={cn('h-9 sm:h-10 w-auto object-contain rounded', imageClassName)}
        loading="eager"
        decoding="async"
      />
    </span>
  )
}

