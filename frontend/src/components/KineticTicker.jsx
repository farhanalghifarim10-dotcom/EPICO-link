import React from 'react';

export default function KineticTicker() {
  const tickerItems = [
    "EPICO",
    "MAKE IT EPIC",
    "PERFORMANCE APPAREL",
    "PREMIUM SPORTSWEAR",
    "EST. OFFICIAL",
    "VELOCITY & CRAFT",
  ];

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden border-y border-white/10 bg-black/80 backdrop-blur-sm select-none py-1.5"
    >
      <div className="flex w-max animate-marquee space-x-8 text-[10px] sm:text-xs font-mono uppercase tracking-super-wide text-ash-muted">
        {/* Repeated block for infinite kinetic loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {tickerItems.map((item, idx) => (
              <span key={`${loopIdx}-${idx}`} className="flex items-center space-x-6">
                <span className="text-white/80 font-bold">{item}</span>
                <span className="text-white/20">/</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

