import React from 'react';
import HeaderHero from './components/HeaderHero';
import ActionButtons from './components/ActionButtons';
import MessageForm from './components/MessageForm';
import KineticTicker from './components/KineticTicker';
import Watermark from './components/Watermark';
import BrandFooter from './components/BrandFooter';
import { brandMeta } from './config/links';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between overflow-x-hidden">
      {/* Background Kinetic Watermark */}
      <Watermark />

      {/* Kinetic Athletic Header Marquee Ticker */}
      <KineticTicker />

      {/* Main Responsive Layout Wrapper:
          - Mobile: Dedicated vertical athletic mobile app container
          - Desktop: Editorial framed showcase flanked with sharp brand accents
      */}
      <main className="relative z-10 w-full flex-1 flex justify-center items-start py-4 sm:py-8 lg:py-12 px-2 sm:px-6">
        <div className="w-full max-w-6xl flex justify-center items-start lg:gap-12">
          
          {/* Desktop Left Editorial Column (Hidden on mobile) */}
          <aside
            aria-hidden="true"
            className="hidden lg:flex flex-col justify-between w-64 xl:w-72 pt-12 sticky top-12 select-none"
          >
            <div className="space-y-6">
              <div className="space-y-2 font-mono text-[11px] text-ash-light border-l-2 border-white pl-4">
                <div className="flex justify-between">
                  <span className="text-ash-muted">ASAL</span>
                  <span>{brandMeta.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ash-muted">KATEGORI</span>
                  <span>{brandMeta.discipline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ash-muted">SLOGAN</span>
                  <span className="text-white font-bold">{brandMeta.slogan}</span>
                </div>
              </div>
            </div>

            <div className="pt-16">
              <div className="p-4 border border-white/10 bg-obsidian-card">
                <p className="font-athletic text-xs font-bold uppercase tracking-wider text-white">
                  TAUTAN BIO TERVERIFIKASI
                </p>
                <p className="text-[10px] font-mono text-ash-muted mt-1 uppercase">
                  Pusat informasi resmi untuk seluruh saluran media sosial dan kemitraan.
                </p>
              </div>
            </div>
          </aside>

          {/* Central Athletic Mobile-First Container */}
          <section className="w-full max-w-md sm:max-w-lg lg:max-w-md bg-black sm:bg-obsidian-card/40 sm:border sm:border-white/10 shadow-2xl flex flex-col items-center">
            {/* Athletic Top Accent Bar */}
            <div className="w-full h-1 bg-white hidden sm:block" />

            {/* Hero Section with White-on-Black Logo and Slogan */}
            <HeaderHero />

            {/* Interactive Dynamic Action Buttons */}
            <ActionButtons />

            {/* Direct Comment / Drop a Message Inquiry Box */}
            <MessageForm />
          </section>

          {/* Desktop Right Editorial Column (Hidden on mobile) */}
          <aside
            aria-hidden="true"
            className="hidden lg:flex flex-col justify-between w-64 xl:w-72 pt-12 sticky top-12 select-none"
          >
            <div className="space-y-6">
              <div className="border-r-2 border-white pr-4 text-right">
                <span className="font-mono text-[10px] tracking-widest text-ash-muted uppercase block">
                  STATUS LAYANAN
                </span>
                <span className="font-athletic text-2xl font-black tracking-wider uppercase text-white mt-1 block">
                  ONLINE &bull; 24/7
                </span>
              </div>

              <div className="p-4 border border-white/10 bg-obsidian-card text-right">
                <p className="font-mono text-[10px] text-ash-muted uppercase">KONTAK LANGSUNG</p>
                <p className="font-athletic text-sm font-bold text-white mt-1 uppercase">
                  PESAN DIPANTAU SETIAP SAAT
                </p>
                <a
                  href={`mailto:${brandMeta.officialEmail}`}
                  className="inline-block mt-3 px-3 py-1.5 border border-white/30 text-[10px] font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
                >
                  KIRIM EMAIL LANGSUNG
                </a>
              </div>
            </div>

            <div className="pt-16 text-right">
              <span className="font-athletic text-4xl font-black tracking-epic text-white/10 uppercase block">
                EPICO
              </span>
              <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase block">
                Make it epic
              </span>
            </div>
          </aside>

        </div>
      </main>

      {/* Global Brand Footer */}
      <BrandFooter />
    </div>
  );
}
