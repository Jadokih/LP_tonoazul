import React from 'react';
import { ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

import { MascotFrameAnimation } from './MascotFrameAnimation';

interface HeroProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenActionModal }) => {
  const handleCta = () => {
    if (onOpenActionModal) {
      onOpenActionModal(APP_CONFIG.messages.heroTrial);
    } else {
      window.location.href = getWhatsAppLink(APP_CONFIG.messages.heroTrial);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance] font-['Plus_Jakarta_Sans']">
              Seu dinheiro <span className="text-blue-600">sob controle</span>. Sua cabeça{' '}
              <span className="text-blue-600">mais tranquila</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Organize seus gastos, acompanhe suas contas e entenda para onde seu dinheiro está indo.
              Tudo pelo WhatsApp, com a ajuda do seu agente financeiro pessoal, o <strong className="text-slate-900 font-semibold">Azulin</strong>.
            </p>

            {/* Mobile Mascot: positioned right after subtitle on mobile, before the buttons and value markers */}
            <div className="block lg:hidden py-3">
              <MascotFrameAnimation cycleDurationMs={6400} />
            </div>

            {/* CTA Group with Zero Friction Flow */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleCta}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon className="w-5 h-5 rounded-sm group-hover:scale-110 transition-transform" />
                  <span>Quero ficar no azul</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#webapp"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-slate-700 hover:text-blue-600 bg-white hover:bg-blue-50/60 border border-slate-200/90 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Smartphone className="w-4 h-4 text-slate-500" />
                  <span>Ver telas do WebApp</span>
                </a>
              </div>

              {/* Supporting reassurance text */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500 pt-1">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>2 dias grátis para experimentar</span>
                </div>
                <span className="hidden sm:inline text-slate-300" aria-hidden="true">
                  ·
                </span>
                <p className="text-slate-500">
                  Mais clareza para decidir. Mais tranquilidade para organizar.
                </p>
              </div>
            </div>

          </div>

          {/* Desktop Right Column: Azulin Mascot Frame Animation (seamless, integrated, no cards or boxes) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <MascotFrameAnimation cycleDurationMs={6400} />
          </div>
        </div>
      </div>
    </section>
  );
};
