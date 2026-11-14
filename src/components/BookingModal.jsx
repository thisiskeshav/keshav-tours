import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, CheckCircle2, ShieldCheck, Printer, Send, Clock, Phone, Mail, Award, Sparkles, AlertCircle, Database } from 'lucide-react';
import { companyInfo, packagesData } from '../data/travelData';
import { saveBookingToSupabase } from '../supabaseClient';

export default function BookingModal({ initialPackage, onClose }) {
  const isCustomPackage = Boolean(initialPackage?.calculatedTotal);
  const [selectedPkgId, setSelectedPkgId] = useState(isCustomPackage ? 'custom' : (initialPackage?.id || packagesData[0].id));
  const [travelerName, setTravelerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(initialPackage?.adults || 2);
  const [children, setChildren] = useState(initialPackage?.children || 0);
  const [mealPlan, setMealPlan] = useState('Pure Veg');
  
  // Normalize vehicle selection so it always matches one of the dropdown options
  const defaultVehicle = initialPackage?.vehicle?.includes('Sedan') 
    ? 'Sedan (Dzire/Etios)' 
    : (initialPackage?.vehicle?.includes('Tempo') 
      ? 'Luxury Tempo Traveller' 
      : 'Toyota Innova Crysta');
  const [vehicle, setVehicle] = useState(defaultVehicle);
  const [specialNotes, setSpecialNotes] = useState('');
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingVoucher, setBookingVoucher] = useState(null);

  // Find currently active package
  const currentPkg = selectedPkgId === 'custom' && isCustomPackage
    ? initialPackage
    : (packagesData.find(p => p.id === selectedPkgId) || packagesData[0]);

  const packagePricePerPerson = currentPkg.price || currentPkg.perPersonCost || 8999;
  const totalCost = selectedPkgId === 'custom' && isCustomPackage
    ? initialPackage.calculatedTotal 
    : Math.round((adults * packagePricePerPerson) + (children * (packagePricePerPerson * 0.6)));
  const advanceToken = Math.round(totalCost * 0.25);

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!travelerName || !phone || !travelDate) {
      alert("Please fill in Traveler Name, WhatsApp Phone Number, and Preferred Travel Date.");
      return;
    }

    setIsSubmitting(true);

    const voucher = {
      bookingId: `KT-${Math.floor(100000 + Math.random() * 900000)}`,
      name: travelerName,
      phone,
      email: email || '',
      city: city || 'India',
      date: travelDate,
      packageTitle: currentPkg.title,
      state: currentPkg.state,
      duration: currentPkg.duration,
      adults,
      children,
      mealPlan,
      vehicle,
      specialNotes,
      totalCost,
      advanceToken,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    // Save to Supabase backend database
    await saveBookingToSupabase(voucher);

    setBookingVoucher(voucher);
    setBookingConfirmed(true);
    setIsSubmitting(false);
  };

  const handleShareToWhatsApp = () => {
    if (!bookingVoucher) return;
    const msg = encodeURIComponent(
      `*KESHAV TOURS & TRAVELS - BOOKING RESERVATION*\n` +
      `*Booking ID:* ${bookingVoucher.bookingId}\n` +
      `*Traveler:* ${bookingVoucher.name} (${bookingVoucher.phone})\n` +
      `*Package:* ${bookingVoucher.packageTitle} (${bookingVoucher.duration})\n` +
      `*Travel Date:* ${bookingVoucher.date}\n` +
      `*Guests:* ${bookingVoucher.adults} Adults, ${bookingVoucher.children} Children\n` +
      `*Meal Preference:* ${bookingVoucher.mealPlan}\n` +
      `*Vehicle:* ${bookingVoucher.vehicle}\n` +
      `*Estimated Package Cost:* ₹${bookingVoucher.totalCost.toLocaleString('en-IN')}\n` +
      `*25% Confirmation Advance:* ₹${bookingVoucher.advanceToken.toLocaleString('en-IN')}\n\n` +
      `Please verify and send me the official hotel & cab confirmation voucher!`
    );
    window.open(`https://wa.me/919816012345?text=${msg}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-6 max-h-[94vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-brand-dark to-brand-navy text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                {bookingConfirmed ? "Booking Reservation Confirmed!" : "Book / Reserve Your Mountain Tour"}
              </h3>
              <p className="text-xs text-slate-300">
                {bookingConfirmed ? "Your official voucher has been generated" : "Instant confirmation with transparent pricing & zero hidden fees"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          
          {!bookingConfirmed ? (
            /* Booking Form */
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Package Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Tour Package
                </label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => setSelectedPkgId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                >
                  {isCustomPackage && (
                    <option value="custom">
                      ✨ {initialPackage.title} ({initialPackage.state} - {initialPackage.duration})
                    </option>
                  )}
                  {packagesData.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.state} - {p.duration}) - ₹{p.price.toLocaleString('en-IN')}/person
                    </option>
                  ))}
                </select>
                <div className="mt-2 p-3 bg-sky-50/70 border border-sky-100 rounded-xl flex items-center justify-between text-xs text-sky-900">
                  <span className="font-medium">{currentPkg.route || currentPkg.duration}</span>
                  <span className="font-extrabold text-sm text-sky-700">₹{packagePricePerPerson.toLocaleString('en-IN')} / person</span>
                </div>
              </div>

              {/* Traveler Details Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Primary Traveler Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar Sharma"
                      value={travelerName}
                      onChange={(e) => setTravelerName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">City of Origin (Pickup Point)</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi / Chandigarh / Mumbai / Pune"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Travel Date *</label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Adults (12+ yrs)</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                      <option key={n} value={n}>{n} Adults</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Children (below 12)</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                  >
                    {[0, 1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} Children</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferences: Meal & Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Food / Dietary Preference</label>
                  <select
                    value={mealPlan}
                    onChange={(e) => setMealPlan(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                  >
                    <option value="Pure Veg">Pure Vegetarian (Dedicated Kitchen)</option>
                    <option value="Jain Food">Pure Jain Food (No Onion, No Garlic)</option>
                    <option value="Veg & Non-Veg">Veg &amp; Non-Veg (Choice Menu)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Dedicated Vehicle</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                  >
                    <option value="Sedan (Dzire/Etios)">Sedan (Dzire / Etios) - 1 to 3 Guests</option>
                    <option value="Toyota Innova Crysta">Toyota Innova Crysta - 4 to 6 Guests</option>
                    <option value="Ertiga SUV">Maruti Ertiga SUV - 4 to 5 Guests</option>
                    <option value="Luxury Tempo Traveller">Luxury Tempo Traveller - 8 to 12 Guests</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Special Notes / Add-ons (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Honeymoon bed decor, senior citizen ground-floor room, Gulmarg Gondola slot assistance..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                ></textarea>
              </div>

              {/* Live Cost Breakdown */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span>Package for {adults} Adults {children > 0 ? `+ ${children} Kids` : ''}:</span>
                  <span className="font-semibold text-white">₹{totalCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>To Confirm Reservation (25% Token):</span>
                  <span className="font-bold text-amber-400 text-sm">₹{advanceToken.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Balance (Payable upon arrival at hotel):</span>
                  <span>₹{(totalCost - advanceToken).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Generating Official Voucher...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm &amp; Generate Booking Voucher</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>

            </form>
          ) : (
            /* Booking Confirmation Voucher (Printable / Shareable) */
            <div id="booking-voucher" className="space-y-6">
              
              {/* Success Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-emerald-900">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-base">Reservation Successful &amp; Saved to Database!</h4>
                  <p className="text-xs text-emerald-700">
                    Your booking reference has been registered in our Supabase system and with Keshav Tours &amp; Travels. You can download or share your voucher below.
                  </p>
                </div>
              </div>

              {/* Official Voucher Card */}
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 bg-slate-50 space-y-6">
                
                {/* Brand Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 font-display">
                      Keshav Tours and Travels
                    </h3>
                    <p className="text-xs text-slate-500">
                      Govt. Approved Himalayan Tour Operator &bull; Shimla &bull; Srinagar &bull; Delhi
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Booking Reference</span>
                    <span className="text-base font-extrabold text-sky-600 bg-sky-100 px-3 py-1 rounded-lg inline-block">
                      {bookingVoucher.bookingId}
                    </span>
                  </div>
                </div>

                {/* Voucher Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Guest Name:</span>
                    <span className="font-bold text-slate-800 text-sm">{bookingVoucher.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">WhatsApp Contact:</span>
                    <span className="font-bold text-slate-800 text-sm">{bookingVoucher.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Travel Date:</span>
                    <span className="font-bold text-slate-800 text-sm">{bookingVoucher.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Travelers:</span>
                    <span className="font-bold text-slate-800 text-sm">
                      {bookingVoucher.adults} Adults {bookingVoucher.children > 0 ? `, ${bookingVoucher.children} Kids` : ''}
                    </span>
                  </div>
                </div>

                {/* Package Details */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-slate-900 text-sm pb-1 border-b border-slate-100">
                    <span>{bookingVoucher.packageTitle}</span>
                    <span className="text-sky-600">{bookingVoucher.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pt-1">
                    <div><strong>Dedicated Cab:</strong> {bookingVoucher.vehicle}</div>
                    <div><strong>Meal Plan:</strong> {bookingVoucher.mealPlan}</div>
                    <div><strong>Pickup Point:</strong> {bookingVoucher.city}</div>
                    <div><strong>Support:</strong> 24/7 Dedicated Trip Coordinator</div>
                  </div>
                  {bookingVoucher.specialNotes && (
                    <div className="text-slate-500 pt-1 text-[11px]">
                      <strong>Notes:</strong> {bookingVoucher.specialNotes}
                    </div>
                  )}
                </div>

                {/* Financial Summary */}
                <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="text-slate-400">Total Package Amount:</p>
                    <p className="text-xl font-black text-amber-400">₹{bookingVoucher.totalCost.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-slate-400">Confirmation Token (25%):</p>
                    <p className="text-base font-bold text-emerald-400">₹{bookingVoucher.advanceToken.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 leading-normal">
                  * Note: Our reservations team will reach out via WhatsApp at <strong>{bookingVoucher.phone}</strong> within 15 minutes to confirm hotel room inventory, cab driver contact details, and advance receipt.
                </div>

              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleShareToWhatsApp}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Voucher to WhatsApp Team</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Voucher</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

