import React, { useRef, useEffect } from 'react';
import { Camera, Mic } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MascotFrameAnimationProps {
  className?: string;
  cycleDurationMs?: number;
}

export const MascotFrameAnimation: React.FC<MascotFrameAnimationProps> = ({
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none w-full max-w-[340px] sm:max-w-[420px] mx-auto ${className}`}
      aria-label="Azulin, o robô assistente do Tô no Azul acenando amigavelmente"
      role="img"
    >
      {/* Main Mascot Stage with adjusted badge framing (well away from the face) */}
      <div className="relative w-full flex items-center justify-center">
        {/* Animated Emerging Item 1: Fotos - positioned at waist level on the left */}
        <div className="absolute top-[42%] sm:top-[40%] -left-2 sm:-left-7 md:-left-9 z-10 animate-float-badge-1">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-100 shadow-lg shadow-blue-500/10 text-left hover:scale-105 transition-transform">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Fotos</p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Comprovantes & notas</p>
            </div>
          </div>
        </div>

        {/* Animated Emerging Item 2: Mensagem de áudio - positioned safely down on the right (waist/arm level, away from face) */}
        <div className="absolute top-[52%] sm:top-[48%] -right-2 sm:-right-7 md:-right-9 z-10 animate-float-badge-2">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-100 shadow-lg shadow-blue-500/10 text-left hover:scale-105 transition-transform">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Mensagem de áudio</p>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Grave naturalmente</span>
                <span className="flex items-end gap-0.5 h-2.5" aria-hidden="true">
                  <span className="w-0.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  <span className="w-0.5 h-2.5 bg-blue-500 rounded-full animate-pulse [animation-delay:150ms]" />
                  <span className="w-0.5 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Emerging Item 3: Texto no WhatsApp - positioned near bottom legs */}
        <div className="absolute bottom-12 sm:bottom-14 -left-1 sm:-left-5 md:-left-7 z-10 animate-float-badge-3">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-lg shadow-emerald-500/10 text-left hover:scale-105 transition-transform">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Texto no WhatsApp</p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">Rápido como mandar msg</p>
            </div>
          </div>
        </div>

        {/* Transparent Video with WebM VP9 Alpha + Animated WebP cross-browser fallback */}
        <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[390px] aspect-[9/16] flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/azulin-frames/frame_01.webp"
            className="w-full h-full object-contain drop-shadow-[0_18px_35px_rgba(37,99,235,0.14)] pointer-events-none"
            aria-label="Azulin acenando"
          >
            <source src="/assets/azulin-waving.webm" type="video/webm" />
            <img
              src="/assets/azulin-waving.webp"
              alt="Azulin acenando"
              className="w-full h-full object-contain drop-shadow-[0_18px_35px_rgba(37,99,235,0.14)] pointer-events-none"
            />
          </video>
        </div>
      </div>

      {/* Subtle organic contact shadow underneath Azulin's feet */}
      <div
        className="w-44 sm:w-56 h-3.5 bg-slate-900/10 rounded-full blur-md -mt-4 sm:-mt-6 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
