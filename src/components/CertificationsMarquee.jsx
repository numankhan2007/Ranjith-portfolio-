import React, { useState } from 'react';
import { Award, ShieldCheck, Sparkles, Brain, Cpu, Code2, Globe, MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export const CertificationsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: 'Google Cloud Generative AI Foundations',
      issuer: 'SmartBridge',
      category: 'Cloud & GenAI',
      icon: Cpu,
      accent: 'from-blue-500 to-cyan-400',
      badge: 'Google Cloud Verified',
      id: 'SB-GCP-AI-01',
    },
    {
      title: 'Prompt Engineering and ChatGPT',
      issuer: 'IT-ITeS SSC Nasscom',
      category: 'Generative AI & LLMs',
      icon: Brain,
      accent: 'from-cyan-400 to-emerald-400',
      badge: 'Nasscom Certified',
      id: 'NASSCOM-PE-02',
    },
    {
      title: 'Python Programming',
      issuer: 'Kaggle',
      category: 'Core Data & Logic',
      icon: Code2,
      accent: 'from-sky-400 to-blue-600',
      badge: 'Kaggle Accredited',
      id: 'KAGGLE-PY-03',
    },
    {
      title: 'Getting Started with Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      category: 'Artificial Intelligence',
      icon: ShieldCheck,
      accent: 'from-blue-600 to-indigo-500',
      badge: 'IBM SkillsBuild',
      id: 'IBM-AI-04',
    },
    {
      title: 'Python with Generative AI',
      issuer: 'VGLUG Foundation',
      category: 'AI & Open Source',
      icon: Award,
      accent: 'from-teal-400 to-cyan-500',
      badge: 'VGLUG Foundation',
      id: 'VGLUG-PY-05',
    },
    {
      title: 'Web & Front End Development',
      issuer: 'Naan Mudhalvan',
      category: 'Full-Stack Frontend',
      icon: Globe,
      accent: 'from-purple-500 to-pink-500',
      badge: 'TN Govt Naan Mudhalvan',
      id: 'NM-WEB-06',
    },
    {
      title: 'English Language Communication',
      issuer: 'STEP',
      category: 'Professional Fluency',
      icon: MessageSquare,
      accent: 'from-amber-400 to-orange-500',
      badge: 'STEP Verified',
      id: 'STEP-COMM-07',
    },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...certificates, ...certificates, ...certificates];

  return (
    <div id="certifications" className="py-8 space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Sparkles size={14} className="animate-spin text-cyan-400" />
            <span>Continuous Verification Stream</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Dynamic Certifications & Accreditations
          </h2>
        </div>

        {/* Marquee status controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-850 border border-cyan-500/20 text-xs font-mono text-slate-300">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-cyan-400 animate-pulse'}`} />
            <span>{isPaused ? 'STREAM PAUSED' : '3D INFINITE ORBIT'}</span>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            [Hover to Inspect]
          </span>
        </div>
      </div>

      {/* 3D Perspective Marquee Wrapper */}
      <div
        className="relative w-full py-6"
        style={{ perspective: '1100px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050B14] via-[#050B14]/80 to-transparent z-20 pointer-events-none" />

        {/* 3D Tilted Track */}
        <div
          className="marquee-3d-track flex w-max transition-transform duration-500"
          style={{
            transform: 'rotateX(6deg) rotateY(-2deg) rotateZ(-0.5deg)',
          }}
        >
          <div
            className={`flex gap-5 sm:gap-6 ${
              isPaused ? '' : 'animate-marquee-left'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '40s',
            }}
          >
            {marqueeItems.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.id}-${index}`}
                  onMouseEnter={playHoverSound}
                  onClick={() => {
                    playClickSound();
                    setSelectedCert(cert);
                  }}
                  className="w-[300px] sm:w-[340px] flex-shrink-0 glass-card rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all duration-300 cursor-pointer group relative overflow-hidden select-none bg-gradient-to-br from-[#07152b]/90 to-[#050B14]/95"
                >
                  {/* Subtle top glowing line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.accent} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Top Bar: Icon + Category */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-space-850 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      {cert.category}
                    </span>
                  </div>

                  {/* Cert Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 h-12">
                    {cert.title}
                  </h3>

                  {/* Issuer & Status */}
                  <div className="mt-3 pt-3 border-t border-cyan-500/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        ISSUING BODY
                      </span>
                      <span className="text-xs font-semibold text-slate-200 font-mono">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                      <CheckCircle2 size={13} className="text-cyan-400" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Background Watermark ID */}
                  <div className="absolute bottom-1 right-2 text-[9px] font-mono text-white/5 pointer-events-none">
                    {cert.id}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Certificate Lightbox Modal (Click to Inspect) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-card max-w-md w-full rounded-3xl p-6 sm:p-8 border border-cyan-400/50 bg-[#071326] shadow-[0_0_50px_rgba(0,240,255,0.4)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>OFFICIALLY VERIFIED CREDENTIAL</span>
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded-lg bg-space-850 hover:bg-space-800"
              >
                ✕ ESC
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-display">
              {selectedCert.title}
            </h3>
            
            <p className="text-sm font-mono text-cyan-300 mb-4">
              Issued by: <span className="font-bold">{selectedCert.issuer}</span>
            </p>

            <div className="p-4 rounded-2xl bg-space-950/80 border border-cyan-500/20 space-y-2 mb-6">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Credential Track:</span>
                <span className="text-white">{selectedCert.category}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-semibold">Active & Validated</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Verification ID:</span>
                <span className="text-cyan-400">{selectedCert.id}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold text-sm font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
            >
              Close Verification Inspector
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
