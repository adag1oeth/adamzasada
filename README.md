# adamzasada.com

Personal portfolio website — my modern, professional showcase built with [Next.js](https://nextjs.org/).

## 🌐 Live Site

👉 [https://adamzasada.com](https://adamzasada.com)

## 📖 What’s This?

This is my personal website and digital business card. Here you’ll find:

- My professional bio and background
- Project showcase and work samples
- Contact info and social links
- Clean, modern design, fully responsive and optimized for all devices

## ✉️ Contact

- Telegram: [@adag1oeth](https://t.me/adag1oeth)
- X (Twitter): [@adag1oeth](https://x.com/adag1oeth)
- LinkedIn: [adamrulesmusic](https://linkedin.com/in/adamrulesmusic/)

## Analytics follow-up — deferred

The code changes are complete. These manual GA4 account checks are deferred; no action is needed now.

- [ ] After deployment, verify the production measurement ID and confirm `page_view`, `contact_click`, and `outbound_click` in Tag Assistant / DebugView with analytics consent granted.
- [ ] Review Enhanced Measurement so native outbound `click` and custom `outbound_click` are not counted as two separate user actions in reports.
- [ ] Register the event-scoped custom dimensions needed for reporting: `contact_method`, `contact_location`, `link_location`, and `company`.
- [ ] Decide whether to mark `contact_click` as a key event. It represents contact intent, not a sent email or completed conversation.
- [ ] Review reporting timezone, data retention, and internal/developer traffic filters. Test filters before activating them.

Implementation and verification details: [Analytics documentation](nextjs-app/docs/ANALYTICS.md).

---

_A professional portfolio website showcasing my work and contact information._
