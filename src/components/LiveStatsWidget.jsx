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
      accentBorder: 'group-hover:border-amber-400/50',
      badgeClass: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
      iconColor: 'text-amber-400',
    },
    {
      label: 'Open Source',
      value: 'Tamil OCR',
      highlight: 'VGLUG Contributor',
      sub: 'Python Preprocessing Pipelines',
      icon: GitPullRequest,
      accentBorder: 'group-hover:border-blue-500/50',
      badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      label: 'Specialized Badges',
      value: '7 Certs',
      highlight: 'Nasscom, IBM, Kaggle',
      sub: 'Generative AI & Cloud',
      icon: ShieldCheck,
      accentBorder: 'group-hover:border-blue-500/50',
      badgeClass: 'text-blue-300 border-blue-500/30 bg-blue-500/10',
      iconColor: 'text-blue-400',
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
            className={`glass-card rounded-2xl p-6 sm:p-7 border border-white/10 bg-white/[0.03] relative overflow-hidden group ${stat.accentBorder} transition-all duration-300 shadow-xl`}
          >
            {/* Top ambient glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-all pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {stat.label}
              </span>
              <div className={`p-2.5 rounded-xl bg-white/[0.05] border border-white/10 ${stat.iconColor} group-hover:scale-110 transition-all`}>
                <Icon size={18} />
              </div>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              {stat.value}
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${stat.badgeClass}`}>
                {stat.highlight}
              </span>
            </div>

            <p className="mt-2.5 text-xs text-slate-400 line-clamp-1 font-light">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};
