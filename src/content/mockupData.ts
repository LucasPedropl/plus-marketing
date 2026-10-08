export interface MenuBoardItem {
  name: string
  detail: string
  priceLabel: string
}

export interface MenuBoardCategory {
  title: string
  items: MenuBoardItem[]
}

export const DEMO_STORE_NAME = 'Lanchonete Esquina'

export const MENU_BOARD_CATEGORIES: MenuBoardCategory[] = [
  {
    title: 'Lanches',
    items: [
      { name: 'X-Bacon da casa', detail: 'Pão brioche, 160 g', priceLabel: '32,90' },
      { name: 'X-Salada', detail: 'Queijo prato, alface', priceLabel: '26,50' },
      { name: 'Frango crocante', detail: 'Molho da casa', priceLabel: '28,00' },
    ],
  },
  {
    title: 'Porções',
    items: [
      { name: 'Fritas rústicas', detail: '400 g', priceLabel: '24,90' },
      { name: 'Mandioca frita', detail: '500 g', priceLabel: '27,00' },
      { name: 'Isca de tilápia', detail: '350 g', priceLabel: '42,00' },
    ],
  },
  {
    title: 'Bebidas',
    items: [
      { name: 'Suco natural', detail: '500 ml', priceLabel: '11,00' },
      { name: 'Refrigerante lata', detail: '350 ml', priceLabel: '7,50' },
      { name: 'Chopp', detail: '300 ml', priceLabel: '12,90' },
    ],
  },
]

export const PANEL_OFFERS: MenuBoardItem[] = [
  { name: 'Balde 6 long necks', detail: 'Só durante o jogo', priceLabel: '59,90' },
  { name: 'Porção de fritas', detail: '400 g', priceLabel: '24,90' },
  { name: 'Chopp 300 ml', detail: 'Peça no balcão', priceLabel: '12,90' },
]

export const ORDERS_IN_PREPARATION: string[] = ['217', '218', '219', '221']
export const ORDERS_READY: string[] = ['212', '214', '215']
export const LATEST_READY_ORDER = '216'

export interface DeliveryChatMessage {
  stageLabel: string
  text: string
  timeLabel: string
}

export const DELIVERY_CHAT_MESSAGES: DeliveryChatMessage[] = [
  {
    stageLabel: 'Em preparo',
    text: 'Oi, Marina! Seu pedido #216 já está sendo preparado.',
    timeLabel: '19:02',
  },
  {
    stageLabel: 'Saiu para entrega',
    text: 'Pedido #216 saiu para entrega. Chega em cerca de 20 min.',
    timeLabel: '19:24',
  },
  {
    stageLabel: 'Finalizado',
    text: 'Pedido entregue. Obrigado pela preferência!',
    timeLabel: '19:41',
  },
]
