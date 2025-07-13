# Adam Zasada - Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, accessible interface with professional styling
- **Performance Optimized**: Next.js 15 with App Router, optimized images, and compression
- **Analytics Ready**: Google Analytics 4 integration with custom event tracking
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant with proper contrast ratios and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics 4 via @next/third-parties
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with GA4 integration
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── lib/
│   └── analytics.ts        # GA4 utility functions
└── types/
    └── analytics.ts        # TypeScript types for analytics

docs/
└── ANALYTICS.md           # Analytics implementation guide

public/
├── adag1o.jpg             # Profile image
├── adag1o_transparent.png # Logo (transparent)
└── favicon.ico            # Site favicon
```

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   # Copy .env.local and add your GA4 ID
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Z63BS83V08
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📊 Analytics

The site includes comprehensive Google Analytics 4 tracking:

- Page views (automatic)
- Contact button clicks
- Social media engagement
- Custom events for user interactions

See `docs/ANALYTICS.md` for detailed implementation guide.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Z63BS83V08
NODE_ENV=production
```

## 🔧 Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Optimization**: Tree shaking and code splitting
- **Compression**: Gzip/Brotli compression enabled
- **Security Headers**: CSP, HSTS, and other security headers
- **Analytics**: Production-only GA4 loading

## 📈 Lighthouse Scores

Target metrics:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🤝 Contact

- **Telegram**: [@adag1oeth](https://t.me/adag1oeth)
- **X (Twitter)**: [@adag1oeth](https://x.com/adag1oeth)
- **LinkedIn**: [adag1oeth](https://linkedin.com/in/adag1oeth)
- **GitHub**: [adag1oeth](https://github.com/adag1oeth)
- **Medium**: [adamzasada](https://adamzasada.medium.com/)

## 📄 License

This project is for personal portfolio use.

---

Built with ❤️ using Claude Code