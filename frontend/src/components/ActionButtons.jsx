import React from 'react';
import { motion } from 'framer-motion';
import { actionLinks } from '../config/links';
import {
  TikTokIcon,
  InstagramIcon,
  WhatsAppIcon,
  MailIcon,
  DiagonalArrowIcon,
} from './BrandIcons';

export default function ActionButtons() {
  // Map icon identifiers to their bespoke SVG components
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'tiktok':
        return <TikTokIcon className="w-5 h-5 shrink-0" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 shrink-0" />;
      case 'whatsapp':
        return <WhatsAppIcon className="w-5 h-5 shrink-0" />;
      case 'mail':
        return <MailIcon className="w-5 h-5 shrink-0" />;
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
    <nav aria-label="Official Brand Links" className="w-full max-w-md mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-3"
      >
        {actionLinks.map((link) => (
          <motion.div key={link.id} variants={buttonVariants}>
            <a
              href={link.url}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              aria-label={`${link.title}: ${link.subtitle || 'Open Link'}`}
              className={`
                group relative w-full min-h-[60px] flex items-center justify-between px-5 py-3.5
                bg-obsidian-card hover:bg-white text-white hover:text-black
                border border-white/15 hover:border-white
                rounded-none sm:rounded-sm
                transition-all duration-200 ease-out
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
                overflow-hidden
              `}
            >
              {/* Forward-leaning subtle diagonal corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-3 h-3 bg-white/10 group-hover:bg-black/10 transition-colors pointer-events-none clip-angled-br"
              />

              {/* Left Side: Icon & Title/Subtitle Stack */}
              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-2 border border-white/20 group-hover:border-black/30 group-hover:bg-black group-hover:text-white transition-all duration-200">
                  {getIcon(link.icon)}
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
        ))}
      </motion.div>
    </nav>
  );
}

