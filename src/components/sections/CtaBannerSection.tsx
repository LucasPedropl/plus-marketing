import { ArrowRight, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { APP_LOGIN_URL, SALES_CONTACT_URL } from '@/content/site'

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-sunken py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-brand/30 bg-ink-raised lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-7 sm:p-11 lg:p-14">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="font-wide mt-4 max-w-3xl text-balance text-3xl font-black leading-[1.03] tracking-[-0.04em] text-cream sm:text-4xl lg:text-5xl">
              Veja o Bix Plus funcionando no seu tipo de negócio
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-cream-dim sm:text-lg">
              Conte como sua operação funciona. Nossa equipe mostra uma demonstração objetiva e ajuda
              a montar a primeira tela, sem compromisso.
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-brand/20 bg-brand/[0.08] p-7 sm:p-11 lg:border-l lg:border-t-0">
            <MessageCircle className="h-8 w-8 text-brand-light" aria-hidden="true" />
            <p className="mt-5 text-sm leading-relaxed text-cream-dim">
              Atendimento direto, implantação guiada e nenhum contrato de fidelidade.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink href={SALES_CONTACT_URL} size="lg">
                Falar com a equipe
              </ButtonLink>
              <ButtonLink
                href={APP_LOGIN_URL}
                variant="ghost"
                size="lg"
                icon={<ArrowRight className="order-last h-4 w-4" aria-hidden="true" />}
              >
                Já sou cliente
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
