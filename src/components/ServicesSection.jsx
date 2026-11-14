import React from 'react';
import { Car, Building2, Briefcase, Ticket, Compass, Headphones, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/travelData';

export default function ServicesSection({ onOpenBooking }) {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Car': return <Car className="w-6 h-6 text-sky-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-sky-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-400" />;
      case 'Ticket': return <Ticket className="w-6 h-6 text-sky-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-sky-400" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-sky-400" />;
      default: return <Briefcase className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative text-white overflow-hidden">
      
      {/* Background Mountain Glow Effects (matching reference) */}
      <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching Reference Image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
              <span className="w-8 h-[2px] bg-sky-400"></span>
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Travel Services We Offer
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl">
              From planning to arrival in the hills, Keshav Tours takes care of every detail so you can travel worry-free.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenBooking(null)}
              className="px-5 py-2.5 rounded-full border border-sky-400/40 hover:border-sky-400 text-sky-300 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 text-xs font-semibold tracking-wide transition-all flex items-center gap-2"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Dark Themed Service Cards (Matching Reference Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-brand-midnight/90 hover:bg-brand-navy/90 p-7 rounded-2xl border border-slate-800 hover:border-sky-500/50 shadow-lg hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-500/25 transition-all">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors font-display">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features Bullets */}
                <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                  {service.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onOpenBooking({ serviceName: service.title })}
                className="w-full py-2.5 rounded-xl bg-slate-800/60 hover:bg-sky-500 hover:text-white text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700 hover:border-transparent"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

