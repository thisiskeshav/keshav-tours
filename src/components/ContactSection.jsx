import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle, ChevronDown, ChevronUp, Sparkles, ShieldCheck } from 'lucide-react';
import { companyInfo, faqsData, handleImageError } from '../data/travelData';
import { saveInquiryToSupabase } from '../supabaseClient';

export default function ContactSection({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: 'Himachal Pradesh',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    await saveInquiryToSupabase(formData);
    setFormSent(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      phone: '',
      destination: 'Himachal Pradesh',
      message: ''
    });
  };

  return (
    <>
      {/* Ready for Your Next Adventure Banner (Direct match to reference bottom banner!) */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background panoramic mountain image with rich teal/navy gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35672518/pexels-photo-35672518.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Scenic Dal Lake and Snow Peaks"
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-sky-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-widest mb-2">
                <span className="w-6 h-[2px] bg-amber-400"></span>
                READY FOR YOUR NEXT ADVENTURE?
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mb-3">
                Let's Plan Your Dream Himalayan Trip Today!
              </h2>
              <p className="text-base sm:text-lg text-slate-200">
                Get in touch with our mountain travel experts for custom itineraries, group discounts, and confirmed resort bookings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(null)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                Plan Your Trip &rarr;
              </button>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & FAQs Section */}
      <section id="contact" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 6 Columns: Contact Details & Quick Inquiry Form */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="w-8 h-[2px] bg-sky-500"></span>
                  GET IN TOUCH
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  We're Here to Help You Journey Through the Mountains
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Whether you have questions about road conditions, snow seasons, or want a customized quote, reach out to our team.
                </p>
              </div>

              {/* Direct Support Email & Phone Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`mailto:${companyInfo.email}`} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3 hover:border-sky-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs min-w-0">
                    <p className="text-slate-500 font-medium">Email Support</p>
                    <p className="font-bold text-slate-900 group-hover:text-sky-600 truncate">{companyInfo.email}</p>
                  </div>
                </a>
                <a href={`tel:${companyInfo.phone}`} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3 hover:border-sky-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs min-w-0">
                    <p className="text-slate-500 font-medium">24/7 Helpline</p>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-600 truncate">{companyInfo.phone}</p>
                  </div>
                </a>
              </div>

              {/* Office Locations Grid */}
              <div className="space-y-3">
                {companyInfo.offices.map((office, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <h4 className="font-bold text-slate-900 text-sm">{office.city}</h4>
                      <p className="text-slate-600 mt-0.5">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="text-sky-600 font-bold hover:underline block mt-1">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Inquiry Form */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-4 font-display flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Request a Quick Callback
                </h4>

                {formSent ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your request has been received. Our travel expert will call you shortly on your number.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Amit Verma"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">WhatsApp Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">Interested Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="Himachal Pradesh">Himachal Pradesh (Manali, Shimla, Dharamshala)</option>
                        <option value="Kashmir">Kashmir (Srinagar, Gulmarg, Pahalgam, Sonamarg)</option>
                        <option value="Spiti Valley">Spiti Valley High Altitude Expedition</option>
                        <option value="Both Himachal & Kashmir">Combined Grand Circuit</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">Message / Requirements</label>
                      <textarea
                        rows="2"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Planning a 6-day family trip in December with 4 adults..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-70"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Saving to Database...' : 'Submit Inquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right 6 Columns: Frequently Asked Questions */}
            <div className="lg:col-span-6">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="w-8 h-[2px] bg-sky-500"></span>
                  HAVE QUESTIONS?
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  Frequently Asked Questions
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Helpful answers for planning a smooth, comfortable mountain vacation in Himachal &amp; Kashmir.
                </p>
              </div>

              <div className="space-y-4">
                {faqsData.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900"
                      >
                        <span>{faq.question}</span>
                        <span className="text-sky-600 shrink-0">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Call support card */}
              <div className="mt-8 p-6 bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl text-white shadow-xl shadow-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-base font-display">Have a Unique Requirement?</h4>
                  <p className="text-xs text-sky-100 mt-0.5">Speak directly to our Himalayan operations director</p>
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="px-5 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs shrink-0 flex items-center gap-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

