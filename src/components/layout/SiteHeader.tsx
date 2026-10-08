import { useEffect, useState } from 'react'
import { LogIn, Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { APP_LOGIN_URL, HEADER_NAVIGATION_ITEMS, SALES_CONTACT_URL } from '@/content/site'
import { useHasScrolledPast } from '@/hooks/useHasScrolledPast'
import { cn } from '@/lib/cn'

const MOBILE_MENU_ID = 'mobile-navigation'

export function SiteHeader() {
  const hasScrolledPastHero = useHasScrolledPast(24)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const closeOnEscape = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const isSolid = hasScrolledPastHero || isMobileMenuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isSolid ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'bg-gradient-to-b from-ink/80 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" aria-label="Bix Plus, voltar ao início" className="shrink-0 rounded-lg">
          <BrandLogo />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {HEADER_NAVIGATION_ITEMS.map((navigationItem) => (
              <li key={navigationItem.href}>
                <a
                  href={navigationItem.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-cream-dim transition-colors hover:text-cream"
                >
                  {navigationItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={APP_LOGIN_URL}
            variant="ghost"
            icon={<LogIn className="h-4 w-4" aria-hidden="true" />}
            className="hidden sm:inline-flex"
          >
            Entrar
          </ButtonLink>
          <ButtonLink href={SALES_CONTACT_URL} className="hidden sm:inline-flex">
            Contato
          </ButtonLink>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-cream hover:bg-cream/10 lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div id={MOBILE_MENU_ID} hidden={!isMobileMenuOpen} className="border-t border-line bg-ink lg:hidden">
        <nav aria-label="Seções da página" className="mx-auto max-w-site px-5 pb-6 pt-2 sm:px-8">
          <ul className="divide-y divide-line">
            {HEADER_NAVIGATION_ITEMS.map((navigationItem) => (
              <li key={navigationItem.href}>
                <a
                  href={navigationItem.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-12 items-center text-base font-medium text-cream"
                >
                  {navigationItem.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 sm:hidden">
            <ButtonLink href={SALES_CONTACT_URL} size="lg">
              Contato
            </ButtonLink>
            <ButtonLink href={APP_LOGIN_URL} variant="outline" size="lg">
              Entrar
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
