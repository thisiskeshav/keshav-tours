import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function FloatingActions({ onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg backdrop-blur-md border border-slate-700 transition-all hover:-translate-y-1"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${companyInfo.phone}`}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-lg shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all"
        title="Call Travel Specialist"
      >
        <Phone className="w-4 h-4" />
        <span>Call Expert</span>
      </a>

      {/* Floating WhatsApp Action with notification ping */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
        title="Chat on WhatsApp"
      >
        {/* Animated pulse badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>

        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="text-xs sm:text-sm font-bold pr-1">Chat on WhatsApp</span>
      </a>

    </div>
  );
}

