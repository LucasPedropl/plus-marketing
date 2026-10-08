import {
  BarChart3,
  Check,
  ChevronDown,
  MessageCircle,
  MonitorPlay,
  Radio,
  RefreshCcw,
  ShieldCheck,
} from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SINGLE_PLAN } from '@/content/plans'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

const HIGHLIGHT_ICONS = [MonitorPlay, MessageCircle, RefreshCcw, Radio, BarChart3, ShieldCheck] as const

export function PlansSection() {
  return (
    <section
      id={SECTION_IDS.plans}
      aria-labelledby="plans-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-32 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Um plano, acesso completo"
          titleId="plans-title"
          title="Simples para escolher. Completo para usar."
          description="WhatsApp, telas, canais, YouTube e catálogo do PDV em uma única assinatura, sem módulos escondidos."
          alignment="center"
        />

        <article className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-brand/30 bg-ink-raised shadow-[0_30px_90px_-44px_hsl(var(--brand)/0.55)]">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_18rem] lg:items-center lg:p-11">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-light">
                {SINGLE_PLAN.badge}
              </span>
              <h3 className="font-wide mt-5 text-3xl font-black tracking-tight text-cream sm:text-4xl">
                {SINGLE_PLAN.name}
              </h3>
              <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-cream-dim">
                {SINGLE_PLAN.tagline}
              </p>
            </div>

            <div className="rounded-2xl border border-brand/30 bg-ink-sunken p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cream-dim">
                Assinatura mensal
              </p>
              <div className="mt-2 flex items-end gap-2">
                <strong className="font-wide tabular-nums text-4xl font-black leading-none text-brand-light sm:text-5xl">
                  {SINGLE_PLAN.monthlyPrice}
                </strong>
                <span className="pb-1 text-sm text-cream-dim">{SINGLE_PLAN.periodLabel}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-cream-dim">
                Sem fidelidade. Ativação guiada e suporte humano incluídos.
              </p>
              <ButtonLink href={SALES_CONTACT_URL} className="mt-5 w-full">
                Quero assinar o Bix Plus
              </ButtonLink>
            </div>
          </div>

          <div className="border-y border-line bg-ink/45 px-6 py-8 sm:px-9 lg:px-11">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-light">
              O essencial, sem letras miúdas
            </p>
            <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {SINGLE_PLAN.highlights.map((highlight, index) => {
                const Icon = HIGHLIGHT_ICONS[index]

                return (
                  <div key={highlight} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-relaxed text-cream/90">{highlight}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-6 sm:px-9 sm:py-8 lg:px-11">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SINGLE_PLAN.guarantees.map((guarantee) => (
                <div key={guarantee} className="flex items-start gap-2 text-xs leading-relaxed text-cream-dim">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>

            <details className="group mt-7 border-t border-line pt-2">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 rounded-xl px-2 text-sm font-semibold text-cream transition-colors hover:bg-cream/5">
                Ver todos os recursos incluídos
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-brand-light transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="grid gap-7 px-2 pb-2 pt-5 md:grid-cols-3">
                {SINGLE_PLAN.featureCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-sm font-semibold text-brand-light">{category.title}</h4>
                    <ul className="mt-3 space-y-2.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-cream-dim">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-light" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  )
}
