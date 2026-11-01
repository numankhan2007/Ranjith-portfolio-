import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export const EducationWidget = () => {
  const education = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Arignar Anna Govt Arts College',
      location: 'Villupuram, Tamil Nadu',
      score: 'Undergraduate Degree',
      status: 'Current Program',
      accent: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      icon: GraduationCap,
      description: 'Foundations in Data Structures, Algorithms, RDBMS, Operating Systems, and Modern Software Engineering.',
    },
    {
      degree: '12th Standard (Higher Secondary)',
      institution: 'Govt Higher Secondary School',
      location: 'Panamalaippettai',
      score: '68.17%',
      status: 'Completed',
      accent: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
      icon: BookOpen,
      description: 'State Board Curriculum with focus on Mathematics and Computer Science foundations.',
    },
    {
      degree: '10th Standard (Secondary School)',
      institution: 'Govt High School',
      location: 'Siruvalai',
      score: '51.2%',
      status: 'Completed',
      accent: 'border-white/20 text-slate-300 bg-white/[0.05]',
      icon: Award,
      description: 'Secondary School Leaving Certificate (SSLC) foundational studies.',
    },
  ];

  return (
    <div id="education" className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/[0.03] relative overflow-hidden group shadow-2xl">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none group-hover:bg-amber-400/10 transition-all" />

      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
            <GraduationCap size={14} className="text-amber-400" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Education & Academic Track
          </h2>
        </div>
      </div>

      {/* 3 Clean Dark Glass Cards for Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/35 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group/edu shadow-lg"
            >
              <div>
                {/* Top: Icon & Score Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-amber-400 group-hover/edu:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border ${item.accent}`}>
                    {item.score}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover/edu:text-amber-400 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <p className="text-sm font-medium text-slate-300 font-mono mt-1.5">
                  {item.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                  <MapPin size={12} className="text-blue-400" />
                  <span>{item.location}</span>
                </div>

                {/* Detail */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Status pill at bottom */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>STATUS</span>
                <span className="font-semibold text-white">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
