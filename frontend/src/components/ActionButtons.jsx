import React from 'react';
import { motion } from 'framer-motion';
import { actionLinks } from '../config/links';
import {
  TikTokIcon,
  InstagramIcon,
  WhatsAppIcon,
  GmailIcon,
  MailIcon,
  DiagonalArrowIcon,
} from './BrandIcons';

export default function ActionButtons() {
  // Map icon identifiers to their official uploaded logo images
  const getIconImage = (iconName) => {
    switch (iconName) {
      case 'tiktok':
        return '/assets/icon-tiktok.png';
      case 'instagram':
        return '/assets/icon-instagram.png';
      case 'facebook':
        return '/assets/icon-facebook.png';
      case 'whatsapp':
        return '/assets/icon-whatsapp.png';
      case 'mail':
      case 'gmail':
        return '/assets/icon-gmail.png';
      default:
        return null;
    }
  };

  // Bespoke brand color accents when hovered
  const getBrandAccent = (id) => {
    switch (id) {
      case 'tiktok':
        return {
          hoverBorder: 'hover:border-transparent hover:shadow-[0_0_18px_rgba(37,244,238,0.25),0_0_18px_rgba(254,44,85,0.25)]',
          leftBar: 'bg-[#25F4EE]', // TikTok Cyan
          rightBar: 'bg-[#FE2C55]', // TikTok Red
          topBar: 'bg-gradient-to-r from-[#25F4EE] to-[#FE2C55]',
          bottomBar: 'bg-gradient-to-r from-[#25F4EE] to-[#FE2C55]',
          cornerBg: 'bg-[#FE2C55]',
        };
      case 'instagram':
        return {
          hoverBorder: 'hover:border-transparent hover:shadow-[0_0_18px_rgba(225,48,108,0.25),0_0_18px_rgba(252,176,69,0.25)]',
          leftBar: 'bg-gradient-to-b from-[#833AB4] via-[#E1306C] to-[#FD1D1D]', // Purple to Magenta
          rightBar: 'bg-gradient-to-b from-[#FD1D1D] via-[#F77737] to-[#FCAF45]', // Orange to Gold
          topBar: 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45]',
          bottomBar: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]',
          cornerBg: 'bg-[#E1306C]',
        };
      case 'facebook':
        return {
          hoverBorder: 'hover:border-transparent hover:shadow-[0_0_18px_rgba(8,102,255,0.35)]',
          leftBar: 'bg-[#0866FF]', // Facebook Electric Blue
          rightBar: 'bg-[#0866FF]', // Facebook Electric Blue
          topBar: 'bg-[#0866FF]',
          bottomBar: 'bg-[#0866FF]',
          cornerBg: 'bg-[#0866FF]',
        };
      case 'whatsapp':
        return {
          hoverBorder: 'hover:border-transparent hover:shadow-[0_0_18px_rgba(37,211,102,0.3)]',
          leftBar: 'bg-[#25D366]', // WhatsApp Emerald Green
          rightBar: 'bg-[#25D366]', // WhatsApp Emerald Green
          topBar: 'bg-[#25D366]',
          bottomBar: 'bg-[#25D366]',
          cornerBg: 'bg-[#25D366]',
        };
      case 'email':
        return {
          hoverBorder: 'hover:border-transparent hover:shadow-[0_0_18px_rgba(66,133,244,0.25),0_0_18px_rgba(234,67,53,0.25)]',
          leftBar: 'bg-[#4285F4]', // Google Blue
          rightBar: 'bg-[#34A853]', // Google Green
          topBar: 'bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]', // Blue -> Red -> Yellow
          bottomBar: 'bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]', // Blue -> Red -> Green
          cornerBg: 'bg-[#EA4335]', // Google Red
        };
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <nav aria-label="Tautan Resmi Brand" className="w-full max-w-md mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-3"
      >
        {actionLinks.map((link) => {
          const accent = getBrandAccent(link.id);
          return (
            <motion.div key={link.id} variants={buttonVariants}>
              <a
                href={link.url}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                aria-label={`${link.title}: ${link.subtitle || 'Buka Tautan'}`}
                className={`
                  group relative w-full min-h-[60px] flex items-center justify-between px-5 py-3.5
                  bg-obsidian-card hover:bg-white text-white hover:text-black
                  border border-white/15 ${accent ? accent.hoverBorder : 'hover:border-white'}
                  rounded-none sm:rounded-sm
                  transition-all duration-200 ease-out
                  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  overflow-hidden
                `}
              >
                {/* Brand Dual-Color Edge Accents on Hover */}
                {accent && (
                  <>
                    {/* Left Edge Bar */}
                    <div
                      aria-hidden="true"
                      className={`absolute left-0 top-0 bottom-0 w-[4px] ${accent.leftBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none`}
                    />
                    {/* Right Edge Bar */}
                    <div
                      aria-hidden="true"
                      className={`absolute right-0 top-0 bottom-0 w-[4px] ${accent.rightBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none`}
                    />
                    {/* Top Edge Gradient */}
                    <div
                      aria-hidden="true"
                      className={`absolute top-0 left-0 right-0 h-[2px] ${accent.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none`}
                    />
                    {/* Bottom Edge Gradient */}
                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${accent.bottomBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none`}
                    />
                  </>
                )}

                {/* Forward-leaning subtle diagonal corner accent */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-3.5 h-3.5 pointer-events-none clip-angled-br z-20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                  {accent && (
                    <div
                      className={`absolute inset-0 ${accent.cornerBg} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    />
                  )}
                </div>

              {/* Left Side: Official Brand Icon & Title/Subtitle Stack */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 min-w-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 p-1.5 border border-white/20 group-hover:border-black/20 bg-white/5 group-hover:bg-black/5 transition-all duration-200">
                  <img
                    src={getIconImage(link.icon)}
                    alt=""
                    width="512"
                    height="512"
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-200 select-none"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col text-left truncate">
                  <span className="font-athletic text-base sm:text-lg font-bold tracking-wider uppercase leading-tight truncate">
                    {link.title}
                  </span>
                  {link.subtitle && (
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-ash-muted group-hover:text-black/70 transition-colors truncate">
                      {link.subtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side: High-Velocity Diagonal Arrow */}
              <div className="pl-3 flex items-center shrink-0">
                <div className="w-8 h-8 flex items-center justify-center border border-white/15 group-hover:border-black/30 transition-colors">
                  <span className="transform transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                    <DiagonalArrowIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          );
        })}
      </motion.div>
    </nav>
  );
}

