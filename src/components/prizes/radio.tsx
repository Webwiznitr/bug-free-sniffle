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
      className="flex h-45.5 w-80 items-center justify-center rounded-[10.56px] border-[5.28px] border-solid shadow-[7.92px_7.92px_0_0_#000]"
      style={{ backgroundColor: color, transform: `rotate(${rotate}deg)` }}
    >
      <div className="h-[82.4%] w-[90%] rounded-[7.92px] border-[3.96px] border-solid bg-[#F4E4B8]">
        <div className="font-press-start m-[10.54px] flex flex-row justify-between border-b-[2.64px] border-dashed border-black/60 pb-[5.6px] text-[10.56px] leading-[15.84px] font-normal text-[#1A0E05] not-italic">
          <p>SIDE {char}</p>
          <p>90 MIN</p>
        </div>

        <div className="my-5 flex w-full items-center justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid bg-[#FFF8E7]">
            <div className="absolute h-[42.24px] w-[5.28px] rotate-135 bg-black/40"></div>
            <div className="relative z-20 h-[10.56px] w-[10.56px] rounded-full bg-black"></div>
          </div>

          <p className="font-bungee px-2 text-center text-[23.76px] leading-[35.64px] font-normal text-[#1A0E05] not-italic">
            {name}
          </p>

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid bg-[#FFF8E7]">
            <div className="relative z-20 h-[10.56px] w-[10.56px] rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
