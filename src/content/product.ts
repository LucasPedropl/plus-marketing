import type { LucideIcon } from 'lucide-react'
import {
  CalendarClock,
  Contact,
  History,
  LineChart,
  MonitorPlay,
  QrCode,
} from 'lucide-react'

export type TvModeId = 'products' | 'channel' | 'channel-panel' | 'youtube' | 'ad' | 'orders'

export interface TvMode {
  id: TvModeId
  label: string
  description: string
}

export const TV_MODES: TvMode[] = [
  {
    id: 'products',
    label: 'Layout de produtos',
    description: 'Cardápio com nome, descrição e preço vindos do catálogo do PDV.',
  },
  {
    id: 'channel-panel',
    label: 'Canal + Painel',
    description: 'Canal ao vivo com uma faixa lateral de ofertas sempre à vista.',
  },
  {
    id: 'channel',
    label: 'Canal ao vivo',
    description: 'Canal esportivo ou de notícias em tela cheia para o salão, com a sua marca.',
  },
  {
    id: 'youtube',
    label: 'Vídeos do YouTube',
    description: 'Rode clipes, playlists ou vídeos institucionais da sua loja em loop contínuo.',
  },
  {
    id: 'ad',
    label: 'Propaganda',
    description: 'Promoção do dia em destaque, com fontes e cores da sua marca.',
  },
  {
    id: 'orders',
    label: 'Tela de pedidos',
    description: 'Mostra quais pedidos estão em preparo e quais já estão prontos.',
  },
]

export interface DeliveryStage {
  stepLabel: string
  title: string
  sampleMessage: string
  isCancellation?: boolean
}

export const DELIVERY_STAGES: DeliveryStage[] = [
  {
    stepLabel: 'Etapa 1',
    title: 'Pedido em preparo',
    sampleMessage: 'Recebemos seu pedido #216 e ele já está na cozinha.',
  },
  {
    stepLabel: 'Etapa 2',
    title: 'Pronto para retirada',
    sampleMessage: 'Seu pedido #216 está pronto. Pode vir buscar no balcão.',
  },
  {
    stepLabel: 'Etapa 3',
    title: 'Saiu para entrega',
    sampleMessage: 'O motoboy saiu com o pedido #216. Chega em cerca de 20 min.',
  },
  {
    stepLabel: 'Etapa 4',
    title: 'Finalizado',
    sampleMessage: 'Pedido entregue. Obrigado pela preferência, até a próxima!',
  },
  {
    stepLabel: 'Se precisar',
    title: 'Cancelamento',
    sampleMessage: 'Seu pedido #216 foi cancelado. Fale com a gente por aqui.',
    isCancellation: true,
  },
]

export interface ProductFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    icon: CalendarClock,
    title: 'Mensagens agendadas',
    description: 'Monte a semana de envios numa grade e confirme cada disparo antes de sair.',
  },
  {
    icon: Contact,
    title: 'Contatos organizados',
    description: 'Sua lista de clientes num só lugar, pronta para escolher quem recebe cada mensagem.',
  },
  {
    icon: LineChart,
    title: 'Metrics Studio',
    description: 'Mensagens entregues e TVs no ar no mesmo painel, com filtro por período.',
  },
  {
    icon: MonitorPlay,
    title: 'Controle das TVs',
    description: 'Pause, retome, recarregue ou troque o que está passando sem ir até a TV.',
  },
  {
    icon: History,
    title: 'Históricos',
    description: 'Veja o que foi enviado no WhatsApp e o que passou em cada tela.',
  },
  {
    icon: QrCode,
    title: 'Conexão por QR code',
    description: 'O WhatsApp da loja entra no painel lendo um QR code. Sem trocar de número.',
  },
]
