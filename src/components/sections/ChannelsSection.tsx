import { ListVideo, PanelsTopLeft, Radio } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CHANNEL_EXPERIENCES, FEATURED_CHANNELS } from '@/content/channels'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

const EXPERIENCE_ICONS = [Radio, PanelsTopLeft, ListVideo] as const

export function ChannelsSection() {
  return (
    <section
      id={SECTION_IDS.channels}
      aria-labelledby="channels-title"
      className="relative overflow-hidden border-t border-line bg-ink-sunken py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Programação para o seu ambiente"
              titleId="channels-title"
              title="Da partida ao desenho: você escolhe o clima"
              description="Exiba canais ao vivo, vídeos do YouTube ou combine conteúdo e ofertas da sua loja na mesma tela."
            />

            <div className="mt-8 divide-y divide-line border-y border-line">
              {CHANNEL_EXPERIENCES.map((experience, index) => {
                const Icon = EXPERIENCE_ICONS[index]

                return (
                  <div key={experience.title} className="grid grid-cols-[2.75rem_1fr] gap-3 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-cream">{experience.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream-dim">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <ButtonLink href={SALES_CONTACT_URL} size="lg" className="mt-8 w-full sm:w-auto">
              Conhecer as opções de conteúdo
            </ButtonLink>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-ink-raised p-3 shadow-[0_28px_70px_-36px_hsl(var(--brand)/0.45)] sm:p-5">
            <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-1">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-light">
                  Amostra da grade
                </p>
                <p className="mt-1 text-sm text-cream-dim">Conteúdo para diferentes momentos do dia</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-signal">
                <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                Ao vivo
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {FEATURED_CHANNELS.map((channel) => (
                <figure
                  key={channel.name}
                  className="overflow-hidden rounded-2xl bg-[#f7f7f5] p-2.5 text-[#171311] shadow-[inset_0_0_0_1px_rgba(23,19,17,0.08)]"
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-white">
                    <img
                      src={channel.logoSrc}
                      alt={`Logotipo ${channel.name}`}
                      width="300"
                      height="300"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="px-1 pb-1 pt-2">
                    <span translate="no" className="block truncate text-xs font-semibold">{channel.name}</span>
                    <span className="mt-0.5 block text-[0.65rem] text-[#716862]">{channel.category}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="px-2 pb-1 pt-4 text-xs leading-relaxed text-cream-dim">
              A grade é uma amostra e pode variar conforme a fonte autorizada configurada e a região.
              As marcas pertencem aos respectivos titulares.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
