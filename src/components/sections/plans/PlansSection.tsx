import { Check, ShieldCheck, Sparkles, Tv, MessageCircle, Zap } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SINGLE_PLAN } from '@/content/plans'
import { SALES_CONTACT_URL, SALES_WHATSAPP_DISPLAY, SECTION_IDS } from '@/content/site'

export function PlansSection() {
  return (
    <section id={SECTION_IDS.plans} aria-labelledby="plans-title" className="relative py-16 sm:py-24">
      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Plano Único e Completo"
          titleId="plans-title"
          title="Tudo liberado por um preço fixo e justo"
          description="Sem pegadinhas, sem planos básicos com recursos bloqueados. Você tem acesso total ao WhatsApp, TV Studio com canais e YouTube, catálogo e suporte."
          alignment="center"
        />

        {/* Main Single Plan Showcase Card */}
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-brand/40 bg-ink-raised p-6 shadow-[0_24px_70px_-20px_hsl(var(--brand)/0.25)] sm:p-10 lg:p-12">
          {/* Top highlight bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-brand-light ring-1 ring-brand/30">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                {SINGLE_PLAN.badge}
              </span>
              <h3 className="font-wide mt-3 text-3xl font-extrabold uppercase tracking-tight text-cream sm:text-4xl">
                {SINGLE_PLAN.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm text-cream-dim sm:text-base">
                {SINGLE_PLAN.tagline}
              </p>
            </div>

            <div className="flex flex-col items-start rounded-2xl border border-brand/20 bg-ink-sunken/80 px-6 py-4 sm:items-end">
              <span className="font-mono text-xs uppercase tracking-wider text-cream-dim">
                Investimento mensal
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-wide text-4xl font-black text-brand-light sm:text-5xl">
                  {SINGLE_PLAN.monthlyPrice}
                </span>
                <span className="font-mono text-sm text-cream-dim">
                  {SINGLE_PLAN.periodLabel}
                </span>
              </div>
              <span className="mt-1 font-mono text-[11px] text-signal flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Ativação imediata no WhatsApp
              </span>
            </div>
          </div>

          {/* Included modules pill badges */}
          <div className="pt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-cream-dim">
              Módulos liberados na sua conta:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SINGLE_PLAN.includedModules.map((moduleName) => (
                <span
                  key={moduleName}
                  className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-cream"
                >
                  {moduleName}
                </span>
              ))}
            </div>
          </div>

          {/* Categorized Features Grid */}
          <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2 lg:grid-cols-3">
            {SINGLE_PLAN.featureCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h4 className="font-wide text-sm font-bold uppercase tracking-wider text-brand-light flex items-center gap-2">
                  {category.title.includes('WhatsApp') ? (
                    <MessageCircle className="h-4 w-4" />
                  ) : (
                    <Tv className="h-4 w-4" />
                  )}
                  {category.title}
                </h4>
                <ul className="space-y-2.5">
                  {category.items.map((itemText) => (
                    <li key={itemText} className="flex items-start gap-2 text-xs leading-relaxed text-cream/90">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-light" aria-hidden="true" />
                      <span>{itemText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantees Bar */}
          <div className="mt-10 grid gap-3 rounded-2xl border border-line/80 bg-ink-sunken p-4 sm:grid-cols-2 lg:grid-cols-4">
            {SINGLE_PLAN.guarantees.map((guaranteeText) => (
              <div key={guaranteeText} className="flex items-center gap-2 text-xs text-cream-dim">
                <ShieldCheck className="h-4 w-4 shrink-0 text-signal" />
                <span>{guaranteeText}</span>
              </div>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
            <div>
              <p className="font-semibold text-cream text-base">
                Dúvidas ou quer ver funcionando na prática?
              </p>
              <p className="text-xs text-cream-dim">
                Atendimento direto pelo WhatsApp comercial {SALES_WHATSAPP_DISPLAY}.
              </p>
            </div>

            <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
              <ButtonLink href={SALES_CONTACT_URL} size="lg" className="w-full sm:w-auto">
                Assinar agora por R$ 79,90/mês
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
