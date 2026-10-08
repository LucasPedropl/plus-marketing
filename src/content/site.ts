export const BRAND_NAME = 'Bix Plus'
export const BRAND_TAGLINE = 'Comunicação e vendas'
export const COMPANY_NAME = 'Bixs'

export const APP_LOGIN_URL = 'https://plus.bixs.com.br/login'
export const APP_TV_CONNECT_URL = 'https://plus.bixs.com.br/tv'

export const SALES_WHATSAPP_RAW = '5531993585185'
export const SALES_WHATSAPP_DISPLAY = '(31) 9358-5185'
const SALES_WHATSAPP_GREETING = 'Olá! Quero conhecer o Bix Plus para o meu estabelecimento.'

export const SALES_CONTACT_URL = `https://wa.me/${SALES_WHATSAPP_RAW}?text=${encodeURIComponent(SALES_WHATSAPP_GREETING)}`

export const SECTION_IDS = {
  plans: 'planos',
  channels: 'canais-youtube',
  tvStudio: 'tv',
  whatsapp: 'whatsapp',
  catalog: 'catalogo',
  features: 'recursos',
  screens: 'telas',
  help: 'ajuda',
} as const

export interface NavigationItem {
  label: string
  href: string
}

export const HEADER_NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Planos', href: `#${SECTION_IDS.plans}` },
  { label: 'Canais', href: `#${SECTION_IDS.channels}` },
  { label: 'TV Studio', href: `#${SECTION_IDS.tvStudio}` },
  { label: 'WhatsApp', href: `#${SECTION_IDS.whatsapp}` },
  { label: 'Recursos', href: `#${SECTION_IDS.features}` },
  { label: 'Dúvidas', href: `#${SECTION_IDS.help}` },
]

export interface FooterLinkGroup {
  title: string
  links: Array<NavigationItem & { isExternal?: boolean }>
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Explorar',
    links: [
      { label: 'Plano Bix Plus', href: `#${SECTION_IDS.plans}` },
      { label: 'Canais & YouTube', href: `#${SECTION_IDS.channels}` },
      { label: 'TV Studio', href: `#${SECTION_IDS.tvStudio}` },
      { label: 'WhatsApp Delivery', href: `#${SECTION_IDS.whatsapp}` },
      { label: 'Catálogo do PDV', href: `#${SECTION_IDS.catalog}` },
      { label: 'Recursos', href: `#${SECTION_IDS.features}` },
    ],
  },
  {
    title: 'Já é cliente',
    links: [
      { label: 'Entrar no painel', href: APP_LOGIN_URL, isExternal: true },
      { label: 'Conectar uma TV', href: APP_TV_CONNECT_URL, isExternal: true },
      { label: 'Perguntas frequentes', href: `#${SECTION_IDS.help}` },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: `WhatsApp: ${SALES_WHATSAPP_DISPLAY}`, href: SALES_CONTACT_URL, isExternal: true },
      { label: 'Falar com especialista', href: SALES_CONTACT_URL, isExternal: true },
    ],
  },
]
