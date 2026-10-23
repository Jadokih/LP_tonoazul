import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MascotCalloutProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const MascotCallout: React.FC<MascotCalloutProps> = ({ onOpenActionModal }) => {
  const handleCta = () => {
    if (onOpenActionModal) {
      onOpenActionModal(APP_CONFIG.messages.mascotCallout);
    } else {
      window.location.href = getWhatsAppLink(APP_CONFIG.messages.mascotCallout);
    }
  };

  return (
    <section id="comecar" className="py-12 sm:py-16 bg-white relative overflow-hidden scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-14 overflow-hidden text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] [text-wrap:balance]">
              Vamos colocar suas contas no azul?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Você não precisa resolver tudo de uma vez. Comece entendendo melhor o seu dinheiro, um passo de cada vez.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleCta}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/25 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Quero começar</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Teste grátis por 2 dias · Fale com o Azulin agora
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
