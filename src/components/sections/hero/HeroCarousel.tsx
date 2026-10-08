import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { HeroSlideControls } from '@/components/sections/hero/HeroSlideControls'
import { HeroSlideVisual } from '@/components/sections/hero/HeroSlideVisual'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HERO_SLIDE_DURATION_MS, HERO_SLIDES } from '@/content/heroSlides'
import { useCarouselIndex } from '@/hooks/useCarouselIndex'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HeroCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isAutoplayPausedByUser, setIsAutoplayPausedByUser] = useState(false)
  const { activeIndex, goToIndex, goToNext, goToPrevious } = useCarouselIndex(HERO_SLIDES.length)

  const isAutoplayEnabled = !prefersReducedMotion && !isAutoplayPausedByUser
  const isProgressRunning = isAutoplayEnabled
  const activeSlide = HERO_SLIDES[activeIndex]

  return (
    <section
      id="inicio"
      aria-roledescription="carrossel"
      aria-label="Destaques do Bix Plus"
      className="relative overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_78%_42%,hsl(var(--brand)/0.2),transparent_70%)]"
      />
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0 opacity-60" />

      <h1 className="sr-only">Bix Plus: WhatsApp, TVs da loja e catálogo do PDV num só painel</h1>

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid items-center gap-10 py-10 lg:min-h-[640px] lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-14">
          <div
            key={activeSlide.id}
            role="group"
            aria-roledescription="destaque"
            aria-label={`${activeIndex + 1} de ${HERO_SLIDES.length}`}
            aria-live={isAutoplayEnabled ? 'off' : 'polite'}
            className="animate-screen-in"
          >
            <p className="eyebrow">{activeSlide.tagline}</p>
            <h2 className="font-wide mt-4 text-balance text-[2.15rem] font-black uppercase leading-[0.98] tracking-tight text-cream sm:text-5xl xl:text-[3.6rem]">
              {activeSlide.title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base text-cream-dim sm:text-lg">
              {activeSlide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={activeSlide.primaryAction.href} size="lg">
                {activeSlide.primaryAction.label}
              </ButtonLink>
              <ButtonLink
                href={activeSlide.secondaryAction.href}
                variant="outline"
                size="lg"
                icon={<ArrowRight className="order-last h-4 w-4" aria-hidden="true" />}
              >
                {activeSlide.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>

          <div key={`${activeSlide.id}-visual`} className="flex h-[300px] items-center justify-center sm:h-[420px] lg:h-[560px]">
            <HeroSlideVisual visual={activeSlide.visual} />
          </div>
        </div>

        <div className="pb-10">
          <HeroSlideControls
            slides={HERO_SLIDES}
            activeIndex={activeIndex}
            slideDurationMs={HERO_SLIDE_DURATION_MS}
            isAutoplayEnabled={isAutoplayEnabled}
            isProgressRunning={isProgressRunning}
            canToggleAutoplay={!prefersReducedMotion}
            onSelectSlide={goToIndex}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onProgressComplete={goToNext}
            onToggleAutoplay={() => setIsAutoplayPausedByUser((isPaused) => !isPaused)}
          />
        </div>
      </div>
    </section>
  )
}
