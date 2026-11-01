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
      colors: ['#0EA5E9', '#38BDF8', '#0284C7'],
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="max-w-lg w-full rounded-3xl p-7 sm:p-9 bg-white border border-slate-200 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="font-mono text-xs text-sky-600 font-semibold tracking-wider">
              COMMUNICATION_UPLINK
            </span>
          </div>
          <button
            onClick={handleClose}
            onMouseEnter={playHoverSound}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Transmission Initiated
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto font-normal leading-relaxed">
              Your default email client has been summoned with pre-formatted transmission details addressed to <span className="font-mono text-sky-600 font-semibold">{targetEmail}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs font-heading shadow-sm cursor-pointer"
            >
              Close Uplink
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-700 font-medium mb-1.5">
                IDENTITY // NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900 text-sm font-sans placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 font-medium mb-1.5">
                RETURN ADDRESS // EMAIL
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. sarah@cyberdyne.io"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900 text-sm font-sans placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 font-medium mb-1.5">
                PAYLOAD // MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project, opportunity, or collaboration details..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900 text-sm font-sans placeholder:text-slate-400 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onMouseEnter={playHoverSound}
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm font-heading tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
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
