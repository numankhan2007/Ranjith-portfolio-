import React from 'react';
import { Briefcase, GitBranch, Award, Terminal, Calendar, ArrowUpRight } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export const ExperienceWidget = () => {
  const experiences = [
    {
      role: 'Open Source Developer',
      organization: 'VGLUG Foundation (OpenTamilOCR)',
      duration: 'Aug 2026 – Present',
      isActive: true,
      description:
        'Building Python preprocessing utilities for extracting text from Tamil-language documents, optimizing image binarization and OCR bounding pipelines.',
      skills: ['Python', 'OCR Pipelines', 'Image Preprocessing', 'Git / Open Source'],
      badge: 'Active Contributor',
      badgeColor: 'border-cyan-400/40 text-cyan-300 bg-cyan-500/10 shadow-[0_0_10px_rgba(0,240,255,0.2)]',
    },
    {
      role: 'Python Programming Intern',
      organization: 'Datheon',
      duration: 'Oct 2026',
      isActive: false,
      description:
        'Scored 9.1/10 (Grade A+ Distinction) for project architecture and code hygiene. Engineered modular Python systems adhering to strict linting and design principles.',
      skills: ['Python', 'System Architecture', 'Clean Code', 'Modular OOP'],
      badge: '9.1 / 10 • Grade A+ Distinction',
      badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-500/10 shadow-[0_0_10px_rgba(245,158,11,0.2)]',
    },
    {
      role: 'Virtual Intern',
      organization: 'CodSoft',
      duration: 'Aug 2026 – Sep 2026',
      isActive: false,
      description:
        'Completed a 4-week core programming sprint delivering algorithmic solutions, data structures implementations, and production-ready problem-solving tasks.',
      skills: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
      badge: 'Sprint Completion',
      badgeColor: 'border-blue-400/40 text-blue-300 bg-blue-500/10 shadow-[0_0_10px_rgba(0,112,243,0.2)]',
    },
  ];

  return (
    <div id="experience" className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden group">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-all" />

      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Briefcase size={14} />
            <span>Trajectory & Engineering Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Experience & Cyber-Timeline
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-xl border border-cyan-500/20">
          <GitBranch size={13} />
          <span>PRODUCTION LOGS</span>
        </div>
      </div>

      {/* Cyber Timeline Track */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-purple-600/30">
        {experiences.map((exp, index) => (
          <div
            key={index}
            onMouseEnter={playHoverSound}
            className="relative group/node"
          >
            {/* Glowing Timeline Node */}
            <div
              className={`absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover/node:scale-125 ${
                exp.isActive
                  ? 'bg-cyan-400 border-white shadow-[0_0_15px_#00F0FF]'
                  : 'bg-[#050B14] border-cyan-400/80 group-hover/node:bg-cyan-400'
              }`}
            >
              {exp.isActive && (
                <span className="absolute -inset-1 rounded-full bg-cyan-400/50 animate-ping" />
              )}
            </div>

            {/* Content Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-cyan-500/15 hover:border-cyan-400/40 bg-[#071326]/60 hover:bg-[#071326]/90 transition-all duration-300">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover/node:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-space-950/70 px-2.5 py-1 rounded-lg border border-white/5">
                    <Calendar size={12} className="text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                {exp.description}
              </p>

              {/* Skill Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono text-cyan-300/80 bg-space-950/60 px-2 py-0.5 rounded-md border border-cyan-500/15"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

