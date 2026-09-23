'use client';

import Image from 'next/image';
import { trackContactClick, trackOutboundClick } from '@/lib/analytics';

type Experience = {
  company: string;
  role: string;
  description: string;
  mark: string;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    company: 'Dropbox',
    role: 'Senior Product Manager, Payments',
    description:
      'Payments product strategy and execution for a global SaaS platform, spanning new payment methods, rebilling optimization, fraud, compliance, tax, and cost optimization.',
    mark: 'DB',
    href: 'https://dropbox.com',
    featured: true,
  },
  {
    company: '0xKYC',
    role: 'CEO & Co-Founder',
    description:
      'Built and deployed zero-knowledge identity infrastructure through a dApp, API, and Discord bot. Led a 10-person team, raised $200K, and partnered with Onfido.',
    mark: '0x',
    href: 'https://0xkyc.id',
    featured: true,
  },
  {
    company: 'Hinkal',
    role: 'Ecosystem & Product Lead',
    description:
      'Led GTM and product direction for a privacy dApp, SDK, and wallet serving more than $50M in monthly private transaction volume. Enabled SDK adoption by Request Finance.',
    mark: 'HK',
    href: 'https://hinkal.pro',
    featured: true,
  },
  {
    company: 'Vodeno',
    role: 'Product Owner',
    description:
      'Led two backend teams totaling 10 engineers across KYC and multi-market infrastructure for a €450M BaaS platform.',
    mark: 'VD',
    href: 'https://www.vodeno.com/',
  },
  {
    company: 'Bitwala (ex-Nuri)',
    role: 'Platform Product Manager',
    description:
      'Led payments and cards for a regulated crypto bank. Defined SEPA flows, core banking integrations, card issuing, onboarding, KYC, and account setup.',
    mark: 'BW',
    href: 'https://bitwala.com',
  },
  {
    company: 'Soul Agents',
    role: 'Founder, Product Lead & AI Agent Developer',
    description:
      'Launched AI brand agents for X on Base, owning product, GTM, and payments while onboarding early paying users. Built an autonomous trading assistant that placed third at the Brian AI Hackathon.',
    mark: 'SA',
    href: 'https://github.com/adag1oeth/trading',
    linkLabel: 'View project',
  },
  {
    company: 'BabyDoge',
    role: 'Product Lead',
    description:
      'Led product and GTM for three token-launch products across BNB, Solana, and TON. Shipped AI agents and weekly product iterations.',
    mark: 'BD',
    href: 'https://babydoge.com',
  },
  {
    company: 'Elympics',
    role: 'Associate to the CEO, Head of Growth',
    description:
      'Grew the community from 300 to 10,000 and increased daily gameplay from dozens to over 4,000. Built partnerships with leading Web3 gaming platforms.',
    mark: 'EL',
    href: 'https://elympics.ai',
  },
];

const metrics = [
  { value: '€450M', label: 'BaaS platform', context: 'Vodeno' },
  { value: '$50M+', label: 'monthly volume', context: 'Hinkal' },
  { value: '3', label: 'launchpads', context: 'BNB, SOL, TON' },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="link-arrow">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const content = (
    <>
      <div className="experience-card__header">
        <span className="experience-card__mark">{experience.mark}</span>
        <div>
          <h3>{experience.company}</h3>
          <p className="experience-card__role">{experience.role}</p>
        </div>
      </div>
      <p className="experience-card__description">{experience.description}</p>
      {experience.href && (
        <span className="experience-card__link">
          {experience.linkLabel ?? 'Visit company'} <ArrowIcon />
        </span>
      )}
    </>
  );

  const className = `experience-card ${experience.featured ? 'experience-card--featured' : ''}`;

  if (!experience.href) {
    return <article className={className}>{content}</article>;
  }

  return (
    <a className={className} href={experience.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

function TextLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer" onClick={onClick}>
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-nav__name" href="#top">AZ</a>
        <div className="site-nav__links">
          <a href="#experience">Experience</a>
          <a href="#music">Adam Rules</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="top" className="hero section-shell">
        <div className="hero__copy">
          <p className="eyebrow">Product leader & founder</p>
          <h1>Adam<br />Zasada</h1>
          <p className="hero__role">Senior Product Manager, Payments at Dropbox</p>
          <p className="hero__intro">
            Nearly a decade shipping payments, fintech, and AI products across startups and global platforms.
          </p>
          <div className="hero__links">
            <a className="button button--dark" href="#experience">View experience</a>
            <a className="button button--quiet" href="#music">Meet Adam Rules</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <Image
              src="/adam-zasada-portrait.webp"
              alt="Adam Zasada"
              fill
              sizes="(max-width: 760px) 92vw, 44vw"
              className="hero__image"
              priority
            />
          </div>
          <p className="hero__caption">Product · Payments · Fintech · AI</p>
        </div>
      </header>

      <main id="main-content">
        <section className="track-record section-shell" aria-labelledby="track-record-title">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Selected outcomes</p>
              <h2 id="track-record-title">Track record</h2>
            </div>
            <p>
              Product leadership across payments, fintech, Web3, and AI. From regulated infrastructure to early-stage products and paying users.
            </p>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.context}</small>
              </article>
            ))}
          </div>

          <div className="capability-strip" aria-label="Areas of expertise">
            <span>Global payments</span>
            <span>Banking infrastructure</span>
            <span>Zero-knowledge identity</span>
            <span>Applied AI</span>
          </div>
        </section>

        <section id="experience" className="experience section-shell" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Built across systems and stages.</h2>
          </div>

          <div className="experience-grid experience-grid--featured">
            {experiences.filter((experience) => experience.featured).map((experience) => (
              <ExperienceCard experience={experience} key={experience.company} />
            ))}
          </div>

          <div className="experience-grid experience-grid--standard">
            {experiences.filter((experience) => !experience.featured).map((experience) => (
              <ExperienceCard experience={experience} key={experience.company} />
            ))}
          </div>
        </section>

        <section id="music" className="music-section" aria-labelledby="music-title">
          <div className="music-section__grid section-shell">
            <div className="music-section__visual">
              <Image
                src="/adam-rules-red.webp"
                alt="Adam Rules, DJ and producer"
                fill
                sizes="(max-width: 760px) 92vw, 42vw"
                className="music-section__image"
              />
              <span className="music-section__credit">Photo: Dominika Orz</span>
            </div>

            <div className="music-section__copy">
              <h2 id="music-title">Adam Rules</h2>
              <p className="music-section__genre">Indie dance & house · Warsaw</p>
              <p className="music-section__lead">
                A DJ project connecting warm melodies, a distinct groove, and gradually building club energy.
              </p>

              <div className="music-section__now">
                <span>Current selection</span>
                <a
                  className="music-section__selection"
                  href="https://soundcloud.com/adamrulesmusic/constellation"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackOutboundClick('https://soundcloud.com/adamrulesmusic/constellation', 'Constellation')}
                >
                  <strong>Constellation</strong>
                  <ArrowIcon />
                </a>
                <p>A mix featuring music by Super Flu, Brunello, Chris Stussy, Mochakk, and Barry Can&apos;t Swim.</p>
              </div>

              <p className="music-section__history">
                Burn Studios Ibiza Residency winner, 2012. Former Café Mambo resident with releases on Pets Recordings and performances across Ibiza, London, Berlin, Warsaw, Bali, and the United States.
              </p>

              <div className="music-section__explore">
                <span>Explore</span>
                <div>
                  <TextLink
                    href="https://open.spotify.com/artist/5vkTq36ZbhBhO2BAhnH01E"
                    onClick={() => trackOutboundClick('https://open.spotify.com/artist/5vkTq36ZbhBhO2BAhnH01E', 'Adam Rules on Spotify')}
                  >
                    Adam Rules on Spotify
                  </TextLink>
                  <TextLink
                    href="https://open.spotify.com/artist/16sef2w5Jz2vu6twQNtrLz"
                    onClick={() => trackOutboundClick('https://open.spotify.com/artist/16sef2w5Jz2vu6twQNtrLz', 'Earlier releases as Adam Zasada')}
                  >
                    Earlier releases as Adam Zasada
                  </TextLink>
                  <TextLink
                    href="https://www.discogs.com/release/5826692-Adam-Zasada-Lonely"
                    onClick={() => trackOutboundClick('https://www.discogs.com/release/5826692-Adam-Zasada-Lonely', 'Lonely 12-inch vinyl')}
                  >
                    Lonely · 12-inch vinyl · 2014
                  </TextLink>
                  <TextLink
                    href="https://adamrules.notion.site/epk"
                    onClick={() => trackOutboundClick('https://adamrules.notion.site/epk', 'Adam Rules press kit')}
                  >
                    Press kit
                  </TextLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s compare notes.</h2>
          </div>
          <div className="contact__actions">
            <a className="button button--dark" href="mailto:contact@adamzasada.com">
              Email Adam
            </a>
            <a
              className="button button--quiet"
              href="https://x.com/adamrulesmusic"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactClick({ contact_method: 'twitter', contact_location: 'cta_section' })}
            >
              X / @adamrulesmusic
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <p>© 2026 Adam Zasada. Product Leader & Founder.</p>
        <div>
          <a href="https://linkedin.com/in/adag1oeth" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/adag1oeth" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://instagram.com/adamrulesmusic" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://x.com/adamrulesmusic" target="_blank" rel="noreferrer">X</a>
          <a className="footer__top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
