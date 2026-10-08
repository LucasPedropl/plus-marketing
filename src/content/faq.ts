export interface FrequentlyAskedQuestion {
  question: string
  answer: string
}

export const FREQUENTLY_ASKED_QUESTIONS: FrequentlyAskedQuestion[] = [
  {
    question: 'O que é o Bix Plus?',
    answer:
      'É um painel on-line que junta três coisas do dia a dia da loja: avisos e mensagens pelo WhatsApp, as TVs do salão e o catálogo de produtos do seu PDV. Você acessa pelo navegador, sem instalar nada no computador.',
  },
  {
    question: 'Preciso comprar TVs ou aparelhos novos?',
    answer:
      'Não. Qualquer TV, monitor ou aparelho com navegador e internet serve. Você abre o endereço de conexão na tela, digita o PIN gerado no painel e a TV começa a exibir o conteúdo escolhido.',
  },
  {
    question: 'Quantas telas posso conectar?',
    answer:
      'Até 5 telas por conta. Cada TV usa um PIN próprio, e cada uma pode ter uma função diferente: cardápio, propaganda, canal, canal com painel ou tela de pedidos.',
  },
  {
    question: 'As mensagens saem do WhatsApp da minha loja?',
    answer:
      'Sim. Você conecta o número que já usa lendo um QR code no painel. Seus clientes recebem os avisos do mesmo contato que já conhecem.',
  },
  {
    question: 'Funciona com o meu PDV?',
    answer:
      'O catálogo é importado do UaiPDV e do UaiPDV Mais: você sincroniza, revisa os produtos e publica. Usa outro sistema? Fale com a gente para avaliarmos a integração.',
  },
  {
    question: 'Consigo mudar o que passa na TV sem ir até ela?',
    answer:
      'Sim. Pelo painel você troca o conteúdo, pausa, retoma e recarrega cada tela. A TV recebe o comando em segundos.',
  },
]
