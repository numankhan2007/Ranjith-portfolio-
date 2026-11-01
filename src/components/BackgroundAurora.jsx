import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAurora = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#0A0A0A]">
      {/* Subtle modern tech dot grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-30" />

      {/* Top subtle radial light */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />

      {/* Ambient Royal Blue Glow 1 (Top Left) */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          opacity: [0.15, 0.28, 0.18, 0.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1D4ED8] blur-[150px]"
      />

      {/* Ambient Subtle Indigo/Violet Glow 2 (Center Right) */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          opacity: [0.12, 0.22, 0.15, 0.12],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-[#2563EB] blur-[160px]"
      />

      {/* Subtle Metallic Gold Shimmer (Bottom Center) */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.08, 0.06],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
        className="absolute -bottom-48 left-1/3 w-[500px] h-[500px] rounded-full bg-[#F59E0B] blur-[170px]"
      />
    </div>
  );
};
