import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Fernanda',
      role: 'Usuária do Tô no Azul',
      image: '/assets/aistudio/image_47277d79.png',
      text: 'Gostei porque é pelo WhatsApp mesmo. Não tenho paciência pra ficar preenchendo um monte de coisa em aplicativo. Assim fica bem mais fácil pra mim.'
    },
    {
      name: 'Rodrigo',
      role: 'Usuário do Tô no Azul',
      image: '/assets/aistudio/image_9c02d8d1.png',
      text: 'O melhor é conseguir registrar as coisas na hora. Antes eu deixava para depois e acabava esquecendo. Assim fica bem mais prático.'
    },
    {
      name: 'Larissa',
      role: 'Usuária do Tô no Azul',
      image: '/assets/aistudio/image_15719d2b.png',
      text: 'Eu recebia meu dinheiro e nem via pra onde ia. Quando percebia, já tinha acabado. Agora tô conseguindo ter mais controle e ver onde dá pra economizar.'
    }
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80 scroll-mt-16 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            QUEM USA, RECOMENDA
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] [text-wrap:balance]">
            O que dizem sobre o Tô no Azul
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Pessoas reais que descomplicaram o cuidado com o dinheiro no dia a dia.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-blue-500/50" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={`Foto de ${item.name}`}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 shadow-2xs"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
