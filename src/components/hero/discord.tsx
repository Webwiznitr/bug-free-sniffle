import { heroConfig } from '@/config/index';
import Link from 'next/link';
import Image from 'next/image';
import { DISCORD_LINK } from '@/config/navbar';
const Discord = () => {
  return (
    <Link href={DISCORD_LINK} target="_blank" className="relative z-20 px-2">
      <div className="bg-secondary flex transform-gpu cursor-pointer items-center gap-[10px] border border-black px-5 py-2 shadow-[2px_2px_0_rgba(0,0,0,0.85)] transition-all duration-150 ease-in-out hover:translate-y-[-2px] hover:shadow-[-3px_4px_0_rgba(0,0,0,0.85)] active:translate-y-[1px] active:scale-[0.98] active:shadow-[-1px_1px_0_rgba(0,0,0,0.85)]">
        <Image
          src={heroConfig.assets.discordIcon}
          height={400}
          width={400}
          alt="discord"
          className="w-[1.5rem] lg:w-[2rem]"
        />

        <h1 className="font-canopee text-[1.25rem] leading-none font-semibold text-[#F4E4B8] not-italic lg:text-[1.5rem]">
          Discord
        </h1>
      </div>
    </Link>
  );
};

export default Discord;
