import React, { useState } from 'react';
import { Award, ShieldCheck, Sparkles, Brain, Cpu, Code2, Globe, MessageSquare, CheckCircle2 } from 'lucide-react';
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
      badge: 'Google Cloud Verified',
      id: 'SB-GCP-AI-01',
    },
    {
      title: 'Prompt Engineering and ChatGPT',
      issuer: 'IT-ITeS SSC Nasscom',
      category: 'Generative AI & LLMs',
      icon: Brain,
      badge: 'Nasscom Certified',
      id: 'NASSCOM-PE-02',
    },
    {
      title: 'Python Programming',
      issuer: 'Kaggle',
      category: 'Core Data & Logic',
      icon: Code2,
      badge: 'Kaggle Accredited',
      id: 'KAGGLE-PY-03',
    },
    {
      title: 'Getting Started with Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      category: 'Artificial Intelligence',
      icon: ShieldCheck,
      badge: 'IBM SkillsBuild',
      id: 'IBM-AI-04',
    },
    {
      title: 'Python with Generative AI',
      issuer: 'VGLUG Foundation',
      category: 'AI & Open Source',
      icon: Award,
      badge: 'VGLUG Foundation',
      id: 'VGLUG-PY-05',
    },
    {
      title: 'Web & Front End Development',
      issuer: 'Naan Mudhalvan',
      category: 'Full-Stack Frontend',
      icon: Globe,
      badge: 'TN Govt Naan Mudhalvan',
      id: 'NM-WEB-06',
    },
    {
      title: 'English Language Communication',
      issuer: 'STEP',
      category: 'Professional Fluency',
      icon: MessageSquare,
      badge: 'STEP Verified',
      id: 'STEP-COMM-07',
    },
  ];

  const marqueeItems = [...certificates, ...certificates, ...certificates];

  return (
    <div id="certifications" className="space-y-8 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 uppercase tracking-widest mb-1.5 font-semibold">
            <Sparkles size={14} className="text-sky-500" />
            <span>Accreditation Stream</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Certifications & Industry Credentials
          </h2>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-sm">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-sky-500 animate-pulse'}`} />
            <span>{isPaused ? 'STREAM PAUSED' : 'LIVE SCROLLING'}</span>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            [Hover to Pause]
          </span>
        </div>
      </div>

      {/* Seamless Horizontal Live Scrolling Marquee */}
      <div
        className="relative w-full py-4 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Elegant Vignette Masks matching Light Background */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          <div
            className={`flex gap-8 sm:gap-10 ${
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
                  className="w-[360px] sm:w-[400px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all duration-200 cursor-pointer group relative overflow-hidden select-none shadow-sm"
                >
                  {/* Top Sky Blue Shimmer Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Bar: Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 group-hover:scale-110 transition-transform">
                      <Icon size={19} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 h-14 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Status */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        Issuing Body
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 font-heading">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Certificate Lightbox Modal (Light Mode) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-md w-full rounded-3xl p-8 bg-white border border-slate-200 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
              <span className="text-xs font-mono text-emerald-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={15} />
                <span>OFFICIALLY VERIFIED CREDENTIAL</span>
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-slate-700 font-mono text-sm px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200"
              >
                ✕ ESC
              </button>
            </div>

            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 leading-tight">
              {selectedCert.title}
            </h3>
            
            <p className="text-sm font-mono text-sky-600 mb-5">
              Issued by: <span className="text-slate-900 font-semibold">{selectedCert.issuer}</span>
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 mb-6">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Credential Track:</span>
                <span className="text-slate-900 font-medium">{selectedCert.category}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-600 font-semibold">Active & Validated</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Credential ID:</span>
                <span className="text-sky-600 font-medium">{selectedCert.id}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-heading font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              Close Verification Inspector
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
