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
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-cream selection:bg-brand/30 selection:text-cream">
      <SiteHeader />
      <main id="conteudo-principal" className="flex-1">
        <HeroCarousel />
        <PlansSection />
        <ChannelsSection />
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
