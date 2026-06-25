'use client';
import Image from 'next/image';
import { FaDiscord, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#F4E4B8]">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <Image
          src="/Union2.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* footer tape */}
      <div className="ssm:-mt-[11vw] cmd:-mt-[8vw] lmd:-mt-[5.3vw] relative z-20 -mt-[13vw] w-full">
        <Image
          src="/Group 1321317692.png"
          alt="Film Tape"
          width={1920}
          height={180}
          priority
          className="relative z-10 block h-auto w-full"
        />
        <Image
          src="/Rectangle 3475402.png"
          alt="Footer rectangle"
          width={1920}
          height={181}
          className="relative z-0 -mt-[6vw] block h-auto w-full md:-mt-[115px]"
        />
      </div>

      {/* Main Content Container (Responsive Grid) */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 pt-6 pb-16 sm:px-12 md:grid-cols-2 md:px-24 md:pt-16">
        <div className="flex flex-col items-start space-y-6 pt-6">
          <div className="flex items-center gap-4">
            <div className="relative h-[100px] w-[200px] sm:h-[200px] sm:w-[370px]">
              <Image
                src="/hackodisha60logo.png"
                alt="Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="relative h-[30px] w-[40px] sm:h-[55px] sm:w-[65px]">
              <Image
                src="/60.png"
                alt="Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <p className="max-w-[500px] text-xl leading-tight font-bold text-[#454545] sm:text-2xl md:text-[30px]">
            Want to become a sponsor of Hackodisha 5.0 ?
          </p>

          <div className="relative inline-flex cursor-pointer items-center justify-center rounded-2xl border-2 border-black bg-[#2A5266] px-8 py-4 text-lg font-bold text-[#F4E4B8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 select-none active:translate-x-1 active:translate-y-1 md:px-12 md:py-5 md:text-2xl">
            Become a sponsor
          </div>
        </div>

        {/* Right Section: Site Map */}
        <div className="flex w-full flex-col items-start space-y-4 justify-self-start pt-2 md:max-w-[250px] md:items-end md:justify-self-end md:pt-[120px] md:text-right">
          <h3 className="md: md: -mt-8 mr-22 mb-2 text-2xl font-black tracking-wide md:text-[30px]">
            Site map
          </h3>
          <nav className="md: mt-13 flex w-full flex-col space-y-3 text-lg font-medium md:text-[24px]">
            <a
              href="#about"
              className="group flex items-center justify-between gap-4 transition-colors hover:text-[#d94625]"
            >
              About us{' '}
              <span className="transform transition-transform group-hover:translate-x-1">
                &gt;
              </span>
            </a>
            <a
              href="#prizes"
              className="group flex items-center justify-between gap-4 transition-colors hover:text-[#d94625]"
            >
              Prizes{' '}
              <span className="transform transition-transform group-hover:translate-x-1">
                &gt;
              </span>
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-between gap-4 transition-colors hover:text-[#d94625]"
            >
              Contact us{' '}
              <span className="transform transition-transform group-hover:translate-x-1">
                &gt;
              </span>
            </a>
            <a
              href="#sponsors"
              className="group flex items-center justify-between gap-4 transition-colors hover:text-[#d94625]"
            >
              Sponsors{' '}
              <span className="transform transition-transform group-hover:translate-x-1">
                &gt;
              </span>
            </a>
            <a
              href="#faqs"
              className="group flex items-center justify-between gap-4 transition-colors hover:text-[#d94625]"
            >
              FAQs{' '}
              <span className="transform transition-transform group-hover:translate-x-1">
                &gt;
              </span>
            </a>
          </nav>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="relative z-10 flex justify-center space-x-6 py-6">
        <a
          href="https://discord.gg/"
          target="_blank"
          className="rounded-full p-2 text-[#000000] transition-transform hover:scale-110"
        >
          <FaDiscord size={25} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          className="rounded-full p-2 text-[#000000] transition-transform hover:scale-110"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          className="rounded-full bg-black p-2 text-[#f4ebd0] transition-transform hover:scale-110"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="rounded-full p-2 text-[#000000] transition-transform hover:scale-110"
        >
          <FaTwitter size={25} />
        </a>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 w-full bg-[#1c1510] py-3 text-center text-xs font-semibold tracking-wide text-[#f4ebd0] md:text-sm">
        Hackodisha 6.0 2025. Powered by Webwiz, NIT Rourkela.
      </div>
    </footer>
  );
}

export default Footer;
