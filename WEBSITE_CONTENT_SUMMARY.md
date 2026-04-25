# Website Content Summary

## Overview
- **Website owner**: Adam Zasada
- **Primary positioning**: Product Leader | Senior PM, Payments at Dropbox
- **Core domains**: Payments, fintech, Web3, AI
- **Design style**: Clean white base, glassmorphism cards, gradient CTA block, strong visual hierarchy in Experience section

## Main Page Structure (`nextjs-app/src/app/page.tsx`)

### 1. Hero
- Name heading: **Adam Zasada**
- Subtitle: **Product Leader | Senior PM, Payments at Dropbox**
- Profile image displayed from `/adam.jpg`

### 2. Track Record
- Core statement: product leadership across payments, fintech, Web3, and AI
- Key proof points:
  - Delivered core infrastructure for a **€450M platform**
  - Drove **$50M monthly transaction volume** at Hinkal

### 3. About Highlights
- **Zero to Scale**: Co-founded 0xKYC; built zero-knowledge identity infrastructure
- **Enterprise Ready**: Banking-grade infrastructure; KYC across global jurisdictions; SDK used by Request Finance, backed by Binance
- **Market Leadership**: Scaled Elympics from 300 to 10,000 users; led product at BabyDoge across Solana, BSC, TON

### 4. Metric Tiles
- **€450M** — €450M BaaS Platform (Vodeno)
- **$50M** — $50M Monthly Volume (Hinkal)
- **3** — Launchpads (SOL, BSC, TON)

### 5. Experience Section
Structured into three rows with hierarchy:

#### Featured (Row 1)
- **Dropbox** — Senior Product Manager, Payments  
  Payments strategy/execution for global SaaS; focus on routing, fraud prevention, user experience
- **0xKYC** — CEO & Co-Founder  
  Zero-knowledge identity protocol; led 10-person team (7 full-time); raised $200K; Onfido partnership
- **Hinkal** — Ecosystem & Product Lead  
  Privacy SDK used by Request Finance; $50M monthly volume; backed by Binance and Draper Associates

#### Core (Row 2)
- **Vodeno** — Product Owner  
  Core infra for €450M platform powering UniCredit and Revolut; led cross-functional team of 10 engineers
- **Nuri (now Bitwala)** — Product Manager, Platform (crypto banking & payments)  
  Backend product for cards/payments/core banking; contributed to KYC implementation; product strategy in regulated fintech
- **Soul Agents** — Founder  
  Built AI brand agents product on Base; led product/GTM/engineering; trading feature placed 3rd at Brian AI Hackathon

#### Additional (Row 3)
- **BabyDoge** — Product Lead  
  Product/GTM for token launchpads; AI agents for chat and trading interfaces
- **Elympics** — Associate to CEO  
  Scaled community 300→10,000; increased daily gameplay to 20,000; built strategic partnerships

### 6. Value Proposition Blocks
- **Proven Results**
  - €450M platform; led 10-person cross-functional teams
  - Produced large-scale events (1,000+ attendees); built multi-platform digital communities
- **Enterprise Ready**
  - Banking: KYC, SEPA, payments, cards
  - Web3: ZK identity, DeFi SDKs, launchpads, AI agents, privacy infrastructure
  - AI: AI-enabled apps/dApps, automation systems, applied AI infrastructure
- **Market Position**
  - Built and led cross-functional teams across Web3 and fintech
  - First-principles product design
  - From zero to paying users; weekly releases; disciplined execution

### 7. CTA and Contact
- CTA headline: **Ready to build something that matters?**
- CTA subtext: **Let’s move from vision to execution.**
- Primary contact buttons:
  - Telegram: `https://t.me/adag1oeth`
  - X (Twitter): `https://x.com/adag1oeth`
  - Farcaster: `https://farcaster.xyz/adag1o.eth`
- Additional social links:
  - GitHub: `https://github.com/adag1oeth`
  - LinkedIn: `https://linkedin.com/in/adag1oeth`
  - Medium: `https://adamzasada.medium.com/`

### 8. Footer
- Copyright: **© 2026 Adam Zasada. Product Leader & Founder.**
- Creative identity line: **Music producer — listen on Spotify**
- Spotify link: `https://open.spotify.com/artist/5vkTq36ZbhBhO2BAhnH01E`

## SEO / Metadata (`nextjs-app/src/app/layout.tsx`)
- Metadata title: Adam Zasada | Senior Product Manager, Payments at Dropbox | Product Leader
- Metadata description aligned to current positioning and core metrics (€450M, $50M)
- OpenGraph and Twitter cards configured with profile image `/adag1o.jpg`
- Canonical URL: `https://adamzasada.com`
- Robots configured for index/follow
- JSON-LD Person schema includes:
  - Job title at Dropbox
  - Links to X, LinkedIn, GitHub, Spotify
  - `worksFor`: Dropbox
  - `foundedOrganization`: 0xKYC

## Analytics and Consent

### Google Analytics
- GA script loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present
- `gtag` initialized in `layout.tsx`
- Contact/social click tracking via `trackContactClick` in `page.tsx`

### Vercel Analytics
- `@vercel/analytics` and `@vercel/speed-insights` rendered through `ConditionalAnalytics`

### Cookie Banner
- `SimpleCookieBanner` shown when consent is not yet set in localStorage
- Accept/Decline options persist consent state

## Global Styling and Assets
- Tailwind-based styling with custom inline gradients/shadows
- Main content now uses a clean white base in page content
- Public assets include:
  - Profile and branding images (`adam.jpg`, `adag1o.jpg`, `adag1o_transparent.png`)
  - Social SVG icons (Telegram, X, Farcaster)
  - Web manifest and favicon

## Technical Stack Snapshot
- Next.js 16.1.6
- React 19
- TypeScript
- Tailwind CSS
- ESLint (flat config)

