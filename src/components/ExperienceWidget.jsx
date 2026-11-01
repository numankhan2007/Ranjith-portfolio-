import React from 'react';
import { Briefcase, GitBranch, Calendar } from 'lucide-react';
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
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10 shadow-[0_0_10px_rgba(37,99,235,0.2)]',
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
      badgeColor: 'border-amber-400/30 text-amber-300 bg-amber-400/10 shadow-[0_0_10px_rgba(251,191,36,0.2)]',
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
      badgeColor: 'border-white/15 text-slate-300 bg-white/[0.05]',
    },
  ];

  return (
    <div id="experience" className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/[0.03] relative overflow-hidden group h-full flex flex-col justify-between shadow-2xl">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none group-hover:bg-amber-500/10 transition-all" />

      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
              <Briefcase size={14} className="text-amber-400" />
              <span>Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Experience & Cyber-Timeline
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-xl border border-white/10">
            <GitBranch size={13} className="text-blue-400" />
            <span>PRODUCTION LOGS</span>
          </div>
        </div>

        {/* Cyber Timeline Track with Royal Blue & Gold Node */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-blue-600 before:to-amber-500/30">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={playHoverSound}
              className="relative group/node"
            >
              {/* Timeline Node */}
              <div
                className={`absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover/node:scale-125 ${
                  exp.isActive
                    ? 'bg-blue-500 border-white shadow-[0_0_15px_#2563EB]'
                    : 'bg-[#0A0A0A] border-slate-600 group-hover/node:bg-amber-400 group-hover/node:border-amber-300'
                }`}
              >
                {exp.isActive && (
                  <span className="absolute -inset-1 rounded-full bg-blue-500/50 animate-ping" />
                )}
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover/node:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-amber-400 font-mono mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#000000]/60 px-2.5 py-1 rounded-lg border border-white/10">
                      <Calendar size={12} className="text-blue-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 font-light">
                  {exp.description}
                </p>

                {/* Skill Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10"
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
    </div>
  );
};
