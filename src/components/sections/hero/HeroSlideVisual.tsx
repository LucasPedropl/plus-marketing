import type { HeroVisualKind } from '@/content/heroSlides'
import { PhoneDeliveryChat } from '@/components/mockups/PhoneDeliveryChat'
import { TvFrame } from '@/components/mockups/TvFrame'
import { ChannelPanelScreen } from '@/components/mockups/screens/ChannelPanelScreen'
import { MenuBoardScreen } from '@/components/mockups/screens/MenuBoardScreen'

interface HeroSlideVisualProps {
  visual: HeroVisualKind
}

export function HeroSlideVisual({ visual }: HeroSlideVisualProps) {
  if (visual === 'delivery-chat') {
    return (
      <div className="flex h-full w-full items-end justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_22%)] lg:items-center lg:[mask-image:none]">
        <PhoneDeliveryChat
          accessibleDescription="Celular com mensagens automáticas de pedido em preparo, saiu para entrega e finalizado"
          className="max-w-[220px] lg:max-w-[260px]"
        />
      </div>
    )
  }

  if (visual === 'channel-panel') {
    return (
      <TvFrame
        accessibleDescription="TV exibindo um jogo ao vivo com um painel lateral de ofertas da loja"
        screenNumber={2}
        pairingPin="7310"
      >
        <ChannelPanelScreen showOffersPanel />
      </TvFrame>
    )
  }

  return (
    <TvFrame accessibleDescription="TV exibindo o cardápio da lanchonete com lanches, porções, bebidas e preços">
      <MenuBoardScreen />
    </TvFrame>
  )
}
