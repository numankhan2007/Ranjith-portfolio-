import React from 'react';
import { Award, GitPullRequest, ShieldCheck } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export const LiveStatsWidget = () => {
  const stats = [
    {
      label: 'Internship Grade',
      value: '9.1 / 10',
      highlight: 'Grade A+ Distinction',
      sub: 'Datheon Python Programming',
      icon: Award,
      badgeClass: 'text-sky-700 border-sky-200 bg-sky-50',
      iconColor: 'text-sky-600',
    },
    {
      label: 'Open Source',
      value: 'Tamil OCR',
      highlight: 'VGLUG Contributor',
      sub: 'Python Preprocessing Pipelines',
      icon: GitPullRequest,
      badgeClass: 'text-emerald-700 border-emerald-200 bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      label: 'Specialized Badges',
      value: '7 Certs',
      highlight: 'Nasscom, IBM, Kaggle',
      sub: 'Generative AI & Cloud',
      icon: ShieldCheck,
      badgeClass: 'text-indigo-700 border-indigo-200 bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            onMouseEnter={playHoverSound}
            className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:border-sky-500 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                {stat.label}
              </span>
              <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-200 ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                <Icon size={18} />
              </div>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              {stat.value}
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${stat.badgeClass}`}>
                {stat.highlight}
              </span>
            </div>

            <p className="mt-2.5 text-xs text-slate-500 line-clamp-1">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};
