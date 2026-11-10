import React from 'react';

export default function KineticTicker() {
  // 16 repeated units per track ensures uninterrupted coverage on all screen sizes
  const unitsPerTrack = 16;

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden border-y border-white/10 bg-black/90 backdrop-blur-sm select-none py-2 sm:py-2.5"
    >
      <div className="flex w-max animate-marquee">
        {/* Track 1: First continuous sequence */}
        <div className="flex items-center shrink-0">
          {[...Array(unitsPerTrack)].map((_, i) => (
            <img
              key={`track1-${i}`}
              src="/assets/epico-ticker-unit.png"
              alt="EPICO"
              className="h-5 sm:h-6 w-auto object-contain shrink-0 select-none pointer-events-none opacity-90"
              loading="eager"
            />
          ))}
        </div>

        {/* Track 2: Identical twin sequence for seamless, zero-jump infinite loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {[...Array(unitsPerTrack)].map((_, i) => (
            <img
              key={`track2-${i}`}
              src="/assets/epico-ticker-unit.png"
              alt="EPICO"
              className="h-5 sm:h-6 w-auto object-contain shrink-0 select-none pointer-events-none opacity-90"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
