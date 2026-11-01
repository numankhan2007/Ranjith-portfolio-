import React, { useState } from 'react';
import { Mail, Send, X, Terminal, CheckCircle2 } from 'lucide-react';
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
    
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#FBBF24', '#3B82F6'],
    });

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="glass-card max-w-lg w-full rounded-3xl p-7 sm:p-9 border border-white/15 bg-[#141414] shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle ambient glow in modal */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-amber-300 tracking-wider">
              COMMUNICATION_UPLINK
            </span>
          </div>
          <button
            onClick={handleClose}
            onMouseEnter={playHoverSound}
            className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Transmission Initiated
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
              Your default email client has been summoned with pre-formatted transmission details addressed to <span className="font-mono text-amber-300">{targetEmail}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs font-heading shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              Close Uplink
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-amber-400 mb-1.5">
                IDENTITY // NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 text-sm font-sans placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-amber-400 mb-1.5">
                RETURN ADDRESS // EMAIL
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. sarah@cyberdyne.io"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 text-sm font-sans placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-amber-400 mb-1.5">
                PAYLOAD // MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project, opportunity, or collaboration details..."
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 text-sm font-sans placeholder:text-slate-600 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onMouseEnter={playHoverSound}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm font-heading tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all cursor-pointer"
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
