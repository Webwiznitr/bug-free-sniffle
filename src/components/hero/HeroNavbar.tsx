import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { heroConfig } from '@/config';

type HeroNavbarProps = {
  onOpenMenu: () => void;
};

export function HeroNavbar({ onOpenMenu }: HeroNavbarProps) {
  return (
    <nav className="border-foreground bg-primary relative z-20 flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 px-6">
      <Image
        src={heroConfig.assets.navLogo}
        alt="Logo"
        width={198}
        height={29}
        priority
        className="ssm:w-[198px] h-auto w-[140px]"
      />

      <ul className="font-canopee cmd:flex cmd:gap-4 mmd:gap-8 lmd:gap-15 hidden items-center uppercase">
        {heroConfig.navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-foreground hover:text-background cmd:text-[18px] mmd:text-[22px] lmd:text-[24px] text-[18px] transition-all duration-300 hover:scale-105"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={onOpenMenu}
        className="text-3xl text-[#E8DDB5] transition-transform duration-150 hover:scale-110 active:scale-90 md:hidden"
        aria-label="Open menu"
      >
        <Menu />
      </button>

      <a
        href={heroConfig.social.discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cmd:h-10 cmd:px-4 cmd:shadow-[5px_5px_0px_#000] relative hidden h-8 cursor-pointer items-center justify-center gap-2 bg-[#2A5266] px-3 shadow-[4px_4px_0px_#000] transition-all duration-300 hover:scale-110 md:flex"
      >
        <Image
          src={heroConfig.assets.discordIcon}
          alt="Discord"
          width={20}
          height={20}
          className="h-auto w-auto"
        />
        <h1 className="font-canopee text-xl leading-[100%] font-normal tracking-normal text-[#F4E4B8]">
          {heroConfig.social.discordLabel}
        </h1>
      </a>
    </nav>
  );
}
