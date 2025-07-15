import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsentBanner from '@/components/CookieConsent';
import ConditionalAnalytics from '@/components/ConditionalAnalytics';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adamzasada.com'),
  title: {
    default: "Adam Zasada | Product Leader, Founder & GTM Advisor | Web3 Infrastructure",
    template: "%s | Adam Zasada"
  },
  description: "Product leader who delivered core infrastructure for €450M-backed platform and raised $200K for zero-knowledge protocols. 8+ years building Web3 products at Vodeno, BabyDoge, 0xKYC. Warsaw-based.",
  keywords: [
    "Product Leadership",
    "Banking Infrastructure", 
    "Payments Architecture",
    "Web3 Product Management",
    "Zero Knowledge Protocols",
    "KYC Systems",
    "Digital Identity",
    "Crypto Payments",
    "Financial Technology",
    "Blockchain Product Strategy",
    "AI Trading Agents",
    "Warsaw Tech Leader",
    "Poland Fintech",
    "SEPA Payments",
    "Core Banking Integration"
  ].join(", "),
  authors: [{ 
    name: "Adam Zasada",
    url: "https://adamzasada.com"
  }],
  creator: "Adam Zasada",
  publisher: "Adam Zasada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Business",
  openGraph: {
    type: "profile",
    title: "Adam Zasada | Product Leader, Founder & GTM Advisor | Web3 Infrastructure",
    description: "Builder of €450M banking platforms and zero-knowledge protocols. Led product teams at Vodeno, Bitwala, and founded 0xKYC ($200K raised from Outlier Ventures).",
    url: "https://adamzasada.com",
    siteName: "Adam Zasada Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/adag1o.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Zasada - Product Leader and Banking Infrastructure Architect",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adag1oeth",
    creator: "@adag1oeth",
    title: "Adam Zasada | Product Leader, Founder & GTM Advisor | Web3 Infrastructure",
    description: "Product leader who delivered core infrastructure for €450M-backed platform and raised $200K for zero-knowledge protocols. Warsaw-based Web3 product expert.",
    images: {
      url: "/adag1o.jpg",
      alt: "Adam Zasada - Product Leader and Banking Infrastructure Architect",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token_here", // Add when you have Google Search Console
  },
  alternates: {
    canonical: "https://adamzasada.com",
    languages: {
      'en-US': 'https://adamzasada.com',
      'pl-PL': 'https://adamzasada.com/pl', // Future Polish version
    },
  },
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//soundcloud.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//telegram.org" />
        
        {/* Viewport and theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adam Zasada",
              "jobTitle": "Product Leader, Founder & GTM Advisor",
              "description": "Builder of €450M banking platforms and zero-knowledge protocols",
              "url": "https://adamzasada.com",
              "image": "https://adamzasada.com/adag1o.jpg",
              "sameAs": [
                "https://twitter.com/adag1oeth",
                "https://linkedin.com/in/adag1oeth",
                "https://github.com/adag1oeth",
                "https://soundcloud.com/adamrulesmusic"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Warsaw",
                "addressCountry": "Poland"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "London School of Economics"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Soul Agents",
                  "url": "https://soulagents.io"
                }
              ],
              "foundedOrganization": [
                {
                  "@type": "Organization",
                  "name": "0xKYC",
                  "url": "https://0xkyc.id"
                },
                {
                  "@type": "Organization", 
                  "name": "Soul Agents",
                  "url": "https://soulagents.io"
                }
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-yellow-100 via-white to-orange-100 selection:bg-slate-200 selection:text-slate-900`}
        suppressHydrationWarning
      >
        <main id="main-content" role="main">
          {children}
        </main>
        
        {/* GDPR-Compliant Analytics - Only loads with consent */}
        <ConditionalAnalytics />
        
        {/* Cookie Consent Banner for EU Users */}
        <CookieConsentBanner />
        
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
