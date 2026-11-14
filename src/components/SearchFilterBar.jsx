import React from 'react';
import { Search, MapPin, Calendar, Users, SlidersHorizontal, ArrowRight, RotateCcw, IndianRupee } from 'lucide-react';

export default function SearchFilterBar({ 
  selectedState, 
  setSelectedState, 
  selectedDuration, 
  setSelectedDuration, 
  selectedCategory, 
  setSelectedCategory,
  selectedPriceRange = 'All',
  setSelectedPriceRange,
  onResetFilters,
  totalPackagesCount
}) {
  return (
    <div className="relative -mt-8 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-4 sm:p-6 backdrop-blur-md">
        
        {/* Top Mini Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
              <SlidersHorizontal className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Find Your Ideal Mountain Package</h3>
              <p className="text-xs text-slate-500">Filter through handpicked itineraries across Himachal &amp; Kashmir</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
              {totalPackagesCount} Available Packages
            </span>
            {(selectedState !== 'All' || selectedDuration !== 'All' || selectedCategory !== 'All' || selectedPriceRange !== 'All') && (
              <button
                onClick={onResetFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Filter Inputs Grid (5 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-center">
          
          {/* Destination / State Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              Destination / State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
            >
              <option value="All">All Mountain States</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Kashmir">Kashmir Paradise</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-500" />
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
            >
              <option value="All">Any Duration</option>
              <option value="Short">Short (4 - 5 Days)</option>
              <option value="Medium">Standard (6 - 7 Days)</option>
              <option value="Long">Grand Tour (8+ Days)</option>
            </select>
          </div>

          {/* Travel Style / Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-500" />
              Travel Style
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Honeymoon & Couples">Honeymoon &amp; Couples</option>
              <option value="Family & Leisure">Family &amp; Leisure</option>
              <option value="Adventure & Snow">Adventure &amp; Snow</option>
              <option value="Adventure & Treks">Road Trips &amp; Treks</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
              Price Range
            </label>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange && setSelectedPriceRange(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
            >
              <option value="All">All Budgets (Under ₹10k)</option>
              <option value="under-6000">Under ₹6,000</option>
              <option value="6000-8000">₹6,000 - ₹8,000</option>
              <option value="8000-10000">₹8,000 - ₹10,000</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="flex flex-col gap-1.5 pt-0 sm:pt-4 lg:pt-0">
            <label className="hidden lg:block text-xs font-semibold text-transparent select-none">Action</label>
            <a
              href="#packages"
              className="w-full py-2.5 px-3 rounded-xl bg-brand-dark hover:bg-brand-navy text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 group cursor-pointer text-center"
            >
              <Search className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Show Results</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

