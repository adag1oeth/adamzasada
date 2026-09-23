import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SimpleCookieBanner from '@/components/SimpleCookieBanner';
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
    default: "Adam Zasada | Product Leader, Founder & Adam Rules",
    template: "%s | Adam Zasada"
  },
  description: "Adam Zasada is a product leader and founder working across payments, fintech, Web3, and AI, and the DJ and producer behind Adam Rules.",
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
    "Core Banking Integration",
    "Adam Rules",
    "Indie Dance DJ"
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
    title: "Adam Zasada | Product Leader, Founder & Adam Rules",
    description: "Product leader across payments, fintech, Web3, and AI. DJ and producer behind Adam Rules.",
    url: "https://adamzasada.com",
    siteName: "Adam Zasada Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@adamrulesmusic",
    creator: "@adamrulesmusic",
    title: "Adam Zasada | Product Leader, Founder & Adam Rules",
    description: "Product leader across payments, fintech, Web3, and AI. DJ and producer behind Adam Rules.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://adamzasada.com",
    languages: {
      'en-US': 'https://adamzasada.com',
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
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//open.spotify.com" />
        <link rel="dns-prefetch" href="//x.com" />
        
        {/* Viewport and theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#18100f" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f4f1ea" media="(prefers-color-scheme: light)" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adam Zasada",
              "jobTitle": "Senior Product Manager, Payments at Dropbox",
              "description": "Product leader and founder across payments, fintech, Web3, and AI. DJ and producer behind Adam Rules.",
              "url": "https://adamzasada.com",
              "image": "https://adamzasada.com/adam-zasada-portrait.webp",
              "alternateName": "Adam Rules",
              "sameAs": [
                "https://x.com/adamrulesmusic",
                "https://linkedin.com/in/adag1oeth",
                "https://github.com/adag1oeth",
                "https://open.spotify.com/artist/5vkTq36ZbhBhO2BAhnH01E",
                "https://open.spotify.com/artist/16sef2w5Jz2vu6twQNtrLz",
                "https://soundcloud.com/adamrulesmusic",
                "https://instagram.com/adamrulesmusic"
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
                  "name": "Dropbox",
                  "url": "https://dropbox.com"
                }
              ],
              "foundedOrganization": [
                {
                  "@type": "Organization",
                  "name": "0xKYC",
                  "url": "https://0xkyc.id"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-full focus:shadow-lg"
        >
          Skip to main content
        </a>

        {children}

        <ConditionalAnalytics />
        <SimpleCookieBanner />
      </body>
    </html>
  );
}
