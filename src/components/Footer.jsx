import React, { useState } from 'react';
import { Mountain, Phone, Mail, MapPin, Send, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/travelData';
import { saveNewsletterSubscriber } from '../supabaseClient';

export default function Footer({ onNavigate, onOpenBooking, onFilterByState }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubmitting(true);
      await saveNewsletterSubscriber(newsletterEmail.trim());
      setIsSubmitting(false);
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleDestinationClick = (state) => {
    if (onFilterByState) onFilterByState(state);
    if (onNavigate) onNavigate('destinations');
  };

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          
          {/* Brand Info (2 Columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => onNavigate && onNavigate('home')} className="flex items-center gap-2.5 text-left focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight font-display">
                  Keshav <span className="text-sky-400 font-normal">Tours</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  &amp; Travels &bull; Himalayas
                </span>
              </div>
            </button>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              North India's premier mountain tour specialists. Providing handcrafted, safe, and unforgettable holiday packages across Himachal Pradesh, Kashmir, and Leh Ladakh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                Govt. Registered Operator
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-medium flex items-center gap-1.5">
                <span className="text-xs">🇮🇳</span>
                Serving Across India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate && onNavigate('home')} className="hover:text-sky-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate && onNavigate('destinations')} className="hover:text-sky-400 transition-colors">Top Destinations</button></li>
              <li><button onClick={() => onNavigate && onNavigate('packages')} className="hover:text-sky-400 transition-colors">Tour Packages</button></li>
              <li><button onClick={() => onNavigate && onNavigate('about')} className="hover:text-sky-400 transition-colors">About Keshav Tours</button></li>
              <li><button onClick={() => onNavigate && onNavigate('services')} className="hover:text-sky-400 transition-colors">Services Offered</button></li>
              <li><button onClick={() => onNavigate && onNavigate('calculator')} className="hover:text-sky-400 transition-colors">Trip Cost Calculator</button></li>
              <li><button onClick={() => onNavigate && onNavigate('gallery')} className="hover:text-sky-400 transition-colors">Himalayan Gallery</button></li>
              <li><button onClick={() => onNavigate && onNavigate('reviews')} className="hover:text-sky-400 transition-colors">Traveler Reviews</button></li>
              <li><button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-sky-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Mountain Destinations */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">
              Destinations
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleDestinationClick('Himachal Pradesh')} className="hover:text-sky-400 text-left transition-colors">
                  Manali &amp; Solang Valley
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Himachal Pradesh')} className="hover:text-sky-400 text-left transition-colors">
                  Shimla &amp; Kufri Hills
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Kashmir')} className="hover:text-sky-400 text-left transition-colors">
                  Srinagar &amp; Dal Lake
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Kashmir')} className="hover:text-sky-400 text-left transition-colors">
                  Gulmarg Gondola &amp; Skiing
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Kashmir')} className="hover:text-sky-400 text-left transition-colors">
                  Pahalgam &amp; Betaab Valley
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Himachal Pradesh')} className="hover:text-sky-400 text-left transition-colors">
                  Spiti Valley Road Trip
                </button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Himachal Pradesh')} className="hover:text-sky-400 text-left transition-colors">
                  Dharamshala &amp; McLeodganj
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">
              Himalayan Deals Newsletter
            </h4>
            <p className="text-slate-400 text-xs">
              Subscribe to receive seasonal snow alerts, festival discounts, and newly launched itineraries.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are now subscribed to seasonal travel alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-sky-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 disabled:opacity-70"
                >
                  <Send className="w-3 h-3" />
                  <span>{isSubmitting ? 'Saving...' : 'Subscribe for Offers'}</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-1 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{companyInfo.phone}</span>
              </p>
              <p className="flex items-center gap-1 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{companyInfo.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} <strong>Keshav Tours and Travels</strong>. All rights reserved. Registered Tourism Operator.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#about" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Cancellation &amp; Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

