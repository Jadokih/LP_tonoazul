import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WebAppShowcase } from './components/WebAppShowcase';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { MascotCallout } from './components/MascotCallout';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { APP_CONFIG, getWhatsAppLink } from './config/appConfig';

export default function App() {
  const handleOpenActionModal = (customMessage?: string) => {
    const message = customMessage || APP_CONFIG.messages.heroTrial;
    window.location.href = getWhatsAppLink(message);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Navigation */}
      <Navbar onOpenActionModal={handleOpenActionModal} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero with Mascot Azulin & Value Proposition */}
        <Hero onOpenActionModal={handleOpenActionModal} />

        {/* 2. How It Works (3 steps + WhatsApp Simulator inside phone mockup) */}
        <HowItWorks />

        {/* 3. WebApp Showcase with dynamic smooth descriptions and compact phone mockup */}
        <WebAppShowcase onOpenActionModal={handleOpenActionModal} />

        {/* 4. Concrete Benefits Section */}
        <Benefits onOpenActionModal={handleOpenActionModal} />

        {/* 5. Customer Testimonials (Fernanda, Rodrigo, Larissa) */}
        <Testimonials />

        {/* 6. Conhecer os Planos (Anual primeiro R$ 87,00 e Mensal R$ 9,75 com 2 dias grátis) */}
        <Pricing onOpenActionModal={handleOpenActionModal} />

        {/* 7. Emotional Encouragement Section with Mascot Azulin */}
        <MascotCallout onOpenActionModal={handleOpenActionModal} />

        {/* 8. High-Contrast Final CTA */}
        <FinalCTA onOpenActionModal={handleOpenActionModal} />
      </main>

      {/* Footer with legal navigation */}
      <Footer />
    </div>
  );
}
