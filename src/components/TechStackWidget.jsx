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
    { name: 'Python', category: 'languages', popular: true, dot: 'bg-amber-400' },
    { name: 'JavaScript', category: 'languages', popular: true, dot: 'bg-amber-400' },
    { name: 'HTML5', category: 'languages', dot: 'bg-blue-400' },
    { name: 'CSS3', category: 'languages', dot: 'bg-blue-400' },
    { name: 'PHP', category: 'languages', dot: 'bg-blue-500' },
    { name: 'SQL', category: 'languages', popular: true, dot: 'bg-blue-400' },
    
    // Frontend
    { name: 'React', category: 'frontend', popular: true, dot: 'bg-blue-400' },
    { name: 'Tailwind CSS', category: 'frontend', popular: true, dot: 'bg-blue-400' },
    { name: 'Vite', category: 'frontend', dot: 'bg-blue-500' },
    
    // Backend & DB
    { name: 'Node.js', category: 'backend', dot: 'bg-emerald-400' },
    { name: 'FastAPI', category: 'backend', popular: true, dot: 'bg-blue-400' },
    { name: 'Flask', category: 'backend', dot: 'bg-slate-400' },
    { name: 'PostgreSQL', category: 'backend', popular: true, dot: 'bg-blue-500' },
    { name: 'MySQL', category: 'backend', dot: 'bg-blue-400' },
    { name: 'Supabase', category: 'backend', popular: true, dot: 'bg-emerald-400' },

    // Cloud & Tools
    { name: 'Vercel', category: 'cloud', dot: 'bg-white' },
    { name: 'Netlify', category: 'cloud', dot: 'bg-blue-400' },
    { name: 'Render', category: 'cloud', popular: true, dot: 'bg-blue-500' },
    { name: 'Cloudflare', category: 'cloud', dot: 'bg-amber-500' },
    { name: 'Git', category: 'cloud', popular: true, dot: 'bg-red-400' },
    { name: 'VS Code', category: 'cloud', dot: 'bg-blue-500' },
  ];

  const filteredTech = activeCategory === 'all' 
    ? techStack 
    : techStack.filter((t) => t.category === activeCategory);

  return (
    <div id="skills" className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/[0.03] relative overflow-hidden group h-full flex flex-col justify-between shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none group-hover:bg-blue-600/15 transition-all" />

      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
              <Cpu size={14} className="text-amber-400" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Skills & Engineering Stack
            </h2>
          </div>

          {/* Category Filter Pills - Royal Blue Active */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#000000]/60 rounded-2xl border border-white/10">
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
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-heading font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon size={13} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Dynamic Tech Tags - Royal Blue accents & Gold highlights */}
        <div className="flex flex-wrap gap-3">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={playHoverSound}
              data-cursor-hover
              className="group/tag relative px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] flex items-center gap-2.5 cursor-pointer"
            >
              {/* Dot */}
              <span className={`w-2 h-2 rounded-full ${tech.dot} group-hover/tag:scale-125 transition-transform`} />

              <span className="font-sans text-xs sm:text-sm font-medium text-slate-200 group-hover/tag:text-white transition-colors">
                {tech.name}
              </span>

              {tech.popular && (
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/25">
                  CORE
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Subtext */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Terminal size={12} className="text-amber-400" />
          <span>Interactive Stack Inspector</span>
        </span>
        <span className="text-blue-400 font-medium">
          {filteredTech.length} Active Modules
        </span>
      </div>
    </div>
  );
};
