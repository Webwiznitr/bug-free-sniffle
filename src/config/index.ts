export const images = {
  WhatAndStatisticsBg:
    'https://res.cloudinary.com/du5qoczcn/image/upload/v1780695323/Union-2_cawrl8.png',
  rightImgAbout: '/righttape.svg',
  rightImgAboutMobile: '/righttapeMobile.svg',
  background: '/statsgrid.svg',
};

export { timelineConfig } from './timeline';
export type { TimelineEvent } from './timeline';

export type HeroNavItem = {
  name: string;
  href: string;
};

export const heroConfig = {
  navItems: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Events', href: '/events' },
  ] as HeroNavItem[],

  social: {
    discordUrl: 'https://discord.gg/',
    discordLabel: 'DISCORD',
    mobileDiscordLabel: 'JOIN DISCORD',
  },
  event: {
    dayRange: '05-06TH',
    monthAndYear: 'September 2026',
    applyHref: '#',
    applyLabel: 'APPLY WITH DEVFOLIO',
  },
  assets: {
    pattern: '/herogrid.svg',
    navLogo: '/navlogo.svg',
    heroLogo: '/ho6.svg',
    discordIcon: '/discord.svg',
    versionImage: '/6.svg',
    datePattern: '/boxgrid.svg',
    playRing: '/Ellipse_2862.png',
    playIcon: '/playbutton.svg',
    pauseIcon: '/pausebutton.svg',
    tvDesktopFrame: '/tv.svg',
    tvmobileFrame: '/mobiletv.svg',
    footerTape: '/footertape.png',
  },
} as const;
