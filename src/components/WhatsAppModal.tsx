import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldCheck, Camera, Mic, MessageSquare } from 'lucide-react';
import { APP_CONFIG, getWhatsAppLink } from '../config/appConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  customMessage
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const messageToSend = customMessage || APP_CONFIG.messages.heroTrial;
  const directLink = getWhatsAppLink(messageToSend);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageToSend);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    window.open(directLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 text-slate-900 shadow-2xl relative animate-in zoom-in-95 duration-150 border border-slate-100 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Azulin Avatar & Title */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-13 h-13 rounded-2xl overflow-hidden border border-slate-200 p-0.5 shrink-0 bg-slate-100">
            <img
              src={APP_CONFIG.agentAvatar}
              alt="Foto do Azulin"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans'] text-slate-900">
                Falar com o Azulin
              </h3>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                Online
              </span>
            </div>
            <p className="text-xs text-blue-600 font-medium">
              2 dias grátis para experimentar
            </p>
          </div>
        </div>

        {/* Media format chips */}
        <div className="flex items-center gap-2 text-[11px] text-slate-600 mb-4 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
          <span className="font-semibold text-slate-700">Aceita:</span>
          <span className="inline-flex items-center gap-1">
            <Camera className="w-3 h-3 text-slate-500" />
            <span>Fotos</span>
          </span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1">
            <Mic className="w-3 h-3 text-slate-500" />
            <span>Áudios</span>
          </span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1">
            <MessageSquare className="w-3 h-3 text-slate-500" />
            <span>Mensagens</span>
          </span>
        </div>

        {/* Message Preview Box */}
        <div className="mb-5 space-y-2">
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Mensagem inicial para o WhatsApp:
          </label>
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
            "{messageToSend}"
          </div>
        </div>

        {/* Action Buttons with WhatsApp SVG */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa51] rounded-xl shadow-md shadow-emerald-600/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <WhatsAppIcon className="w-5 h-5 rounded-xs" />
            <span>Iniciar conversa no WhatsApp</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
          </button>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Mensagem copiada para a área de transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar mensagem</span>
              </>
            )}
          </button>
        </div>

        {/* Destination Info & Reassurance */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>WhatsApp oficial:</span>
            <code className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono text-[11px]">
              {APP_CONFIG.whatsappDisplayNumber}
            </code>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Sem necessidade de cartão de crédito para os 2 dias de teste.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
