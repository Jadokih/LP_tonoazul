import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenActionModal?: (customMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenActionModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    if (onOpenActionModal) {
      onOpenActionModal(APP_CONFIG.messages.heroTrial);
    } else {
      window.location.href = getWhatsAppLink(APP_CONFIG.messages.heroTrial);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-6">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <img
              src="/assets/brand-icon-rounded.webp"
              alt="Logo Tô no Azul"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs object-cover group-hover:scale-105 transition-transform"
            />
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-slate-900 tracking-tight">
              Tô no <span className="text-blue-600">Azul</span>
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#como-funciona"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Como funciona
            </a>
            <a
              href="#webapp"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              WebApp
            </a>
            <a
              href="#beneficios"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Depoimentos
            </a>
            <a
              href="#planos"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5"
            >
              <span>Planos</span>
              <span className="text-[10px] font-semibold tracking-wide text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">
                2 dias grátis
              </span>
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCtaClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm shadow-blue-600/20 transition-all hover:shadow-md hover:shadow-blue-600/25 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-4 h-4 rounded-xs" />
              <span>Quero ficar no azul</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#webapp"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Telas do WebApp
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center justify-between"
            >
              <span>Conhecer os planos</span>
              <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-semibold border border-blue-200">
                2 dias grátis
              </span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 rounded-xs" />
              <span>Quero ficar no azul</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
