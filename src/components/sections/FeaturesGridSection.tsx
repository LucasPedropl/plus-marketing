import { SectionHeader } from '@/components/ui/SectionHeader'
import { PRODUCT_FEATURES } from '@/content/product'
import { SECTION_IDS } from '@/content/site'

export function FeaturesGridSection() {
  return (
    <section
      id={SECTION_IDS.features}
      aria-labelledby="features-title"
      className="border-t border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Recursos do Sistema"
          titleId="features-title"
          title="Tudo o que seu negócio precisa num painel só"
          description="Do disparo programado à transmissão de jogos com cardápio, cada módulo foi construído para o ritmo real do comércio."
          alignment="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative rounded-2xl border border-line bg-ink-raised/50 p-6 transition-all duration-300 hover:border-brand/40 hover:bg-ink-raised hover:shadow-[0_12px_30px_-10px_hsl(var(--brand)/0.15)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-sunken border border-line text-brand transition-colors group-hover:bg-brand group-hover:text-ink">
                  <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-5 font-wide text-lg font-bold uppercase tracking-tight text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-cream-dim leading-relaxed">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
