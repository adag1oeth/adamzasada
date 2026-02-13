'use client';

import { Suspense, memo } from 'react';
import Image from 'next/image';
import { trackContactClick } from '@/lib/analytics';

// Memoized components for better performance
const ProfileImage = memo(function ProfileImage() {
  return (
    <div className="w-32 h-32 mx-auto relative group">
      <Image 
        src="/adam.jpg" 
        alt="Adam Zasada - Product Leader & Banking Infrastructure Architect" 
        width={128}
        height={128}
        className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white/50 transition-transform duration-300 group-hover:scale-105"
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  );
});

const SectionIcon = memo(function SectionIcon({
  label,
  colorClass,
}: {
  label: string;
  colorClass: string;
}) {
  return (
    <div className={`w-10 h-10 ${colorClass} rounded-lg flex items-center justify-center text-white text-xs font-semibold tracking-wide shadow-sm`}>
      {label}
    </div>
  );
});

const ExperienceCard = memo(function ExperienceCard({
  href,
  icon,
  title,
  role,
  description,
  colorClasses,
  variant = 'standard',
}: {
  href?: string;
  icon: string;
  title: string;
  role: string;
  description: string | React.ReactNode;
  colorClasses: string;
  variant?: 'featured' | 'standard';
}) {
  const isFeatured = variant === 'featured';

  const CardContent = (
    <div
      className={`group block ${colorClasses} rounded-xl border transition-all duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-full ${
        isFeatured
          ? 'p-5 shadow-xl hover:shadow-2xl min-h-[240px]'
          : 'p-5 shadow-md hover:shadow-lg min-h-[220px]'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white text-sm font-semibold tracking-wide shadow-md group-hover:shadow-lg transition-shadow">
          {icon}
        </div>
        <div>
          <h3 className={`font-bold transition-colors ${isFeatured ? 'text-slate-950' : 'text-slate-900'} group-hover:text-black`}>
            {title}
          </h3>
          <p className="text-sm text-slate-800 font-medium">{role}</p>
        </div>
      </div>
      <div className="text-sm text-slate-800 leading-relaxed font-medium max-w-[38ch]">{description}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${title}`}>
        {CardContent}
      </a>
    );
  }

  return CardContent;
});

const ContactButton = memo(function ContactButton({
  href,
  icon,
  text,
  variant = 'primary',
  onClick
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) {
  const isPrimary = variant === 'primary';
  
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400/50"
      style={{
        background: isPrimary 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)'
          : 'linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isPrimary 
          ? '1px solid rgba(255,255,255,0.3)'
          : '1px solid rgba(255,255,255,0.1)',
        boxShadow: isPrimary
          ? '0 8px 32px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.1)'
          : '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
        color: isPrimary 
          ? 'rgba(30, 41, 59, 0.9)'
          : 'rgba(255, 255, 255, 0.95)'
      }}
      onClick={onClick}
      aria-label={`Contact via ${text}`}
      onMouseEnter={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'scale(1.05) translateY(-2px)';
        target.style.boxShadow = isPrimary
          ? '0 12px 40px rgba(59, 130, 246, 0.2), 0 4px 16px rgba(59, 130, 246, 0.15)'
          : '0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'scale(1) translateY(0)';
        target.style.boxShadow = isPrimary
          ? '0 8px 32px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.1)'
          : '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)';
      }}
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span 
        className="transition-all duration-300"
        style={{
          background: isPrimary 
            ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: isPrimary ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
          backgroundClip: 'text'
        }}
      >
        {text}
      </span>
    </a>
  );
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header Section */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="text-center space-y-6">
          <Suspense fallback={<div className="w-32 h-32 mx-auto bg-slate-200 rounded-2xl animate-pulse" />}>
            <ProfileImage />
          </Suspense>
          
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Adam Zasada
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-6 tracking-wide">
              Product Leader | Senior PM, Payments at Dropbox
            </h2>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12" aria-labelledby="about-heading">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/60 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Track Record
              </h2>
              <div className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium space-y-2">
                <p>Product leader across payments, fintech, Web3, and AI. Proven execution at scale.</p>
                <p>Delivered core infrastructure for a €450M platform.</p>
                <p>Drove $50M in monthly transaction volume at Hinkal.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8 text-slate-800 text-lg leading-relaxed">
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-200/50 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-3">
                    <SectionIcon label="ZS" colorClass="bg-blue-500" />
                    Zero to Scale
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed">
                    Co-founded 0xKYC. Built and shipped zero-knowledge identity infrastructure.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-200/50 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-3">
                    <SectionIcon label="ER" colorClass="bg-emerald-500" />
                    Enterprise Ready
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed">
                    Banking-grade infrastructure. KYC systems across global jurisdictions. SDK used by Request Finance, backed by Binance.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-3">
                      <SectionIcon label="ML" colorClass="bg-violet-500" />
                      Market Leadership
                    </h3>
                    <p className="text-slate-600 font-normal leading-relaxed">
                      Scaled Elympics from 300 to 10,000 users. Led product at BabyDoge across Solana, BSC, and TON.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="group text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    €450M
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(30, 41, 59, 0.8)' }}>€450M BaaS Platform</div>
                  <div className="text-xs" style={{ color: 'rgba(30, 41, 59, 0.6)' }}>Vodeno</div>
                </div>
                <div 
                  className="group text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    $50M
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(30, 41, 59, 0.8)' }}>$50M Monthly Volume</div>
                  <div className="text-xs" style={{ color: 'rgba(30, 41, 59, 0.6)' }}>Hinkal</div>
                </div>
                <div 
                  className="group text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    3
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(30, 41, 59, 0.8)' }}>Launchpads</div>
                  <div className="text-xs" style={{ color: 'rgba(30, 41, 59, 0.6)' }}>SOL, BSC, TON</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-slate-200/90" />
      </div>

      {/* Experience Highlights */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12" aria-labelledby="experience-heading">
        <div className="text-center mb-8">
          <h2 id="experience-heading" className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ExperienceCard
              href="https://dropbox.com"
              icon="DB"
              title="Dropbox"
              role="Senior Product Manager, Payments"
            description="Payments product strategy and execution for a global SaaS platform, focused on global payment routing, fraud prevention, and user experience."
              colorClasses="bg-white border-slate-200/80"
              variant="featured"
            />

            <ExperienceCard
              href="https://0xkyc.id"
              icon="0x"
              title="0xKYC"
              role="CEO & Co-Founder"
              description="Zero-knowledge identity protocol. Led a 10-person team (7 full-time), raised $200K from Outlier Ventures, BuffiCorn Ventures, Celestia's CTO, and angels. Partnered with Onfido."
              colorClasses="bg-white border-slate-200/80"
              variant="featured"
            />

            <ExperienceCard
              href="https://hinkal.pro"
              icon="HK"
              title="Hinkal"
              role="Ecosystem & Product Lead"
              description="Privacy SDK, used by Request Finance, powering $50M in monthly transaction volume. Worked with DeFi industry leaders. Backed by Binance and Draper Associates."
              colorClasses="bg-white border-slate-200/80"
              variant="featured"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ExperienceCard
              href="https://vodeno.com"
              icon="VD"
              title="Vodeno"
              role="Product Owner"
              description="Delivered core infrastructure for a €450M platform powering UniCredit and Revolut. Led cross-functional teams of 10 engineers."
              colorClasses="bg-slate-50/70 border-slate-200/80"
            />

            <ExperienceCard
              href="https://bitwala.com"
              icon="NB"
              title="Nuri (now Bitwala)"
              role="Product Manager, Platform (crypto banking & payments)"
              description="Led backend product development for cards, payments, and core banking systems at a regulated crypto bank. Contributed to implementation of KYC flows. Drove product strategy for a regulated fintech."
              colorClasses="bg-slate-50/70 border-slate-200/80"
            />

            <ExperienceCard
              icon="SA"
              title="Soul Agents"
              role="Founder"
              description="Built an AI brand agents product on Base. Led product, GTM, and engineering. Solo-built a trading feature that placed third at Brian AI Hackathon."
              colorClasses="bg-slate-50/70 border-slate-200/80"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-4xl md:mx-auto">
            <ExperienceCard
              href="https://babydoge.com"
              icon="BD"
              title="BabyDoge"
              role="Product Lead"
              description="Led product and GTM for Solana, BSC, and TON token launchpads. Built AI agents for chat and trading interfaces with weekly releases."
              colorClasses="bg-slate-50/70 border-slate-200/80"
            />

            <ExperienceCard
              href="https://elympics.ai"
              icon="EL"
              title="Elympics"
              role="Associate to CEO"
              description="Scaled community from 300 to 10,000 users and increased daily gameplay to 20,000. Built strategic partnerships with leading Web3 brands."
              colorClasses="bg-slate-50/70 border-slate-200/80"
            />
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12" aria-labelledby="collaboration-heading">
        <div className="text-center mb-8">
          <h2 id="collaboration-heading" className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Value Proposition
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-slate-200/60">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <SectionIcon label="PR" colorClass="bg-blue-500" />
              Proven Results
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li><strong className="text-slate-800">Scale:</strong> €450M platform, led 10-person cross-functional teams</li>
              <li><strong className="text-slate-800">Growth:</strong> Produced large-scale events (1,000+ attendees) and built multi-platform digital communities.</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-slate-200/60">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <SectionIcon label="ER" colorClass="bg-emerald-500" />
              Enterprise Ready
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li><strong className="text-slate-800">Banking:</strong> KYC, SEPA, payments, cards</li>
              <li><strong className="text-slate-800">Web3:</strong> ZK identity, DeFi SDKs, launchpads, AI agents, privacy infrastructure</li>
              <li><strong className="text-slate-800">AI:</strong> AI-enabled apps and dApps, automation systems, and applied AI infrastructure.</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-slate-200/60">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <SectionIcon label="MP" colorClass="bg-violet-500" />
              Market Position
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li><strong className="text-slate-800">Leadership:</strong> Built and led cross-functional teams across Web3 and fintech</li>
              <li><strong className="text-slate-800">Innovation:</strong> First-principles product design</li>
              <li><strong className="text-slate-800">Execution:</strong> From zero to paying users. Weekly releases. Disciplined execution.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12" aria-labelledby="contact-heading">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-700 to-blue-700 rounded-3xl blur-xl opacity-55"></div>
          <div className="relative bg-gradient-to-r from-slate-600 via-slate-700 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl border border-slate-200/20">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-700/82 via-slate-700/82 to-blue-700/82 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Ready to build something that matters?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
                Let&apos;s move from vision to execution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <ContactButton
                  href="https://t.me/adag1oeth"
                  icon={
                    <Image 
                      src="/telegram.svg" 
                      alt="Telegram" 
                      width={24}
                      height={24}
                      className="w-6 h-6 invert"
                    />
                  }
                  text="Telegram"
                  variant="secondary"
                  onClick={() => trackContactClick({ contact_method: 'telegram', contact_location: 'cta_section' })}
                />
                
                <ContactButton
                  href="https://x.com/adag1oeth"
                  icon={
                    <Image 
                      src="/x.svg" 
                      alt="X (Twitter)" 
                      width={24}
                      height={24}
                      className="w-6 h-6 invert"
                    />
                  }
                  text="X (Twitter)"
                  variant="secondary"
                  onClick={() => trackContactClick({ contact_method: 'twitter', contact_location: 'cta_section' })}
                />

                <ContactButton
                  href="https://farcaster.xyz/adag1o.eth"
                  icon={
                    <Image 
                      src="/farcaster.svg" 
                      alt="Farcaster" 
                      width={24}
                      height={24}
                      className="w-6 h-6 invert"
                    />
                  }
                  text="Farcaster"
                  variant="secondary"
                  onClick={() => trackContactClick({ contact_method: 'farcaster', contact_location: 'cta_section' })}
                />

              </div>

              <div className="flex gap-6 justify-center">
                {[
                  { href: "https://github.com/adag1oeth", icon: "github", label: "GitHub" },
                  { href: "https://linkedin.com/in/adag1oeth", icon: "linkedin", label: "LinkedIn" },
                  { href: "https://adamzasada.medium.com/", icon: "medium", label: "Medium Blog" }
                ].map(({ href, icon, label }) => (
                  <a 
                    key={icon}
                    href={href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-700 rounded-lg p-2"
                    aria-label={label}
                    onClick={() => trackContactClick({ contact_method: icon as 'github' | 'linkedin' | 'medium', contact_location: 'footer_social' })}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      {icon === 'github' && <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />}
                      {icon === 'linkedin' && <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />}
                      {icon === 'medium' && <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-slate-800" role="contentinfo">
        <p className="text-base font-medium text-slate-600">
          © 2026 Adam Zasada. Product Leader & Founder.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Music producer — <a href="https://open.spotify.com/artist/5vkTq36ZbhBhO2BAhnH01E" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700 transition-colors">listen on Spotify</a>
        </p>
      </footer>
    </div>
  );
}
