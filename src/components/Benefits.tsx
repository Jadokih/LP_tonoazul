import React from 'react';
import {
  Compass,
  CalendarDays,
  Search,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';

interface BenefitsProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenActionModal }) => {
  const handleCta = () => {
    if (onOpenActionModal) {
      onOpenActionModal(APP_CONFIG.messages.heroTrial);
    } else {
      window.location.href = getWhatsAppLink(APP_CONFIG.messages.heroTrial);
    }
  };

  const benefits = [
    {
      title: 'Saiba para onde seu dinheiro vai',
      description: 'Visibilidade clara dos seus gastos divididos automaticamente por categoria.',
      icon: Compass,
      tag: 'Visibilidade'
    },
    {
      title: 'Acompanhe contas e despesas',
      description: 'Centralize boletos e gastos com lembretes para evitar juros e atrasos.',
      icon: CalendarDays,
      tag: 'Organização'
    },
    {
      title: 'Consulte registros em segundos',
      description: 'Pergunte no WhatsApp e receba seus totais e saldos na hora na conversa.',
      icon: Search,
      tag: 'Acessibilidade'
    },
    {
      title: 'Mais clareza para planejar o mês',
      description: 'Saiba quanto já gastou e decida seus próximos passos com tranquilidade.',
      icon: TrendingUp,
      tag: 'Previsibilidade'
    },
    {
      title: 'Organização sem planilhas',
      description: 'Sem fórmulas chatas. Basta mandar foto de cupom, áudio ou texto rápido.',
      icon: Sparkles,
      tag: 'Simplicidade'
    }
  ];

  return (
    <section id="beneficios" className="py-10 sm:py-12 bg-slate-50/60 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Benefícios
          </h2>
        </div>

        {/* Compact Cards: 3 on top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
          {benefits.slice(0, 3).map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans'] leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compact Cards: 2 on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5 text-left">
          {benefits.slice(3, 5).map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans'] leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compact Reassurance Strip */}
        <div className="mt-5 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <p className="text-xs text-slate-700">
              <strong className="font-semibold text-slate-900">Privacidade garantida:</strong>{' '}
              Seus dados são protegidos e tratados com total sigilo.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCta}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 rounded-xs" />
            <span>Experimentar 2 dias grátis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
