import React from 'react';
import { MapPin, ArrowRight, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { destinationsData, handleImageError } from '../data/travelData';

export default function TopDestinations({ onSelectDestination, onFilterByState }) {
  return (
    <section id="destinations" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Subtle Mountain Watermark */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching the Reference Image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              POPULAR DESTINATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Top Mountain Destinations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              From serene Dal Lake houseboats to snow-capped Solang peaks, explore our most loved Himalayan escapes.
            </p>
          </div>

          {/* Filter Pills / View All */}
          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <button
              onClick={() => onFilterByState('All')}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-white text-slate-700 hover:text-sky-600 border border-slate-200 shadow-sm transition-all"
            >
              All Regions
            </button>
            <button
              onClick={() => onFilterByState('Himachal Pradesh')}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-white text-slate-700 hover:text-sky-600 border border-slate-200 shadow-sm transition-all"
            >
              Himachal Pradesh
            </button>
            <button
              onClick={() => onFilterByState('Kashmir')}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-white text-slate-700 hover:text-sky-600 border border-slate-200 shadow-sm transition-all"
            >
              Kashmir
            </button>
          </div>
        </div>

        {/* Destination Cards Grid (Directly mirroring the reference image card design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image with Floating State Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* State Tag Pill */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-sm ${
                    dest.state === 'Kashmir' 
                      ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-400/30' 
                      : 'bg-sky-900/80 text-sky-200 border border-sky-400/30'
                  }`}>
                    {dest.state}
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 shadow">
                    {dest.badge}
                  </span>
                </div>

                {/* Starting Price Pill */}
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-[10px] uppercase font-medium text-slate-300">Packages From</p>
                  <p className="text-base font-extrabold text-amber-300">₹{dest.priceStarting.toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Card Bottom Meta (Title, Tagline & Explore Icon - exactly like the reference image) */}
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base group-hover:text-sky-600 transition-colors truncate">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="truncate">{dest.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {dest.tagline}
                  </p>
                </div>

                {/* Round Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

