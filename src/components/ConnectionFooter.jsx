import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ExternalLink, ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

// Modern X (formerly Twitter) Icon SVG component
const XIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ConnectionFooter = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const email = 'ranjithmuthu2407@gmail.com';

  const copyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: 'github.com/ranjithmuthu2407-ux',
      url: 'https://github.com/ranjithmuthu2407-ux',
      icon: Github,
      accent: 'hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]',
      iconColor: 'text-cyan-400 group-hover/link:text-cyan-300',
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/ranjith-m-cs',
      url: 'https://linkedin.com/in/ranjith-m-cs',
      icon: Linkedin,
      accent: 'hover:border-blue-400 hover:shadow-[0_0_20px_rgba(0,112,243,0.35)]',
      iconColor: 'text-blue-400 group-hover/link:text-blue-300',
    },
    {
      name: 'Twitter / X',
      handle: 'x.com/RANJITHMcs',
      url: 'https://x.com/RANJITHMcs',
      icon: XIcon,
      accent: 'hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]',
      iconColor: 'text-sky-400 group-hover/link:text-sky-300',
    },
    {
      name: 'Instagram',
      handle: 'instagram.com (Ranjith M)',
      url: 'https://share.google/2LVUWRlKmPiylkczf',
      icon: Instagram,
      accent: 'hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
      iconColor: 'text-pink-400 group-hover/link:text-pink-300',
    },
  ];

  return (
    <footer id="contact" className="py-12 border-t border-cyan-500/15 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Connection Node Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/25 relative overflow-hidden bg-gradient-to-br from-[#071326] via-[#050B14] to-[#0A172B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Copy Action */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <Terminal size={14} />
                <span>COMMUNICATION_LINK :: ONLINE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl">
                Ready to contribute to mission-critical codebases, full-stack architectures, or AI open-source pipelines. Reach out directly through the node below.
              </p>

              {/* Email One-Click Copy Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-space-950/90 border border-cyan-500/20 font-mono text-xs sm:text-sm text-cyan-300 flex-1 overflow-hidden">
                  <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="truncate select-all">{email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    onMouseEnter={playHoverSound}
                    className="px-4 py-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:border-cyan-400 transition-all cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold text-xs font-mono tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                  >
                    <span>Send Mail</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Social Nodes in 2x2 Bento Grid */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Direct Channels & Social Nodes
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                      className={`block p-4 rounded-2xl glass-panel border border-cyan-500/15 ${social.accent} transition-all duration-300 group/link`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2.5 rounded-xl bg-space-950 border border-cyan-500/20 ${social.iconColor} group-hover/link:scale-110 transition-transform flex-shrink-0`}>
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-white group-hover/link:text-cyan-300 transition-colors truncate">
                              {social.name}
                            </h4>
                            <span className="text-xs font-mono text-slate-400 block truncate">
                              {social.handle}
                            </span>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-slate-500 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-cyan-500/10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 RANJITH M. ALL SYSTEMS OPERATIONAL.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80 hidden sm:inline">
              Bento Architecture // Aurora 3D
            </span>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-cyan-500/20 hover:border-cyan-400 text-cyan-300 transition-all cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
