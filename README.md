# Plus Marketing

Landing page e site institucional de marketing do produto **Bix Plus** (conectado ao ecossistema `apps/plus-web`).

Inspirado na arquitetura visual e organização de seções do [SKY+](https://www.skymais.com.br/home), adaptado para comunicação no WhatsApp, TV Studio e catálogo sincronizado do PDV.

## Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **Tailwind CSS 3** (paleta dark inspirada no Sky+ com token de marca terracota do Plus)
- **Lucide Icons**
- Mockups 100% interativos em código CSS/HTML (container queries `cqw` para TV e celular, sem dependência de screenshots pesados)

## Estrutura das Seções

1. **Header Translúcido** (`SiteHeader`): navegação fixa com blur dinâmico ao rolar a página, botão "Tenho conta" e "Falar com vendas".
2. **Hero Carrossel** (`HeroCarousel`): 3 slides rotativos com barras de progresso temporizadas, pause/play acessível e mockups ao vivo (Cardápio na TV, Canal + Painel, Notificações no WhatsApp).
3. **Planos** (`PlansSection`): cards dos planos (Plus Mensagens, Plus Completo, Plus Telas), modal detalhado de benefícios e scroll horizontal no mobile.
4. **TV Studio** (`TvStudioSection`): abas verticais para os 5 modos homologados da TV (Layout de produtos, Canal + Painel, Canal, Propaganda, Pedidos).
5. **WhatsApp Delivery** (`WhatsAppSection`): timeline e mensagens automáticas a cada etapa do pedido (em preparo, pronto, a caminho, entregue).
6. **Catálogo & PDV** (`CatalogSection`): espelho automático de produtos sem redigitação.
7. **Recursos** (`FeaturesGridSection`): grade com os recursos técnicos do sistema.
8. **Dispositivos** (`DevicesSection`): compatibilidade com navegadores de Smart TVs e fluxo de conexão via PIN em 3 passos.
9. **FAQ** (`FaqSection`): perguntas frequentes com accordion acessível.
10. **Banner CTA** (`CtaBannerSection`): chamada para fechamento comercial e acesso ao painel.
11. **Footer** (`SiteFooter`): links rápidos, canais e direitos autorais.

## Desenvolvimento Local

```bash
# Na pasta apps/Sites/plus-marketing
node ./node_modules/vite/bin/vite.js --port=5210
```

## Build

```bash
node ./node_modules/typescript/bin/tsc -b
node ./node_modules/vite/bin/vite.js build
```

Saída gerada na pasta `dist/`.
