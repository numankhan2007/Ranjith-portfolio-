import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export const EducationWidget = () => {
  const education = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Arignar Anna Govt Arts College',
      location: 'Villupuram, Tamil Nadu',
      score: 'Undergraduate Degree',
      status: 'Current Program',
      accent: 'border-cyan-400 text-cyan-300 bg-cyan-500/10',
      icon: GraduationCap,
      description: 'Foundations in Data Structures, Algorithms, RDBMS, Operating Systems, and Modern Software Engineering.',
    },
    {
      degree: '12th Standard (Higher Secondary)',
      institution: 'Govt Higher Secondary School',
      location: 'Panamalaippettai',
      score: '68.17%',
      status: 'Completed',
      accent: 'border-blue-400 text-blue-300 bg-blue-500/10',
      icon: BookOpen,
      description: 'State Board Curriculum with focus on Mathematics and Computer Science foundations.',
    },
    {
      degree: '10th Standard (Secondary School)',
      institution: 'Govt High School',
      location: 'Siruvalai',
      score: '51.2%',
      status: 'Completed',
      accent: 'border-indigo-400 text-indigo-300 bg-indigo-500/10',
      icon: Award,
      description: 'Secondary School Leaving Certificate (SSLC) foundational studies.',
    },
  ];

  return (
    <div id="education" className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden group">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Education & Academic Track
          </h2>
        </div>
      </div>

      {/* 3 Bento Cards for Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {education.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="glass-panel rounded-2xl p-5 border border-cyan-500/15 hover:border-cyan-400/40 bg-[#071326]/60 hover:bg-[#071326]/90 transition-all duration-300 flex flex-col justify-between group/edu"
            >
              <div>
                {/* Top: Icon & Score Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-space-950 border border-cyan-500/20 text-cyan-400 group-hover/edu:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${item.accent}`}>
                    {item.score}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-lg font-bold text-white group-hover/edu:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <p className="text-sm font-medium text-slate-300 font-mono mt-1">
                  {item.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                  <MapPin size={12} className="text-cyan-400" />
                  <span>{item.location}</span>
                </div>

                {/* Detail */}
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status pill at bottom */}
              <div className="mt-4 pt-3 border-t border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
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

