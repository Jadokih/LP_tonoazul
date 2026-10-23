/**
 * Configurações centrais do Tô no Azul
 * Aqui você pode alterar facilmente o número de WhatsApp, mensagens padrão e links da landing page.
 */

export const APP_CONFIG = {
  brandName: "Tô no Azul",
  agentName: "Azulin",
  agentAvatar: "/assets/aistudio/foto_de_perfil_a4b5b217.jpg",
  tagline: "Seu dinheiro sob controle. Sua cabeça mais tranquila.",
  whatsappNumber: "553791386409", // Número oficial do bot (+55 37 9138-6409)
  whatsappDisplayNumber: "+55 37 9138-6409",

  // Mensagens pré-formatadas para aquisição com o mínimo de atrito
  messages: {
    heroTrial: "Olá! Gostaria de falar com o Azulin e ativar meus 2 dias grátis no Tô no Azul.",
    monthlyPlan: "Olá! Quero experimentar os 2 dias grátis do Tô no Azul com o Azulin (Plano Mensal - R$ 9,75/mês).",
    annualPlan: "Olá! Quero experimentar os 2 dias grátis do Tô no Azul com o Azulin (Plano Anual - R$ 87,00/ano).",
    mascotCallout: "Olá, Azulin! Quero dar o primeiro passo e começar meus 2 dias grátis no Tô no Azul.",
  },

  // Planos oficiais
  pricing: {
    trialDays: 2,
    monthly: {
      name: "Plano Mensal",
      price: "9,75",
      period: "mês",
      badge: "Flexibilidade total",
      description: "Ideal para quem quer começar com autonomia e sem compromisso de longo prazo.",
      features: [
        "2 dias grátis para experimentar",
        "Azulin no WhatsApp (fotos, áudios e textos)",
        "Acesso completo ao WebApp Tô no Azul",
        "Registro ilimitado de receitas e despesas",
        "Classificação inteligente de categorias",
        "Cancele quando quiser, sem burocracia"
      ]
    },
    annual: {
      name: "Plano Anual",
      price: "87,00",
      period: "ano",
      monthlyEquivalent: "7,25",
      discountBadge: "Mais de 25% de economia",
      isPopular: true,
      description: "Mais economia para manter seu ano inteiro financeiramente tranquilo e organizado.",
      features: [
        "2 dias grátis para experimentar",
        "Equivalente a apenas R$ 7,25 por mês",
        "Mais de 25% de desconto em relação ao mensal",
        "Azulin no WhatsApp com fotos, áudios e textos",
        "Acesso total ao WebApp (Dashboard, Extrato, Orçamento, Dívidas, Metas)",
        "Suporte direto e acompanhamento contínuo"
      ]
    }
  },

  // Screenshots do WebApp organizadas por funcionalidade
  webappFeatures: [
    {
      id: 'dashboard',
      title: 'Início & Visão Geral',
      subtitle: 'Saldo disponível, gastos do mês e gráfico de evolução',
      description: 'Tenha uma visão panorâmica instantânea da sua saúde financeira: saldo consolidado em contas, histórico de entradas e saídas e curva de evolução semanal do mês.',
      badge: 'Visão Geral',
      image: '/assets/aistudio/image_2d28ccf2.png'
    },
    {
      id: 'extrato',
      title: 'Extrato & Transações',
      subtitle: 'Histórico completo, filtros rápidos e busca inteligente',
      description: 'Consulte cada movimentação com clareza. Filtre por receitas, despesas, cartões ou busque pelo nome do estabelecimento em segundos.',
      badge: 'Movimentações',
      image: '/assets/aistudio/image_fd198676.png'
    },
    {
      id: 'orcamento',
      title: 'Orçamento Mensal',
      subtitle: 'Defina tetos por categoria e evite surpresas',
      description: 'Estabeleça limites de gastos para Lazer, Supermercado, Restaurantes e Moradia. Acompanhe a barra de consumo em tempo real com aviso do quanto ainda resta.',
      badge: 'Planejamento',
      image: '/assets/aistudio/image_768006b7.png'
    },
    {
      id: 'dividas',
      title: 'Controle de Dívidas',
      subtitle: 'Acompanhe parcelas e liquide débitos com tranquilidade',
      description: 'Visualize empréstimos e parcelamentos em andamento, quantidade de parcelas restantes, valores quitados e data de vencimento com botão de baixa rápida.',
      badge: 'Controle',
      image: '/assets/aistudio/image_2d71ed18.png'
    },
    {
      id: 'metas',
      title: 'Vision Board & Metas',
      subtitle: 'Suas conquistas financeiras com inspiração diária',
      description: 'Crie metas visuais para viagens, reserva de emergência ou compras futuras com barra de progresso e data estimada para alcançar seus sonhos.',
      badge: 'Conquistas',
      image: '/assets/aistudio/image_cadbd543.png'
    },
    {
      id: 'bancos',
      title: 'Contas & Integrações',
      subtitle: 'Reconhecimento automático dos principais bancos',
      description: 'Gerencie múltiplas contas e carteiras com identificação visual instantânea dos maiores bancos do país: Nubank, Itaú, Bradesco, Caixa, Inter, C6 e muito mais.',
      badge: 'Organização',
      image: '/assets/aistudio/image_931fcb9d.png'
    }
  ],

  // Links do rodapé e institucionais
  links: {
    privacy: "#privacidade",
    terms: "#termos",
    contact: "#contato"
  }
};

/**
 * Utilitário para gerar o link direto do WhatsApp com mensagem codificada
 */
export function getWhatsAppLink(message: string, customNumber?: string): string {
  const number = customNumber || APP_CONFIG.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
