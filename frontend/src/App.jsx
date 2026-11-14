import React from 'react';
import HeaderHero from './components/HeaderHero';
import ActionButtons from './components/ActionButtons';
import KineticTicker from './components/KineticTicker';
import Watermark from './components/Watermark';
import BrandFooter from './components/BrandFooter';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between overflow-x-hidden">
      {/* Background Kinetic Watermark */}
      <Watermark />

      {/* Kinetic Athletic Header Marquee Ticker */}
      <KineticTicker />

      {/* Main Responsive Layout Wrapper: Centered Athletic Showcase */}
      <main className="relative z-10 w-full flex-1 flex justify-center items-start py-6 sm:py-10 lg:py-14 px-3 sm:px-6">
        <section className="w-full max-w-md sm:max-w-lg lg:max-w-md bg-black sm:bg-obsidian-card/40 sm:border sm:border-white/10 shadow-2xl flex flex-col items-center pb-8 sm:pb-10">
          {/* Athletic Top Accent Bar */}
          <div className="w-full h-1 bg-white hidden sm:block" />

          {/* Hero Section with White-on-Black Logo and Slogan */}
          <HeaderHero />

          {/* Interactive Dynamic Action Buttons */}
          <ActionButtons />
        </section>
      </main>

      {/* Global Brand Footer */}
      <BrandFooter />
    </div>
  );
}
