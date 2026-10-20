import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto py-6 border-b border-slate-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-500">CAR SCRAP HUB</h1>
        <a 
          href="https://wa.me/919876543210?text=I%20need%20second-hand%20auto%20parts" 
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium text-sm"
        >
          Instant WhatsApp Quote
        </a>
      </header>

      {/* Hero Banner */}
      <section className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Buy Original Second-Hand Parts With Video Verification Before Payment
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Watch actual part testing videos, check genuine prices, and get original Swift, i20, Creta, Scorpio, and Bolero parts delivered directly to your garage.
        </p>

        {/* Featured Regional Buying Guides Section */}
        <div className="mt-12 bg-slate-900 border border-amber-500/30 p-6 rounded-2xl text-left">
          <span className="bg-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Latest High-Demand Stock & Price Guides
          </span>
          <h3 className="text-xl font-bold mt-3 mb-2 text-white">
            Mahindra Scorpio & Bolero Engine Parts Guide (Mayapuri & Moradabad Yards)
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Check mHawk 2.2L & m2DiCR engine prices, ECU testing proof, and complete RTO scrapping clearance steps.
          </p>
          <Link 
            href="/blog/scorpio-bolero-engine-parts"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all"
          >
            Read Complete Scorpio & Bolero Buying Guide →
          </Link>
        </div>
      </section>
    </main>
  );
}
