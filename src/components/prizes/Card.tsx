export default function Card() {
  return (
    <div className="mt-6.5 grid w-full items-end justify-center gap-8 sm:mt-15 sm:gap-14 lg:mt-31 lg:grid-cols-3 lg:gap-8">
      <div className="flex h-30 w-35 cursor-pointer flex-col items-center justify-center justify-self-center border-[1.547px] border-[#1A0E05] bg-[#E3442E] shadow-[1.331px_1.331px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 active:translate-x-4 active:scale-95 sm:h-73 sm:w-80 sm:border-3 sm:shadow-[5px_5px_0px_0px_#1A0E05] lg:h-[90%] lg:w-[90%] lg:justify-self-end lg:border-[5.28px] lg:bg-[#2A5266]">
        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 border-solid bg-[#F4E4B8] sm:h-30 sm:w-30 sm:border-3 lg:h-42.25 lg:w-42.25 lg:border-6">
          <div className="flex h-[18.56px] w-[18.56px] items-center justify-center rounded-full border-[0.773px] border-solid bg-[#A83320] sm:h-12 sm:w-12 sm:border-2 lg:h-16 lg:w-16 lg:border-[2.64px]">
            <div className="h-0.75 w-0.75 rounded-full bg-black sm:h-1.75 sm:w-1.75 lg:h-2.5 lg:w-2.5"></div>
          </div>
        </div>
        <p className="font-bungee pt-2 text-center text-[6.187px] leading-[9.28px] font-normal text-[#1A0E05] sm:pt-4 sm:text-[21.12px] sm:leading-[31.68px]">
          PLATINUM
        </p>
        <p className="font-editorial pt-0.5 text-center text-[18.844px] leading-[28.266px] font-extrabold text-[#F4E4B8] sm:pt-2 sm:text-[56px] sm:leading-17 lg:pt-0.5 lg:text-[70.76px] lg:leading-[96.495px]">
          &#8377;1,50,000
        </p>
      </div>

      <div className="relative z-10 flex h-30 w-35 cursor-pointer flex-col items-center justify-center justify-self-center border-[1.547px] border-[#1A0E05] bg-[#2A5266] shadow-[1.331px_1.331px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 active:translate-x-4 active:scale-95 sm:h-73 sm:w-80 sm:border-3 sm:shadow-[5px_5px_0px_0px_#1A0E05] lg:mt-20 lg:h-full lg:w-full lg:border-[5.28px] lg:bg-[#E3442E]">
        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 border-solid bg-[#F4E4B8] sm:h-30 sm:w-30 sm:border-3 lg:h-42.25 lg:w-42.25 lg:border-6">
          <div className="flex h-[18.56px] w-[18.56px] items-center justify-center rounded-full border-[0.773px] border-solid bg-[#A83320] sm:h-12 sm:w-12 sm:border-2 lg:h-16 lg:w-16 lg:border-[2.64px]">
            <div className="h-0.75 w-0.75 rounded-full bg-black sm:h-1.75 sm:w-1.75 lg:h-2.5 lg:w-2.5"></div>
          </div>
        </div>
        <p className="font-bungee pt-2 text-center text-[6.187px] leading-[9.28px] font-normal text-[#1A0E05] sm:pt-4 sm:text-[21.12px] sm:leading-[31.68px]">
          GOLD RECORD
        </p>
        <p className="font-editorial pt-0.5 text-center text-[18.844px] leading-[28.266px] font-extrabold text-[#F4E4B8] [text-shadow:1px_1px_0_#000] sm:pt-2 sm:text-[56px] sm:leading-17 lg:pt-0.5 lg:text-[70.76px] lg:leading-[96.495px] lg:[text-shadow:4px_4px_0_#000]">
          &#8377;3,00,000
        </p>
      </div>

      <div className="bordder-[1.547px] mb-40 flex h-30 w-35 cursor-pointer flex-col items-center justify-center justify-self-center border-[#1A0E05] bg-[#E3442E] shadow-[1.331px_1.331px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 active:translate-x-4 active:scale-95 sm:h-73 sm:w-80 sm:border-3 sm:shadow-[5px_5px_0px_0px_#1A0E05] lg:mb-0 lg:h-[90%] lg:w-[90%] lg:justify-self-start lg:border-[5.28px] lg:bg-[#2A5266]">
        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 border-solid bg-[#F4E4B8] sm:h-30 sm:w-30 sm:border-3 lg:h-42.25 lg:w-42.25 lg:border-6">
          <div className="flex h-[18.56px] w-[18.56px] items-center justify-center rounded-full border-[0.773px] border-solid bg-[#A83320] sm:h-12 sm:w-12 sm:border-2 lg:h-16 lg:w-16 lg:border-[2.64px]">
            <div className="h-0.75 w-0.75 rounded-full bg-black sm:h-1.75 sm:w-1.75 lg:h-2.5 lg:w-2.5"></div>
          </div>
        </div>
        <p className="font-bungee pt-2 text-center text-[6.187px] leading-[9.28px] font-normal text-[#1A0E05] sm:pt-4 sm:text-[21.12px] sm:leading-[31.68px]">
          BRONZE BEAT
        </p>
        <p className="font-editorial pt-0.5 text-center text-[18.844px] leading-[28.266px] font-extrabold text-[#F4E4B8] [text-shadow:1px_1px_0_#000] sm:pt-2 sm:text-[56px] sm:leading-17 lg:pt-0.5 lg:text-[70.76px] lg:leading-[96.495px] lg:[text-shadow:4px_4px_0_#000]">
          &#8377;75,000
        </p>
      </div>
    </div>
  );
}
