import { DEMO_STORE_NAME, MENU_BOARD_CATEGORIES } from '@/content/mockupData'

export function MenuBoardScreen() {
  return (
    <div className="tv-content flex h-full flex-col bg-ink-raised text-cream animate-screen-in">
      <header className="flex items-center justify-between border-b border-brand/40 px-[1.6em] py-[0.7em]">
        <span className="font-condensed text-[1.7em] font-extrabold uppercase tracking-wide">
          {DEMO_STORE_NAME}
        </span>
        <span className="font-mono text-[0.7em] uppercase tracking-[0.12em] text-cream-dim">
          Cardápio · catálogo do PDV
        </span>
      </header>

      <div className="grid flex-1 grid-cols-3 gap-[1.6em] px-[1.6em] py-[1em]">
        {MENU_BOARD_CATEGORIES.map((menuCategory) => (
          <section key={menuCategory.title}>
            <h3 className="font-wide text-[0.8em] font-bold uppercase tracking-[0.16em] text-brand-light">
              {menuCategory.title}
            </h3>
            <ul className="mt-[0.7em] space-y-[0.75em]">
              {menuCategory.items.map((menuItem) => (
                <li key={menuItem.name} className="flex items-end gap-[0.4em]">
                  <div className="min-w-0">
                    <p className="truncate text-[0.95em] font-semibold leading-tight">{menuItem.name}</p>
                    <p className="text-[0.68em] text-cream-dim">{menuItem.detail}</p>
                  </div>
                  <span className="mb-[0.35em] flex-1 border-b border-dotted border-cream/25" />
                  <span className="font-mono text-[0.95em] font-medium">{menuItem.priceLabel}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="flex items-center justify-between bg-brand px-[1.6em] py-[0.6em] text-ink">
        <span className="font-wide text-[1em] font-extrabold uppercase">Combo do dia</span>
        <span className="text-[0.8em] font-medium">X-Bacon + fritas + refrigerante</span>
        <span className="font-mono text-[1.2em] font-medium">R$ 44,90</span>
      </footer>
    </div>
  )
}
