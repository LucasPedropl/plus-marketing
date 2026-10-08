import { Play, Repeat, Volume2 } from 'lucide-react'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { DEMO_STORE_NAME } from '@/content/mockupData'

export function YoutubeScreen() {
  return (
    <div className="tv-content relative flex h-full flex-col bg-zinc-950 text-cream animate-screen-in overflow-hidden">
      {/* Top store watermark and Youtube indicator */}
      <div className="absolute top-[4%] left-[4%] right-[4%] z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-[0.5em] rounded-[0.4em] bg-black/70 px-[0.7em] py-[0.35em] backdrop-blur-md">
          <YoutubeIcon className="h-[1.2em] w-[1.2em] text-red-500 fill-red-500" />
          <span className="font-mono text-[0.75em] text-cream font-medium">YouTube via Bix Plus</span>
        </div>
        <span className="font-condensed text-[0.9em] font-extrabold uppercase tracking-wide text-white/80 bg-black/60 px-[0.6em] py-[0.3em] rounded-[0.3em]">
          {DEMO_STORE_NAME}
        </span>
      </div>

      {/* Main video presentation area (Mock of restaurant playlist) */}
      <div className="relative flex-1 bg-gradient-to-tr from-zinc-900 via-amber-950/40 to-zinc-900 flex items-center justify-center">
        {/* Ambient video texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,96,48,0.15),transparent_70%)]" />

        <div className="text-center z-10 px-[1.5em]">
          <div className="mx-auto flex h-[4em] w-[4em] items-center justify-center rounded-full bg-brand text-ink shadow-lg shadow-brand/30">
            <Play className="h-[2em] w-[2em] translate-x-[0.1em] fill-ink" />
          </div>
          <h4 className="mt-[0.8em] font-wide text-[1.4em] font-extrabold uppercase text-cream">
            Making Of: Nossos Hambúrgueres Artesanais
          </h4>
          <p className="mt-[0.2em] font-mono text-[0.8em] text-cream-dim">
            Vídeo oficial da loja · Reprodução contínua
          </p>
        </div>
      </div>

      {/* Bottom player controls bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black/85 px-[1.5em] py-[0.6em]">
        <div className="flex items-center gap-[1em]">
          <span className="flex items-center gap-[0.3em] font-mono text-[0.7em] text-signal">
            <span className="h-[0.5em] w-[0.5em] rounded-full bg-signal animate-pulse-dot" />
            Reproduzindo
          </span>
          <span className="font-mono text-[0.7em] text-cream-dim flex items-center gap-[0.2em]">
            <Repeat className="h-[1em] w-[1em] text-brand-light" />
            Loop automático
          </span>
        </div>

        <div className="flex items-center gap-[1em]">
          <span className="font-mono text-[0.7em] text-cream-dim">Próximo: Acústico Salão #02</span>
          <Volume2 className="h-[1em] w-[1em] text-cream-dim" />
        </div>
      </div>
    </div>
  )
}
