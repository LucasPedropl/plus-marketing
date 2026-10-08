import { DEMO_STORE_NAME } from '@/content/mockupData'

export function AdScreen() {
  return (
    <div className="tv-content relative flex h-full flex-col justify-between overflow-hidden bg-brand-dark px-[2.4em] py-[1.8em] text-cream animate-screen-in">
      <div
        aria-hidden="true"
        className="absolute -right-[12%] -top-[30%] h-[140%] aspect-square rounded-full bg-brand"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[2%] top-[18%] h-[70%] aspect-square rounded-full border-[0.3em] border-ink/20"
      />

      <span className="relative font-condensed text-[1.1em] font-bold uppercase tracking-[0.2em] text-cream/80">
        {DEMO_STORE_NAME}
      </span>

      <div className="relative max-w-[62%]">
        <p className="font-mono text-[0.9em] uppercase tracking-[0.18em] text-cream/80">Só hoje</p>
        <p className="font-wide mt-[0.2em] text-[3.6em] font-black uppercase leading-[0.92]">
          Quarta do
          <br />
          hambúrguer
        </p>
        <p className="mt-[0.5em] text-[1.3em] font-semibold">
          2 X-Bacon por <span className="font-mono">R$ 54,90</span>
        </p>
      </div>

      <span className="relative font-mono text-[0.75em] text-cream/75">Válido até 23h · salão e delivery</span>
    </div>
  )
}
