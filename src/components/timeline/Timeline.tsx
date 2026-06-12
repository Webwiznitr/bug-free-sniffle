'use client';

import { useState } from 'react';
import { day1Events } from './day1Data';
import { day2Events } from './day2Data';

export default function Timeline() {
  const [activeDay, setActiveDay] = useState(1);
  const events = activeDay === 1 ? day1Events : day2Events;

  return (
    <section className="relative min-h-[2100px] w-full overflow-x-hidden bg-[#E3442E]">
      <div className="relative mt-[117px] h-[195px]">
        <div className="absolute top-0 left-2 h-[70px] w-[90px] sm:h-[120px] sm:w-[150px] md:left-[46px] lg:h-[195px] lg:w-[240px]">
          <img
            src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832158/icon-w_jcbk89.png"
            alt="Music Icon"
            className="h-full w-full object-contain"
          />
        </div>

        <h1 className="font-canopee absolute top-0 left-1/2 -translate-x-1/2 text-[48px] leading-none font-normal whitespace-nowrap text-[#1A0E05] underline decoration-[#1A0E05] [text-shadow:6px_6px_0px_#F4E4B8] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[190px]">
          TIMELINE
        </h1>

        <div className="absolute top-0 right-[46px] h-[195px] w-[240.412px]">
          <img
            src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832158/icon-w_jcbk89.png"
            alt="Music Icon"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Left CD */}
      <div className="absolute top-[450px] left-[-100px] z-0 overflow-hidden sm:top-[520px] sm:left-[-50px] lg:top-[500px] lg:left-0">
        <img
          src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780890788/Vector-2_esk76e.png"
          alt="Left CD"
          className="w-[220px] scale-x-[-1] sm:w-[320px] md:w-[400px] lg:w-[480px]"
        />
      </div>
      {/* Right CD */}
      <div className="absolute top-[450px] right-[-100px] z-0 overflow-hidden sm:top-[520px] sm:right-[-50px] lg:top-[500px] lg:right-0">
        <img
          src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780890788/Vector-2_esk76e.png"
          alt="Right CD"
          className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[480px]"
        />
      </div>

      <div className="absolute top-[250px] left-1/2 z-10 min-h-[1180px] w-[92%] max-w-[1231px] -translate-x-1/2 bg-[#F4E4B8] pb-[80px] shadow-[12px_12px_0px_#1A0E05] md:top-[387px]">
        <div className="relative flex flex-col items-center justify-between gap-8 px-4 pt-8 md:px-[40px] md:pt-[86px] lg:flex-row">
          <div className="h-[90px] w-[110px] sm:h-[140px] sm:w-[180px] lg:h-[195px] lg:w-[240px]">
            <img
              src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832157/icon_fmdcvl.png"
              alt="music"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex overflow-hidden shadow-[4px_4px_0px_#1A0E05]">
              <button
                onClick={() => setActiveDay(1)}
                className="inline-flex h-[50px] cursor-pointer items-center justify-center border-[4px] border-[#1A0E05] bg-[#F4E4B8] px-[20px] transition-all duration-300 hover:scale-105 sm:h-[65px] sm:px-[30px] lg:h-[79px] lg:px-[45px]"
              >
                <span className="font-canopee text-[24px] text-[#E3442E] sm:text-[36px] lg:text-[48px]">
                  DAY-1
                </span>
              </button>

              <button
                onClick={() => setActiveDay(2)}
                className="inline-flex h-[50px] cursor-pointer items-center justify-center border-y-[4px] border-r-[4px] border-[#1A0E05] bg-[#E3442E] px-[20px] transition-all duration-300 hover:scale-105 sm:h-[65px] sm:px-[30px] lg:h-[79px] lg:px-[45px]"
              >
                <span className="font-canopee text-[24px] text-[#F4E4B8] sm:text-[36px] lg:text-[48px]">
                  DAY-2
                </span>
              </button>
            </div>

            <div className="mt-10 flex h-[79px] w-[442px] items-center justify-center border-[4px] border-[#1A0E05] bg-[#2A5266] shadow-[4px_4px_0px_#1A0E05]">
              <span className="font-canopee text-[48px] leading-[18px] font-normal text-[#F4E4B8]">
                SEPTEMBER 06, 2026
              </span>
            </div>
          </div>

          <div className="h-[90px] w-[110px] sm:h-[140px] sm:w-[180px] lg:h-[195px] lg:w-[240px]">
            <img
              src="https://res.cloudinary.com/du5qoczcn/image/upload/v1780832157/icon_fmdcvl.png"
              alt="music"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-[50px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex flex-col gap-[16px]">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center overflow-hidden border-[4px] border-[#1A0E05] bg-[#F4E4B8] shadow-[5px_5px_0px_#1A0E05] sm:flex-row"
              >
                <div
                  className="flex h-[79px] w-[176px] shrink-0 items-center justify-center border-r-[4px] border-[#1A0E05]"
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
                        ? 'text-[24px] font-extrabold'
                        : 'text-[32px] font-normal'
                    } `}
                  >
                    {event.time}
                  </span>
                </div>

                <div className="flex-1 px-[30px]">
                  <span
                    className="font-canopee text-[48px] leading-[39px] tracking-[5px] uppercase"
                    style={{
                      color: event.color,
                      WebkitTextStroke: `1px ${event.color}`,
                    }}
                  >
                    {event.title}
                  </span>
                </div>

                <div className="pr-[20px]">
                  <span
                    className="text-[16px] leading-[24px] text-[#1A0E05]"
                    style={{
                      fontFamily: 'Bungee',
                      fontWeight: 900,
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
      <div className="h-[100px]"></div>
    </section>
  );
}
