import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Terminal, Sparkles, Code2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';
import { playClickSound, playHoverSound } from '../utils/sound';

export const HeroWidget = ({ onOpenContact }) => {
  const [glitchText, setGlitchText] = useState('Full-Stack Developer | Open-Source Contributor | Architecting Scalable Web Solutions');
  const targetText = 'Full-Stack Developer | Open-Source Contributor | Architecting Scalable Web Solutions';
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  // Decryption Text Effect
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
      iteration += 2;
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const triggerLaunchConfetti = () => {
    playClickSound();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0EA5E9', '#38BDF8', '#0284C7', '#0F172A'],
      disableForReducedMotion: true,
    });
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-12 md:p-14 flex flex-col justify-between group">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-slate-500 uppercase">
            STATUS :: AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-xs text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
          <Terminal size={13} className="text-sky-500" />
          <span>SYS::LIGHT_v2.6</span>
        </div>
      </div>

      {/* Main Hero Identity with Profile Photo & Details */}
      <div className="py-8 sm:py-12 flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
        {/* Profile Photo Avatar with Clean Sky Blue Ring */}
        <div 
          className="relative flex-shrink-0 group/avatar self-start sm:self-center md:self-center"
          onMouseEnter={playHoverSound}
        >
          {/* Avatar Container with Clean Sky Blue Ring */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full ring-2 ring-sky-500 ring-offset-4 ring-offset-white shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden bg-slate-100">
            <img
              src="/profile.png"
              alt="RANJiTH_ M"
              className="w-full h-full object-cover rounded-full select-none"
              loading="eager"
            />
          </div>

          {/* Active Status Badge on Avatar */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-sm"></span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-4 flex-1">
          {/* Sky Blue Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono tracking-wide font-medium">
            <Sparkles size={13} className="text-sky-500" />
            <span>Full-Stack & Systems Architecture</span>
          </div>

          {/* Name: RANJiTH_ M */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading text-slate-900">
              RANJiTH_ M
            </h1>
            
            {/* Tagline */}
            <div className="mt-2 min-h-[32px] flex items-center">
              <p className="font-mono text-sm sm:text-base md:text-lg text-sky-600 font-semibold tracking-wide flex items-center gap-1.5">
                <span className="text-slate-400">&gt;</span>
                <span>{glitchText}</span>
                <span className="w-2 h-4 bg-sky-500 inline-block animate-pulse ml-0.5" />
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            B.Sc. Computer Science student crafting scalable web applications, robust backends, and contributing to AI-driven open-source pipelines.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
        {/* Primary Sky Blue Button */}
        <MagneticButton
          onClick={triggerLaunchConfetti}
          onMouseEnter={playHoverSound}
          className="relative group px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-heading font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
        >
          <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-12" />
          <span>Launch Projects</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </MagneticButton>

        {/* Secondary White Button */}
        <MagneticButton
          onClick={() => {
            playClickSound();
            onOpenContact();
          }}
          onMouseEnter={playHoverSound}
          className="relative px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-500 text-slate-800 hover:text-sky-600 font-heading font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 transition-all cursor-pointer group shadow-sm"
        >
          <MessageSquare size={18} className="text-sky-500 group-hover:scale-110 transition-transform" />
          <span>Communicate</span>
        </MagneticButton>

        {/* Quick Micro Tag */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 ml-auto">
          <Code2 size={14} className="text-sky-500" />
          <span>Python • React • PostgreSQL • Supabase</span>
        </div>
      </div>
    </div>
  );
};
