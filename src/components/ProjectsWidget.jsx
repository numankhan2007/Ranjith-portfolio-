import React from 'react';
import { FolderGit2, ExternalLink, Github, Database, Shield, Server, Terminal } from 'lucide-react';
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
      icon: Shield,
    },
    {
      title: 'Library Management System',
      tagline: 'Web-based inventory & user borrowing tracker',
      description:
        'Full-featured inventory management platform designed to automate book issues, return timestamping, fine calculations, and catalog indexing. Engineered with optimized SQL queries and responsive user dashboards.',
      tech: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
      deployment: 'Local & Cloud Compatible',
      status: 'Production Architecture',
      featured: false,
      githubUrl: 'https://github.com/ranjithmuthu2407-ux',
      demoUrl: 'https://github.com/ranjithmuthu2407-ux',
      icon: Database,
    },
  ];

  return (
    <div id="projects" className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
            <FolderGit2 size={14} className="text-amber-400" />
            <span>Featured Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Projects & System Architecture
          </h2>
        </div>
        <a
          href="https://github.com/ranjithmuthu2407-ux"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 text-slate-200 text-xs font-mono transition-all group shadow-lg"
        >
          <Github size={15} />
          <span>Explore All Repos</span>
          <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
        </a>
      </div>

      {/* Projects Grid: 2 Clean Dark Glass Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="group glass-card rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/[0.03] hover:border-amber-400/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-amber-400/10 transition-all duration-500" />

              {/* Card Top: Badges & Links */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                        <Server size={12} />
                        {project.deployment}
                      </span>
                      <h4 className="text-xs font-mono text-slate-400 mt-0.5">
                        {project.status}
                      </h4>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source on GitHub"
                      onClick={playClickSound}
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Preview"
                      onClick={playClickSound}
                      className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-blue-400 mt-1.5 mb-4">
                  // {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Terminal Status */}
              <div className="relative z-10 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-blue-500/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Terminal size={13} />
                    <span>SYS::VERIFIED</span>
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-1 text-amber-400 hover:underline cursor-pointer font-medium"
                  >
                    <span>Inspect Code</span>
                    <ExternalLink size={11} />
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
