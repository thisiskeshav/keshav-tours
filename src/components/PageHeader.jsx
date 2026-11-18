import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function PageHeader({ title, subtitle, badge, breadcrumb, onNavigate }) {
  return (
    <div className="relative bg-gradient-to-b from-brand-dark via-slate-900 to-slate-900 text-white pt-16 pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-400 mb-4">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-1 hover:text-sky-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-400 font-semibold">{breadcrumb}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}
