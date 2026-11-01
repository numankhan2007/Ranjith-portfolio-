import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { toggleSound, isSoundEnabled, playClickSound, playHoverSound } from '../utils/sound';

export const Navbar = ({ onOpenContact }) => {
  const [audioActive, setAudioActive] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setAudioActive(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'glass-panel bg-[#07101f]/85 border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'bg-transparent border border-white/5'
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#050B14] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
              <span className="font-mono text-xs font-bold tracking-wider text-cyan-300 group-hover:text-black transition-colors">
                RM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-sm font-mono flex items-center gap-1.5 text-slate-100 group-hover:text-cyan-400 transition-colors">
              RANJITH.M
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </span>
            <span className="text-[10px] text-cyan-400/70 font-mono tracking-widest hidden sm:inline">
              SYS::v2026.11
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#050b14]/60 border border-cyan-500/15 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-full transition-all tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Audio FX Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={playHoverSound}
            title={audioActive ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            className="p-2 rounded-xl bg-space-850/80 border border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
          >
            {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} className="text-slate-500" />}
          </button>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Collabs</span>
          </div>

          {/* Connect Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Communicate</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};

