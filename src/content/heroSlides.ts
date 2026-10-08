import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'

export type HeroVisualKind = 'menu-board' | 'channel-panel' | 'delivery-chat'

export interface HeroSlide {
  id: string
  tabLabel: string
  tagline: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
  visual: HeroVisualKind
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'cardapio-na-tv',
    tabLabel: 'Cardápio na TV',
    tagline: 'TV Studio',
    title: 'Seu cardápio na TV, com o catálogo do PDV',
    description:
      'Importe os produtos que você já cadastrou no caixa e publique o cardápio nas TVs da loja. Sem refazer cadastro, sem pendrive.',
    primaryAction: { label: 'Quero minhas telas', href: SALES_CONTACT_URL },
    secondaryAction: { label: 'Ver como funciona', href: `#${SECTION_IDS.tvStudio}` },
    visual: 'menu-board',
  },
  {
    id: 'jogo-e-vitrine',
    tabLabel: 'Canal + produtos',
    tagline: 'Canal + Painel',
    title: 'O jogo na tela. Seus produtos do lado.',
    description:
      'Passe um canal ao vivo e mantenha um painel com ofertas sempre visível. O cliente assiste e pede mais uma rodada.',
    primaryAction: { label: 'Conhecer o Bix Plus', href: SALES_CONTACT_URL },
    secondaryAction: { label: 'Ver planos', href: `#${SECTION_IDS.plans}` },
    visual: 'channel-panel',
  },
  {
    id: 'aviso-no-whatsapp',
    tabLabel: 'Avisos no WhatsApp',
    tagline: 'WhatsApp',
    title: 'Cliente avisado em cada etapa do pedido',
    description:
      'Em preparo, pronto para retirada, saiu para entrega, finalizado. As mensagens saem sozinhas pelo WhatsApp da sua loja.',
    primaryAction: { label: 'Quero avisar meus clientes', href: SALES_CONTACT_URL },
    secondaryAction: { label: 'Ver as etapas', href: `#${SECTION_IDS.whatsapp}` },
    visual: 'delivery-chat',
  },
]

export const HERO_SLIDE_DURATION_MS = 5000
