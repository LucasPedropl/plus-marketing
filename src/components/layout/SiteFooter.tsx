import { BrandLogo } from '@/components/brand/BrandLogo'
import { BRAND_TAGLINE, COMPANY_NAME, FOOTER_LINK_GROUPS } from '@/content/site'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-sunken">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-xs text-sm text-cream-dim">
            {BRAND_TAGLINE}: WhatsApp, TVs da loja e catálogo do PDV num só painel.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {FOOTER_LINK_GROUPS.map((footerLinkGroup) => (
            <nav key={footerLinkGroup.title} aria-label={footerLinkGroup.title}>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-cream-dim">
                {footerLinkGroup.title}
              </h2>
              <ul className="mt-4 space-y-1">
                {footerLinkGroup.links.map((footerLink) => (
                  <li key={footerLink.label}>
                    <a
                      href={footerLink.href}
                      {...(footerLink.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex min-h-9 items-center text-sm text-cream/85 transition-colors hover:text-brand-light"
                    >
                      {footerLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-site px-5 py-6 text-xs text-cream-dim sm:px-8">
          © {currentYear} {COMPANY_NAME}. Todos os direitos reservados. Os exemplos de lojas, produtos e
          preços exibidos nesta página são ilustrativos.
        </p>
      </div>
    </footer>
  )
}
