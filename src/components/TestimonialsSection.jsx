import React from 'react';
import { Star, Quote, CheckCircle, ArrowRight, Award, Heart } from 'lucide-react';
import { testimonialsData, companyInfo } from '../data/travelData';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Direct Match to Reference Image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              What Our Travelers Say
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Authentic stories and experiences from families, honeymoon couples, and explorers who trusted Keshav Tours with their Himalayan dream trips.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-amber-800 text-xs font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5 Average Rating (1,850+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (Exact 3-Card / 4-Card Layout from Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Stars Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-sky-400/30"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{item.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] truncate">
                    <span>🇮🇳</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-[10px] text-sky-600 font-semibold truncate mt-0.5">
                    {item.trip}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Endorsement Strip */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">TripAdvisor &amp; Google Reviews Certified</h4>
              <p className="text-xs text-slate-500">Over 99% of our guests would recommend us to their friends and family</p>
            </div>
          </div>

          <a
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2"
          >
            <span>Ask for Guest References</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

