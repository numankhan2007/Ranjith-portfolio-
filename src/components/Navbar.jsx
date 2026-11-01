import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight } from 'lucide-react';
import { toggleSound, isSoundEnabled, playClickSound, playHoverSound } from '../utils/sound';

export const Navbar = ({ onOpenContact }) => {
  const [audioActive, setAudioActive] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setAudioActive(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = toggleSound();
    setAudioActive(newState);
  };

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'glass-card bg-[#0A0A0A]/90 border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'bg-[#0A0A0A]/40 border border-white/5 backdrop-blur-md'
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <div className="w-full h-full bg-[#0A0A0A] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
              <span className="font-heading font-extrabold text-xs tracking-wider text-amber-400 group-hover:text-black transition-colors">
                RM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm font-heading flex items-center gap-1.5 text-white group-hover:text-amber-400 transition-colors">
              RANJITH M
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest hidden sm:inline">
              PORTFOLIO // 2026
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Audio FX Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={playHoverSound}
            title={audioActive ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:border-amber-400/40 hover:text-amber-400 transition-all cursor-pointer"
          >
            {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} className="text-slate-500" />}
          </button>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Collabs</span>
          </div>

          {/* Communicate Button - Royal Blue */}
          <button
            onClick={() => {
              playClickSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-heading"
          >
            <span>Communicate</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};
