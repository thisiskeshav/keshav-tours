import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import Hero from './components/Hero';
import SearchFilterBar from './components/SearchFilterBar';
import TopDestinations from './components/TopDestinations';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import TripCalculator from './components/TripCalculator';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PackageModal from './components/PackageModal';
import BookingModal from './components/BookingModal';
import DestinationModal from './components/DestinationModal';
import { packagesData, destinationsData, companyInfo } from './data/travelData';
import { ArrowRight, Sparkles, Compass, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

const VALID_PAGES = [
  'home',
  'destinations',
  'packages',
  'about',
  'services',
  'calculator',
  'gallery',
  'reviews',
  'contact'
];

export default function App() {
  // Navigation / Route State
  const getInitialPage = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    return VALID_PAGES.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  
  // Modal States
  const [activePackageModal, setActivePackageModal] = useState(null);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeDestinationModal, setActiveDestinationModal] = useState(null);

  // Sync hash routing and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic Navigation handler
  const navigateTo = (pageId) => {
    const targetPage = VALID_PAGES.includes(pageId) ? pageId : 'home';
    setCurrentPage(targetPage);
    if (targetPage === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = `#/${targetPage}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modals & Booking Handlers
  const handleOpenBooking = (pkg = null) => {
    setBookingPackage(pkg);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPackage(null);
  };

  const handleSelectPackage = (pkg) => {
    setActivePackageModal(pkg);
  };

  const handleSelectDestination = (dest) => {
    setActiveDestinationModal(dest);
  };

  const handleFilterByState = (state) => {
    setSelectedState(state);
    navigateTo('packages');
  };

  const handleResetFilters = () => {
    setSelectedState('All');
    setSelectedDuration('All');
    setSelectedCategory('All');
    setSelectedPriceRange('All');
  };

  const handleExploreTours = () => {
    navigateTo('packages');
  };

  const handleOpenPlanner = () => {
    navigateTo('calculator');
  };

  const handleSearch = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes('himachal') || lower.includes('manali') || lower.includes('shimla') || lower.includes('spiti') || lower.includes('dharamshala')) {
      setSelectedState('Himachal Pradesh');
    } else if (lower.includes('kashmir') || lower.includes('srinagar') || lower.includes('gulmarg') || lower.includes('pahalgam') || lower.includes('dal') || lower.includes('sonamarg')) {
      setSelectedState('Kashmir');
    } else if (lower.includes('honeymoon')) {
      setSelectedCategory('Honeymoon & Couples');
    } else if (lower.includes('family')) {
      setSelectedCategory('Family & Leisure');
    }
    navigateTo('packages');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Global Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking}
        onOpenPlanner={handleOpenPlanner}
        onSearch={handleSearch}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">

        {/* ==================== 1. HOME PAGE ==================== */}
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Banner */}
            <Hero
              onExploreTours={handleExploreTours}
              onOpenBooking={handleOpenBooking}
            />

            {/* Quick Filter Bar */}
            <SearchFilterBar
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              onResetFilters={handleResetFilters}
              totalPackagesCount={packagesData.length}
            />

            {/* Top Destinations Preview */}
            <TopDestinations
              onSelectDestination={handleSelectDestination}
              onFilterByState={handleFilterByState}
            />
            
            {/* View All Destinations Button */}
            <div className="bg-slate-50 pb-16 text-center">
              <button
                onClick={() => navigateTo('destinations')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
              >
                <span>View All 8+ Himalayan Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Handcrafted Packages Preview */}
            <PackagesSection
              onSelectPackage={handleSelectPackage}
              onBookPackage={handleOpenBooking}
              stateFilter={selectedState}
              durationFilter={selectedDuration}
              categoryFilter={selectedCategory}
              priceFilter={selectedPriceRange}
              onPriceFilterChange={setSelectedPriceRange}
            />

            {/* View All Packages Button */}
            <div className="bg-slate-50 pb-20 text-center">
              <button
                onClick={() => navigateTo('packages')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
              >
                <span>Explore All Handcrafted Packages under ₹10,000</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* About Teaser */}
            <AboutSection onOpenBooking={handleOpenBooking} />

            {/* Services */}
            <ServicesSection onOpenBooking={handleOpenBooking} />

            {/* Reviews */}
            <TestimonialsSection />

            {/* Contact Inquiry */}
            <ContactSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {/* ==================== 2. DESTINATIONS PAGE ==================== */}
        {currentPage === 'destinations' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Top Mountain Destinations"
              subtitle="From serene Dal Lake houseboats to snow-capped Solang peaks, explore our most iconic Himalayan escapes across Himachal Pradesh & Kashmir."
              badge="Explore The Majestic Himalayas"
              breadcrumb="Top Destinations"
              onNavigate={navigateTo}
            />

            <TopDestinations
              onSelectDestination={handleSelectDestination}
              onFilterByState={(state) => {
                setSelectedState(state);
                navigateTo('packages');
              }}
            />

            {/* Callout Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
                    Custom Itineraries Available
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2">
                    Want to visit multiple destinations in one trip?
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                    Our local travel experts in Shimla &amp; Srinagar can craft combined multi-city holiday plans tailored to your timeline and budget.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 shrink-0">
                  <button
                    onClick={() => handleOpenBooking(null)}
                    className="px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-lg shadow-sky-500/25"
                  >
                    Request Custom Plan
                  </button>
                  <button
                    onClick={() => navigateTo('calculator')}
                    className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
                  >
                    Calculate Trip Budget
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 3. PACKAGES PAGE ==================== */}
        {currentPage === 'packages' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Handcrafted Tour Packages"
              subtitle="All-inclusive mountain holiday packages under ₹10,000 with premium stays, sanitized private transfers, and guided sightseeing."
              badge="Best Value Himalayan Packages"
              breadcrumb="Tour Packages"
              onNavigate={navigateTo}
            />

            <SearchFilterBar
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              onResetFilters={handleResetFilters}
              totalPackagesCount={packagesData.length}
            />

            <PackagesSection
              onSelectPackage={handleSelectPackage}
              onBookPackage={handleOpenBooking}
              stateFilter={selectedState}
              durationFilter={selectedDuration}
              categoryFilter={selectedCategory}
              priceFilter={selectedPriceRange}
              onPriceFilterChange={setSelectedPriceRange}
            />
          </div>
        )}

        {/* ==================== 4. ABOUT US PAGE ==================== */}
        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="About Keshav Tours & Travels"
              subtitle="North India's premier mountain holiday company since 2018, having guided over 12,000+ satisfied travelers through Himachal & Kashmir."
              badge="Our Story, Heritage & Trust"
              breadcrumb="About Us"
              onNavigate={navigateTo}
            />

            <AboutSection onOpenBooking={handleOpenBooking} />

            {/* Detailed Trust & Mission Credentials */}
            <div className="bg-white py-16 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    Why 12,000+ Families Choose Keshav Tours
                  </h3>
                  <p className="text-slate-600 text-sm mt-2">
                    We combine local Himalayan roots with professional hospitality standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Govt. Registered &amp; Verified</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Officially accredited mountain travel operator with registered offices in Shimla, Srinagar, and New Delhi. 100% legitimate and insured.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Transparent Budget Pricing</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Every package is crafted under ₹10,000 with zero hidden charges, transparent toll/permit coverage, and complimentary breakfast.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">24/7 On-Trip Assistance</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Dedicated trip coordinator assigned to every guest to help with weather updates, high-altitude passes, and immediate support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 5. SERVICES PAGE ==================== */}
        {currentPage === 'services' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Our Tour & Travel Services"
              subtitle="From comfortable sanitized mountain cab transfers to luxury Shikara rides, discover the wide array of hospitality services we deliver."
              badge="Comprehensive Himalayan Services"
              breadcrumb="Services"
              onNavigate={navigateTo}
            />

            <ServicesSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {/* ==================== 6. TRIP PLANNER & CALCULATOR ==================== */}
        {currentPage === 'calculator' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Interactive Trip Cost Calculator"
              subtitle="Calculate your exact mountain holiday budget in under 60 seconds with live hotel, taxi, and activity pricing."
              badge="Instant Transparent Estimates"
              breadcrumb="Trip Planner"
              onNavigate={navigateTo}
            />

            <TripCalculator onBookCustomTrip={handleOpenBooking} />
          </div>
        )}

        {/* ==================== 7. PHOTO GALLERY ==================== */}
        {currentPage === 'gallery' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Captured Himalayan Moments"
              subtitle="Authentic traveler memories, snow-covered pine forests, pristine Dal Lake waters, and high-altitude mountain passes."
              badge="Real Travel Photography"
              breadcrumb="Photo Gallery"
              onNavigate={navigateTo}
            />

            <GallerySection />
          </div>
        )}

        {/* ==================== 8. REVIEWS & TESTIMONIALS ==================== */}
        {currentPage === 'reviews' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Traveler Reviews & Testimonials"
              subtitle="See verified Google & TripAdvisor feedback from over 12,000+ travelers across India who explored the Himalayas with Keshav Tours."
              badge="Rated 4.9/5 by 1,200+ Reviews"
              breadcrumb="Reviews"
              onNavigate={navigateTo}
            />

            <TestimonialsSection />

            <div className="max-w-4xl mx-auto px-4 pb-20 text-center">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 font-display mb-3">
                  Ready to experience the magic yourself?
                </h3>
                <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">
                  Join thousands of smiling travelers. Book your dream Himachal or Kashmir vacation today with easy booking &amp; guaranteed best rates.
                </p>
                <button
                  onClick={() => handleOpenBooking(null)}
                  className="px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md transition-all"
                >
                  Book Your Tour Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 9. CONTACT PAGE ==================== */}
        {currentPage === 'contact' && (
          <div className="animate-fadeIn">
            <PageHeader
              title="Contact Us & Inquiry"
              subtitle="Have questions about snow conditions, itinerary customizations, or special group discounts? We are available 24/7."
              badge="We Are Here For You"
              breadcrumb="Contact"
              onNavigate={navigateTo}
            />

            <ContactSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

      </main>

      {/* Global Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking}
        onFilterByState={handleFilterByState}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <FloatingActions
        onOpenBooking={handleOpenBooking}
      />

      {/* Modals */}
      {activePackageModal && (
        <PackageModal
          pkg={activePackageModal}
          onClose={() => setActivePackageModal(null)}
          onBookNow={handleOpenBooking}
        />
      )}

      {isBookingOpen && (
        <BookingModal
          initialPackage={bookingPackage}
          onClose={handleCloseBooking}
        />
      )}

      {activeDestinationModal && (
        <DestinationModal
          destination={activeDestinationModal}
          onClose={() => setActiveDestinationModal(null)}
          onExplorePackages={(state) => {
            setActiveDestinationModal(null);
            handleFilterByState(state);
          }}
        />
      )}

    </div>
  );
}
