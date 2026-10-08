export interface FeaturedChannel {
  name: string
  category: string
  logoSrc: string
}

export const FEATURED_CHANNELS: FeaturedChannel[] = [
  { name: 'ESPN', category: 'Esportes', logoSrc: '/channels/espn.jpg' },
  { name: 'Combate', category: 'Esportes', logoSrc: '/channels/combate.jpg' },
  { name: 'CNN Brasil', category: 'Notícias', logoSrc: '/channels/cnn-brasil.jpg' },
  { name: 'GloboNews', category: 'Notícias', logoSrc: '/channels/globo-news.jpg' },
  { name: 'Cartoon Network', category: 'Infantil', logoSrc: '/channels/cartoon-network.jpg' },
  { name: 'GNT', category: 'Variedades', logoSrc: '/channels/gnt.jpg' },
  { name: 'Record TV', category: 'TV aberta', logoSrc: '/channels/record-tv.jpg' },
  { name: 'Animal Planet', category: 'Documentários', logoSrc: '/channels/animal-planet.jpg' },
]

export interface ChannelExperience {
  title: string
  description: string
}

export const CHANNEL_EXPERIENCES: ChannelExperience[] = [
  {
    title: 'Canal ao vivo',
    description: 'Escolha o conteúdo ideal para cada horário e controle tudo pelo navegador.',
  },
  {
    title: 'Canal + ofertas',
    description: 'Mantenha a programação em destaque e reserve uma faixa para produtos da loja.',
  },
  {
    title: 'Programação por ambiente',
    description: 'Escolha esportes, notícias ou entretenimento para cada espaço e momento do dia.',
  },
]
