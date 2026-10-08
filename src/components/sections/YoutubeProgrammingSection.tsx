import { Eye, ImagePlay, Link2, TimerReset } from 'lucide-react'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { TvFrame } from '@/components/mockups/TvFrame'
import { YoutubeScreen } from '@/components/mockups/screens/YoutubeScreen'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

const PROGRAMMING_STEPS = [
  {
    icon: Link2,
    title: 'Escolha o conteúdo',
    description: 'Cole os links dos vídeos ou defina o canal do YouTube que deve ficar no ar.',
  },
  {
    icon: ImagePlay,
    title: 'Monte os comerciais',
    description: 'Use imagem ou vídeo e personalize cores, textos e a proporção da propaganda.',
  },
  {
    icon: TimerReset,
    title: 'Defina o ritmo',
    description: 'Escolha o tempo da programação antes do intervalo e confira tudo na prévia.',
  },
] as const

const PROGRAMMING_TIMELINE = [
  {
    label: 'Conteúdo',
    detail: 'Vídeo da marca',
    className: 'basis-[42%] bg-[#24201e] text-cream',
  },
  {
    label: 'Comercial',
    detail: 'Oferta da loja',
    className: 'basis-[26%] bg-brand text-ink',
  },
  {
    label: 'Conteúdo',
    detail: 'Próximo vídeo',
    className: 'basis-[32%] bg-[#24201e] text-cream',
  },
] as const

export function YoutubeProgrammingSection() {
  return (
    <section
      id={SECTION_IDS.youtube}
      aria-labelledby="youtube-programming-title"
      className="relative overflow-hidden border-t border-line bg-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-[radial-gradient(circle_at_65%_45%,hsl(var(--brand)/0.16),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(hsl(var(--cream))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--cream))_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-16">
        <div>
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff0033] text-white shadow-[0_18px_42px_-18px_rgba(255,0,51,0.8)]">
            <YoutubeIcon className="h-6 w-6" />
          </div>
          <SectionHeader
            eyebrow="YouTube + propaganda"
            titleId="youtube-programming-title"
            title="Sua programação, com espaço para vender"
            description="Use vídeos ou canais do YouTube como programação e intercale comerciais da sua loja. Você define o conteúdo, o tempo em tela e o visual da propaganda antes de colocar a TV no ar."
          />

          <ol className="mt-9 border-l border-line">
            {PROGRAMMING_STEPS.map((step, index) => {
              const Icon = step.icon

              return (
                <li key={step.title} className="relative grid grid-cols-[2.75rem_1fr] gap-3 pb-6 pl-5 last:pb-0">
                  <span className="absolute -left-1.5 top-4 h-3 w-3 rounded-full border-[3px] border-ink bg-brand" aria-hidden="true" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-raised text-brand-light ring-1 ring-line">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cream-dim">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-semibold text-cream">{step.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-cream-dim">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <ButtonLink href={SALES_CONTACT_URL} size="lg" className="mt-9 w-full sm:w-auto">
            Quero montar minha programação
          </ButtonLink>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-line bg-ink-raised/90 p-3 shadow-[0_40px_100px_-44px_hsl(var(--brand)/0.65)] backdrop-blur sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-light">Programação 01</p>
                <p className="mt-1 text-sm text-cream-dim">Recepção · TV principal</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-signal">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-signal" aria-hidden="true" />
                No ar
              </span>
            </div>

            <TvFrame
              accessibleDescription="Exemplo de uma TV reproduzindo uma sequência de vídeos do YouTube configurada no Bix Plus."
              screenNumber={2}
              pairingPin="7614"
            >
              <YoutubeScreen />
            </TvFrame>

            <div className="relative mt-6 overflow-hidden rounded-2xl bg-ink-sunken p-4 ring-1 ring-line sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cream">Linha de programação</p>
                  <p className="mt-0.5 text-xs text-cream-dim">O comercial entra entre os conteúdos</p>
                </div>
                <Eye className="h-4 w-4 text-brand-light" aria-hidden="true" />
              </div>

              <ol className="mt-4 flex min-w-0 gap-1.5" aria-label="Exemplo de sequência de exibição">
                {PROGRAMMING_TIMELINE.map((item) => (
                  <li key={`${item.label}-${item.detail}`} className={`min-w-0 rounded-lg px-3 py-3 ${item.className}`}>
                    <span className="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.12em] opacity-70">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-xs font-semibold">{item.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-4 grid gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line sm:grid-cols-3 lg:ml-8 lg:mr-[-1rem]">
            <p className="bg-ink-sunken px-4 py-3 text-xs text-cream-dim"><strong className="block text-cream">Imagem ou vídeo</strong> nos comerciais</p>
            <p className="bg-ink-sunken px-4 py-3 text-xs text-cream-dim"><strong className="block text-cream">Tempo ajustável</strong> entre intervalos</p>
            <p className="bg-ink-sunken px-4 py-3 text-xs text-cream-dim"><strong className="block text-cream">Prévia em tela cheia</strong> antes de publicar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
