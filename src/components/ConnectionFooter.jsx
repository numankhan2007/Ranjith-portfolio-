import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ExternalLink, ArrowUp, Terminal } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

// Modern X (Twitter) Icon
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
      accent: 'hover:border-sky-500 hover:text-sky-600',
      iconColor: 'text-slate-800',
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/ranjith-m-cs',
      url: 'https://linkedin.com/in/ranjith-m-cs',
      icon: Linkedin,
      accent: 'hover:border-sky-500 hover:text-sky-600',
      iconColor: 'text-sky-600',
    },
    {
      name: 'Twitter / X',
      handle: 'x.com/RANJITHMcs',
      url: 'https://x.com/RANJITHMcs',
      icon: XIcon,
      accent: 'hover:border-sky-500 hover:text-sky-600',
      iconColor: 'text-slate-800',
    },
    {
      name: 'Instagram',
      handle: 'instagram.com (Ranjith M)',
      url: 'https://share.google/2LVUWRlKmPiylkczf',
      icon: Instagram,
      accent: 'hover:border-pink-500 hover:text-pink-600',
      iconColor: 'text-pink-600',
    },
  ];

  return (
    <footer id="contact" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Connection Node Card */}
        <div className="rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200 bg-slate-50/50 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Copy Action */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest font-semibold">
                <Terminal size={14} className="text-sky-500" />
                <span>COMMUNICATION_LINK :: ONLINE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                Let's Build Something <span className="text-sky-500">Extraordinary.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                Ready to contribute to mission-critical codebases, full-stack architectures, or AI open-source pipelines. Reach out directly through the node below.
              </p>

              {/* Email One-Click Copy Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 flex-1 overflow-hidden shadow-sm">
                  <Mail size={16} className="text-sky-500 flex-shrink-0" />
                  <span className="truncate select-all">{email}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={copyEmail}
                    onMouseEnter={playHoverSound}
                    className="px-4 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:border-sky-500 transition-all cursor-pointer shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
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
                    className="px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs font-heading tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Send Mail</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Social Nodes in 2x2 Bento Grid */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1 font-semibold">
                Direct Channels & Social Nodes
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`block p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 ${social.accent} transition-all duration-200 group/link shadow-sm hover:shadow-md`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-200 ${social.iconColor} group-hover/link:scale-110 transition-transform flex-shrink-0`}>
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold font-heading text-slate-900 group-hover/link:text-sky-600 transition-colors truncate">
                              {social.name}
                            </h4>
                            <span className="text-xs font-mono text-slate-500 block truncate">
                              {social.handle}
                            </span>
                          </div>
                        </div>
                        <ExternalLink size={15} className="text-slate-400 group-hover/link:text-sky-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 RANJiTH_ M. ALL SYSTEMS OPERATIONAL.</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-sky-600 font-medium hidden sm:inline">
              Minimalist Light Mode Edition // 2026
            </span>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-sky-500 text-slate-700 transition-all cursor-pointer shadow-sm"
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
