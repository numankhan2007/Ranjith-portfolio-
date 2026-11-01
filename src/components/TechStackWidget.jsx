import React, { useState } from 'react';
import { Cpu, Sparkles } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export const TechStackWidget = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Exact requested items to scroll
  const techItems = [
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'PHP',
    'React',
    'Tailwind CSS',
    'Vite',
    'Node.js',
    'FastAPI',
    'PostgreSQL',
    'MySQL',
    'Supabase',
    'Git',
    'VS Code',
    'Render',
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <div id="skills" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
            <Cpu size={14} className="text-sky-500" />
            <span>Interactive Tech Marquee</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Core Engineering Stack
          </h2>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-sm w-fit">
          <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-sky-500 animate-pulse'}`} />
          <span>{isPaused ? 'MARQUEE PAUSED' : 'AUTO-SCROLLING'}</span>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Marquee Track */}
      <div
        className="relative w-full py-4 overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Soft Vignette Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          <div
            className={`flex items-center gap-4 py-2 ${
              isPaused ? '' : 'animate-marquee-left'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '32s',
            }}
          >
            {marqueeItems.map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="bg-slate-50 border border-slate-200 text-slate-800 hover:border-sky-500 hover:text-sky-500 transition-colors px-6 py-3 rounded-full font-medium font-heading text-sm sm:text-base flex-shrink-0 cursor-pointer shadow-sm select-none flex items-center gap-2 group"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
