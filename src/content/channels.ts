import type { LucideIcon } from 'lucide-react'
import {
  Baby,
  Film,
  Flame,
  Music,
  Newspaper,
  Trophy,
} from 'lucide-react'

export interface ChannelCategory {
  id: string
  name: string
  icon: LucideIcon
  badge: string
  description: string
  sampleChannels: string[]
}

export const CHANNEL_CATEGORIES: ChannelCategory[] = [
  {
    id: 'esportes',
    name: 'Esportes & Futebol',
    icon: Trophy,
    badge: 'Alta procura',
    description: 'Jogos, campeonatos regionais e nacionais para reunir torcidas no seu salão.',
    sampleChannels: ['Jogos do Brasileirão', 'Copa do Brasil', 'Libertadores', 'Lutas & Automobilismo'],
  },
  {
    id: 'noticias',
    name: 'Notícias & Jornalismo',
    icon: Newspaper,
    badge: 'Ao vivo 24h',
    description: 'Acompanhe as principais manchetes e cotações em tempo real enquanto os clientes almoçam.',
    sampleChannels: ['Jornais ao Vivo', 'Canais de Notícias 24h', 'Previsão do Tempo & Trânsito'],
  },
  {
    id: 'cozinha',
    name: 'Culinária & Churrasco',
    icon: Flame,
    badge: 'Apetite appeal',
    description: 'Programas de receitas, churrasco e gastronomia que estimulam pedidos na hora.',
    sampleChannels: ['Mestres do Churrasco', 'Cozinha Criativa', 'Receitas de Família', 'Doces & Sobremesas'],
  },
  {
    id: 'musica',
    name: 'Música & Videoclipes',
    icon: Music,
    badge: 'Ambiente',
    description: 'Clipes em alta e playlists acústicas para criar o clima perfeito no seu comércio.',
    sampleChannels: ['Sertanejo & Barzinho', 'Pop & Hits Nacionais', 'Rock Clássico', 'MPB Acústico'],
  },
  {
    id: 'desenhos',
    name: 'Desenhos & Infantil',
    icon: Baby,
    badge: 'Espaço família',
    description: 'Animações e conteúdos educativos para entreter os pequenos enquanto os pais consomem.',
    sampleChannels: ['Turma da Animação', 'Aventuras Infantis', 'Historinhas & Músicas'],
  },
  {
    id: 'variedades',
    name: 'Variedades & Natureza',
    icon: Film,
    badge: 'Relaxante',
    description: 'Documentários, viagens e paisagens relaxantes para clínicas, cafés e recepções.',
    sampleChannels: ['Natureza em 4K', 'Viagens pelo Mundo', 'Curiosidades & Ciência'],
  },
]

export interface YoutubeFeature {
  title: string
  description: string
}

export const YOUTUBE_FEATURES: YoutubeFeature[] = [
  {
    title: 'Até 5 links ou playlists em loop',
    description: 'Cole o link de qualquer vídeo ou playlist do YouTube e a TV toca automaticamente sem você precisar apertar nada.',
  },
  {
    title: 'Vídeos da sua própria empresa',
    description: 'Coloque o vídeo institucional da sua loja, o processo de fabricação do chopp ou o making of do seu burger.',
  },
  {
    title: 'Pausa inteligente para propaganda',
    description: 'O sistema pode pausar o vídeo do YouTube no momento exato em que a propaganda ou combo da loja entrar na tela.',
  },
  {
    title: 'Música ambiente sem comerciais chatos',
    description: 'Use streams de música lo-fi, acústico ou sertanejo para dar personalidade ao salão.',
  },
]
