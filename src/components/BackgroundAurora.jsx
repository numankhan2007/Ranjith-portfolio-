import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAurora = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#F8FAFC]">
      {/* Light subtle grid texture */}
      <div className="absolute inset-0 bg-light-grid opacity-60" />

      {/* Soft Ambient Sky Blue Glow (Top Left) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          opacity: [0.08, 0.15, 0.1, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-sky-400 blur-[140px]"
      />

      {/* Soft Ambient Blue Glow (Bottom Right) */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          opacity: [0.06, 0.12, 0.08, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full bg-sky-300 blur-[150px]"
      />
    </div>
  );
};
