import React from 'react';
import { Award, GitPullRequest, ShieldCheck, Zap } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export const LiveStatsWidget = () => {
  const stats = [
    {
      label: 'Internship Grade',
      value: '9.1 / 10',
      highlight: 'Grade A+ Distinction',
      sub: 'Datheon Python Programming',
      icon: Award,
      color: 'from-amber-400 to-yellow-500',
      badgeColor: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
    },
    {
      label: 'Open Source',
      value: 'Tamil OCR',
      highlight: 'VGLUG Contributor',
      sub: 'Python Preprocessing Utilities',
      icon: GitPullRequest,
      color: 'from-cyan-400 to-blue-500',
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
    },
    {
      label: 'Specialized Badges',
      value: '7 Certs',
      highlight: 'Nasscom, IBM, Kaggle',
      sub: 'GenAI, Python & Web',
      icon: ShieldCheck,
      color: 'from-blue-400 to-indigo-500',
      badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            onMouseEnter={playHoverSound}
            className="glass-card rounded-2xl p-5 border border-cyan-500/15 relative overflow-hidden group hover:border-cyan-400/40 transition-all"
          >
            {/* Top ambient glow on hover */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
              <div className="p-2 rounded-xl bg-space-850 border border-white/5 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/30 transition-all">
                <Icon size={16} />
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              {stat.value}
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-mono border ${stat.badgeColor}`}>
                {stat.highlight}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-400 line-clamp-1">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};

