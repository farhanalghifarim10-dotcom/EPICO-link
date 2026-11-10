import React from 'react';
import { brandMeta } from '../config/links';

export default function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black/90 py-8 px-4 text-center mt-auto">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-4">
        {/* Brand Wing Mark & Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo-icon-transparent.png"
            alt="EPICO Emblem"
            width="20"
            height="20"
            className="w-5 h-5 object-contain"
          />
          <span className="font-athletic text-base font-extrabold tracking-epic text-white uppercase">
            {brandMeta.name}
          </span>
        </div>

        {/* Brand Slogan */}
        <p className="font-athletic text-xs tracking-super-wide text-ash-muted uppercase">
          {brandMeta.slogan}
        </p>

        {/* Legal & Inquiries Notice */}
        <div className="text-[11px] font-mono text-ash-subtle space-y-1">
          <p>&copy; {currentYear} {brandMeta.legalEntity}. ALL RIGHTS RESERVED.</p>
          <p>
            OFFICIAL CORRESPONDENCE:{' '}
            <a
              href={`mailto:${brandMeta.officialEmail}`}
              className="text-ash-light hover:text-white underline underline-offset-2 transition-colors"
            >
              {brandMeta.officialEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

