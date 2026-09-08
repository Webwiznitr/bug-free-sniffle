export interface Sponsor {
  name: string;
  logo: string;
  url: string;
  /** True intrinsic size of the asset, so next/image gets the right ratio. */
  width: number;
  height: number;
  /**
   * Overrides the generated alt text. Devfolio's brand-integration verifier
   * scans the landing page for an <img> whose alt tag is "DEVFOLIO LOGO", so
   * that exact string has to survive verbatim.
   */
  alt?: string;
  /**
   * Skip lazy-loading. Set for Devfolio so the logo resolves even if their
   * verifier renders the page without scrolling to the sponsors section.
   */
  eager?: boolean;
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
        width: 619,
        height: 129,
        alt: 'DEVFOLIO LOGO',
        eager: true,
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
    sponsors: [
      {
        name: 'Regional College of Management',
        logo: '/sponsors/rcm.png',
        url: 'https://rcm.ac.in/',
        width: 2000,
        height: 820,
      },
      {
        name: 'Fueler',
        logo: '/sponsors/fueler.svg',
        url: 'https://fueler.io/',
        width: 605,
        height: 162,
      },
      {
        // Supplied as a single-colour white mark; recoloured to the site
        // foreground so it reads against the cream tape window.
        name: 'CampusKarma',
        logo: '/sponsors/campuskarma.svg',
        url: 'https://campuskarma.in',
        width: 423,
        height: 373,
      },
    ],
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
