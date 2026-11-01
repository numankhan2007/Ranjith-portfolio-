import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGit,
  SiRender,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { playHoverSound, playClickSound } from '../utils/sound';

export const TechStackWidget = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Exact 16 tech skills with official brand icons and distinct colors
  const techList = [
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#EAB308]' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss, color: 'text-[#1572B6]' },
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]' },
    { name: 'React', icon: SiReact, color: 'text-[#0EA5E9]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Vite', icon: SiVite, color: 'text-[#646CFF]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#22C55E]' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#00758F]' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'VS Code', icon: VscVscode, color: 'text-[#007ACC]' },
    { name: 'Render', icon: SiRender, color: 'text-[#0EA5E9]' },
  ];

  // Duplicate 4x for continuous seamless infinite marquee
  const marqueeItems = [...techList, ...techList, ...techList, ...techList];

  return (
    <div id="skills" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
            <Cpu size={14} className="text-sky-500" />
            <span>Interactive Tech Stack</span>
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
        className="relative w-full py-5 overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Soft Vignette Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          <div
            className={`flex items-center gap-4 py-1.5 ${
              isPaused ? '' : 'animate-marquee-left'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '35s',
            }}
          >
            {marqueeItems.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${idx}`}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="bg-slate-50 border border-slate-200 text-slate-800 hover:border-sky-500 hover:text-sky-500 transition-colors px-6 py-3 rounded-full font-medium font-heading text-sm sm:text-base flex-shrink-0 cursor-pointer shadow-sm select-none flex items-center gap-2.5 group"
                >
                  <Icon
                    className={`text-lg sm:text-xl transition-transform duration-200 group-hover:scale-110 ${tech.color}`}
                  />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
