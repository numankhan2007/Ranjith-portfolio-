import React, { useState } from 'react';
import { Mail, Send, X, Terminal, CheckCircle2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playHoverSound } from '../utils/sound';

export const InteractiveContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const targetEmail = 'ranjithmuthu2407@gmail.com';

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    
    // Trigger celebration confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#0070F3', '#7928CA'],
    });

    // Create mailto fallback link to guarantee email transmission
    const mailtoUrl = `mailto:${targetEmail}?subject=Portfolio Inquiry from ${encodeURIComponent(name || 'Visitor')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    
    setSubmitted(true);

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  const handleClose = () => {
    playClickSound();
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-cyan-400/50 bg-[#071326] shadow-[0_0_60px_rgba(0,240,255,0.35)] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow in modal */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
            <span className="font-mono text-xs text-cyan-300 tracking-wider">
              COMMUNICATION_UPLINK
            </span>
          </div>
          <button
            onClick={handleClose}
            onMouseEnter={playHoverSound}
            className="p-1.5 rounded-xl bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,240,255,0.4)]">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Transmission Initiated
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto font-light">
              Your default email client has been summoned with pre-formatted transmission details addressed to <span className="font-mono text-cyan-300">{targetEmail}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              Close Uplink
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-cyan-400 mb-1.5">
                IDENTITY // NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full px-4 py-2.5 rounded-xl bg-space-950/80 border border-cyan-500/20 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm font-sans placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-cyan-400 mb-1.5">
                RETURN ADDRESS // EMAIL
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. sarah@cyberdyne.io"
                className="w-full px-4 py-2.5 rounded-xl bg-space-950/80 border border-cyan-500/20 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm font-sans placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-cyan-400 mb-1.5">
                PAYLOAD // MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project, opportunity, or collaboration details..."
                className="w-full px-4 py-2.5 rounded-xl bg-space-950/80 border border-cyan-500/20 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm font-sans placeholder:text-slate-600 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onMouseEnter={playHoverSound}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-semibold text-sm font-mono tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] transition-all cursor-pointer"
              >
                <Send size={15} />
                <span>Transmit Signal</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

