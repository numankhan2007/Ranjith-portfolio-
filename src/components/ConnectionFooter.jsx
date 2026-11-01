import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ArrowUp, Terminal, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { playClickSound, playHoverSound } from '../utils/sound';

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

  // Exact 5 social channels with official logos and links
  const socialChannels = [
    {
      name: 'Email',
      handle: 'ranjithmuthu2407@gmail.com',
      url: 'mailto:ranjithmuthu2407@gmail.com',
      icon: FaEnvelope,
      badge: 'Direct Mail',
      color: 'hover:text-sky-500',
    },
    {
      name: 'GitHub',
      handle: 'github.com/ranjithmuthu2407-ux',
      url: 'https://github.com/ranjithmuthu2407-ux',
      icon: FaGithub,
      badge: 'Source Repos',
      color: 'hover:text-sky-500',
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/ranjith-m-cs',
      url: 'https://www.linkedin.com/in/ranjith-m-cs',
      icon: FaLinkedin,
      badge: 'Professional Network',
      color: 'hover:text-sky-500',
    },
    {
      name: 'Instagram',
      handle: 'instagram.com (Ranjith M)',
      url: 'https://share.google/2LVUWRlKmPiylkczf',
      icon: FaInstagram,
      badge: 'Social Profile',
      color: 'hover:text-sky-500',
    },
    {
      name: 'Twitter / X',
      handle: 'x.com/RANJITHMcs',
      url: 'https://x.com/RANJITHMcs',
      icon: FaXTwitter,
      badge: 'Developer Updates',
      color: 'hover:text-sky-500',
    },
  ];

  return (
    <footer id="contact" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Connection Node Card */}
        <div className="rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200 bg-slate-50/50 shadow-sm">
          <div className="space-y-10">
            {/* Top Row: Heading & Bio */}
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest font-semibold">
                <Terminal size={14} className="text-sky-500" />
                <span>CONNECTION NODE // DIRECT ACCESS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                Let's Build Something <span className="text-sky-500">Extraordinary.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Reach out for full-stack opportunities, engineering collaborations, or open-source initiatives. All channels are actively monitored.
              </p>
            </div>

            {/* Quick Email Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl">
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 flex-1 overflow-hidden shadow-sm">
                <Mail size={16} className="text-sky-500 flex-shrink-0" />
                <span className="truncate select-all">{email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={copyEmail}
                  onMouseEnter={playHoverSound}
                  className="px-4 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:border-sky-500 hover:text-sky-600 transition-all cursor-pointer shadow-sm"
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
                  <Send size={14} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Prominent 5 Social Links Grid */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                  Official Channels & Verified Profiles
                </span>
                <span className="text-xs text-sky-600 font-mono hidden sm:inline">
                  [Click to open direct link]
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.name}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                      className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Brand Icon with hover:scale-110 and hover:text-sky-500 */}
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 group-hover:scale-110 group-hover:text-sky-500 group-hover:border-sky-300 transition-all duration-200 flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors">
                              {channel.name}
                            </h4>
                            <span className="text-[10px] font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 hidden md:inline">
                              {channel.badge}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-500 block truncate group-hover:text-slate-700 mt-0.5">
                            {channel.handle}
                          </span>
                        </div>
                      </div>

                      <ExternalLink
                        size={16}
                        className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-3"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Icon Buttons, Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 text-xs font-mono text-slate-500">
          <div>
            <span>© 2026 RANJiTH_ M. ALL SYSTEMS OPERATIONAL.</span>
          </div>

          {/* Direct Icon Button Row with hover:scale-110 and hover:text-sky-500 */}
          <div className="flex items-center gap-3">
            {socialChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={`footer-icon-${channel.name}`}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={channel.name}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-sky-500 hover:border-sky-400 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

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
    </footer>
  );
};
