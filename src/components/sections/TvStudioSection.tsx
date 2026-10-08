import { useRef, useState, type KeyboardEvent } from 'react'
import { TvFrame } from '@/components/mockups/TvFrame'
import { TvScreenByMode } from '@/components/mockups/TvScreenByMode'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TV_MODES, type TvModeId } from '@/content/product'
import { SECTION_IDS } from '@/content/site'
import { cn } from '@/lib/cn'

const TV_FACTS = [
  { value: '5', label: 'telas por conta' },
  { value: '1', label: 'PIN para cada TV' },
  { value: 'Segundos', label: 'para trocar o que passa' },
]

export function TvStudioSection() {
  const [selectedModeId, setSelectedModeId] = useState<TvModeId>('products')
  const tabButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const selectedModeIndex = TV_MODES.findIndex((tvMode) => tvMode.id === selectedModeId)
  const selectedMode = TV_MODES[selectedModeIndex]

  const moveSelectionWithArrows = (keyboardEvent: KeyboardEvent<HTMLDivElement>) => {
    const offsetByKey: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    const offset = offsetByKey[keyboardEvent.key]
    if (offset === undefined) return
    keyboardEvent.preventDefault()
    const nextIndex = (selectedModeIndex + offset + TV_MODES.length) % TV_MODES.length
    setSelectedModeId(TV_MODES[nextIndex].id)
    tabButtonRefs.current[nextIndex]?.focus()
  }

  return (
    <section id={SECTION_IDS.tvStudio} aria-labelledby="tv-title" className="border-y border-line bg-ink-sunken py-16 sm:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="TV Studio"
          titleId="tv-title"
          title="Cada TV da loja com uma função"
          description="Escolha o que cada tela mostra e troque pelo painel quando quiser. A TV exibe o nome e a marca da sua loja."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-center lg:gap-14">
          <div role="tablist" aria-label="Funções da tela" aria-orientation="vertical" onKeyDown={moveSelectionWithArrows} className="grid gap-2">
            {TV_MODES.map((tvMode, modeIndex) => {
              const isSelected = tvMode.id === selectedModeId
              return (
                <button
                  key={tvMode.id}
                  ref={(buttonElement) => {
                    tabButtonRefs.current[modeIndex] = buttonElement
                  }}
                  type="button"
                  role="tab"
                  id={`tv-mode-tab-${tvMode.id}`}
                  aria-selected={isSelected}
                  aria-controls="tv-mode-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedModeId(tvMode.id)}
                  className={cn(
                    'rounded-xl border-l-2 px-4 py-3 text-left transition-colors',
                    isSelected ? 'border-brand bg-ink-raised' : 'border-transparent hover:bg-ink-raised/50',
                  )}
                >
                  <span className={cn('block font-semibold', isSelected ? 'text-cream' : 'text-cream-dim')}>
                    {tvMode.label}
                  </span>
                  {isSelected ? <span className="mt-1 block text-sm text-cream-dim">{tvMode.description}</span> : null}
                </button>
              )
            })}
          </div>

          <div role="tabpanel" id="tv-mode-panel" aria-labelledby={`tv-mode-tab-${selectedMode.id}`}>
            <TvFrame key={selectedMode.id} accessibleDescription={`Exemplo de TV no modo ${selectedMode.label}: ${selectedMode.description}`}>
              <TvScreenByMode modeId={selectedMode.id} />
            </TvFrame>
          </div>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-3">
          {TV_FACTS.map((tvFact) => (
            <div key={tvFact.label} className="bg-ink-sunken px-6 py-5">
              <dt className="text-sm text-cream-dim">{tvFact.label}</dt>
              <dd className="font-wide order-first text-2xl font-black uppercase text-cream">{tvFact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
