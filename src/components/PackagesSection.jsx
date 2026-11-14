import React, { useState } from 'react';
import { Star, Clock, MapPin, Check, Sparkles, ArrowRight, Eye, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { packagesData, handleImageError } from '../data/travelData';

export default function PackagesSection({ 
  onSelectPackage, 
  onBookPackage, 
  stateFilter, 
  durationFilter, 
  categoryFilter 
}) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  // Filter packages based on activeCategoryTab and props filters
  const filteredPackages = packagesData.filter(pkg => {
    // Category tab filter
    if (activeCategoryTab !== 'All') {
      if (activeCategoryTab === 'Himachal' && pkg.state !== 'Himachal Pradesh') return false;
      if (activeCategoryTab === 'Kashmir' && pkg.state !== 'Kashmir') return false;
      if (activeCategoryTab === 'Honeymoon' && !pkg.category.includes('Honeymoon')) return false;
      if (activeCategoryTab === 'Adventure' && !pkg.category.includes('Adventure')) return false;
      if (activeCategoryTab === 'Family' && !pkg.category.includes('Family')) return false;
    }

    // State filter from SearchFilterBar
    if (stateFilter !== 'All' && pkg.state !== stateFilter) return false;

    // Category filter from SearchFilterBar
    if (categoryFilter !== 'All' && !pkg.category.includes(categoryFilter.split(' ')[0])) return false;

    // Duration filter from SearchFilterBar
    if (durationFilter !== 'All') {
      const days = parseInt(pkg.duration.match(/(\d+)\s*Days?/)?.[1] || '0');
      if (durationFilter === 'Short' && (days < 3 || days > 5)) return false;
      if (durationFilter === 'Medium' && (days < 6 || days > 7)) return false;
      if (durationFilter === 'Long' && days < 8) return false;
    }

    return true;
  });

  return (
    <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            CURATED MOUNTAIN ITINERARIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Handcrafted Tour Packages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            All-inclusive packages with private sanitised cabs, hand-picked hotels, delicious meals, and 24/7 mountain assistance.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
            {[
              { id: 'All', label: 'All Packages' },
              { id: 'Himachal', label: 'Himachal Pradesh' },
              { id: 'Kashmir', label: 'Kashmir Paradise' },
              { id: 'Honeymoon', label: 'Honeymoon Specials' },
              { id: 'Family', label: 'Family Leisure' },
              { id: 'Adventure', label: 'Adventure & Snow' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategoryTab === tab.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Package Top Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 shadow-md">
                        {pkg.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-dark/80 backdrop-blur-md text-white border border-white/20">
                        {pkg.state}
                      </span>
                    </div>

                    {/* Discount badge top-right */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-600 text-white shadow-md">
                        {pkg.discount}
                      </span>
                    </div>

                    {/* Duration Bottom-Left */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Rating Bottom-Right */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg text-xs font-bold text-slate-800 shadow">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-[10px] text-slate-500 font-normal">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-display line-clamp-1 mb-2">
                      {pkg.title}
                    </h3>

                    {/* Route line */}
                    <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed font-medium">{pkg.route}</span>
                    </div>

                    {/* Key inclusions snapshot */}
                    <div className="space-y-1.5 mb-5">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Price and Buttons */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Starting from / person</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      All Inclusive
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-sky-500 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Itinerary</span>
                    </button>

                    <button
                      onClick={() => onBookPackage(pkg)}
                      className="py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book / Reserve</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
            <Tag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">No matching packages found</h4>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Try adjusting your filter options or contact us directly for a customized itinerary.
            </p>
            <button
              onClick={() => setActiveCategoryTab('All')}
              className="px-5 py-2 rounded-full bg-sky-500 text-white text-xs font-semibold shadow"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

