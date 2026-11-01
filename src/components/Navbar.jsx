import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { toggleSound, isSoundEnabled, playClickSound, playHoverSound } from '../utils/sound';

export const Navbar = ({ onOpenContact }) => {
  const [audioActive, setAudioActive] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setAudioActive(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
    { name: 'Stack', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-6 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'bg-white/90 border border-slate-200 shadow-md backdrop-blur-md'
            : 'bg-white/70 border border-slate-200/80 backdrop-blur-sm'
        }`}
      >
        {/* Brand */}
        <a
          href="#hero"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-heading font-bold text-xs shadow-sm group-hover:bg-sky-600 transition-colors">
            RM
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm font-heading flex items-center gap-1.5 text-slate-900 group-hover:text-sky-600 transition-colors">
              RANJiTH_ M
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider hidden sm:inline">
              PORTFOLIO // v2.6
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200 rounded-full px-3 py-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-3.5 py-1 text-xs font-medium text-slate-600 hover:text-sky-600 hover:bg-white rounded-full transition-all"
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
            title={audioActive ? 'Mute Audio FX' : 'Enable Audio FX'}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-sky-400 hover:text-sky-600 transition-all cursor-pointer"
          >
            {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} className="text-slate-400" />}
          </button>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Collabs</span>
          </div>

          {/* Communicate Button - Sky Blue */}
          <button
            onClick={() => {
              playClickSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-sky-500 hover:bg-sky-600 text-white shadow-sm hover:shadow-md transition-all cursor-pointer font-heading"
          >
            <span>Communicate</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};
