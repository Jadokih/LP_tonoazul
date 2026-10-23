import React, { useState } from 'react';
import { MessageSquareText, X } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{
    title: string;
    body: React.ReactNode;
  } | null>(null);

  const openLegalModal = (type: 'privacy' | 'terms' | 'contact') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Política de Privacidade',
        body: (
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed text-left">
            <p>
              No <strong>Tô no Azul</strong>, levamos a sua privacidade e a segurança das suas finanças com máxima seriedade.
            </p>
            <p>
              <strong>Quais dados utilizamos:</strong> Apenas as informações de gastos e registros que você envia voluntariamente na conversa pelo WhatsApp para compor sua organização pessoal.
            </p>
            <p>
              <strong>Finalidade:</strong> Ajudar você a entender seus gastos e categorias mensais. Seus dados nunca são vendidos ou compartilhados com terceiros para fins de crédito ou publicidade.
            </p>
          </div>
        )
      });
    } else if (type === 'terms') {
      setModalContent({
        title: 'Termos de Uso',
        body: (
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed text-left">
            <p>
              O <strong>Tô no Azul</strong> é um serviço de assistência e organização financeira pessoal via WhatsApp com WebApp integrado.
            </p>
            <p>
              <strong>Período de degustação:</strong> Oferecemos 2 dias gratuitos para você testar todas as funcionalidades do agente sem cobrança prévia.
            </p>
            <p>
              <strong>Planos e cancelamento:</strong> Oferecemos opções de assinatura Anual (R$ 87,00/ano) e Mensal (R$ 9,75/mês). Você pode solicitar o cancelamento a qualquer momento diretamente pelo WhatsApp, sem multas ou fidelidade forçada.
            </p>
          </div>
        )
      });
    } else {
      setModalContent({
        title: 'Contato & Suporte',
        body: (
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed text-left">
            <p>
              Precisa tirar dúvidas sobre o funcionamento do Tô no Azul ou sobre seu plano?
            </p>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 space-y-2">
              <p className="font-semibold text-slate-900">
                Atendimento no WhatsApp:
              </p>
              <p className="text-xs text-slate-600">
                Nosso suporte é realizado diretamente pelo canal do Tô no Azul com o Azulin.
              </p>
              <a
                href={getWhatsAppLink("Olá! Gostaria de falar com o suporte do Tô no Azul.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Abrir conversa no WhatsApp &rarr;
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Horário de atendimento: Segunda a Sexta, das 09h às 18h.
            </p>
          </div>
        )
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand and Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <MessageSquareText className="w-4 h-4" />
              </span>
              <span className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-white">
                Tô no <span className="text-blue-400">Azul</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Seu dinheiro sob controle. Sua cabeça mais tranquila. O agente financeiro pessoal que coloca suas finanças em ordem diretamente pelo WhatsApp com o Azulin.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#webapp" className="hover:text-white transition-colors">
                  Telas do WebApp
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos e Valores
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Institucional
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contato & Suporte
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Tô no Azul. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Legal Info Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans'] text-slate-900">
                {modalContent.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalContent.body}

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded-lg transition-colors"
              >
                Entendi e fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
