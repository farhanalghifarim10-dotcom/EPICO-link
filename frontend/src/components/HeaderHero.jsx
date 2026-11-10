import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="relative w-full flex flex-col items-center text-center pt-8 pb-3 sm:pt-10 sm:pb-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-md mx-auto px-4 flex flex-col items-center"
      >

        {/* EPICO Transparent Logo (Wing icon + EPICO text only) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[91/50] flex items-center justify-center my-3"
        >
          <img
            src="/assets/logo-epico-transparent.png"
            alt="EPICO"
            width="910"
            height="500"
            fetchpriority="high"
            className="w-full h-auto object-contain select-none"
          />
        </motion.div>

        {/* Slogan */}
        <motion.div variants={itemVariants} className="mt-2">
          <h1 className="text-[11px] sm:text-xs text-ash-muted tracking-wider uppercase font-mono">
            Make it epic
          </h1>
        </motion.div>

        {/* Editorial forward-leaning accent line */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-center space-x-3 mt-5 mb-2"
        >
          <div className="h-[1px] w-12 bg-white/20" />
          <div className="w-2 h-2 border border-white/40 transform rotate-45" />
          <div className="h-[1px] w-12 bg-white/20" />
        </motion.div>
      </motion.div>
    </header>
  );
}
