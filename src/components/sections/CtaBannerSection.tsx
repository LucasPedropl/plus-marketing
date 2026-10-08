import { ArrowRight, Sparkles } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { APP_LOGIN_URL, SALES_CONTACT_URL } from '@/content/site'

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-gradient-to-b from-ink to-ink-sunken py-16 sm:py-24">
      {/* Decorative ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-ink-raised p-8 text-center sm:p-14 lg:p-16 shadow-[0_20px_60px_-15px_hsl(var(--brand)/0.25)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-brand-light mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modernize seu atendimento e suas telas</span>
          </div>

          <h2 className="font-wide mx-auto max-w-3xl text-balance text-3xl font-black uppercase leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
            Pronto para transformar suas TVs em vitrines e seu WhatsApp em máquina de vendas?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-cream-dim sm:text-lg">
            Sem contratos longos, sem taxas surpresa e sem precisar trocar de equipamento. Fale com nossa equipe e veja uma demonstração ao vivo para o seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={SALES_CONTACT_URL} size="lg">
              Falar com nossa equipe comercial
            </ButtonLink>
            <ButtonLink
              href={APP_LOGIN_URL}
              variant="outline"
              size="lg"
              icon={<ArrowRight className="order-last h-4 w-4" aria-hidden="true" />}
            >
              Já sou cliente e quero acessar
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
