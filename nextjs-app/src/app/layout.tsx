import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
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
  title: "Adam Zasada | Go-To-Market Advisor & Founder",
  description: "Product & GTM Strategist | Web3, Infra, AI | Ex-CEO 0xKYC | Founder Soul Agents",
  keywords: "Web3, AI, GTM, Product Strategy, Blockchain, Digital Identity, Automation",
  authors: [{ name: "Adam Zasada" }],
  creator: "Adam Zasada",
  openGraph: {
    title: "Adam Zasada | Go-To-Market Advisor & Founder",
    description: "Product & GTM Strategist | Web3, Infra, AI",
    url: "https://adamzasada.com",
    siteName: "Adam Zasada",
    images: [
      {
        url: "/adag1o.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Zasada",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Zasada | Go-To-Market Advisor & Founder",
    description: "Product & GTM Strategist | Web3, Infra, AI",
    images: ["/adag1o.jpg"],
    creator: "@adag1oeth",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Google Analytics - Only loads in production */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
