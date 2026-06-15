import React from 'react';
import Image from 'next/image';
import Radio from './radio';
import Card from './Card';

function Prizes() {
  return (
    <div className="relative w-full items-center overflow-hidden lg:h-345">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/ddoeahbpv/image/upload/grid_transparent_c0txao"
          alt="image"
          fill
          priority
          sizes="100vw"
          className="scale-140 rotate-90 object-cover object-center opacity-60 [-webkit-mask-image:linear-gradient(to_right,transparent,black_50%,black_20%,transparent)] lg:scale-125 lg:object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-around">
        <h2 className="mt-6 font-[Canopee] text-[44.26px] leading-none font-normal text-[#2A5266] underline decoration-solid [text-shadow:1.25px_1.25px_0_#5A2D1D] [text-underline-position:from-font] sm:mt-12 sm:text-[95.28px] lg:mt-20.25 lg:text-[190.56px] lg:[text-shadow:5px_5px_0_#5A2D1D]">
          Prizes
        </h2>
        <Card />
        <div className="mt-27 hidden items-center justify-center gap-25 lg:grid lg:grid-cols-3 2xl:gap-30">
          <Radio name="OPENERS" char="A" color="#A83320" rotate="355" />
          <Radio name="REMIX" char="B" color="#5E7A3D" rotate="5" />
          <Radio name="ENCORE" char="A" color="#D4A017" rotate="355" />
        </div>
      </div>
    </div>
  );
}

export default Prizes;
