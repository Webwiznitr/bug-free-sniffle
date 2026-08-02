import React from 'react';
interface RadioProps {
  name: string;
  char: string;
  color: string;
  rotate: string;
}

export default function Radio({ name, char, color, rotate }: RadioProps) {
  return (
    <div
      className="flex w-[14rem] items-center justify-center rounded-[10.56px] border-[4px] border-solid p-[1vw] shadow-[4px_4px_0_0_#000] transition-transform duration-300 hover:z-20 hover:-translate-x-4 lg:w-[16rem] xl:w-[21rem]"
      style={{ backgroundColor: color, transform: `rotate(${rotate}deg)` }}
    >
      <div className="w-full rounded-[7.92px] border-[3.96px] border-solid bg-[#F4E4B8]">
        <div className="flex flex-row items-center justify-between p-2 pb-1">
          <p className="font-press-start text-[1vw] font-normal text-[#1A0E05] not-italic lg:text-[0.75vw]">
            SIDE {char}
          </p>
          <p className="font-press-start text-[1vw] font-normal text-[#1A0E05] not-italic lg:text-[0.75vw]">
            90 MIN
          </p>
        </div>
        <div className="px-2">
          <div className="border-b-[2.64px] border-dashed border-black/60"></div>
        </div>

        <div className="my-2 flex items-center justify-between p-2">
          <div className="relative flex size-[5vw] items-center justify-center rounded-full border-4 border-solid bg-[#FFF8E7]">
            <div className="relative z-20 size-[1vw] rounded-full bg-black"></div>
          </div>

          <p className="font-bungee text-center text-[1.5vw] font-normal text-[#1A0E05] not-italic lg:text-[1.25vw]">
            {name}
          </p>
          <div className="relative flex size-[5vw] items-center justify-center rounded-full border-4 border-solid bg-[#FFF8E7]">
            <div className="relative z-20 size-[1vw] rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
