import { Check, Database, RefreshCw, Smartphone, Tv } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

const CATALOG_PILLARS = [
  {
    icon: Database,
    title: 'Sem redigitar produtos',
    description: 'Importe produtos, categorias e preços diretamente do banco do seu PDV (UaiPDV / UaiPDV Mais).',
  },
  {
    icon: RefreshCw,
    title: 'Sincronização em um clique',
    description: 'Mudou um preço ou esgotou um item no caixa? Basta sincronizar para refletir no painel.',
  },
  {
    icon: Tv,
    title: 'Alimenta o TV Studio',
    description: 'Seus produtos vão direto para os layouts de cardápio digital e propaganda na televisão.',
  },
  {
    icon: Smartphone,
    title: 'Pronto para atendimento',
    description: 'Seus atendentes e mensagens usam os mesmos nomes e códigos cadastrados no PDV.',
  },
]

export function CatalogSection() {
  return (
    <section
      id={SECTION_IDS.catalog}
      aria-labelledby="catalog-title"
      className="border-t border-line bg-ink-sunken/80 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Catálogo & PDV"
              titleId="catalog-title"
              title="Seu cardápio na tela sem cadastrar tudo de novo"
              description="Esqueça pendrives, artes estáticas no Canva ou retrabalho de digitação. O Bix Plus espelha os produtos já cadastrados no seu sistema de frente de caixa."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {CATALOG_PILLARS.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="rounded-xl border border-line bg-ink-raised/50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-semibold text-cream">{pillar.title}</h3>
                    <p className="mt-1 text-xs text-cream-dim leading-relaxed">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={SALES_CONTACT_URL}>
                Integrar meu PDV ao Bix Plus
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            {/* Visual preview of PDV Sync Pipeline */}
            <div className="rounded-2xl border border-line bg-ink-raised p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-signal/80 animate-pulse-dot" />
                  <span className="font-mono text-xs text-cream uppercase tracking-wider">
                    Espelho de Catálogo PDV
                  </span>
                </div>
                <span className="font-mono text-xs text-cream-dim">Status: Sincronizado</span>
              </div>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg bg-ink-sunken p-3 border border-line/60">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-brand/20 text-brand text-[10px]">
                      PDV
                    </span>
                    <div>
                      <p className="text-cream font-medium">UaiPDV Caixa 01</p>
                      <p className="text-[10px] text-cream-dim">142 produtos ativos</p>
                    </div>
                  </div>
                  <Check className="h-4 w-4 text-signal" />
                </div>

                <div className="flex justify-center py-1">
                  <span className="h-4 w-px bg-brand/40" />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-ink-sunken p-3 border border-line/60">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-brand text-ink text-[10px] font-bold">
                      PLUS
                    </span>
                    <div>
                      <p className="text-cream font-medium">Bix Plus Catálogo Central</p>
                      <p className="text-[10px] text-cream-dim">Categorias: Lanches, Bebidas, Porções</p>
                    </div>
                  </div>
                  <span className="text-[10px] rounded bg-signal/10 px-2 py-0.5 text-signal font-medium">
                    Pronto
                  </span>
                </div>

                <div className="flex justify-center py-1">
                  <span className="h-4 w-px bg-brand/40" />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="rounded-lg bg-ink-sunken/80 p-2.5 border border-line/40 text-center">
                    <Tv className="mx-auto h-4 w-4 text-brand-light mb-1" />
                    <p className="text-[11px] font-medium text-cream">TV Balcão Salão</p>
                    <p className="text-[9px] text-cream-dim">Cardápio atualizado</p>
                  </div>
                  <div className="rounded-lg bg-ink-sunken/80 p-2.5 border border-line/40 text-center">
                    <Smartphone className="mx-auto h-4 w-4 text-brand-light mb-1" />
                    <p className="text-[11px] font-medium text-cream">WhatsApp Loja</p>
                    <p className="text-[9px] text-cream-dim">Disparos de Delivery</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-brand/10 p-3 text-center border border-brand/20">
                <p className="text-xs text-brand-light font-medium">
                  Zero divergência de preços entre a tela do salão e a conta do cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
