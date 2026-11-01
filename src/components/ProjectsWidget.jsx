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
      status: 'Production Ready',
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
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
            <FolderGit2 size={14} className="text-sky-500" />
            <span>Featured Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Projects & System Architecture
          </h2>
        </div>
        <a
          href="https://github.com/ranjithmuthu2407-ux"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 text-xs font-mono transition-all group shadow-sm"
        >
          <Github size={15} />
          <span>Explore All Repos</span>
          <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sky-500" />
        </a>
      </div>

      {/* Projects Grid: 2 Clean White Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="group rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between shadow-sm"
            >
              {/* Card Top: Badges & Links */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-sky-600 font-semibold flex items-center gap-1.5">
                        <Server size={12} />
                        {project.deployment}
                      </span>
                      <h4 className="text-xs font-mono text-slate-500 mt-0.5">
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
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Preview"
                      onClick={playClickSound}
                      className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white transition-all cursor-pointer shadow-sm"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-sky-600 mt-1.5 mb-4">
                  // {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Status */}
              <div className="relative z-10 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-sky-600 font-medium">
                    <Terminal size={13} />
                    <span>SYS::VERIFIED</span>
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-1 text-sky-600 hover:underline cursor-pointer font-medium"
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
