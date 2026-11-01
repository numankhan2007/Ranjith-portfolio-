import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAurora = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050B14]">
      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 bg-grid-cyber opacity-40" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Aurora Blob 1: Neon Cyan */}
      <motion.div
        animate={{
          x: [0, 80, -60, 40, 0],
          y: [0, -100, 60, -40, 0],
          scale: [1, 1.25, 0.9, 1.15, 1],
          opacity: [0.35, 0.55, 0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#00F0FF]/30 to-[#0070F3]/20 blur-[130px]"
      />

      {/* Aurora Blob 2: Electric Blue */}
      <motion.div
        animate={{
          x: [0, -90, 50, -70, 0],
          y: [0, 90, -50, 70, 0],
          scale: [1, 1.2, 0.95, 1.3, 1],
          opacity: [0.3, 0.6, 0.35, 0.5, 0.3],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#0070F3]/35 to-[#7928CA]/25 blur-[140px]"
      />

      {/* Aurora Blob 3: Deep Cosmic Purple Accent (bottom center/left) */}
      <motion.div
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -60, 40, 0],
          scale: [0.9, 1.15, 1, 0.9],
          opacity: [0.2, 0.45, 0.25, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#7928CA]/30 via-[#00F0FF]/20 to-transparent blur-[140px]"
      />

      {/* Scanline texture */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
    </div>
  );
};

