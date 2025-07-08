export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-blue-200 dark:bg-gradient-to-br dark:from-indigo-950 dark:via-blue-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center px-4 py-12 overflow-x-hidden">
        {/* Sunbeam effect for light mode */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="hidden dark:block absolute inset-0 w-full h-full">
            {/* Starry overlay for dark mode */}
            <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" style={{opacity:0.15}}>
              <defs>
                <radialGradient id="moonGlow" cx="70%" cy="20%" r="80%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="70%" cy="20%" r="300" fill="url(#moonGlow)" />
              {/* Random stars */}
              {Array.from({length: 40}).map((_,i) => (
                <circle key={i} cx={Math.random()*100+'%'} cy={Math.random()*100+'%'} r={Math.random()*1.2+0.3} fill="#fff" opacity={Math.random()*0.7+0.3} />
              ))}
            </svg>
          </div>
          <div className="block dark:hidden absolute left-1/2 top-[-10%] -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-yellow-200 via-yellow-100 to-transparent opacity-60 rounded-full blur-3xl" style={{filter:'blur(60px)'}} />
        </div>
        {/* Animated Gradient Background Blobs (with keyframes) */}
        <style>{`
          @keyframes blob1 {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(40px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 20px) scale(0.95); }
          }
          @keyframes blob2 {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(-30px, 40px) scale(1.08); }
            66% { transform: translate(20px, -20px) scale(0.97); }
          }
          .animate-blob1 { animation: blob1 18s ease-in-out infinite; }
          .animate-blob2 { animation: blob2 22s ease-in-out infinite; }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .fade-in-up {
            opacity: 0;
            transform: translateY(40px);
            animation: fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1) forwards;
          }
          .fade-in-up.delay-100 { animation-delay: .1s; }
          .fade-in-up.delay-200 { animation-delay: .2s; }
          .fade-in-up.delay-300 { animation-delay: .3s; }
          .fade-in-up.delay-400 { animation-delay: .4s; }
          .fade-in-up.delay-500 { animation-delay: .5s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-yellow-200 via-blue-100 to-yellow-100 dark:from-indigo-900 dark:via-blue-900 dark:to-gray-900 opacity-30 rounded-full blur-3xl animate-blob1" />
          <div className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-yellow-100 via-blue-100 to-blue-200 dark:from-blue-900 dark:via-gray-900 dark:to-indigo-900 opacity-30 rounded-full blur-3xl animate-blob2" />
        </div>

        {/* Header Section: Profile image left, info right (Notion style) */}
        <section className="w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 fade-in-up">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3 justify-center">
            <div className="text-7xl md:text-8xl mb-4 md:mb-0 select-none" aria-label="Avatar" role="img">🧑‍💻</div>
          </div>
          <div className="flex-1 w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">Adam Zasada</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">Fractional GTM & Marketing / Ecosystem Lead</h2>
            <p className="text-lg text-gray-700 mb-2">Product &amp; GTM Strategist | Web3, Infra, AI</p>
            <p className="text-base md:text-lg text-gray-800 mb-2">I'm a builder and strategist with 8+ years leading product and GTM for frontier tech — spanning Web3, AI, and digital identity.</p>
            <p className="text-base md:text-lg text-gray-800 mb-2">I've co-founded and scaled products from zero to adoption, led ecosystem launches across Layer 2s and wallets, and built automation layers for growth.</p>
            <ul className="text-left mx-auto max-w-md space-y-2 mb-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl shadow p-4 border border-blue-100 dark:border-gray-800">
              <li>🚀 <b>Founder, 0xKYC</b> — raised <b>$200k</b> (Outlier Ventures, BuffiCorn Ventures, Celestia CTO &amp; angels)</li>
              <li>🌱 Scaled <b>Elympics</b> community from 300 → 10k</li>
              <li>🕵️‍♂️ <b>Ecosystem &amp; Product Lead, Hinkal</b> (privacy protocol)</li>
              <li>🐶 <b>Product Lead at BabyDoge</b>, shipped: Puppy.fun · Gas Pump · MakeNow.meme</li>
              <li>🏦 Early roles at <b>Nuri / Vodeno</b> — infrastructure &amp; payments exposure</li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
            <path fill="#fff" fillOpacity="0.7" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
          </svg>
        </div>

        {/* Section: How I Create Value (as Notion card) */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-100">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">How I Create Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border-t-4 border-blue-400">
              <ul className="space-y-3">
                <li><span className="font-semibold text-blue-700">Zero → Launch GTM:</span> Positioning, narrative, KPI architecture, launch calendar</li>
                <li><span className="font-semibold text-blue-700">KOL &amp; Partnership Engine:</span> Curated outreach → signed integrations &amp; KOL pushes</li>
              </ul>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border-t-4 border-purple-400">
              <ul className="space-y-3">
                <li><span className="font-semibold text-purple-700">Product-Market-Fit Acceleration:</span> User-signal workshops, rapid roadmap cuts, live experiments</li>
                <li><span className="font-semibold text-purple-700">Token &amp; Community Strategy:</span> Pre-TGE story, liquidity plan, post-launch retention</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
            <path fill="#fff" fillOpacity="0.7" d="M0,48 C360,0 1080,80 1440,32 L1440,80 L0,80 Z" />
          </svg>
        </div>

        {/* Section: Ideal Partners */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-200">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Ideal Partners</h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border-l-4 border-blue-400">
            <li>Seed–Series A crypto teams with a live product or TGE within 6–12 months</li>
            <li>A long-term value mindset (no quick pumps)</li>
            <li>Optional AI edge or stablecoin component</li>
          </ol>
        </section>

        {/* Section: Engagement Process */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Engagement Process</h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border-l-4 border-purple-400">
            <li><b>Discovery Talk</b> — Telegram / X DM</li>
            <li><b>Discovery Call</b> — 30 min to align scope &amp; goals</li>
            <li><b>Execute &amp; Iterate</b> — async delivery, unblock fast</li>
          </ol>
        </section>

        {/* Section: Non-Negotiables */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-400">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Non-Negotiables</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border-l-4 border-blue-400">
            <li>Transparent communication &amp; clear decision-makers</li>
            <li>User-centric, ethical roadmap</li>
            <li>I only take projects I believe in</li>
          </ul>
        </section>

        {/* Section: Contact & Socials */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Let's talk</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
            <a href="https://t.me/adag1oeth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 hover:scale-105 focus:ring-4 focus:ring-blue-300 transition relative overflow-hidden group">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition bg-white rounded-lg blur-sm" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.036 15.956l-.396 3.72c.567 0 .813-.243 1.11-.535l2.664-2.52 5.52 4.032c1.012.558 1.74.264 1.992-.936l3.612-16.92c.33-1.53-.558-2.13-1.548-1.77L2.1 9.18c-1.488.594-1.47 1.44-.27 1.824l4.62 1.44 10.74-6.78c.504-.324.966-.144.588.18" /></svg>
              Telegram
            </a>
            <a href="https://x.com/adag1oeth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 hover:scale-105 focus:ring-4 focus:ring-gray-400 transition relative overflow-hidden group">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-white rounded-lg blur-sm" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.644.59-2.538.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0015.5 4c-2.48 0-4.5 2.02-4.5 4.5 0 .352.04.696.116 1.024C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.436-.608 2.26 0 1.56.794 2.94 2.004 3.748-.736-.024-1.428-.226-2.034-.564v.056c0 2.18 1.552 4 3.612 4.416-.378.104-.776.16-1.188.16-.29 0-.57-.028-.844-.08.57 1.78 2.22 3.08 4.18 3.12A8.98 8.98 0 012 19.54c-.64 0-1.26-.038-1.872-.11A12.7 12.7 0 006.29 21.5c7.548 0 11.68-6.254 11.68-11.68 0-.18-.004-.36-.012-.54A8.18 8.18 0 0024 4.59a8.92 8.92 0 01-2.54.694z" /></svg>
              X (DM): @adag1oeth
            </a>
          </div>
          <p className="text-gray-700">Drop a DM with one line on what you're building and why now.<br/>If it clicks, we book the call.</p>
        </section>

        {/* Section: More About Me */}
        <section className="w-full max-w-4xl mb-12 fade-in-up delay-600">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">💻 More About Me</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
            <a href="https://github.com/adag1oeth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 hover:scale-105 focus:ring-4 focus:ring-gray-400 transition relative overflow-hidden group">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-white rounded-lg blur-sm" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/azasada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 hover:scale-105 focus:ring-4 focus:ring-blue-300 transition relative overflow-hidden group">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-white rounded-lg blur-sm" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" /></svg>
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 