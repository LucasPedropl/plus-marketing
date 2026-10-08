import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { CatalogSection } from '@/components/sections/CatalogSection'
import { ChannelsSection } from '@/components/sections/ChannelsSection'
import { CtaBannerSection } from '@/components/sections/CtaBannerSection'
import { DevicesSection } from '@/components/sections/DevicesSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FeaturesGridSection } from '@/components/sections/FeaturesGridSection'
import { HeroCarousel } from '@/components/sections/hero/HeroCarousel'
import { PlansSection } from '@/components/sections/plans/PlansSection'
import { TvStudioSection } from '@/components/sections/TvStudioSection'
import { WhatsAppSection } from '@/components/sections/WhatsAppSection'
import { YoutubeProgrammingSection } from '@/components/sections/YoutubeProgrammingSection'
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-cream selection:bg-brand/30 selection:text-cream">
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="flex-1">
        <HeroCarousel />
        <PlansSection />
        <ChannelsSection />
        <YoutubeProgrammingSection />
        <TvStudioSection />
        <WhatsAppSection />
        <CatalogSection />
        <FeaturesGridSection />
        <DevicesSection />
        <FaqSection />
        <CtaBannerSection />
      </main>
      <SiteFooter />
      <FloatingWhatsAppButton />
    </div>
  )
}
