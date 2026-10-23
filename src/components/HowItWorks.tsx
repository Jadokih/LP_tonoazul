import React from 'react';
import { MessageSquare, PlusCircle, BarChart3 } from 'lucide-react';
import { WhatsAppSimulator } from './WhatsAppSimulator';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Converse',
      description: 'Fale com seu agente pelo WhatsApp.',
      detail: 'Mande texto rápido, áudio ou foto de comprovante no aplicativo.',
      icon: MessageSquare
    },
    {
      stepNumber: '02',
      title: 'Registre',
      description: 'Acompanhe contas e gastos sem esforço.',
      detail: 'Comprou algo ou pagou um boleto? O Azulin compreende e classifica na hora.',
      icon: PlusCircle
    },
    {
      stepNumber: '03',
      title: 'Entenda',
      description: 'Tenha visão clara do seu mês.',
      detail: 'Consulte resumos a qualquer momento para decidir com tranquilidade.',
      icon: BarChart3
    }
  ];

  return (
    <section id="como-funciona" className="py-10 sm:py-16 bg-slate-50/70 border-y border-slate-200/60 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            EXPERIÊNCIA DESCOMPLICADA
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] [text-wrap:balance]">
            Organizar seu dinheiro não precisa ser complicado.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Três passos simples no aplicativo que você já usa todos os dias.
          </p>
        </div>

        {/* Content Layout: 3 Compact Steps on Left + WhatsApp Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-4xl mx-auto">
          {/* Steps List - Extra compact cards */}
          <div className="lg:col-span-7 space-y-2.5 text-left order-2 lg:order-1">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.stepNumber}
                  className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          Passo {s.stepNumber}
                        </span>
                        <span className="text-slate-300" aria-hidden="true">·</span>
                        <h3 className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 leading-tight">
                        {s.description}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp in Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
            <WhatsAppSimulator />
            <p className="text-[10px] text-slate-400 mt-1.5 text-center">
              💡 Toque nos botões na telinha para testar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
