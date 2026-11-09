import React from 'react';

/**
 * Background Watermark:
 * Ultra-subtle, oversized forward-leaning EPICO wing emblem.
 * Uses transparent PNG with no box clipping or background borders.
 */
export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0 select-none"
    >
      <div className="relative w-[130vw] max-w-[1000px] aspect-[89/30] flex items-center justify-center opacity-[0.035] transform -rotate-12 scale-110">
        <img
          src="/assets/logo-icon-transparent.png"
          alt=""
          width="890"
          height="300"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      {/* Subtle athletic diagonal hairline accent */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-white/5 opacity-50" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-white/10 opacity-50" />
    </div>
  );
}
