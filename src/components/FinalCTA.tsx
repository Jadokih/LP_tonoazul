import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FinalCTAProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenActionModal }) => {
  const handleCta = () => {
    if (onOpenActionModal) {
      onOpenActionModal(APP_CONFIG.messages.heroTrial);
    } else {
      window.location.href = getWhatsAppLink(APP_CONFIG.messages.heroTrial);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-7">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/60 border border-blue-400/30 px-3.5 py-1.5 rounded-lg">
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          <span>EXPERIMENTE POR 2 DIAS GRÁTIS COM O AZULIN</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight [text-wrap:balance]">
          Seu próximo mês pode começar com mais clareza.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-xl mx-auto leading-relaxed">
          Dê o primeiro passo para cuidar melhor do seu dinheiro. Envie fotos, áudios ou textos e deixe a organização com a gente.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCta}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-blue-900 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl shadow-xl shadow-slate-950/20 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
          >
            <WhatsAppIcon className="w-5 h-5 rounded-xs group-hover:scale-110 transition-transform" />
            <span>Quero ficar no azul</span>
            <ArrowRight className="w-4 h-4 text-blue-900 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Value items below button */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-blue-200/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-300" />
            <span>Azulin no WhatsApp (fotos, áudios e textos)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-300" />
            <span>WebApp completo incluso</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-300" />
            <span>Planos a partir de R$ 9,75/mês</span>
          </div>
        </div>
      </div>
    </section>
  );
};
