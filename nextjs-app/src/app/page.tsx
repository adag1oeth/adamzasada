'use client';

import Image from 'next/image';
import { trackContactClick } from '@/lib/analytics';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-300/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto relative">
              <Image 
                src="/adag1o.jpg" 
                alt="Adam Zasada" 
                width={128}
                height={128}
                className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white/50"
                priority
              />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                Adam Zasada
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                Go-To-Market Advisor & Founder
              </p>
              <p className="text-lg text-slate-500 mt-2">
                Product & GTM Strategist | Web3, Infra, AI
              </p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6 text-slate-700 text-lg leading-relaxed">
                  <p className="text-xl font-medium text-slate-800">
                    I&apos;m a builder and strategist with 8+ years leading product and GTM for frontier tech spanning Web3, AI, and digital identity.
                  </p>
                  <p>
                    I&apos;ve co-founded and scaled products from zero to adoption, led ecosystem launches across Layer 2s and wallets, and built automation layers for growth.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Web3", "AI", "Product Strategy", "GTM", "Digital Identity", "Automation"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/30">
                    <div className="text-3xl font-bold text-blue-600">8+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/30">
                    <div className="text-3xl font-bold text-indigo-600">$200K</div>
                    <div className="text-sm text-slate-600">Funding Raised</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Experience Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-orange-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h3 className="font-semibold text-blue-800">Founder, 0xKYC</h3>
                </div>
                <p className="text-sm text-blue-700">
                  Raised <strong>$200k</strong> (Outlier Ventures, BuffiCorn Ventures, Celestia CTO and angels)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-violet-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌱</span>
                  <h3 className="font-semibold text-indigo-800">Growth Leader</h3>
                </div>
                <p className="text-sm text-indigo-700">
                  Scaled <strong>Elympics</strong> community from 300 to 10k
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-fuchsia-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🕵️‍♂️</span>
                  <h3 className="font-semibold text-purple-800">Ecosystem Lead, Hinkal</h3>
                </div>
                <p className="text-sm text-purple-700">
                  Privacy protocol strategy and partnerships
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-amber-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🐶</span>
                  <h3 className="font-semibold text-slate-800">Product Lead, BabyDoge</h3>
                </div>
                <p className="text-sm text-slate-700">
                  Shipped: Puppy.fun, Gas Pump, MakeNow.meme
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">How I Create Value</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  📈
                </div>
                <h3 className="text-xl font-bold text-slate-800">GTM Strategy</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li><strong className="text-blue-600">Zero to Launch GTM:</strong> Positioning, narrative, KPI architecture, launch calendar</li>
                <li><strong className="text-blue-600">KOL and Partnership Engine:</strong> Curated outreach to signed integrations and KOL pushes</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-indigo-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-slate-800">Product Growth</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li><strong className="text-indigo-600">Product-Market-Fit Acceleration:</strong> User-signal workshops, rapid roadmap cuts, live experiments</li>
                <li><strong className="text-indigo-600">Token and Community Strategy:</strong> Pre-TGE story, liquidity plan, post-launch retention</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process & Values */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ideal Partners */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-orange-100/50 dark:border-orange-500/20">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                Ideal Partners
              </h3>
              <ol className="space-y-2 text-slate-700 text-sm">
                <li>1. Seed to Series A crypto teams with a live product or TGE within 6 to 12 months</li>
                <li>2. A long-term value mindset (no quick pumps)</li>
                <li>3. Optional AI edge or stablecoin component</li>
              </ol>
            </div>

            {/* Process */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-violet-100/50 border-violet-200/30">
              <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Process
              </h3>
              <ol className="space-y-2 text-slate-700 text-sm">
                <li>1. <strong>Discovery Talk</strong> Telegram / X DM</li>
                <li>2. <strong>Discovery Call</strong> 30 min to align scope and goals</li>
                <li>3. <strong>Execute and Iterate</strong> async delivery, unblock fast</li>
              </ol>
            </div>

            {/* Values */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-fuchsia-100/50 border-fuchsia-200/30">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Non-Negotiables
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Transparent communication and clear decision-makers</li>
                <li>• User-centric, ethical roadmap</li>
                <li>• I only take projects I believe in</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="relative">
            {/* Background gradient with animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 rounded-3xl blur-xl opacity-75"></div>
            <div className="relative bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl border border-slate-200/20">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-700/90 via-blue-700/90 to-indigo-700/90 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  Drop a DM with one line on what you&apos;re building and why now.<br/>
                  <span className="font-semibold">If it clicks, we&apos;ll book the call.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="https://t.me/adag1oeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:scale-105"
                    onClick={() => trackContactClick({ contact_method: 'telegram', contact_location: 'cta_section' })}
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.036 15.956l-.396 3.72c.567 0 .813-.243 1.11-.535l2.664-2.52 5.52 4.032c1.012.558 1.74.264 1.992-.936l3.612-16.92c.33-1.53-.558-2.13-1.548-1.77L2.1 9.18c-1.488.594-1.47 1.44-.27 1.824l4.62 1.44 10.74-6.78c.504-.324.966-.144.588.18" />
                    </svg>
                    Telegram
                  </a>
                  
                  <a 
                    href="https://x.com/adag1oeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:scale-105"
                    onClick={() => trackContactClick({ contact_method: 'twitter', contact_location: 'cta_section' })}
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 5.924c-.793.352-1.644.59-2.538.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0015.5 4c-2.48 0-4.5 2.02-4.5 4.5 0 .352.04.696.116 1.024C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.436-.608 2.26 0 1.56.794 2.94 2.004 3.748-.736-.024-1.428-.226-2.034-.564v.056c0 2.18 1.552 4 3.612 4.416-.378.104-.776.16-1.188.16-.29 0-.57-.028-.844-.08.57 1.78 2.22 3.08 4.18 3.12A8.98 8.98 0 012 19.54c-.64 0-1.26-.038-1.872-.11A12.7 12.7 0 006.29 21.5c7.548 0 11.68-6.254 11.68-11.68 0-.18-.004-.36-.012-.54A8.18 8.18 0 0024 4.59a8.92 8.92 0 01-2.54.694z" />
                    </svg>
                    X (Twitter)
                  </a>
                </div>

                <div className="flex gap-6 justify-center">
                  <a 
                    href="https://github.com/adag1oeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="GitHub"
                    onClick={() => trackContactClick({ contact_method: 'github', contact_location: 'footer_social' })}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/adag1oeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                    onClick={() => trackContactClick({ contact_method: 'linkedin', contact_location: 'footer_social' })}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://adamzasada.medium.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="Medium Blog"
                    onClick={() => trackContactClick({ contact_method: 'medium', contact_location: 'footer_social' })}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-600">
          <p>© 2025 Adam Zasada. Building the future, one project at a time.</p>
        </footer>
      </div>
    </div>
  );
} 