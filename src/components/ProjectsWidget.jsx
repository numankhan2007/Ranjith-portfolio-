import React from 'react';
import { FolderGit2, ExternalLink, Github, Database, Shield, Server, Terminal, Sparkles, Layers } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export const ProjectsWidget = () => {
  const projects = [
    {
      title: 'Student Record Maintenance System',
      tagline: 'Platform with secure authentication & dynamic data management',
      description:
        'A comprehensive academic record infrastructure engineered with role-based access control, encrypted sessions, and high-performance querying over Supabase PostgreSQL. Features automated grade tracking and student auditing.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Supabase PostgreSQL', 'Render'],
      deployment: 'Render Cloud Active',
      status: 'Live Deployment',
      featured: true,
      githubUrl: 'https://github.com/ranjithmuthu2407-ux',
      demoUrl: 'https://github.com/ranjithmuthu2407-ux',
      gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
      borderColor: 'group-hover:border-cyan-400',
      icon: Shield,
    },
    {
      title: 'Library Management System',
      tagline: 'Web-based inventory & user borrowing tracker',
      description:
        'Full-featured inventory management platform designed to automate book issues, return timestamping, fine calculations, and catalog indexing. Engineered with optimized SQL queries and responsive user dashboards.',
      tech: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
      deployment: 'Local & Cloud Compatible',
      status: 'Engineered',
      featured: false,
      githubUrl: 'https://github.com/ranjithmuthu2407-ux',
      demoUrl: 'https://github.com/ranjithmuthu2407-ux',
      gradient: 'from-blue-600/20 via-purple-600/10 to-transparent',
      borderColor: 'group-hover:border-blue-400',
      icon: Database,
    },
  ];

  return (
    <div id="projects" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <FolderGit2 size={14} />
            <span>Featured Deployments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Projects & System Architecture
          </h2>
        </div>
        <a
          href="https://github.com/ranjithmuthu2407-ux"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-space-850 border border-cyan-500/20 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-all group"
        >
          <Github size={14} />
          <span>Explore All Repos</span>
          <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Projects Grid: 2 High Impact Bento Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className={`group glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 ${project.borderColor} transition-all duration-500 relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Dynamic Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top ambient glow */}
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Card Top: Badges & Links */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-2xl bg-space-950/80 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                        <Server size={11} />
                        {project.deployment}
                      </span>
                      <h4 className="text-xs font-mono text-slate-400">
                        {project.status}
                      </h4>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source on GitHub"
                      onClick={playClickSound}
                      className="p-2 rounded-xl bg-space-900/80 hover:bg-cyan-500/20 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Preview"
                      onClick={playClickSound}
                      className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 hover:text-white transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                  // {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Terminal Status */}
              <div className="relative z-10 pt-4 border-t border-cyan-500/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-slate-300 bg-space-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal size={12} />
                    <span>SYS::VERIFIED</span>
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-1 text-cyan-300 hover:underline cursor-pointer"
                  >
                    <span>Inspect Code</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

