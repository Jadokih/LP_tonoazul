import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PricingProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenActionModal }) => {
  const { monthly, annual, trialDays } = APP_CONFIG.pricing;

  const handleSelectPlan = (planType: 'annual' | 'monthly') => {
    const msg =
      planType === 'annual'
        ? APP_CONFIG.messages.annualPlan
        : APP_CONFIG.messages.monthlyPlan;

    if (onOpenActionModal) {
      onOpenActionModal(msg);
    } else {
      window.location.href = getWhatsAppLink(msg);
    }
  };

  return (
    <section id="planos" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-blue-700 uppercase">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>VALORES ACESSÍVEIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] [text-wrap:balance]">
            Conhecer os planos
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Comece hoje mesmo com <strong className="text-slate-900 font-semibold">{trialDays} dias grátis</strong> para conhecer o seu agente financeiro no WhatsApp. Sem cobrança antecipada e sem complicação.
          </p>
        </div>

        {/* Pricing Cards Grid - Plano Anual primeiro, depois o Plano Mensal */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Plano Anual (PRIMEIRO) */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 shadow-lg shadow-blue-600/10 hover:shadow-xl transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden order-1">
            {/* Top Tag */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-xs">
              Melhor Custo-Benefício
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  {annual.name}
                </h3>
              </div>

              <p className="text-xs text-slate-500 mb-5">
                {annual.description}
              </p>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-medium text-slate-500">R$</span>
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
                    {annual.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/{annual.period}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                    Apenas R$ {annual.monthlyEquivalent} por mês
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {annual.discountBadge}
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                {annual.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct WhatsApp CTA Button with WhatsApp SVG */}
            <div>
              <button
                type="button"
                onClick={() => handleSelectPlan('annual')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group"
              >
                <WhatsAppIcon className="w-4 h-4 rounded-xs" />
                <span>Testar {trialDays} dias grátis no Anual</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-slate-500 mt-1.5 font-medium">
                ⚡ Ativação com 1 clique diretamente no WhatsApp
              </p>
            </div>
          </div>

          {/* Card 2: Plano Mensal (SEGUNDO) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between text-left order-2">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  {monthly.name}
                </h3>
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  {monthly.badge}
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-5">
                {monthly.description}
              </p>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-medium text-slate-500">R$</span>
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
                    {monthly.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/{monthly.period}</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <span>✨ {trialDays} dias grátis para testar</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                {monthly.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct WhatsApp CTA Button with WhatsApp SVG */}
            <div>
              <button
                type="button"
                onClick={() => handleSelectPlan('monthly')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group"
              >
                <WhatsAppIcon className="w-4 h-4 rounded-xs" />
                <span>Testar {trialDays} dias grátis no Mensal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-1.5">
                Redireciona direto para o bot no WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Security & Reassurance strip */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 text-center">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Sem burocracia de cancelamento</span>
          </div>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span>Suporte ágil no próprio WhatsApp</span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span>Sem surpresas ou letras miúdas</span>
        </div>
      </div>
    </section>
  );
};
