export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export interface SponsorTier {
  id: string;
  /** Text inside the cream pill above the row. */
  label: string;
  /** Stamped on the cassette spine, in Press Start 2P. */
  cassetteLabel: string;
  runtime: string;
  /** Cassette shell colour, taken from the Figma design. */
  shell: string;
  sponsors: Sponsor[];
  /** Total cassettes in the row; unfilled ones render as blank tapes. */
  slots: number;
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'platinum',
    label: 'Platinum Sponsors',
    cassetteLabel: 'PLATINUM',
    runtime: '90 MIN',
    shell: '#a83320',
    slots: 4,
    sponsors: [
      {
        name: 'Devfolio',
        logo: '/sponsors/devfolio.svg',
        url: 'https://devfolio.co',
      },
    ],
  },
  {
    id: 'gold',
    label: 'Gold Sponsors',
    cassetteLabel: 'GOLD',
    runtime: '60 MIN',
    shell: '#5e7a3d',
    slots: 4,
    sponsors: [],
  },
  {
    id: 'silver',
    label: 'Silver Sponsors',
    cassetteLabel: 'SILVER',
    runtime: '45 MIN',
    shell: '#d4a017',
    slots: 4,
    sponsors: [],
  },
];

export const sponsorAssets = {
  heading: '/sponsors/sponsors-heading.svg',
  pixelEdge:
    'https://res.cloudinary.com/dijqg8l3m/image/upload/q_auto/f_auto/v1781073644/sponsors_footer_zbeniy.png',
} as const;
