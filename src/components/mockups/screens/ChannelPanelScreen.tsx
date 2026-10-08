import { DEMO_STORE_NAME, PANEL_OFFERS } from '@/content/mockupData'

interface ChannelPanelScreenProps {
  showOffersPanel: boolean
}

function LiveChannelArea() {
  return (
    <div className="pitch relative h-full flex-1 overflow-hidden">
      <div className="absolute inset-[7%] rounded-[0.2em] border-[0.12em] border-white/55" />
      <div className="absolute inset-y-[7%] left-1/2 w-[0.12em] -translate-x-1/2 bg-white/55" />
      <div className="absolute left-1/2 top-1/2 h-[22%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.12em] border-white/55" />
      <div className="absolute left-[7%] top-1/2 h-[36%] w-[11%] -translate-y-1/2 border-[0.12em] border-l-0 border-white/55" />
      <div className="absolute right-[7%] top-1/2 h-[36%] w-[11%] -translate-y-1/2 border-[0.12em] border-r-0 border-white/55" />
      <span className="absolute left-[58%] top-[38%] h-[0.7em] w-[0.7em] rounded-full bg-white shadow-[0_0.2em_0.4em_rgba(0,0,0,0.4)]" />

      <div className="absolute left-[3%] top-[5%] flex items-stretch overflow-hidden rounded-[0.3em] text-[0.85em] font-semibold shadow-lg">
        <span className="bg-brand px-[0.6em] py-[0.3em] font-mono uppercase text-ink">Ao vivo</span>
        <span className="bg-ink/85 px-[0.7em] py-[0.3em] font-mono">CASA 1 × 0 VISIT</span>
        <span className="bg-ink/70 px-[0.6em] py-[0.3em] font-mono text-cream-dim">2ºT 34&apos;</span>
      </div>

      <span className="absolute bottom-[5%] right-[3%] font-condensed text-[0.9em] font-bold uppercase tracking-wide text-white/75">
        {DEMO_STORE_NAME}
      </span>
    </div>
  )
}

function OffersPanel() {
  return (
    <aside className="flex h-full w-[31%] flex-col bg-ink-raised px-[1em] py-[0.9em]">
      <p className="font-wide text-[0.95em] font-extrabold uppercase text-brand-light">Peça já</p>
      <ul className="mt-[0.6em] flex-1 space-y-[0.7em]">
        {PANEL_OFFERS.map((panelOffer) => (
          <li key={panelOffer.name} className="border-b border-line pb-[0.6em]">
            <p className="text-[0.85em] font-semibold leading-tight">{panelOffer.name}</p>
            <p className="text-[0.62em] text-cream-dim">{panelOffer.detail}</p>
            <p className="mt-[0.2em] font-mono text-[1.15em] font-medium text-cream">
              R$ {panelOffer.priceLabel}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-[0.6em] text-cream-dim">Peça no balcão ou pelo WhatsApp</p>
    </aside>
  )
}

export function ChannelPanelScreen({ showOffersPanel }: ChannelPanelScreenProps) {
  return (
    <div className="tv-content flex h-full text-cream animate-screen-in">
      <LiveChannelArea />
      {showOffersPanel ? <OffersPanel /> : null}
    </div>
  )
}
