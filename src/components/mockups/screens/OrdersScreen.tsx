import {
  DEMO_STORE_NAME,
  LATEST_READY_ORDER,
  ORDERS_IN_PREPARATION,
  ORDERS_READY,
} from '@/content/mockupData'

export function OrdersScreen() {
  return (
    <div className="tv-content flex h-full flex-col bg-ink-raised text-cream animate-screen-in">
      <header className="flex items-center justify-between px-[1.6em] py-[0.7em]">
        <span className="font-condensed text-[1.5em] font-extrabold uppercase tracking-wide">
          {DEMO_STORE_NAME}
        </span>
        <span className="font-mono text-[0.75em] text-cream-dim">19:41</span>
      </header>

      <div className="grid flex-1 grid-cols-[1fr_1.25fr]">
        <section className="border-r border-line px-[1.6em] py-[0.8em]">
          <h3 className="font-wide text-[0.85em] font-bold uppercase tracking-[0.14em] text-cream-dim">
            Preparando
          </h3>
          <ul className="mt-[0.8em] grid grid-cols-2 gap-[0.6em]">
            {ORDERS_IN_PREPARATION.map((orderNumber) => (
              <li key={orderNumber} className="font-mono text-[2.2em] font-medium text-cream/60">
                {orderNumber}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-brand/10 px-[1.6em] py-[0.8em]">
          <h3 className="font-wide text-[0.85em] font-bold uppercase tracking-[0.14em] text-brand-light">
            Pronto, pode retirar
          </h3>
          <p className="mt-[0.3em] font-wide text-[5.2em] font-black leading-none text-brand">
            {LATEST_READY_ORDER}
          </p>
          <ul className="mt-[0.6em] flex gap-[0.9em]">
            {ORDERS_READY.map((orderNumber) => (
              <li key={orderNumber} className="font-mono text-[1.8em] font-medium text-cream">
                {orderNumber}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
