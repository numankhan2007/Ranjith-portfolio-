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
      badgeColor: 'border-sky-200 text-sky-700 bg-sky-50',
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
      badgeColor: 'border-amber-200 text-amber-700 bg-amber-50',
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
      badgeColor: 'border-slate-200 text-slate-700 bg-slate-50',
    },
  ];

  return (
    <div id="experience" className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
              <Briefcase size={14} className="text-sky-500" />
              <span>Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Experience & Cyber-Timeline
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <GitBranch size={13} className="text-sky-500" />
            <span>PRODUCTION LOGS</span>
          </div>
        </div>

        {/* Timeline Track with Sky Blue Theme */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-sky-400 before:via-sky-500 before:to-sky-200">
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
                    ? 'bg-sky-500 border-white shadow-sm'
                    : 'bg-white border-slate-300 group-hover/node:bg-sky-500 group-hover/node:border-sky-200'
                }`}
              >
                {exp.isActive && (
                  <span className="absolute -inset-1 rounded-full bg-sky-400/40 animate-ping" />
                )}
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl border border-slate-200 hover:border-sky-400 bg-slate-50/50 hover:bg-white transition-all duration-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover/node:text-sky-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-sky-600 font-mono mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      <Calendar size={12} className="text-sky-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  {exp.description}
                </p>

                {/* Skill Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200"
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
