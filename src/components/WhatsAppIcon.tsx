import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  alt?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  alt = 'WhatsApp'
}) => {
  return (
    <img
      src="/assets/whatsapp-svgrepo-com.svg"
      alt={alt}
      className={`shrink-0 select-none ${className}`}
      draggable={false}
      loading="eager"
    />
  );
};
