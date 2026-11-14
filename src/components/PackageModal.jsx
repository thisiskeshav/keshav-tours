import React, { useState } from 'react';
import { X, Clock, MapPin, Star, Check, AlertCircle, Calendar, ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { companyInfo, handleImageError } from '../data/travelData';

export default function PackageModal({ pkg, onClose, onBookNow }) {
  const [activeDay, setActiveDay] = useState(1);

  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 max-h-[92vh] flex flex-col">
        
        {/* Modal Header Bar with Close Button */}
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on Banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                {pkg.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                {pkg.state}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500 text-white flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {pkg.title}
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-1">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{pkg.route}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-500" />
              Tour Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {pkg.overview}
            </p>
          </div>

          {/* Day-by-Day Itinerary Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-500" />
                Detailed Day-Wise Itinerary
              </h3>
              <span className="text-xs text-slate-500 font-medium">Click any day to expand details</span>
            </div>

            <div className="space-y-3">
              {pkg.itinerary.map((item) => {
                const isOpen = activeDay === item.day;
                return (
                  <div
                    key={item.day}
                    className={`rounded-2xl border transition-all ${
                      isOpen ? 'border-sky-500/80 bg-sky-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setActiveDay(isOpen ? null : item.day)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                          isOpen ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          D{item.day}
                        </span>
                        <span className="font-bold text-sm sm:text-base text-slate-900">
                          Day {item.day}: {item.title}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-sky-600 shrink-0">
                        {isOpen ? 'Close' : 'View'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-sky-100 mt-1">
                        {item.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inclusions & Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Inclusions */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
              <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2 mb-3">
                <Check className="w-4 h-4 text-emerald-600" />
                What's Included in this Package
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100">
              <h4 className="text-sm font-bold text-rose-900 flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                What's Excluded
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">&bull;</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Trust Guarantees */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              Verified Mountain Drivers
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              4.9/5 Star Guest Rating
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-500" />
              Pure Veg &amp; Jain Meals
            </span>
          </div>

        </div>

        {/* Modal Bottom Bar with Price & Book Now */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 border-t border-slate-800">
          <div>
            <p className="text-xs text-slate-400">Total All-Inclusive Package Starting at</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-slate-400 line-through">
                ₹{pkg.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-emerald-400 font-bold">
                Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none py-3 px-7 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Book / Reserve This Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

