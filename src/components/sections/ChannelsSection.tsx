import { useState } from 'react'
import { Sparkles, Tv, Check } from 'lucide-react'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { TvFrame } from '@/components/mockups/TvFrame'
import { ChannelPanelScreen } from '@/components/mockups/screens/ChannelPanelScreen'
import { YoutubeScreen } from '@/components/mockups/screens/YoutubeScreen'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CHANNEL_CATEGORIES, YOUTUBE_FEATURES } from '@/content/channels'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'
import { cn } from '@/lib/cn'

type PreviewTab = 'canais' | 'youtube'

export function ChannelsSection() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('canais')

  return (
    <section
      id={SECTION_IDS.channels}
      aria-labelledby="channels-title"
      className="border-t border-line bg-ink-sunken/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Canais ao Vivo & YouTube"
          titleId="channels-title"
          title="Futebol, jornais ou seus próprios vídeos do YouTube na TV"
          description="Transforme as TVs da loja no centro de atenção do salão. Acompanhe jogos e notícias ao vivo ou crie sua própria programação com vídeos e músicas do YouTube."
          alignment="center"
        />

        {/* Tab switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-line bg-ink-raised p-1.5 shadow-md">
            <button
              type="button"
              onClick={() => setActiveTab('canais')}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer',
                activeTab === 'canais'
                  ? 'bg-brand text-ink shadow-sm'
                  : 'text-cream-dim hover:text-cream',
              )}
            >
              <Tv className="h-4 w-4" />
              <span>Canais ao Vivo & Esportes</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('youtube')}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer',
                activeTab === 'youtube'
                  ? 'bg-brand text-ink shadow-sm'
                  : 'text-cream-dim hover:text-cream',
              )}
            >
              <YoutubeIcon className="h-4 w-4" />
              <span>Vídeos & Playlists do YouTube</span>
            </button>
          </div>
        </div>

        {/* Main Content Area based on tab */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* Left Column: Explanatory Content */}
          <div>
            {activeTab === 'canais' ? (
              <div className="space-y-6 animate-screen-in">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-light">
                    Grade Completa de Transmissão
                  </span>
                  <h3 className="font-wide mt-2 text-2xl font-bold uppercase text-cream">
                    Canais para todo tipo de público e horário
                  </h3>
                  <p className="mt-2 text-sm text-cream-dim leading-relaxed">
                    Deixe a TV ligada no jogo decisivo ou com notícias durante o almoço. E com o modo <strong>Canal + Painel</strong>, sua vitrine de ofertas continua visível na lateral da tela sem interromper a transmissão.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {CHANNEL_CATEGORIES.map((category) => {
                    const Icon = category.icon
                    return (
                      <div
                        key={category.id}
                        className="rounded-xl border border-line bg-ink-raised/60 p-3.5 transition-all hover:border-brand/40 hover:bg-ink-raised"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-brand-light">
                            <Icon className="h-4 w-4" />
                            <span className="font-semibold text-xs text-cream">{category.name}</span>
                          </div>
                          <span className="rounded bg-brand/10 px-1.5 py-0.5 text-[10px] font-mono text-brand-light">
                            {category.badge}
                          </span>
                        </div>
                        <p className="mt-2 text-[11px] text-cream-dim leading-normal">
                          {category.description}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-brand shrink-0" />
                  <p className="text-xs text-cream/90">
                    <strong>Zero pirataria na tela:</strong> os players exibem exclusivamente a identidade da sua loja, sem marcas d&apos;água intrusivas.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-screen-in">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-light">
                    Sua Própria Programação
                  </span>
                  <h3 className="font-wide mt-2 text-2xl font-bold uppercase text-cream">
                    Cole qualquer link do YouTube e transmita na TV
                  </h3>
                  <p className="mt-2 text-sm text-cream-dim leading-relaxed">
                    Quer tocar uma seleção de acústicos sem comerciais aleatórios? Ou mostrar o vídeo institucional da sua marca? Basta colar as URLs no painel web do Bix Plus.
                  </p>
                </div>

                <div className="space-y-3">
                  {YOUTUBE_FEATURES.map((feat) => (
                    <div
                      key={feat.title}
                      className="rounded-xl border border-line bg-ink-raised/60 p-4 transition-all hover:border-brand/30 hover:bg-ink-raised"
                    >
                      <h4 className="font-semibold text-sm text-cream flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-light shrink-0" />
                        {feat.title}
                      </h4>
                      <p className="mt-1 text-xs text-cream-dim leading-relaxed pl-6">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-line bg-ink-raised p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-cream-dim border-b border-line pb-2 mb-2">
                    <span>Exemplo de Configuração no Painel:</span>
                    <span className="text-signal">Pronto para rodar</span>
                  </div>
                  <p className="text-cream truncate">1. https://youtube.com/watch?v=making-of-burgers</p>
                  <p className="text-cream truncate">2. https://youtube.com/playlist?list=barzinho-acustico</p>
                </div>
              </div>
            )}

            <div className="mt-8">
              <ButtonLink href={SALES_CONTACT_URL} size="lg">
                Quero telas com canais e YouTube na minha loja
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: TV Mockup Preview */}
          <div className="flex flex-col items-center justify-center">
            <TvFrame
              accessibleDescription={
                activeTab === 'canais'
                  ? 'TV exibindo jogo de futebol ao vivo com painel lateral de promoções de cervejas e porções'
                  : 'TV exibindo vídeo institucional de hambúrguer do YouTube em loop contínuo'
              }
              screenNumber={activeTab === 'canais' ? 1 : 2}
              pairingPin={activeTab === 'canais' ? '3910' : '8204'}
            >
              {activeTab === 'canais' ? (
                <ChannelPanelScreen showOffersPanel={true} />
              ) : (
                <YoutubeScreen />
              )}
            </TvFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
