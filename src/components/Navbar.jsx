import React, { useState, useEffect } from 'react';
import { Mountain, Phone, Mail, MapPin, Menu, X, ChevronDown, Compass, Calendar, Search, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenBooking, onOpenPlanner, onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setShowSearchInput(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Packages', hasBadge: true },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Trip Planner' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Govt. Registered Himalayan Tour Specialist
            </span>
            <a href={`tel:${companyInfo.phone}`} className="hidden md:flex items-center gap-1 hover:text-sky-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden lg:flex items-center gap-1 hover:text-sky-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              Offices: Shimla &bull; Srinagar &bull; Delhi
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3.5' 
          : 'bg-brand-dark/90 backdrop-blur-sm py-4 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-sky-400 to-amber-400 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-sky-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1 font-display">
                  Keshav <span className="text-sky-400 font-normal">Tours</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  &amp; Travels &bull; Himalayas
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasBadge && (
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                        isActive 
                          ? 'bg-amber-400 text-slate-950' 
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        Offer
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Quick Search Toggle */}
              {showSearchInput ? (
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Manali, Kashmir..."
                    className="bg-slate-800 border border-slate-600 text-white text-xs rounded-full py-1.5 pl-3 pr-8 focus:outline-none focus:border-sky-400 w-44"
                    autoFocus
                  />
                  <button type="button" onClick={() => setShowSearchInput(false)} className="absolute right-2 text-slate-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                  title="Search Destinations or Packages"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}

              {/* Cost Calculator CTA */}
              <button
                onClick={onOpenPlanner}
                className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                Cost Calculator
              </button>

              {/* Plan Your Trip / Book Now Primary Button */}
              <button
                onClick={() => onOpenBooking(null)}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Plan Your Trip
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden gap-2">
              <button
                onClick={() => onOpenBooking(null)}
                className="px-3 py-1.5 rounded-full bg-sky-500 text-white text-xs font-semibold"
              >
                Plan Trip
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-brand-dark/98 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="flex items-center pb-3 border-b border-slate-800 mb-2">
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, packages..."
                  className="w-full bg-slate-800 text-white text-sm rounded-lg py-2 pl-9 pr-3 border border-slate-700 focus:outline-none focus:border-sky-400"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </form>
            </div>
            
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className={`w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-500 text-white font-bold'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasBadge && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                      Offer
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(null); }}
                className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm text-center shadow"
              >
                Book Package / Plan Trip
              </button>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm text-center flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

