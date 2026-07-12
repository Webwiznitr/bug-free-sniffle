import Statistics from './Statistics';
import WhatIsHO from './WhatIsHO';
import { images } from '@/config';
import Image from 'next/image';
import { timelineConfig } from '@/config';
function WhatAndStatistics() {
  return (
    <div className="relative flex">
      <div className="mt-[3vw] w-3/4 px-[4vw] pt-[7vw] sm:pt-[7vw] md:mt-[5vw] md:pt-[3vw] lg:mt-[6vw]">
        <div className="absolute top-40 left-0 z-[-1] h-full w-full">
          <Image
            src={images.background}
            alt="Background"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <WhatIsHO />
        <div className="absolute left-0 my-8 h-2 w-[50vw] bg-[linear-gradient(to_right,#1A0E05_0%,rgba(26,14,5,0)_100%)] md:my-20" />
        <Statistics />
        <div className="absolute -bottom-[3.25vw] left-0 z-[-10] w-full md:-bottom-[3.5vw]">
          <Image
            src={timelineConfig.bottomTapeSrc}
            alt="Bottom Tape"
            width={0}
            height={0}
            className="w-[100vw]"
          />
        </div>
      </div>
      <div className="relative w-1/4 self-stretch overflow-hidden">
        <Image
          src={images.rightImgAbout}
          alt=""
          fill
          sizes="25vw"
          className="object-cover object-top pt-[3.5vw] md:pt-[2vw] lg:pt-[3vw] xl:pt-[2.75vw]"
        />
      </div>
    </div>
  );
}

export default WhatAndStatistics;
