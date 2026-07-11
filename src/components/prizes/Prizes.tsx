import Image from 'next/image';
import Radio from './radio';
import PrizesCard from './Card';

function Prizes() {
  return (
    <div className="relative top-[-35vw] my-2 sm:top-[-18vw] md:top-[-16vw]">
      <div className="absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden">
        <Image
          src="/prizegrid.svg"
          alt="image"
          fill
          className="object-cover lg:object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative px-[3vw] py-[0.5rem] md:px-[8vw] md:py-[1rem] lg:py-[2rem]">
        <h2 className="text-center font-[Canopee] text-[16vw] leading-normal font-normal text-[#2A5266] underline decoration-solid [text-shadow:1.5px_1.5px_0_#5A2D1D] [text-underline-position:from-font] sm:text-[14vw] md:text-[12vw] lg:[text-shadow:5px_5px_0_#5A2D1D]">
          Prizes
        </h2>
        <PrizesCard />
        <div className="my-[2rem] hidden flex-row items-center justify-around gap-5 py-[3rem] md:flex">
          <Radio name="OPENERS" char="A" color="#A83320" rotate="355" />
          <Radio name="REMIX" char="B" color="#5E7A3D" rotate="5" />
          <Radio name="ENCORE" char="A" color="#D4A017" rotate="355" />
        </div>
      </div>
      <div>
        <Image
          src="/footertape.png"
          alt="Tape"
          width={1920}
          height={1080}
          className="hidden h-full w-full md:block"
        />
        <Image
          src="/mobiletape.svg"
          alt="Mobile Tape"
          width={1920}
          height={1080}
          className="h-full w-full md:hidden"
        />
      </div>
    </div>
  );
}

export default Prizes;
