export interface FeatureCategory {
  title: string
  items: string[]
}

export interface SingleSubscriptionPlan {
  id: string
  name: string
  badge: string
  tagline: string
  monthlyPrice: string
  periodLabel: string
  highlights: string[]
  featureCategories: FeatureCategory[]
  guarantees: string[]
}

export const SINGLE_PLAN: SingleSubscriptionPlan = {
  id: 'plano-completo',
  name: 'Bix Plus Completo',
  badge: 'Tudo Incluído · Sem Fidelidade',
  tagline: 'Todos os módulos do sistema liberados para seu negócio vender mais e encantar clientes.',
  monthlyPrice: 'R$ 79,90',
  periodLabel: '/ mês',
  highlights: [
    'Até 5 telas simultâneas conectadas na sua loja',
    'WhatsApp oficial do seu comércio integrado via QR Code',
    'Avisos de delivery e retirada automáticos para seus clientes',
    'Catálogo espelhado direto do seu PDV sem retrabalho',
    'Canais ao vivo + vídeos e playlists do YouTube no salão',
    'Controle remoto das telas em tempo real pelo navegador',
  ],
  featureCategories: [
    {
      title: 'WhatsApp & Atendimento',
      items: [
        'Conexão do WhatsApp da loja por QR Code em 30 segundos',
        'Disparo automático de status de delivery (Em preparo, Pronto para retirada, Saiu para entrega, Finalizado)',
        'Mensagem inteligente de cancelamento com aviso imediato',
        'Envio de mensagens agendadas com grade de planejamento semanal',
        'CRM de contatos para organizar clientes e campanhas',
        'Histórico detalhado com status de entrega de cada mensagem',
      ],
    },
    {
      title: 'TV Studio & Telas no Salão',
      items: [
        'Até 5 telas ativas simultâneas por conta (Smart TV, PC, TV Box, tablets)',
        'Conexão fácil com PIN de 4 dígitos (um PIN para cada TV)',
        'Catálogo e cardápio de produtos sincronizado com o caixa',
        'Grade de canais ao vivo (Esportes, Notícias, Culinária, Música, Infantil)',
        'Modo Canal + Painel lateral de ofertas (o cliente assiste e consome)',
        'Integração com YouTube: coloque seus vídeos, clipes ou playlists em loop',
        'Modo Propaganda da loja para destacar os combos e o prato do dia',
        'Tela de chamada de pedidos para balcão (preparando e pronto)',
        'Controle remoto total: pause, retome, altere canais ou recarregue a TV à distância',
      ],
    },
    {
      title: 'Catálogo do PDV & Métricas',
      items: [
        'Espelho de catálogo integrado com UaiPDV e UaiPDV Mais',
        'Atualização de preços e itens sem redigitar nada',
        'Metrics Studio com telemetria em tempo real de mensagens e TVs',
        'Acesso 100% web pelo computador, celular ou tablet',
      ],
    },
  ],
  guarantees: [
    'Sem contrato de fidelidade ou taxa de cancelamento',
    'Sem limite de mensagens automáticas de pedido',
    'Atualizações e novos recursos inclusos',
    'Suporte com nosso time para configurar sua primeira tela',
  ],
}
