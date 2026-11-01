import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Terminal, Sparkles, Code2, ArrowRight } from 'lucide-react';
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
      colors: ['#2563EB', '#FBBF24', '#3B82F6', '#FFFFFF'],
      disableForReducedMotion: true,
    });
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl glass-card p-8 sm:p-12 md:p-14 flex flex-col justify-between border border-white/10 bg-[#121212]/80 group shadow-2xl">
      {/* Background ambient lighting - Subtle Royal Blue and Gold */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_8px_#2563EB]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-widest text-slate-300 uppercase">
            SYSTEM_STATUS :: OPTIMAL
          </span>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
          <Terminal size={13} className="text-amber-400" />
          <span>v2026.PRO // STABLE</span>
        </div>
      </div>

      {/* Main Hero Identity with Profile Photo & Details */}
      <div className="py-8 sm:py-12 flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
        {/* Profile Photo Avatar Node with Royal Blue Border & Tech Glow */}
        <div 
          className="relative flex-shrink-0 group/avatar self-start sm:self-center md:self-center"
          onMouseEnter={playHoverSound}
        >
          {/* Subtle Glowing Tech Background Effect behind Avatar */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-amber-400/40 opacity-40 blur-lg group-hover/avatar:opacity-80 group-hover/avatar:blur-xl transition-all duration-500" />

          {/* Avatar Container with Clean Royal Blue Border */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-blue-700 ring-2 ring-[#2563EB] shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden bg-[#0A0A0A]">
            <img
              src="/profile.png"
              alt="RANJITH M"
              className="w-full h-full object-cover rounded-full select-none"
              loading="eager"
            />
          </div>

          {/* Active Status Badge on Avatar */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#0A0A0A] shadow-[0_0_8px_#10B981]"></span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-4 flex-1">
          {/* Gold Accent Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono tracking-wide">
            <Sparkles size={13} className="text-amber-400" />
            <span>Full-Stack & Systems Architecture</span>
          </div>

          {/* Name rendered with Metallic Gold Gradient & Glow */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading">
              <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(251,191,36,0.35)]">
                RANJITH M
              </span>
            </h1>
            
            {/* Role */}
            <div className="mt-2 min-h-[32px] flex items-center">
              <p className="font-mono text-sm sm:text-base md:text-lg text-blue-400 font-medium tracking-wide flex items-center gap-1.5">
                <span className="text-amber-400">&gt;</span>
                <span>{glitchText}</span>
                <span className="w-2 h-4 bg-blue-500 inline-block animate-pulse ml-0.5" />
              </p>
            </div>
          </div>

          {/* New Power Bio */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-light">
            Architecting scalable web solutions and robust backends. Driven by open-source innovation, I transform complex technical challenges into seamless, high-performance digital experiences.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-5">
        {/* Primary Accent: Royal Blue Button (Launch Projects) */}
        <MagneticButton
          onClick={triggerLaunchConfetti}
          onMouseEnter={playHoverSound}
          className="relative group px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all cursor-pointer overflow-hidden"
        >
          <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
          <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-12" />
          <span>Launch Projects</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </MagneticButton>

        {/* Secondary Clean Glass Button: Communicate */}
        <MagneticButton
          onClick={() => {
            playClickSound();
            onOpenContact();
          }}
          onMouseEnter={playHoverSound}
          className="relative px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-amber-400/50 text-slate-200 font-heading font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 backdrop-blur-md transition-all cursor-pointer group shadow-lg"
        >
          <MessageSquare size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Communicate</span>
        </MagneticButton>

        {/* Quick Micro Tag */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 ml-auto">
          <Code2 size={14} className="text-blue-400" />
          <span>Python • React • PostgreSQL • Supabase</span>
        </div>
      </div>
    </div>
  );
};
