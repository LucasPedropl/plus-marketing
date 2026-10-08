import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import type { HeroSlide } from '@/content/heroSlides'
import { cn } from '@/lib/cn'

interface HeroSlideControlsProps {
  slides: HeroSlide[]
  activeIndex: number
  slideDurationMs: number
  isAutoplayEnabled: boolean
  isProgressRunning: boolean
  canToggleAutoplay: boolean
  onSelectSlide: (slideIndex: number) => void
  onPrevious: () => void
  onNext: () => void
  onProgressComplete: () => void
  onToggleAutoplay: () => void
}

const ICON_BUTTON_CLASS_NAME =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-cream/50 hover:bg-cream/5'

export function HeroSlideControls({
  slides,
  activeIndex,
  slideDurationMs,
  isAutoplayEnabled,
  isProgressRunning,
  canToggleAutoplay,
  onSelectSlide,
  onPrevious,
  onNext,
  onProgressComplete,
  onToggleAutoplay,
}: HeroSlideControlsProps) {
  return (
    <div className="flex items-center gap-3 border-t border-line pt-5 sm:gap-4">
      <ol className="grid flex-1 grid-cols-3 gap-2 sm:gap-4">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === activeIndex
          return (
            <li key={slide.id}>
              <button
                type="button"
                onClick={() => onSelectSlide(slideIndex)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`Destaque ${slideIndex + 1} de ${slides.length}: ${slide.tabLabel}`}
                className="group flex min-h-11 w-full flex-col justify-center gap-2 text-left"
              >
                <span className="block h-0.5 w-full overflow-hidden rounded-full bg-cream/15">
                  {isActive ? (
                    <span
                      className="block h-full origin-left bg-brand"
                      style={
                        isAutoplayEnabled
                          ? {
                              animation: `slide-progress ${slideDurationMs}ms linear forwards`,
                              animationPlayState: isProgressRunning ? 'running' : 'paused',
                            }
                          : undefined
                      }
                      onAnimationEnd={onProgressComplete}
                    />
                  ) : null}
                </span>
                <span
                  className={cn(
                    'hidden truncate text-sm font-medium transition-colors sm:block',
                    isActive ? 'text-cream' : 'text-cream-dim group-hover:text-cream',
                  )}
                >
                  {slide.tabLabel}
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="flex items-center gap-2">
        {canToggleAutoplay ? (
          <button
            type="button"
            onClick={onToggleAutoplay}
            aria-label={isAutoplayEnabled ? 'Pausar troca automática' : 'Retomar troca automática'}
            className={ICON_BUTTON_CLASS_NAME}
          >
            {isAutoplayEnabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        ) : null}
        <button type="button" onClick={onPrevious} aria-label="Destaque anterior" className={ICON_BUTTON_CLASS_NAME}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={onNext} aria-label="Próximo destaque" className={ICON_BUTTON_CLASS_NAME}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
