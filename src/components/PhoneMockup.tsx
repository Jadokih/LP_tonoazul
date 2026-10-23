import React from 'react';

interface PhoneMockupProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  altText,
  className = ''
}) => {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Clean, Compact Smartphone Frame - No Side Buttons, Full Screen View */}
      <div className="relative mx-auto w-[240px] sm:w-[270px] md:w-[290px] bg-[#0F172A] p-[6px] sm:p-[8px] rounded-[38px] sm:rounded-[42px] shadow-[0_16px_40px_-10px_rgba(15,23,42,0.22)] border border-slate-700/50 transition-all duration-300">
        {/* Screen Container - Perfectly snug with zero clipping and zero blank borders */}
        <div className="relative w-full aspect-[370/810] bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
