'use client';
import Image from 'next/image';
import { useState } from 'react';
import { day1Events } from './day1Data';
import { day2Events } from './day2Data';

export default function Timeline() {
  const [activeDay, setActiveDay] = useState(1);
  const events = activeDay === 1 ? day1Events : day2Events;

  return (
    <section className="relative w-full overflow-x-hidden bg-[#E3442E] pb-[80px] md:pb-[200px]">
      <div className="relative mt-[60px] h-[170px] md:mt-[117px] md:h-[195px]">
        <div className="absolute top-[18px] left-[12px] z-10 h-[72px] w-[88px] md:top-0 md:left-[46px] md:h-[195px] md:w-[240px]">
          <Image
            src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1781704600/white_sy2zl0.svg"
            alt="Music Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="font-canopee absolute top-0 left-1/2 -translate-x-1/2 text-[72px] leading-none font-normal whitespace-nowrap text-[#1A0E05] underline decoration-[#1A0E05] [text-shadow:2px_2px_0px_#F4E4B8] sm:text-[60px] md:text-[120px] lg:text-[150px] xl:text-[190px]">
          TIMELINE
        </h1>

        <div className="absolute top-[18px] right-[12px] z-10 h-[72px] w-[88px] md:top-0 md:right-[46px] md:h-[195px] md:w-[240px]">
          <Image
            src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1781704600/white_sy2zl0.svg"
            alt="Music Icon"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Left CD */}
      <div className="absolute top-[250px] left-[-40px] z-0 overflow-hidden sm:top-[520px] sm:left-[-50px] md:top-[500px] lg:top-[500px] lg:left-0">
        <Image
          src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780890788/Vector-2_esk76e.png"
          alt="Left CD"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[220px] scale-x-[-1] sm:w-[320px] md:w-[400px] md:w-[480px] lg:w-[480px]"
        />
      </div>
      {/* Right CD */}
      <div className="absolute top-[250px] right-[-40px] z-0 overflow-hidden sm:top-[520px] sm:right-[-50px] md:top-[500px] lg:top-[500px] lg:right-0">
        <Image
          src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780890788/Vector-2_esk76e.png"
          alt="Right CD"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[220px] sm:w-[320px] md:w-[400px] md:w-[480px] lg:w-[480px]"
        />
      </div>

      <div className="relative z-10 mx-auto mt-[-20px] w-[86%] max-w-[1231px] bg-[#F4E4B8] pt-[30px] pb-[20px] shadow-[7px_7px_0px_#1A0E05] md:mt-[80px] md:w-[92%] md:pt-[86px] md:pb-[80px]">
        <div className="relative flex flex-row items-center justify-between px-4 pt-0 md:px-[40px] md:pt-[86px]">
          <div className="h-[80px] w-[100px] md:h-[195px] md:w-[240px]">
            <Image
              src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832157/icon_fmdcvl.png"
              alt="music"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex overflow-hidden shadow-[1px_1px_0px_#1A0E05] md:shadow-[3px_3px_0px_#1A0E05]">
              <button
                onClick={() => setActiveDay(1)}
                className={`inline-flex h-[35px] cursor-pointer items-center justify-center border-[4px] border-[#1A0E05] px-[12px] transition-all duration-300 sm:h-[65px] sm:px-[30px] md:h-[79px] md:px-[45px] lg:h-[79px] lg:px-[45px] ${
                  activeDay === 1 ? 'bg-[#F4E4B8]' : 'bg-[#E3442E]'
                }`}
              >
                <span
                  className={`font-canopee text-[20px] sm:text-[36px] md:text-[48px] lg:text-[48px] ${
                    activeDay === 1 ? 'text-[#E3442E]' : 'text-[#F4E4B8]'
                  }`}
                >
                  DAY-1
                </span>
              </button>

              <button
                onClick={() => setActiveDay(2)}
                className={`inline-flex h-[35px] cursor-pointer items-center justify-center border-y-[4px] border-r-[4px] border-[#1A0E05] px-[12px] transition-all duration-300 sm:h-[65px] sm:px-[30px] md:h-[79px] md:px-[45px] lg:h-[79px] lg:px-[45px] ${
                  activeDay === 2 ? 'bg-[#F4E4B8]' : 'bg-[#E3442E]'
                }`}
              >
                <span
                  className={`font-canopee text-[20px] sm:text-[36px] md:text-[48px] lg:text-[48px] ${
                    activeDay === 2 ? 'text-[#E3442E]' : 'text-[#F4E4B8]'
                  }`}
                >
                  DAY-2
                </span>
              </button>
            </div>

            <div className="shadow-2px_2px_0px_#1A0E05] mt-4 flex h-[36px] w-[170px] items-center justify-center border-[4px] border-[#1A0E05] bg-[#2A5266] md:mt-10 md:h-[79px] md:w-[442px]">
              <span className="font-canopee text-[20px] leading-[18px] font-normal text-[#F4E4B8] md:text-[48px]">
                SEPTEMBER 06, 2026
              </span>
            </div>
          </div>

          <div className="h-[80px] w-[100px] md:h-[195px] md:w-[240px]">
            <Image
              src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832157/icon_fmdcvl.png"
              alt="music"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-[10px] px-4 sm:px-6 md:mt-[50px] md:px-8 lg:px-[40px]">
          <div className="flex flex-col gap-[16px]">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex w-full items-center overflow-hidden border-[1.1px] border-[#1A0E05] bg-[#F4E4B8] shadow-[1.4px_1.4px_0px_#1A0E05] md:border-[4px] md:shadow-[5px_5px_0px_#1A0E05]"
              >
                <div
                  className="flex h-[30px] w-[68px] shrink-0 items-center justify-center border-r-[4px] border-[#1A0E05] md:h-[79px] md:w-[176px]"
                  style={{
                    backgroundColor: event.color,
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        event.color === '#A83320'
                          ? '"PP Editorial New"'
                          : 'Canopee',
                    }}
                    className={`leading-[18px] whitespace-nowrap text-[#F4E4B8] ${
                      event.color === '#A83320'
                        ? 'text-[10px] font-extrabold md:text-[24px]'
                        : 'text-[14px] font-normal md:text-[32px]'
                    } `}
                  >
                    {event.time}
                  </span>
                </div>

                <div className="flex-1 px-[8px] md:px-[30px]">
                  <span
                    className="font-canopee text-[20px] leading-[11px] tracking-[1.4px] uppercase md:text-[48px] md:leading-[39px] md:tracking-[5px]"
                    style={{
                      color: event.color,
                      WebkitTextStroke: `0.27px ${event.color}`,
                    }}
                  >
                    {event.title}
                  </span>
                </div>

                <div className="pr-[20px]">
                  <span
                    className="block text-[8px] leading-[24px] md:hidden"
                    style={{
                      color: event.color,
                      WebkitTextStroke: `1.5px ${event.color}`,
                    }}
                  >
                    {event.tag}
                  </span>

                  <span
                    className="hidden text-[16px] leading-[24px] md:block"
                    style={{
                      color: event.color,
                      WebkitTextStroke: `0.27px ${event.color}`,
                    }}
                  >
                    {event.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[35px] w-full md:h-[120px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1781702446/botttt_bcjhmw.svg')",
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center bottom',
          backgroundSize: 'auto 100%',
        }}
      />
    </section>
  );
}
