import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
import { packagesData, destinationsData } from './data/travelData';

export default function App() {
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

  // Handlers
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
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedState('All');
    setSelectedDuration('All');
    setSelectedCategory('All');
    setSelectedPriceRange('All');
  };

  const handleExploreTours = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanner = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes('himachal') || lower.includes('manali') || lower.includes('shimla') || lower.includes('spiti')) {
      setSelectedState('Himachal Pradesh');
    } else if (lower.includes('kashmir') || lower.includes('srinagar') || lower.includes('gulmarg') || lower.includes('pahalgam') || lower.includes('dal')) {
      setSelectedState('Kashmir');
    } else if (lower.includes('honeymoon')) {
      setSelectedCategory('Honeymoon & Couples');
    } else if (lower.includes('family')) {
      setSelectedCategory('Family & Leisure');
    }
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenPlanner={handleOpenPlanner}
        onSearch={handleSearch}
      />

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreTours={handleExploreTours}
          onOpenBooking={handleOpenBooking}
        />

        {/* Floating Quick Search & Filter Widget */}
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

        {/* Top Destinations Section */}
        <TopDestinations
          onSelectDestination={handleSelectDestination}
          onFilterByState={handleFilterByState}
        />

        {/* About Keshav Tours Section */}
        <AboutSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Services We Offer Section (Dark Themed) */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Handcrafted Tour Packages Section */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
          onBookPackage={handleOpenBooking}
          stateFilter={selectedState}
          durationFilter={selectedDuration}
          categoryFilter={selectedCategory}
          priceFilter={selectedPriceRange}
          onPriceFilterChange={setSelectedPriceRange}
        />

        {/* Interactive Trip Planner & Cost Calculator */}
        <TripCalculator
          onBookCustomTrip={handleOpenBooking}
        />

        {/* Captured Moments Photo Gallery */}
        <GallerySection />

        {/* What Our Travelers Say Testimonials */}
        <TestimonialsSection />

        {/* Ready for Adventure Banner & Contact Section */}
        <ContactSection
          onOpenBooking={handleOpenBooking}
        />

      </main>

      {/* Footer */}
      <Footer
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

