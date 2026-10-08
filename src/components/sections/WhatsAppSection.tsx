import { MessageSquareCheck, QrCode, Sparkles } from 'lucide-react'
import { PhoneDeliveryChat } from '@/components/mockups/PhoneDeliveryChat'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DELIVERY_STAGES } from '@/content/product'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

export function WhatsAppSection() {
  return (
    <section
      id={SECTION_IDS.whatsapp}
      aria-labelledby="whatsapp-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="WhatsApp Inteligente"
              titleId="whatsapp-title"
              title="Avisos no WhatsApp a cada status do pedido"
              description="Elimine a pergunta 'onde está meu pedido?'. O Bix Plus envia notificações automáticas a cada mudança de etapa, usando o WhatsApp oficial do seu estabelecimento."
            />

            <div className="mt-8 space-y-3.5">
              {DELIVERY_STAGES.map((stage) => (
                <div
                  key={stage.stepLabel}
                  className="group rounded-xl border border-line bg-ink-raised/60 p-4 transition-[background-color,border-color] hover:border-brand/40 hover:bg-ink-raised"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-light">
                      {stage.stepLabel}
                    </span>
                    {stage.isCancellation ? (
                      <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-medium text-red-400">
                        Exceção
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-signal">
                        <MessageSquareCheck className="h-3 w-3" />
                        Disparo automático
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 font-semibold text-cream">{stage.title}</h3>
                  <p className="mt-1 text-sm text-cream-dim font-mono bg-ink-sunken/60 rounded px-2.5 py-1.5 border border-line/60">
                    &ldquo;{stage.sampleMessage}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href={SALES_CONTACT_URL} size="lg">
                Ativar WhatsApp na minha loja
              </ButtonLink>
              <div className="flex items-center gap-2 text-xs text-cream-dim">
                <QrCode className="h-4 w-4 text-brand-light" />
                <span>Conexão rápida por QR Code via navegador</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-[3rem] bg-gradient-to-b from-brand/20 via-brand/5 to-transparent blur-xl" />
              <div className="relative">
                <PhoneDeliveryChat
                  accessibleDescription="Demonstração das mensagens automáticas de entrega recebidas no WhatsApp do cliente"
                  className="max-w-[280px] sm:max-w-[300px]"
                />
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-raised px-4 py-2 text-xs text-cream-dim">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span>Funciona tanto para retirada no balcão quanto entrega motoboy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
