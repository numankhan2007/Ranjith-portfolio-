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
      accent: 'border-sky-200 text-sky-700 bg-sky-50',
      icon: GraduationCap,
      description: 'Foundations in Data Structures, Algorithms, RDBMS, Operating Systems, and Modern Software Engineering.',
    },
    {
      degree: '12th Standard (Higher Secondary)',
      institution: 'Govt Higher Secondary School',
      location: 'Panamalaippettai',
      score: '68.17%',
      status: 'Completed',
      accent: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      icon: BookOpen,
      description: 'State Board Curriculum with focus on Mathematics and Computer Science foundations.',
    },
    {
      degree: '10th Standard (Secondary School)',
      institution: 'Govt High School',
      location: 'Siruvalai',
      score: '51.2%',
      status: 'Completed',
      accent: 'border-slate-200 text-slate-700 bg-slate-50',
      icon: Award,
      description: 'Secondary School Leaving Certificate (SSLC) foundational studies.',
    },
  ];

  return (
    <div id="education" className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
            <GraduationCap size={14} className="text-sky-500" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Education & Academic Track
          </h2>
        </div>
      </div>

      {/* 3 Clean White Cards for Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="rounded-2xl p-6 sm:p-7 bg-slate-50/50 border border-slate-200 hover:border-sky-500 hover:bg-white transition-all duration-200 flex flex-col justify-between group/edu shadow-sm"
            >
              <div>
                {/* Top: Icon & Score Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-sky-600 group-hover/edu:scale-110 transition-transform shadow-sm">
                    <Icon size={20} />
                  </div>
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-lg border ${item.accent}`}>
                    {item.score}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover/edu:text-sky-600 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <p className="text-sm font-medium text-slate-700 font-mono mt-1.5">
                  {item.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-mono">
                  <MapPin size={12} className="text-sky-500" />
                  <span>{item.location}</span>
                </div>

                {/* Detail */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status pill at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>STATUS</span>
                <span className="font-semibold text-slate-900">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
