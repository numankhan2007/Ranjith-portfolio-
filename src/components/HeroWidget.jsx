import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Terminal, Sparkles, Code2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';
import { playClickSound, playHoverSound } from '../utils/sound';

export const HeroWidget = ({ onOpenContact }) => {
  const [glitchText, setGlitchText] = useState('Aspiring Full-Stack Developer | Open Source Contributor');
  const targetText = 'Aspiring Full-Stack Developer | Open Source Contributor';
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  // Cyber Glitch Decryption Text Effect
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setGlitchText(
        targetText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1.5;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const triggerLaunchConfetti = () => {
    playClickSound();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00F0FF', '#0070F3', '#7928CA', '#FFFFFF'],
      disableForReducedMotion: true,
    });
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-cyan-500/20 bg-gradient-to-br from-[#071326]/90 via-[#050B14]/90 to-[#0A1A33]/80 group">
      {/* Decorative ambient corner glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Status & Security Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-cyan-500/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_8px_#00F0FF]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-cyan-300">
            SYSTEM_STATUS :: OPTIMAL
          </span>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 bg-space-950/60 px-3 py-1 rounded-full border border-cyan-500/15">
          <Terminal size={12} className="text-cyan-400" />
          <span>PORTFOLIO_NODE_v2.6</span>
        </div>
      </div>

      {/* Main Hero Identity with Profile Photo & Details */}
      <div className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Profile Photo Avatar Node */}
        <div 
          className="relative flex-shrink-0 group/avatar self-start sm:self-center md:self-center"
          onMouseEnter={playHoverSound}
        >
          {/* Outer Ambient Aurora Glow Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 opacity-70 blur-md group-hover/avatar:opacity-100 group-hover/avatar:blur-lg transition-all duration-500" />

          {/* Futuristic Profile Image Container */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-cyan-300 ring-2 ring-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden bg-space-950">
            <img
              src="/profile.png"
              alt="RANJITH M"
              className="w-full h-full object-cover rounded-full select-none"
              loading="eager"
            />
          </div>

          {/* Live Cyber Status Indicator Dot */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400 border-2 border-[#050B14] shadow-[0_0_8px_#00F0FF]"></span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-4 flex-1">
          {/* Holographic Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-wide">
            <Sparkles size={13} className="text-cyan-400 animate-pulse" />
            <span>Bento 3D Architecture • 2026 Edition</span>
          </div>

          {/* Big Name with 3D Cyber Gradient */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                RANJITH M
              </span>
            </h1>
            
            {/* Cyber Glitch Text Role */}
            <div className="mt-2 min-h-[32px] flex items-center">
              <p className="font-mono text-sm sm:text-base md:text-lg text-cyan-400 font-medium tracking-wide flex items-center gap-1">
                <span className="text-cyan-500">&gt;</span>
                <span>{glitchText}</span>
                <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse ml-0.5" />
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            B.Sc. Computer Science student crafting scalable web applications, robust backends, and contributing to AI-driven open-source pipelines.
          </p>
        </div>
      </div>

      {/* Micro-Interaction CTA Buttons */}
      <div className="pt-4 flex flex-wrap items-center gap-4">
        {/* Neon Glowing Button: Launch Projects */}
        <MagneticButton
          onClick={triggerLaunchConfetti}
          onMouseEnter={playHoverSound}
          className="relative group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] transition-all cursor-pointer overflow-hidden"
        >
          {/* Button shine sweep */}
          <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
          <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-12" />
          <span>Launch Projects</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </MagneticButton>

        {/* Holographic Outline Button: Communicate */}
        <MagneticButton
          onClick={() => {
            playClickSound();
            onOpenContact();
          }}
          onMouseEnter={playHoverSound}
          className="relative px-6 py-3.5 rounded-2xl bg-[#071326]/60 hover:bg-cyan-950/40 border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,112,243,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer group"
        >
          <MessageSquare size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>Communicate</span>
        </MagneticButton>

        {/* Quick Micro Badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-400/70 ml-auto">
          <Code2 size={14} className="text-cyan-400" />
          <span>Python • React • PostgreSQL</span>
        </div>
      </div>
    </div>
  );
};
