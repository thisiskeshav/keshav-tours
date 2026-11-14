import React from 'react';
import { Plane, Compass, HeartHandshake, ShieldCheck, Award, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { companyInfo, handleImageError } from '../data/travelData';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Mountain Traveler Visual with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Traveler Image (Framed like the reference image) */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80"
                  alt="Traveler exploring scenic Pahalgam & Manali mountains"
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Himalayan Hospitality</span>
                  <h4 className="text-xl font-bold font-display mt-0.5">Creating Memories That Last A Lifetime</h4>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Top Right) */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 leading-none">12+ Years</p>
                  <p className="text-xs text-slate-500 mt-1">Mountain Travel Expertise</p>
                </div>
              </div>

              {/* Floating Stat Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white rounded-2xl p-4 shadow-xl border border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Govt. Verified Partner</p>
                  <p className="text-[11px] text-slate-300">Himachal &amp; J&amp;K Tourism</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content & 4 Feature Pillars (Exact match to reference design) */}
          <div className="lg:col-span-7 lg:pl-8">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              ABOUT KESHAV TOURS &amp; TRAVELS
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display mb-6">
              More Than Just a Trip, <br />
              <span className="text-sky-600">It's a Lifetime Himalayan Experience</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              At <strong>Keshav Tours and Travels</strong>, we believe travel in the Himalayas should be effortless, authentic, and filled with wonder. Born in the heart of Himachal Pradesh with extended family operations in Kashmir, we specialize in customized holiday packages, honeymoon tours, group departures, and family mountain getaways with 100% on-ground safety.
            </p>

            {/* 4 Feature Items Grid (Reference Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Customized Travel Packages</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Tailor-made trips to fit your exact dates, comfort level, and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Professional Mountain Drivers</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Experienced snow drivers and local Pahari &amp; Kashmiri guides.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Best Travel Deals &amp; Transparent Rates</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Zero hidden fees, all-inclusive packages with verified deluxe hotels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Pure Veg &amp; Jain Food Options</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Hot vegetarian meals &amp; warm cedar wood houseboats on Dal Lake.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(null)}
                className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md shadow-sky-500/20 hover:scale-105 transition-all"
              >
                Learn More &amp; Book Package &rarr;
              </button>

              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-200 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Talk to Travel Specialist</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

