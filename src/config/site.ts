/**
 * Single source of truth for anything SEO-related.
 *
 * `layout.tsx`, `robots.ts`, `sitemap.ts` and `manifest.ts` all read from here so
 * the canonical URL, titles and icon paths can never drift apart.
 */

export const siteConfig = {
  url: 'https://hackodisha.dev',
  name: 'HackOdisha 6.0',
  shortName: 'HackOdisha',
  organizer: 'Webwiz, NIT Rourkela',

  title: 'HackOdisha 6.0 | Largest Student Hackathon of Odisha',
  description:
    "HackOdisha 6.0 — a 36-hour online hackathon by Webwiz, NIT Rourkela. Odisha's largest student hackathon, with 5,000+ registrations and 1,600+ participants.",

  keywords: [
    'HackOdisha',
    'HackOdisha 6.0',
    'HackOdisha 2026',
    'Hack Odisha',
    'Hackathon',
    'online hackathon',
    'student hackathon',
    'NIT Rourkela',
    'Webwiz',
    'Odisha hackathon',
  ],

  // Brand colours mirror the CSS custom properties in `globals.css`.
  themeColor: '#f4e4b8',
  accentColor: '#e3442e',

  event: {
    startDate: '2026-10-31T09:00:00+05:30',
    endDate: '2026-11-01T21:00:00+05:30',
  },

  social: {
    twitter: '@hackodisha',
    twitterUrl: 'https://x.com/hackodisha',
    instagram: 'https://www.instagram.com/webwiz.nitr/',
    discord: 'https://discord.com/invite/ewun7cxkJh',
    email: 'webwiz.nitrkl@gmail.com',
  },

  og: {
    image: '/Images/cover.png',
    // Must match the real file — crawlers reserve layout space from these.
    width: 1478,
    height: 658,
    alt: 'HackOdisha 6.0 — 36-hour online hackathon by Webwiz, NIT Rourkela',
  },
} as const;

export type SiteConfig = typeof siteConfig;
