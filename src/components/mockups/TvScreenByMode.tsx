import type { TvModeId } from '@/content/product'
import { AdScreen } from '@/components/mockups/screens/AdScreen'
import { ChannelPanelScreen } from '@/components/mockups/screens/ChannelPanelScreen'
import { MenuBoardScreen } from '@/components/mockups/screens/MenuBoardScreen'
import { OrdersScreen } from '@/components/mockups/screens/OrdersScreen'
import { YoutubeScreen } from '@/components/mockups/screens/YoutubeScreen'

interface TvScreenByModeProps {
  modeId: TvModeId
}

export function TvScreenByMode({ modeId }: TvScreenByModeProps) {
  switch (modeId) {
    case 'products':
      return <MenuBoardScreen />
    case 'channel':
      return <ChannelPanelScreen showOffersPanel={false} />
    case 'channel-panel':
      return <ChannelPanelScreen showOffersPanel />
    case 'youtube':
      return <YoutubeScreen />
    case 'ad':
      return <AdScreen />
    case 'orders':
      return <OrdersScreen />
  }
}
