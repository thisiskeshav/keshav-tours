import React, { useState } from 'react';
import { Plane, Play, ShieldCheck, Headphones, Compass, Award, Users, Sparkles, X } from 'lucide-react';
import { companyInfo, handleImageError } from '../data/travelData';

export default function Hero({ onExploreTours, onOpenBooking }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-between text-white overflow-hidden">
        {/* Background Mountain Panorama Image with Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
            alt="Majestic Kashmir & Himachal Himalayan Mountain Landscape"
            onError={handleImageError}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Multi-layered Gradients matching the reference image's deep cinematic atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
        </div>

        {/* Floating Ambient Decorative Light */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-fadeIn">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              YOUR DREAM MOUNTAIN VACATION AWAITS
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-amber-300 font-normal">Himachal &bull; Kashmir</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display">
              Explore the Himalayas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">
                With Keshav Tours
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow">
              Discover breathtaking snow-laden valleys, serene Dal Lake floating houseboats, thrilling Rohtang adventures, and expertly crafted holiday packages designed for families and couples across India.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreTours}
                className="px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 group"
              >
                <Plane className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
                <span>Explore Packages</span>
                <span className="text-lg leading-none">&rarr;</span>
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-base hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip (Directly matching the 5 pillars in the reference image) */}
        <div className="relative z-10 w-full bg-brand-dark/85 backdrop-blur-md border-t border-white/10 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-center">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Safe &amp; Secure Travel</h4>
                  <p className="text-[11px] text-slate-400 hidden sm:block">Verified mountain drivers</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">24/7 Local Support</h4>
                  <p className="text-[11px] text-slate-400 hidden sm:block">Ground team in Shimla &amp; Srinagar</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Curated Itineraries</h4>
                  <p className="text-[11px] text-slate-400 hidden sm:block">No rushed schedules</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Best Price Guarantee</h4>
                  <p className="text-[11px] text-slate-400 hidden sm:block">All-inclusive transparent rates</p>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">18,500+ Happy Guests</h4>
                  <p className="text-[11px] text-slate-400 hidden sm:block">4.9/5 Average Rating</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-brand-dark rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Discover Keshav Tours &amp; Himalayan Magic
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
                alt="Kashmir Dal Lake Showcase"
                onError={handleImageError}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-brand-dark/60 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/50 mb-4 animate-bounce">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Welcome to Keshav Tours &amp; Travels</h4>
                <p className="text-slate-300 max-w-lg text-sm mb-6">
                  For over 12 years, we have guided families and honeymooners through the majestic landscapes of Kashmir, Himachal Pradesh, and Spiti Valley. Experience authentic stays, snow peaks, and warm mountain hospitality.
                </p>
                <button
                  onClick={() => {
                    setShowVideoModal(false);
                    onOpenBooking(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
                >
                  Book Your Himalayan Tour Now &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

