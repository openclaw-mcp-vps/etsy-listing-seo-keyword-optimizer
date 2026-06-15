export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Etsy SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Rank Higher on Etsy.<br />
          <span className="text-[#58a6ff]">Sell More Every Day.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze Etsy search trends and competitor listings to discover high-converting keywords and get AI-crafted titles that drive real traffic to your shop.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200"
        >
          Start Optimizing — $13/mo
        </a>
        <p className="mt-4 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="text-white font-semibold mb-1">Keyword Discovery</h3>
            <p className="text-sm text-[#8b949e]">Uncover high-volume, low-competition keywords buyers are searching for right now.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Competitor Analysis</h3>
            <p className="text-sm text-[#8b949e]">See what top-ranking listings use and reverse-engineer their SEO strategy.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✍️</div>
            <h3 className="text-white font-semibold mb-1">Optimized Titles</h3>
            <p className="text-sm text-[#8b949e]">Get ready-to-use listing titles crafted to maximize click-through and conversions.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited keyword searches</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Competitor listing analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-optimized title generator</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Search volume &amp; competition scores</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Tag &amp; description suggestions</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the keyword optimizer work?</h3>
            <p className="text-sm text-[#8b949e]">You enter your product details and we analyze real Etsy search data and top competitor listings to surface the best keywords, complete with search volume and competition scores.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do I need any technical skills to use this?</h3>
            <p className="text-sm text-[#8b949e]">Not at all. Just describe your product, and the tool handles everything — keyword research, competitor analysis, and title generation — in seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. There are no long-term commitments. Cancel with one click from your account dashboard and you won't be charged again.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
