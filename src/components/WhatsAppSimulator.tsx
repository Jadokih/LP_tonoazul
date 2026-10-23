import React, { useState, useEffect, useRef } from 'react';
import { CheckCheck, RotateCcw, Mic, Camera, MessageSquare, Play, Paperclip, Smile } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  type?: 'text' | 'audio' | 'photo';
  audioDuration?: string;
  categoryBadge?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'm1',
    sender: 'user',
    text: 'Gastei R$ 32 no almoço.',
    type: 'text',
    time: '12:45'
  },
  {
    id: 'm2',
    sender: 'bot',
    text: 'Anotado! R$ 32 registrado em Alimentação.',
    type: 'text',
    time: '12:45',
    categoryBadge: 'Alimentação'
  },
  {
    id: 'm3',
    sender: 'user',
    text: 'Gasolina R$ 150 no posto',
    type: 'audio',
    audioDuration: '0:05',
    time: '13:20'
  },
  {
    id: 'm4',
    sender: 'bot',
    text: 'Áudio compreendido! R$ 150 registrado em Transporte.',
    type: 'text',
    time: '13:20',
    categoryBadge: 'Transporte'
  },
  {
    id: 'm5',
    sender: 'user',
    text: 'Quanto já gastei este mês?',
    type: 'text',
    time: '14:10'
  },
  {
    id: 'm6',
    sender: 'bot',
    text: 'Vamos conferir seus registros e mostrar um resumo do período.',
    type: 'text',
    time: '14:10'
  }
];

const PRESET_PROMPTS = [
  {
    label: 'Almoço R$ 32',
    icon: MessageSquare,
    userMsg: { text: 'Gastei R$ 32 no almoço.', type: 'text' as const },
    botReply: 'Anotado! R$ 32 registrado em Alimentação.',
    categoryBadge: 'Alimentação'
  },
  {
    label: 'Áudio Gasolina',
    icon: Mic,
    userMsg: { text: 'Áudio: "Coloquei R$ 150 de gasolina"', type: 'audio' as const, audioDuration: '0:05' },
    botReply: 'Áudio compreendido! R$ 150 registrado em Transporte.',
    categoryBadge: 'Transporte'
  },
  {
    label: 'Foto Cupom',
    icon: Camera,
    userMsg: { text: '📸 Foto do cupom fiscal da farmácia (R$ 89,40)', type: 'photo' as const },
    botReply: 'Li o cupom da foto! R$ 89,40 adicionado em Saúde & Farmácia.',
    categoryBadge: 'Saúde'
  },
  {
    label: 'Gastos do mês?',
    icon: MessageSquare,
    userMsg: { text: 'Quanto já gastei este mês?', type: 'text' as const },
    botReply: 'Vamos conferir seus registros e mostrar um resumo do período.'
  }
];

export const WhatsAppSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendPrompt = (prompt: typeof PRESET_PROMPTS[0]) => {
    if (isTyping) return;

    const now = new Date();
    const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: prompt.userMsg.text,
      type: prompt.userMsg.type,
      audioDuration: prompt.userMsg.audioDuration,
      time: timeString
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: prompt.botReply,
        type: 'text',
        time: timeString,
        categoryBadge: prompt.categoryBadge
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setIsTyping(false);
  };

  return (
    <div className="relative mx-auto select-none">
      {/* Smartphone Mockup Frame for WhatsApp */}
      <div className="relative mx-auto w-[250px] sm:w-[275px] md:w-[290px] bg-[#0F172A] p-[6px] sm:p-[8px] rounded-[38px] sm:rounded-[42px] shadow-[0_16px_40px_-10px_rgba(15,23,42,0.22)] border border-slate-700/50 transition-all">
        {/* Screen Container */}
        <div className="relative w-full aspect-[370/790] bg-[#EFEAE2] rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col justify-between text-left">
          {/* WhatsApp Header Bar inside Screen */}
          <div className="bg-[#075E54] text-white px-3.5 pt-3 pb-2.5 flex items-center justify-between shrink-0 shadow-xs z-10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 bg-slate-800 shrink-0">
                <img
                  src={APP_CONFIG.agentAvatar}
                  alt="Azulin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-xs truncate text-white leading-tight">Azulin</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                </div>
                <p className="text-[10px] text-emerald-100/90 truncate leading-tight">
                  {isTyping ? 'digitando...' : 'Online no WhatsApp'}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="p-1 rounded text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
              title="Reiniciar conversa"
              aria-label="Reiniciar demonstração"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Chat Messages Body inside Screen */}
          <div
            ref={chatScrollRef}
            className="flex-1 overflow-y-auto p-2.5 space-y-2 bg-[#EFEAE2] relative scrollbar-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 0)',
              backgroundSize: '14px 14px'
            }}
          >
            <div className="text-center my-0.5">
              <span className="bg-white/80 text-slate-500 text-[9px] font-medium px-2 py-0.5 rounded shadow-xs">
                Hoje
              </span>
            </div>

            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              const isAudio = msg.type === 'audio';
              const isPhoto = msg.type === 'photo';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`relative max-w-[88%] px-2.5 py-1.5 rounded-lg text-xs leading-relaxed shadow-2xs ${
                      isBot
                        ? 'bg-white text-slate-800 rounded-tl-xs border border-slate-100'
                        : 'bg-[#D9FDD3] text-slate-900 rounded-tr-xs'
                    }`}
                  >
                    {isAudio && (
                      <div className="flex items-center gap-2 py-0.5">
                        <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                          <Play className="w-3 h-3 fill-white ml-0.5" />
                        </div>
                        <div className="flex-1 min-w-[90px]">
                          <div className="h-1 bg-slate-300 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-emerald-600 w-2/5" />
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-slate-500 mt-0.5">
                            <span>Voz</span>
                            <span>{msg.audioDuration || '0:05'}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {isPhoto && (
                      <div className="bg-slate-100 rounded p-1.5 text-[10px] text-slate-700 flex items-center gap-1.5 mb-1 border border-slate-200">
                        <Camera className="w-3 h-3 text-slate-600 shrink-0" />
                        <span className="font-medium truncate">Cupom anexado</span>
                      </div>
                    )}

                    {(!isAudio || isBot) && (
                      <p className="text-[11px] font-normal leading-snug">{msg.text}</p>
                    )}

                    {msg.categoryBadge && (
                      <div className="mt-1 pt-0.5 border-t border-slate-100 text-[9px] text-blue-700 font-semibold">
                        • {msg.categoryBadge}
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-0.5 mt-0.5 text-[9px] text-slate-400">
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white px-2.5 py-1.5 rounded-lg rounded-tl-xs shadow-2xs border border-slate-100 flex items-center gap-1">
                  <span className="text-[10px] text-slate-500 mr-0.5">digitando</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Authentic WhatsApp Interactive Elements inside Screen */}
          <div className="bg-[#F0F2F5] px-2 py-2 border-t border-slate-200/80 shrink-0 space-y-1.5">
            {/* WhatsApp Quick Reply Buttons (Pills styled natively like WhatsApp Business buttons) */}
            <div className="grid grid-cols-2 gap-1.5">
              {PRESET_PROMPTS.map((prompt) => {
                const Icon = prompt.icon;
                return (
                  <button
                    key={prompt.label}
                    type="button"
                    disabled={isTyping}
                    onClick={() => handleSendPrompt(prompt)}
                    className="text-[10px] px-2 py-1 rounded-full bg-white hover:bg-[#E7ECE8] active:bg-[#D9FDD3] text-[#075E54] font-semibold border border-slate-300 shadow-2xs flex items-center justify-center gap-1 truncate transition-colors text-center disabled:opacity-50"
                  >
                    <Icon className="w-2.5 h-2.5 shrink-0 text-[#25D366]" />
                    <span className="truncate">{prompt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* WhatsApp Authentic Input Bar */}
            <div className="flex items-center gap-1.5 pt-0.5">
              <div className="flex-1 bg-white rounded-full px-3 py-1 border border-slate-200 flex items-center gap-1.5 shadow-2xs">
                <Smile className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-[10px] text-slate-400 truncate flex-1">
                  Toque em um botão acima...
                </span>
                <Paperclip className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <Camera className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#00A884] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Mic className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
