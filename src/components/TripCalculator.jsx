import React, { useState } from 'react';
import { Calculator, MapPin, Calendar, Users, Car, Hotel, Check, Sparkles, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/travelData';

export default function TripCalculator({ onBookCustomTrip }) {
  const [destination, setDestination] = useState('Himachal Pradesh');
  const [days, setDays] = useState(6);
  const [stayCategory, setStayCategory] = useState('Deluxe');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [vehicle, setVehicle] = useState('Innova');
  const [addons, setAddons] = useState({
    honeymoon: false,
    gondola: false,
    rafting: false
  });

  // Calculate live dynamic estimated cost
  const baseRatePerPersonPerDay = {
    'Standard': 2200,
    'Deluxe': 3100,
    'Luxury': 4800
  }[stayCategory];

  const vehicleCostPerDay = {
    'Sedan': 2400,
    'Innova': 3600,
    'Tempo': 5500
  }[vehicle];

  const destMultiplier = destination === 'Kashmir' ? 1.15 : (destination === 'Combined' ? 1.25 : 1.0);

  const totalStayCost = (adults * baseRatePerPersonPerDay + children * (baseRatePerPersonPerDay * 0.5)) * days * destMultiplier;
  const totalVehicleCost = vehicleCostPerDay * days;
  
  let addonCost = 0;
  if (addons.honeymoon) addonCost += 2500;
  if (addons.gondola) addonCost += 2000 * (adults + children);
  if (addons.rafting) addonCost += 1200 * adults;

  const grandTotal = Math.round(totalStayCost + totalVehicleCost + addonCost);
  const perPersonCost = Math.round(grandTotal / (adults + (children > 0 ? children * 0.5 : 0)));

  const handleCustomBooking = () => {
    onBookCustomTrip({
      title: `Custom ${days}-Day ${destination} Mountain Package`,
      state: destination,
      duration: `${days - 1}N / ${days}D`,
      stayCategory,
      adults,
      children,
      vehicle,
      calculatedTotal: grandTotal,
      perPersonCost
    });
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Keshav Tours! I want a custom quote:\n` +
      `📍 Destination: ${destination}\n` +
      `📅 Duration: ${days} Days\n` +
      `🏨 Category: ${stayCategory} (3★/4★)\n` +
      `👥 Travelers: ${adults} Adults, ${children} Children\n` +
      `🚗 Vehicle: ${vehicle}\n` +
      `💰 Estimated Budget: ₹${grandTotal.toLocaleString('en-IN')}\n` +
      `Please contact me with the final itinerary!`
    );
    window.open(`https://wa.me/919816012345?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-sky-700" />
            INSTANT ESTIMATOR &amp; ITINERARY BUILDER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Plan &amp; Calculate Your Mountain Trip
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Tailor your preferred destination, stay quality, and group size to receive an instant live price estimate.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Inputs (8 Columns) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Destination Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  1. Choose Destination
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Himachal Pradesh', label: 'Himachal' },
                    { id: 'Kashmir', label: 'Kashmir' },
                    { id: 'Combined', label: 'Both Circuit' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDestination(item.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        destination === item.id
                          ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Slider / Buttons */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-sky-500" />
                    2. Duration of Trip
                  </label>
                  <span className="text-sm font-extrabold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {days} Days ({days - 1} Nights)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[4, 6, 8, 10].map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        days === d
                          ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Stay Tier */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-sky-500" />
                  3. Accommodation Standard
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Standard', label: 'Standard 3★', sub: 'Comfort rooms' },
                    { id: 'Deluxe', label: 'Deluxe 4★', sub: 'Valley View & Houseboat' },
                    { id: 'Luxury', label: 'Luxury 5★', sub: 'Heritage Resorts' }
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setStayCategory(t.id)}
                      className={`py-2 px-2.5 rounded-xl text-left border transition-all ${
                        stayCategory === t.id
                          ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold">{t.label}</p>
                      <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{t.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Travelers Count */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-sky-500" />
                  4. Number of Travelers
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-800">Adults (12+ yrs)</p>
                      <p className="text-[10px] text-slate-500">Full bed &amp; meals</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="text-sm font-extrabold text-slate-900 w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-800">Children (5-11 yrs)</p>
                      <p className="text-[10px] text-slate-500">Shared room with extra bed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="text-sm font-extrabold text-slate-900 w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-sky-500" />
                  5. Dedicated Mountain Vehicle
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Sedan', label: 'Sedan (Dzire)', cap: 'Up to 3 guests' },
                    { id: 'Innova', label: 'Innova Crysta', cap: 'Up to 6 guests' },
                    { id: 'Tempo', label: 'Tempo Traveller', cap: '7 to 12 guests' }
                  ].map(v => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVehicle(v.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        vehicle === v.id
                          ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold">{v.label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{v.cap}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Checklist */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Optional Inclusions
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={addons.honeymoon}
                      onChange={(e) => setAddons({ ...addons, honeymoon: e.target.checked })}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span>Honeymoon Special (Candlelight dinner, flower bed decoration &amp; cake) (+₹2,500)</span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={addons.gondola}
                      onChange={(e) => setAddons({ ...addons, gondola: e.target.checked })}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span>Gulmarg Gondola Phase 1 &amp; Phase 2 Confirmed Passes (+₹2,000/person)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Price Summary & Book Actions (5 Columns) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-dark to-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">Estimated Summary</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                    100% Transparent
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Destination:</span>
                    <span className="font-semibold text-white">{destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <span className="font-semibold text-white">{days} Days / {days - 1} Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hotel Standard:</span>
                    <span className="font-semibold text-white">{stayCategory} Category</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Guests:</span>
                    <span className="font-semibold text-white">{adults} Adults, {children} Kids</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vehicle:</span>
                    <span className="font-semibold text-white">Private {vehicle}</span>
                  </div>
                </div>

                {/* Inclusions summary pills */}
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1.5 mb-6 text-[11px] text-slate-300">
                  <p className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    Includes Daily Breakfast &amp; Dinners
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    Includes All Tolls, Parking &amp; Driver Allowance
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    24/7 Local Support Coordinator
                  </p>
                </div>
              </div>

              {/* Total Calculation Display */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs text-slate-400">Estimated Total Trip Cost:</span>
                  <span className="text-3xl font-black text-amber-400">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 text-right mb-6">
                  Approx. ₹{perPersonCost.toLocaleString('en-IN')} / person (ex-taxes)
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCustomBooking}
                    className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Reserve / Book Custom Itinerary</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleWhatsAppQuote}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to WhatsApp for Instant Itinerary</span>
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-sky-400" />
                  Zero cancellation charges up to 7 days before journey.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

