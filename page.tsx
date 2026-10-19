'use client';

import React, { useState } from 'react';

export default function CarScrapBlogHome() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Direct WhatsApp API Link Integration
  const whatsappNumber = "916395948240"; 
  const defaultWhatsAppUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent("Hi Car Scrap Hub, I want to inquire about second-hand auto spare parts.")}`;

  const categories = ['All', 'Engine & Transmission', 'Body Parts', 'Lights & Electrical', 'Suspension'];

  const blogPosts = [
    {
      id: 1,
      title: "Original Maruti Swift Dzire Engine (2018-2022) - Testing Video Included",
      category: "Engine & Transmission",
      price: "₹24,500",
      location: "Moradabad / Delhi NCR Delivery",
      date: "Oct 2026",
      condition: "Tested - 85% Life Remaining",
      image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=60",
      desc: "Verified Maruti Swift Dzire engine scrap part. Fully tested with video proof before delivery in Moradabad & Delhi NCR."
    },
    {
      id: 2,
      title: "Mayapuri vs Moradabad Auto Scrap Market: Where to Buy Genuine i20 Spare Parts?",
      category: "Body Parts",
      price: "Price Analysis Guide",
      location: "Mayapuri & UP North",
      date: "Oct 2026",
      condition: "Buying Guide & Direct Quotes",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60",
      desc: "Complete price comparison between Delhi Mayapuri and Moradabad scrap hubs for bumpers, headlights, and doors."
    },
    {
      id: 3,
      title: "Hyundai Creta Original LED Headlight Pair (Scratchless Original Glass)",
      category: "Lights & Electrical",
      price: "₹8,200",
      location: "Moradabad Warehouse",
      date: "Oct 2026",
      condition: "Like New - 100% Genuine",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=60",
      desc: "Original factory fitted LED headlight assembly. Tested matrix bulbs and zero clip damages."
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-slate-950 text-xs sm:text-sm font-bold py-2 px-4 text-center">
        ⚡ 100% Tested Second Hand Parts with Video Proof & Cash on Delivery Available in NCR / UP!
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="text-amber-500">CAR SCRAP</span> HUB
            </h1>
            <p className="text-xs text-slate-400">Verified Auto Parts Marketplace</p>
          </div>
          <a 
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/30 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>💬</span> Instant WhatsApp Quote
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Banner */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <p className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">India's Most Trusted Auto Scrap Hub</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Buy Original Second-Hand Parts <br className="hidden sm:inline" /> With Video Verification Before Payment
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mb-6">
            Watch actual part testing videos, check genuine prices, and get original Swift, i20, Creta, and Scorpio parts delivered directly to your garage.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">✅ 100% Original OEM Parts</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">🎥 Video Testing Proof</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">🚚 Express NCR & UP Delivery</span>
          </div>
        </section>

        {/* Category Filters */}
        <section className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const itemWhatsAppUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Hi, I am interested in: ${post.title} (${post.price}). Is it available?`)}`;
            return (
              <article key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <div className="relative h-48 bg-slate-950 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-slate-950/90 text-amber-400 font-bold text-xs px-2.5 py-1 rounded-md border border-amber-500/30">
                      {post.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                      <span>📍 {post.location}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug hover:text-amber-400 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-4">
                      {post.desc}
                    </p>
                    <div className="text-xs text-slate-300 font-medium bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80 mb-4">
                      🔧 Condition: <span className="text-amber-400">{post.condition}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={itemWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white text-center py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <span>💬</span> Inquire Price on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>© 2026 Car Scrap Hub. Premium Second Hand Spare Parts Marketplace.</p>
        </div>
      </footer>
    </div>
  );
}
