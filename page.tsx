'use client';

import React, { useState } from 'react';

export default function CarScrapBlogHome() {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      image: "/swift-engine.jpeg",
      videoUrl: "",
      desc: "es engine me se apni car ke liye koi bhi part buy kare.",
    },
    {
      id: 2,
      title: "Mayapuri vs Moradabad Auto Scrap Market: Where to Buy Genuine i20 Spare Parts?",
      category: "Body Parts",
      price: "Guide",
      location: "Mayapuri & UP North",
      date: "Oct 2026",
      condition: "Price Analysis Guide",
      image: "/all-engine-parts.jpeg",
      videoUrl: "",
      desc: "Complete price comparison between Delhi Mayapuri and Moradabad scrap hubs for bumpers, headlights, and doors.",
    },
    {
      id: 3,
      title: "Hyundai Creta Original LED Headlight Pair (Scratchless Original Glass)",
      category: "Lights & Electrical",
      price: "₹8,200",
      location: "Moradabad Warehouse",
      date: "Oct 2026",
      condition: "Like New - 100% Genuine",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      videoUrl: "",
      desc: "Original factory fitted LED headlight assembly. Tested matrix bulbs and zero clip damages.",
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      
      {/* Announcement Bar */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 text-center px-4">
        ⚡ 100% Tested Second Hand Parts with Video Proof & Cash on Delivery Available in NCR / UP!
      </div>

      {/* Main Navbar */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              ⚙️
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">CAR SCRAP <span className="text-amber-400">HUB</span></span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Verified Auto Parts Marketplace</span>
            </div>
          </div>

          <a 
            href="https://wa.me/919000000000?text=Hi,%20mujhe%20car%20part%20ka%20price%20jaanna%20hai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm shadow-md transition flex items-center gap-2"
          >
            <span>💬</span> <span className="hidden sm:inline">Instant</span> WhatsApp Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-12 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
            India's Most Trusted Auto Scrap Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Buy Original Second-Hand Parts <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              With Video Verification Before Payment
            </span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Watch actual part testing videos, check genuine prices, and get original Swift, i20, Creta, and Scorpio parts delivered directly to your garage.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-300 font-medium">
            <div className="bg-slate-900 px-3.5 py-2 rounded-lg border border-slate-800">✅ 100% Original OEM Parts</div>
            <div className="bg-slate-900 px-3.5 py-2 rounded-lg border border-slate-800">🎥 Video Testing Proof</div>
            <div className="bg-slate-900 px-3.5 py-2 rounded-lg border border-slate-800">🚚 Express NCR & UP Delivery</div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition ${
                selectedCategory === cat 
                  ? 'bg-amber-500 text-slate-950 shadow-md' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <main className="max-w-6xl mx-auto pb-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-48 bg-slate-950">
                  {post.videoUrl ? (
                    <video controls className="w-full h-full object-cover">
                      <source src={post.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  )}
                  <span className="absolute top-3 left-3 bg-slate-950/80 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-800">
                    {post.category}
                  </span>
                  {post.price !== 'Guide' && (
                    <span className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-lg">
                      {post.price}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center text-[11px] text-slate-400 mb-2">
                    <span>📍 {post.location}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{post.desc}</p>
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-[11px] text-amber-300 font-medium">
                    🛠️ Condition: {post.condition}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href={`https://wa.me/919000000000?text=Hi,%20mujhe%20is%20part%20ki%20detail%20chahiye:%20${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold py-2.5 rounded-xl text-xs transition border border-slate-700"
                >
                  💬 Inquire Price on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 border-t border-slate-900 text-center text-xs">
        <p>© 2026 Car Scrap Hub. Premium Second Hand Spare Parts Marketplace.</p>
      </footer>
    </div>
  );
}