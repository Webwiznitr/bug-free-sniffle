'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
function Hero() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Events', href: '/events' },
  ];
  const [isHamburg, setIsHamburg] = useState(false);
  return (
    <div className="relative mx-0 flex w-full flex-col bg-[#F4E4B8] px-0">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <Image
          src="/Union2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <nav className="border-foreground bg-primary relative z-20 flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 px-6">
        <Image
          src="/hackodisha_white.png"
          alt="Logo"
          width={198}
          height={29}
          priority
          className="ssm:w-[198px] h-auto w-[140px]"
        />
        <ul className="font-canopee cmd:flex cmd:gap-4 mmd:gap-8 lmd:gap-15 hidden items-center uppercase">
          {navItems.map((item) => (
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
          onClick={() => {
            setIsHamburg(!isHamburg);
          }}
          className="cmd:hidden text-3xl text-[#E8DDB5]"
        >
          <Menu />
        </button>
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="cmd:flex cmd:h-10 cmd:px-4 cmd:shadow-[5px_5px_0px_#000] relative hidden h-8 cursor-pointer items-center justify-center gap-2 bg-[#2A5266] px-3 shadow-[4px_4px_0px_#000] transition-all duration-300 hover:scale-110"
        >
          <Image
            src="/Discord.png"
            alt="Discord"
            width={20}
            height={20}
            className="h-auto w-auto"
          />
          <h1 className="cmd:text-2xl font-canopee text-xl tracking-tight text-[#E8DDB5]">
            DISCORD
          </h1>
        </a>
      </nav>
      {isHamburg && (
        <div className="cmd:hidden fixed top-[70px] right-0 z-50 flex h-auto w-[220px] flex-col border-b-4 border-l-4 border-[#1A0E05] bg-[#E3442E] shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsHamburg(false)}
              className="font-canopee border-b border-[#1A0E05] px-6 py-4 text-xl text-[#1A0E05] transition-all hover:bg-[#2A5266] hover:text-[#E8DDB5]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-canopee bg-[#2A5266] px-6 py-4 text-xl text-[#E8DDB5] hover:opacity-90"
          >
            DISCORD
          </Link>
        </div>
      )}

      {/* #main */}
      <div className="cmd:px-8 lmd:flex-row lmd:gap-8 lmd:pl-20 lmd:pr-0 lmd:min-h-[82vh] relative z-10 flex w-full flex-col items-center gap-4 pt-2 pb-0">
        {' '}
        {/* Left Column: Info & CTAs */}
        <div className="lmd:w-[42%] lmd:items-start lmd:text-left flex w-fit flex-col items-center gap-2 text-center">
          {' '}
          <Image
            src="/hackodisha60logo.png"
            alt="HackOdisha 6.0"
            width={930}
            height={350}
            priority
            className="ssm:max-w-[380px] cmd:max-w-[550px] lmd:max-w-[850px] h-auto w-full max-w-[300px] object-contain"
          />
          <div className="cmd:gap-4 lmd:justify-start flex w-full items-center justify-center gap-2">
            {' '}
            <Image
              src="/60.png"
              alt="6.0"
              width={350}
              height={500}
              className="ssm:w-[130px] cmd:w-[220px] lmd:w-[260px] h-auto w-[100px] object-contain"
            />
            <div className="ssm:w-[220px] ssm:h-[120px] cmd:w-[320px] cmd:h-[160px] lmd:w-[420px] lmd:h-[180px] relative flex h-[100px] w-[180px] flex-col items-center justify-center rounded-[20px] border-[4px] border-dashed border-[#1A0E05] bg-[#2A5266] text-[#E8DDB5]">
              <Image
                src={'/Union.png'}
                width={180}
                height={100}
                alt=""
                className="absolute h-full w-full opacity-50"
              />

              <p className="font-canopee ssm:text-[32px] cmd:text-[36px] lmd:text-[56px] relative flex justify-items-start text-[28px] leading-none md:right-7">
                05-06TH
              </p>

              <p className="font-canopee ssm:text-[20px] cmd:text-[24px] lmd:text-[42px] text-[24px] uppercase">
                September 2026
              </p>
            </div>
          </div>
          <div className="lmd:justify-start ssm:gap-4 mt-4 flex w-full items-center justify-center gap-2">
            {' '}
            <div className="cmd:w-20 cmd:h-20 relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110">
              <div className="cmd:h-16 cmd:w-16 relative h-12 w-12">
                <Image
                  src="/Ellipse_2862.png"
                  alt=""
                  width={260}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/Polygon_1.png" alt="" width={20} height={20} />
              </div>
            </div>
            <Link
              href="#"
              className="ssm:h-[56px] ssm:px-8 cmd:h-[72px] cmd:px-10 lmd:h-[84px] lmd:px-12 flex h-12 items-center justify-center rounded-full bg-[#1A0E05] px-6 transition-all duration-300 hover:scale-105 hover:bg-[#2A5266]"
            >
              <span className="font-canopee ssm:text-[24px] cmd:text-[32px] lmd:text-[48px] text-[18px] leading-none whitespace-nowrap text-[#E8DDB5]">
                APPLY WITH DEVFOLIO
              </span>
            </Link>
          </div>
        </div>
        {/* Right Column: Retro TV Monitor */}
        <div className="lmd:px-0 ssm:max-w-[440px] cmd:max-w-[760px] lmd:max-w-[1200px] lmd:w-[58%] lmd:mr-0 lmd:ml-auto lmd:self-end relative mx-0 my-0 flex w-full max-w-[550px] flex-col py-0 sm:mx-auto">
          {/* Desktop TV Monitor (shown on desktop) */}
          <div className="lmd:block relative hidden w-full">
            <Image
              src="/tvFrame.png"
              alt="TV Frame Desktop"
              width={1380}
              height={1200}
              priority
              className="block h-auto w-full"
            />
            <Image
              src="/tvScreen.png"
              alt="TV Screen Desktop"
              width={536}
              height={425}
              className="absolute w-full object-cover"
              style={{
                left: '32.35%',
                top: '11.72%',
                width: '49.63%',
                height: '44.18%',
              }}
            />
          </div>

          {/* Mobile TV Monitor (shown on mobile/tablet) */}
          <div className="lmd:hidden relative block w-full">
            <Image
              src="/tvfraameMobile.png"
              alt="TV Frame Mobile"
              width={400}
              height={508}
              priority
              className="mx-[-4px] h-auto w-full px-0"
            />
            <Image
              src="/tvScreen.png"
              alt="TV Screen Mobile"
              width={536}
              height={425}
              className="absolute"
              style={{
                left: '25%',
                top: '10%',
                width: '44%',
                height: '40%',
              }}
            />
          </div>
        </div>
      </div>

      {/* footer tape */}
      <div className="ssm:-mt-[11vw] cmd:-mt-[8vw] lmd:-mt-[5.3vw] relative z-20 -mt-[13vw] w-full">
        <Image
          src="/footertape.png"
          alt="Film Tape"
          width={1920}
          height={180}
          priority
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
