'use client';
import Image from 'next/image';
import Link from 'next/link';

import {
  footerAssets,
  footerLinks,
  socialLinks,
  sponsorCTA,
} from '@/config/footer';
import { ScrollingTape } from '../scrollingTape/ScrollingTape';

function Footer() {
  return (
    <footer className="relative mt-[50vw] w-full md:mt-[25vw] lg:mt-[10vw] xl:mt-[14vw]">
      <div className="absolute top-[-34vw] left-0 z-[-1] h-full w-full sm:top-[-30vw] md:-top-[16vw]">
        <ScrollingTape />
      </div>
      {/* Background Image */}

      <div className="pointer-events-none absolute inset-0 -top-[10vw] z-0 opacity-20">
        <Image
          src="/prizegrid.svg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 my-[1rem] overflow-hidden text-gray-800 transition-all md:my-[2rem]">
        <div className="flex flex-col gap-5 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-36">
          <div className="mx-auto flex w-full max-w-[1345px] flex-col items-center justify-center gap-10 px-14 md:flex-row md:items-start md:justify-between">
            {/* Left Section */}
            <div className="flex w-full max-w-[455px] flex-col gap-y-4 text-center md:gap-y-6 md:text-left">
              <Image
                src={footerAssets.logo}
                alt="logo"
                width={500}
                height={500}
                className="mx-auto w-[55vw] sm:w-[45vw] md:mx-0 md:w-[40vw] lg:w-[32vw] xl:w-[28vw] 2xl:w-[20vw]"
              />
              <p className="font-bricolage-grotesque text-[16px] leading-[1.2] font-[700] md:text-[24px] lg:text-[32px]">
                {sponsorCTA.heading}
              </p>{' '}
              <Link
                href={sponsorCTA.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-secondary text-background font-bricolage-grotesque hover:bg-secondary mx-auto flex transform-gpu flex-row items-center justify-center border-2 border-black px-[2vw] py-1 text-[16px] font-[700] shadow-[2px_2px_0px_#000] transition-all duration-150 ease-in-out hover:translate-y-[-2px] hover:cursor-pointer hover:shadow-[3px_5px_0px_#000] active:translate-y-[2px] active:scale-[0.98] active:shadow-[2px_3px_0px_#444] md:mx-0 md:text-xl lg:py-2 lg:text-2xl">
                  {sponsorCTA.buttonText}
                </button>
              </Link>
            </div>
            <div className="w-full max-w-[170px] text-center md:text-left">
              <h3 className="font-archivo-black mb-[2vw] text-[18px] font-extrabold md:text-[24px] lg:text-[31px]">
                Site map
              </h3>
              <ul className="font-archivo space-y-2 text-[16px] font-[600] md:space-y-5 md:text-[20px] lg:text-[24px]">
                {footerLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {label} <span className="ml-2 font-bold">&#8250;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Social Icons */}
          <div className="relative z-0 mx-auto mt-4 grid max-w-fit grid-cols-4 justify-items-center gap-4 md:gap-[26.57px]">
            {socialLinks.map(({ src, alt, href, className }, idx) => {
              if (!src || !alt || !href)
                return <div key={`social-icons-div-${idx}`}></div>;
              return (
                <Link
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={48}
                    height={48}
                    className={`h-[24px] w-[24px] transition-all md:h-[40px] md:w-[40px] lg:h-[48px] lg:w-[48px] ${className}`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar */}
      <div className="font-oxanium relative inset-y-0 bottom-0 z-10 flex w-full flex-col items-center justify-center bg-[#1A0E05] py-2 text-center text-[3vw] font-[600] tracking-wide sm:text-[2.5vw] md:py-4 lg:text-[2vw] xl:text-[1.5vw]">
        <span className="text-background w-full max-w-[1200px] px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-36">
          Hackodisha 6.0 2026 Powered by Webwiz, NIT Rourkela
        </span>
      </div>
    </footer>
  );
}

export default Footer;
