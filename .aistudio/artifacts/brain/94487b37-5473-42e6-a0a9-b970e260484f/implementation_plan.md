# Tô no Azul — Landing Page & Agente Financeiro

Uma landing page completa, responsiva e de alta conversão para o **Tô no Azul**, um agente de finanças pessoais que ajuda as pessoas a organizar gastos, acompanhar contas e entender sua situação financeira diretamente pelo WhatsApp, com linguagem acolhedora, sem complicação de planilhas e com a presença cativante do mascote 3D da marca.

## Decisões Confirmadas e Fluxo de Aquisição

> [!IMPORTANT]
> **Fluxo de Aquisição com Fricção Zero (3 Dias Grátis)**:
> - O visitante clica em qualquer CTA ou no botão de plano ("Experimentar 3 dias grátis" / "Quero ficar no azul").
> - Redirecionamento direto e imediato para o WhatsApp oficial do bot com a mensagem pré-formatada pronta para envio:
>   - Exemplo geral: *"Olá! Gostaria de ativar meus 3 dias grátis para conhecer o Tô no Azul."*
>   - Exemplo Plano Mensal: *"Olá! Quero experimentar os 3 dias grátis do Tô no Azul (Plano Mensal - R$ 9,75)."*
>   - Exemplo Plano Anual: *"Olá! Quero experimentar os 3 dias grátis do Tô no Azul (Plano Anual - R$ 87,00)."*
> - Também haverá suporte a um fallback amigável caso o usuário queira confirmar/copiar o número ou personalizar a mensagem, garantindo zero atrito no desktop e no mobile.

- **Nova Seção de Planos ("Conhecer os planos")**:
  - **Plano Mensal**: **R$ 9,75** / mês — com 3 dias grátis para testar.
  - **Plano Anual**: **R$ 87,00** / ano (equivalente a R$ 7,25/mês, mais de 25% de economia) — com 3 dias grátis para testar. Destaque de melhor custo-benefício.
  - Ambos com acesso completo a todas as funções pelo WhatsApp, sem fidelidade e cancelamento fácil.
- **Demonstração na seção "Como Funciona"**: Demonstração interativa da tela do WhatsApp onde o visitante pode clicar em mensagens ("Gastei R$ 32 no almoço", "Quanto já gastei este mês?") e assistir à resposta natural do agente em tempo real.
- **Animação Frame a Frame do Azulin no Hero**:
  - Processamento dos 20 quadros em **alta definição (720x1280)** com upscaling Lanczos3 e sharpening suave, preservando nitidez máxima em telas Retina.
  - Reprodução desacelerada e serena (~6,4 segundos por ciclo completo de aceno em ping-pong).
  - Enquadramento reajustado: o balão de "Mensagem de áudio" foi reposicionado para a lateral inferior/cintura, desobstruindo completamente o rosto, fones e visor do mascote.
  - Remoção do texto "o azulin aceita".
- **Identidade e Ajustes de Seções**:
  - Atualização do ícone oficial do WhatsApp para o SVG gradiente com borda e preenchimento especificado (`whatsapp-svgrepo-com.svg`).
  - Remoção do texto "O AZULIN ESTÁ PRONTO PARA TE AJUDAR" e do avatar na seção de encorajamento (`MascotCallout.tsx`).

---

## 1. Visão Geral e Conceito do Produto

- **O que faz**: Apresenta e converte visitantes para o Tô no Azul — um agente financeiro pessoal no WhatsApp que ajuda a registrar despesas, acompanhar contas a pagar e entender a vida financeira do mês.
- **Proposta de Valor**: 3 dias gratuitos para testar sem complicação, planos extremamente acessíveis (menos que um lanche por mês) e suporte direto na palma da mão.
- **Conceito de Comunicação**: *"Seu dinheiro sob controle. Sua cabeça mais tranquila."*
- **Tom de voz**: Acolhedor, descomplicado, confiável e empático, sem julgamento financeiro ou falsas promessas de enriquecimento.

---

## 2. Experiência do Usuário e Design Visual

### Jornada Visual da Página

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [Top Bar]  Tô no Azul wordmark  ·  Como Funciona  ·  Benefícios  ·  Planos  ·  [Testar Grátis] │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Hero 2-Colunas]                                                                       │
│   "SEU NOVO JEITO DE CUIDAR DO DINHEIRO"                                               │
│   "Seu dinheiro sob controle. Sua cabeça mais tranquila."                               │
│   Subtítulo acolhedor + CTA com badge de 3 dias grátis                                 │
│   [Mascote 3D Flutuando & Acenando c/ fundo limpo transparente]                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Como Funciona — 3 Passos & Simulador Interativo de WhatsApp]                          │
│   01. Converse  ·  02. Registre  ·  03. Entenda                                        │
│   [ Mockup Interativo: clique para simular "Gastei R$ 32 no almoço" ]                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Benefícios Reais & Concretos] (Grid assimétrica com ícones discretos)                 │
│   Sem planilhas · Clareza para decidir · Consulta a qualquer hora                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Seção de Preços — Conhecer os planos]                                                 │
│   "Escolha o plano ideal para você começar hoje mesmo com 3 dias grátis"               │
│   ┌─────────────────────────────┐   ┌──────────────────────────────────────────────┐   │
│   │ Plano Mensal                │   │ Plano Anual (Melhor Escolha)                 │   │
│   │ R$ 9,75 / mês               │   │ R$ 87,00 / ano (R$ 7,25/mês)                 │   │
│   │ [Testar 3 dias grátis] ──►WA│   │ [Testar 3 dias grátis no Anual] ────────►WA  │   │
│   └─────────────────────────────┘   └──────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Seção Emocional do Mascote]                                                           │
│   "Vamos colocar suas contas no azul?"                                                 │
│   "Você não precisa resolver tudo de uma vez..." + CTA de início no WhatsApp           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [CTA Final de Alta Conversão & Rodapé Transparente]                                    │
│   Contraste azul profundo, tipografia marcante, links institucionais                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Identidade Visual e Tokens

- **Tipografia**: `Plus Jakarta Sans` para títulos marcantes com `tracking-tight` e `DM Sans` para leitura fluida de parágrafos.
- **Paleta de Cores (Regra 60-30-10)**:
  - **60% Fundo / Neutral**: Branco puro (`#FFFFFF`) e azul névoa suave (`#F8FAFC` a `#F0F7FF`).
  - **30% Estrutura & Superfícies**: Cartões com borda ultrafina translúcida (`border-blue-100/60`), cinzas neutros para tipografia (`#0F172A`, `#475569`).
  - **10% Destaques & Ações**: Azul Tô no Azul vibrante (`#0284C7` / `#2563EB`) e verde oficial do WhatsApp (`#25D366`) para ações diretas de conversão.
- **Design dos Planos**:
  - Destaque sutil para o Plano Anual com badge elegante de economia.
  - Informações claras sobre os 3 dias grátis em ambos os planos.
  - CTAs com indicação visual de envio direto para o WhatsApp.

---

## 3. Decisões Técnicas e Arquitetura

### Estrutura de Componentes

```
src/
├── config/
│   └── appConfig.ts            # Centralizador de links do WhatsApp com mensagens pré-formatadas
├── components/
│   ├── Navbar.tsx               # Top Bar com navegação suave para seções (#como-funciona, #beneficios, #planos)
│   ├── Hero.tsx                 # Headline balanceada, CTA de 3 dias grátis, mascote animado transparente
│   ├── HowItWorks.tsx           # 3 Passos editoriais + Simulador Interativo WhatsApp
│   ├── WhatsAppSimulator.tsx   # Chat interativo com digitação realista e histórico de mensagens
│   ├── Benefits.tsx             # 5 benefícios concretos em cards modernos e legíveis
│   ├── Pricing.tsx              # Seção "Conhecer os planos" (Mensal R$ 9,75 e Anual R$ 87,00 com 3 dias grátis)
│   ├── MascotCallout.tsx        # Seção emocional acolhedora com destaque do mascote
│   ├── FinalCTA.tsx             # Bloco de fechamento em azul com alto contraste e CTA direto
│   ├── Footer.tsx               # Rodapé com links legais configuráveis e copyright
│   └── WhatsAppModal.tsx        # Modal amigável com suporte a abertura de WhatsApp ou cópia do link
├── assets/
│   └── mascot-transparent.png   # Versão recortada transparente do mascote sem o quadriculado
├── App.tsx                      # Orquestrador da landing page
└── index.css                    # Estilos globais e animações performáticas
```

### Configuração de Links do WhatsApp (`src/config/appConfig.ts`)

```typescript
export const APP_CONFIG = {
  whatsappNumber: "5511999999999", // Número configurável facilmente
  links: {
    freeTrialGeneral: (number: string) =>
      `https://wa.me/${number}?text=${encodeURIComponent("Olá! Gostaria de ativar meus 3 dias grátis para conhecer o Tô no Azul.")}`,
    monthlyPlan: (number: string) =>
      `https://wa.me/${number}?text=${encodeURIComponent("Olá! Quero experimentar os 3 dias grátis do Tô no Azul (Plano Mensal - R$ 9,75).")}`,
    annualPlan: (number: string) =>
      `https://wa.me/${number}?text=${encodeURIComponent("Olá! Quero experimentar os 3 dias grátis do Tô no Azul (Plano Anual - R$ 87,00).")}`,
  },
  pricing: {
    monthly: { price: "9,75", period: "mês", trialDays: 3 },
    annual: { price: "87,00", period: "ano", monthlyEquivalent: "7,25", trialDays: 3, discount: "Mais de 25% de economia" }
  }
};
```

---

## 4. Plano de Validação e Verificação

- **Verificação de Compilação**: Execução de `compile_applet` para garantir TypeScript sem erros e build limpo do Vite.
- **Teste do Fluxo de Conversão**: Validação de todos os links de WhatsApp (Hero, Planos, Seção Emocional e Final) com as mensagens pré-definidas codificadas corretamente.
- **Verificação Visual e Responsiva**: Conferência nos tamanhos de tela mobile, tablet e desktop.
- **Verificação do Mascote**: Conferência da remoção total do quadriculado no fundo e animações de flutuação e aceno.
