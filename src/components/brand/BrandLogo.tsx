import { MessageCircle } from 'lucide-react'
import { BRAND_NAME } from '@/content/site'
import { cn } from '@/lib/cn'

interface BrandLogoProps {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-brand text-ink">
        <MessageCircle className="h-5 w-5" aria-hidden="true" strokeWidth={2.4} />
      </span>
      <span className="font-wide text-base font-extrabold uppercase tracking-tight text-cream">
        {BRAND_NAME}
      </span>
    </span>
  )
}
