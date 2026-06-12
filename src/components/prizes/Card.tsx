export default function Card() {
  return (
    <div className="mt-31 grid w-full items-end justify-center gap-8 lg:grid-cols-3">
      <div className="flex cursor-pointer flex-col items-center justify-center justify-self-center border-[5.28px] border-[#1A0E05] bg-[#2A5266] shadow-[5px_5px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 lg:h-[90%] lg:w-[90%] lg:justify-self-end">
        <div className="flex h-42.25 w-42.25 items-center justify-center rounded-full border-6 border-solid bg-[#F4E4B8]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2.64px] border-solid bg-[#A83320]">
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
          </div>
        </div>
        <p className="font-bungee pt-4 text-center text-[21.12px] leading-[31.68px] font-normal text-[#1A0E05]">
          PLATINUM
        </p>
        <p className="font-editorial pt-0.5 text-center text-[70.76px] leading-[96.495px] font-extrabold text-[#F4E4B8] [text-shadow:4px_4px_0_#000]">
          &#8377;1,50,000
        </p>
      </div>

      <div className="relative z-10 mt-20 flex h-full w-[90%] cursor-pointer flex-col items-center justify-center justify-self-center border-[5.28px] border-[#1A0E05] bg-[#E3442E] shadow-[5px_5px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 lg:w-full">
        <div className="flex h-42.25 w-42.25 items-center justify-center rounded-full border-6 border-solid bg-[#F4E4B8]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2.64px] border-solid bg-[#A83320]">
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
          </div>
        </div>
        <p className="font-bungee pt-4 text-center text-[21.12px] leading-[31.68px] font-normal text-[#1A0E05]">
          GOLD RECORD
        </p>
        <p className="font-editorial pt-0.5 text-center text-[70.76px] leading-[96.495px] font-extrabold text-[#F4E4B8] [text-shadow:4px_4px_0_#000]">
          &#8377;3,00,000
        </p>
      </div>

      <div className="flex h-[90%] w-[90%] cursor-pointer flex-col items-center justify-center justify-self-center border-[5.28px] border-[#1A0E05] bg-[#2A5266] shadow-[5px_5px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 lg:justify-self-start">
        <div className="flex h-42.25 w-42.25 items-center justify-center rounded-full border-6 border-solid bg-[#F4E4B8]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2.64px] border-solid bg-[#A83320]">
            <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
          </div>
        </div>
        <p className="font-bungee pt-4 text-center text-[21.12px] leading-[31.68px] font-normal text-[#1A0E05]">
          BRONZE BEAT
        </p>
        <p className="font-editorial pt-0.5 text-center text-[70.76px] leading-[96.495px] font-extrabold text-[#F4E4B8] [text-shadow:4px_4px_0_#000]">
          &#8377;75,000
        </p>
      </div>
    </div>
  );
}
