import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { PhoneMockup } from './PhoneMockup';

interface WebAppShowcaseProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const WebAppShowcase: React.FC<WebAppShowcaseProps> = ({ onOpenActionModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const features = APP_CONFIG.webappFeatures;
  const current = features[activeTab];

  const handleSwitchScreen = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(newIndex);
      setIsAnimating(false);
    }, 120);
  };

  const handlePrev = () => {
    const nextIdx = activeTab === 0 ? features.length - 1 : activeTab - 1;
    handleSwitchScreen(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeTab === features.length - 1 ? 0 : activeTab + 1;
    handleSwitchScreen(nextIdx);
  };

  const handleCta = () => {
    if (onOpenActionModal) {
      onOpenActionModal("Olá! Gostaria de conhecer o WebApp e ativar meus 2 dias grátis com o Azulin.");
    } else {
      window.location.href = getWhatsAppLink("Olá! Gostaria de conhecer o WebApp e ativar meus 2 dias grátis com o Azulin.");
    }
  };

  return (
    <section id="webapp" className="py-10 sm:py-14 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="space-y-1 mb-6">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            EXPERIÊNCIA COMPLETA
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] [text-wrap:balance]">
            WhatsApp no dia a dia. WebApp completo quando quiser aprofundar.
          </h2>
        </div>

        {/* Dynamic Title ONLY (Without Boxed Card) Above the Mockup */}
        <div className="mb-4">
          <p
            className={`text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] transition-all duration-200 ${
              isAnimating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
            }`}
          >
            {current.title}
          </p>
          <p
            className={`text-xs text-slate-500 transition-all duration-200 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {current.subtitle}
          </p>
        </div>

        {/* Central Phone Mockup with Left and Right Arrows */}
        <div className="relative inline-flex items-center justify-center mx-auto">
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-5 sm:-left-9 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Tela anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-5 sm:-right-9 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Próxima tela"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Phone Mockup */}
          <PhoneMockup
            imageSrc={current.image}
            altText={`Captura de tela do WebApp: ${current.title}`}
          />
        </div>

        {/* Screen Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 my-3">
          {features.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSwitchScreen(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                activeTab === i ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ver tela ${i + 1}`}
            />
          ))}
        </div>

        {/* Minimal CTA link */}
        <div className="mt-2">
          <button
            type="button"
            onClick={handleCta}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Experimentar 2 dias grátis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
