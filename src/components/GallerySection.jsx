import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData, handleImageError } from '../data/travelData';

export default function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredPhotos = filter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <>
      <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle Glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
                <span className="w-8 h-[2px] bg-sky-400"></span>
                CAPTURED MOMENTS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Himalayan Photo Gallery
              </h2>
              <p className="mt-3 text-base text-slate-300 max-w-2xl">
                Witness real glimpses of snow clad peaks, traditional Dal Lake houseboats, pine valleys, and happy travelers.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="mt-6 md:mt-0 flex items-center gap-2">
              {['All', 'Kashmir', 'Himachal'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === cat
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat === 'All' ? 'All Moments' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 cursor-pointer border border-slate-700/60 shadow-md hover:shadow-glow transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <p className="text-xs font-bold text-white line-clamp-1">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-slate-900 text-white">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{lightboxImg.category} &bull; {lightboxImg.tag}</span>
                <h4 className="text-lg font-bold mt-1">{lightboxImg.title}</h4>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="px-4 py-2 rounded-full bg-sky-500 text-white text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

