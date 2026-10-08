import {
  CheckCircle2,
  Cpu,
  Radio,
  Tv,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { APP_TV_CONNECT_URL, SECTION_IDS } from '@/content/site'

const COMPATIBLE_PLATFORMS = [
  { name: 'Samsung Smart TV', detail: 'Tizen Browser' },
  { name: 'LG Smart TV', detail: 'webOS Browser' },
  { name: 'Android TV / Google TV', detail: 'Chrome / Navegador TV' },
  { name: 'Amazon Fire TV', detail: 'Silk Browser' },
  { name: 'Roku TV', detail: 'Navegador Web' },
  { name: 'TV Box / Mini PC', detail: 'Qualquer navegador' },
  { name: 'Computador & Notebook', detail: 'Chrome, Edge, Firefox' },
  { name: 'Tablets & Telas Touch', detail: 'iPad & Android' },
]

export function DevicesSection() {
  return (
    <section
      id={SECTION_IDS.screens}
      aria-labelledby="devices-title"
      className="border-t border-line bg-ink-sunken/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Compatibilidade Universal"
          titleId="devices-title"
          title="Funciona em qualquer TV ou tela com navegador"
          description="Você não precisa comprar aparelhos proprietários caros nem passar cabos pela loja. Se tem acesso à internet e um navegador, o Bix Plus funciona."
          alignment="center"
        />

        {/* 3 Step onboarding bar */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-ink-raised p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-bold text-brand">
              01
            </div>
            <h3 className="mt-3 font-semibold text-cream">Abra o navegador</h3>
            <p className="mt-1 text-xs text-cream-dim">
              Acesse{' '}
              <a
                href={APP_TV_CONNECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light underline underline-offset-2"
              >
                plus.bixs.com.br/tv
              </a>{' '}
              na sua TV ou dispositivo.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-ink-raised p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-bold text-brand">
              02
            </div>
            <h3 className="mt-3 font-semibold text-cream">Digite o PIN</h3>
            <p className="mt-1 text-xs text-cream-dim">
              Gere um código de 4 dígitos no seu painel administrativo e confirme na tela.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-ink-raised p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-bold text-brand">
              03
            </div>
            <h3 className="mt-3 font-semibold text-cream">Controle no ar</h3>
            <p className="mt-1 text-xs text-cream-dim">
              Cardápio, jogos e propagandas entram no ar imediatamente com heartbeat automático.
            </p>
          </div>
        </div>

        {/* Platforms grid */}
        <div className="mt-12">
          <p className="text-center font-mono text-xs uppercase tracking-wider text-cream-dim">
            Dispositivos e sistemas homologados
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COMPATIBLE_PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-3 rounded-xl border border-line/70 bg-ink-raised/40 p-3.5 transition-colors hover:border-line hover:bg-ink-raised"
              >
                <Tv className="h-5 w-5 shrink-0 text-brand-light" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-cream">{platform.name}</p>
                  <p className="truncate text-[10px] text-cream-dim">{platform.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech highlights */}
        <div className="mt-12 grid gap-4 rounded-2xl border border-line bg-ink-raised p-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Radio className="h-5 w-5 text-signal" />
            <div>
              <p className="text-xs font-semibold text-cream">Comandos em tempo real</p>
              <p className="text-[11px] text-cream-dim">Comunicação via SSE sem delay</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="h-5 w-5 text-signal" />
            <div>
              <p className="text-xs font-semibold text-cream">Leve e otimizado</p>
              <p className="text-[11px] text-cream-dim">Roda suave em TVs de entrada</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-signal" />
            <div>
              <p className="text-xs font-semibold text-cream">Até 5 telas simultâneas</p>
              <p className="text-[11px] text-cream-dim">Cada uma com PIN independente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
