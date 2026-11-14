import React from 'react';
import { X, MapPin, Compass, Calendar, Mountain, CheckCircle2, ArrowRight } from 'lucide-react';
import { handleImageError } from '../data/travelData';

export default function DestinationModal({ destination, onClose, onExplorePackages }) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col">
        
        {/* Banner with Close Button */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-900">
          <img
            src={destination.image}
            alt={destination.name}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500 text-white mb-2 inline-block">
              {destination.state}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">{destination.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{destination.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-sky-500 shrink-0" />
              <div>
                <span className="text-slate-400 block font-medium">Altitude:</span>
                <span className="font-bold text-slate-800">{destination.altitude}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <span className="text-slate-400 block font-medium">Best Season:</span>
                <span className="font-bold text-slate-800">{destination.bestSeason}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">About {destination.name}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Top Highlights */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 font-display">Top Attractions &amp; Experiences</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 block">Starting Package</span>
            <span className="text-lg font-black text-slate-900">₹{destination.priceStarting.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-full border border-slate-300 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onExplorePackages(destination.state);
              }}
              className="py-2.5 px-5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <span>View Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

