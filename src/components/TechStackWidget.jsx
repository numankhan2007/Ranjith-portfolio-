import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Code2, Database, Cloud, Cpu } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export const TechStackWidget = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Modules', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Cpu },
    { id: 'backend', label: 'Backend & DB', icon: Database },
    { id: 'cloud', label: 'Cloud & Tools', icon: Cloud },
  ];

  const techStack = [
    // Languages
    { name: 'Python', category: 'languages', color: 'from-blue-500 to-yellow-500', popular: true },
    { name: 'JavaScript', category: 'languages', color: 'from-yellow-400 to-amber-500', popular: true },
    { name: 'HTML5', category: 'languages', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', category: 'languages', color: 'from-blue-400 to-cyan-500' },
    { name: 'PHP', category: 'languages', color: 'from-indigo-400 to-purple-500' },
    { name: 'SQL', category: 'languages', color: 'from-sky-400 to-blue-600', popular: true },
    
    // Frontend
    { name: 'React', category: 'frontend', color: 'from-cyan-400 to-blue-500', popular: true },
    { name: 'Tailwind CSS', category: 'frontend', color: 'from-teal-400 to-cyan-500', popular: true },
    { name: 'Vite', category: 'frontend', color: 'from-purple-500 to-indigo-500' },
    
    // Backend & DB
    { name: 'Node.js', category: 'backend', color: 'from-green-500 to-emerald-600' },
    { name: 'FastAPI', category: 'backend', color: 'from-teal-400 to-cyan-600', popular: true },
    { name: 'Flask', category: 'backend', color: 'from-slate-400 to-slate-200' },
    { name: 'PostgreSQL', category: 'backend', color: 'from-blue-400 to-indigo-600', popular: true },
    { name: 'MySQL', category: 'backend', color: 'from-amber-500 to-orange-600' },
    { name: 'Supabase', category: 'backend', color: 'from-emerald-400 to-teal-500', popular: true },

    // Cloud & Tools
    { name: 'Vercel', category: 'cloud', color: 'from-slate-100 to-slate-400' },
    { name: 'Netlify', category: 'cloud', color: 'from-cyan-400 to-teal-500' },
    { name: 'Render', category: 'cloud', color: 'from-cyan-500 to-blue-600', popular: true },
    { name: 'Cloudflare', category: 'cloud', color: 'from-orange-400 to-amber-600' },
    { name: 'Git', category: 'cloud', color: 'from-red-500 to-orange-500', popular: true },
    { name: 'VS Code', category: 'cloud', color: 'from-blue-500 to-sky-400' },
  ];

  const filteredTech = activeCategory === 'all' 
    ? techStack 
    : techStack.filter((t) => t.category === activeCategory);

  return (
    <div id="skills" className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cyan-500/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Cpu size={14} />
            <span>Tech Stack Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Core Technologies & Stack
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-space-950/80 rounded-2xl border border-cyan-500/15">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={playHoverSound}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-space-800/60'
                }`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Dynamic Tech Tags */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {filteredTech.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={playHoverSound}
            data-cursor-hover
            className="group/tag relative px-4 py-2.5 rounded-xl bg-space-850/80 hover:bg-space-800/90 border border-cyan-500/15 hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center gap-2 cursor-pointer"
          >
            {/* Category indicator dot */}
            <span
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} shadow-[0_0_8px_rgba(0,240,255,0.5)] group-hover/tag:scale-125 transition-transform`}
            />

            <span className="font-mono text-xs sm:text-sm font-medium text-slate-200 group-hover/tag:text-cyan-300 transition-colors">
              {tech.name}
            </span>

            {tech.popular && (
              <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/20">
                PRO
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer Subtext */}
      <div className="mt-6 pt-4 border-t border-cyan-500/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Terminal size={12} className="text-cyan-400" />
          <span>Interactive Stack Visualizer</span>
        </span>
        <span className="text-cyan-400/70">
          Showing {filteredTech.length} of {techStack.length} skills
        </span>
      </div>
    </div>
  );
};

