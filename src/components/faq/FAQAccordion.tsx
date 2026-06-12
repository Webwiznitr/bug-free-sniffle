'use client';
import React, { useState } from 'react';
import { faqData, FAQItem } from './faqData';
import Image from 'next/image';
import { div } from 'framer-motion/client';

const CLOUDINARY_ASSETS = {
  topCheckers:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/f_auto,q_auto/v1780927948/top-checkers_u5u5xk.png',
  vinylRight:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/f_auto,q_auto/v1780928113/cd-right_mlkjxa.png',
  bottomrail:
    'https://res.cloudinary.com/dkjfdb1mj/image/upload/v1781275139/Group_1321317612_vbgydq.png',
};

const FAQAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="relative min-h-screen w-full px-2 py-8 font-sans select-none md:px-4 md:py-12">
      <div className="">
        <div
          className="absolute top-0 right-0 left-0 z-10 h-8"
          style={{
            backgroundImage: `url('${CLOUDINARY_ASSETS.topCheckers}')`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="pointer-events-none absolute top-2/3 left-0 w-[45%] -translate-y-1/2 opacity-100 mix-blend-multiply md:w-[28%] md:max-w-none">
          <Image
            src={CLOUDINARY_ASSETS.vinylRight}
            alt="Retro Vinyl Left"
            width={320}
            height={320}
            className="h-auto w-full -scale-x-100 object-contain"
          />
        </div>
        <div className="pointer-events-none absolute top-2/3 right-0 w-[45%] -translate-y-1/2 opacity-100 mix-blend-multiply md:w-[28%] md:max-w-none">
          <Image
            src={CLOUDINARY_ASSETS.vinylRight}
            alt="Retro Vinyl Right"
            width={320}
            height={320}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-4xl">
          <h1 className="font-canopee mt-7 mb-12 text-center text-6xl tracking-tight text-[#2A5266] underline text-shadow-md md:text-8xl">
            FAQS
          </h1>
          <div className="w-full space-y-3">
            {faqData.map((item: FAQItem) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-sm border-2 border-black bg-[#F4E4B8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <span className="font-canopee text-xl font-black tracking-wide text-[#2B4E61] md:text-2xl">
                      {item.question}
                    </span>
                    <span className="px-2 text-xl font-bold text-black transition-transform duration-200">
                      {isOpen ? 'x' : '＋'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-[300px] border-t-2 border-black'
                        : 'max-h-0'
                    }`}
                  >
                    <p className="font-editorial bg-[#F4E4B8] p-5 text-sm leading-relaxed font-medium text-gray-800 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 -bottom-12 left-0 z-100 translate-y-[300px] md:translate-y-[350px]">
        <Image
          src={CLOUDINARY_ASSETS.bottomrail}
          alt="Bottom Rails"
          width={1920}
          height={12}
          className="absolute h-auto w-full object-contain"
        />
        <Image
          src={CLOUDINARY_ASSETS.bottomrail}
          alt="Bottom Rails"
          width={1920}
          height={12}
          className="h-auto w-full rotate-6 object-contain"
        />
      </div>
    </div>
  );
};

export default FAQAccordion;
