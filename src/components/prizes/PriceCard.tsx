import RecordGraphic from './RecordGraphic';
import { TierConfig } from '@/config/prize';

function PricingCard({ config }: { config: TierConfig }) {
  const { title, price, bgClasses, layoutClasses, hasTextShadow } = config;

  return (
    <article
      className={`ssm:gap-3 flex cursor-pointer flex-col items-center justify-center gap-2 justify-self-center border-[1.547px] border-[#1A0E05] p-[5vw] shadow-[1.331px_1.331px_0px_0px_#1A0E05] transition-transform duration-300 hover:z-20 hover:-translate-y-4 active:translate-x-4 active:scale-95 sm:border-3 sm:shadow-[3px_3px_0px_0px_#1A0E05] md:p-[2rem] lg:border-[5.28px] ${bgClasses} ${layoutClasses} `}
    >
      <RecordGraphic />

      <h3 className="font-bungee ssm:text-[2vw] py-1 text-center text-[3vw] leading-[9.28px] font-normal text-[#1A0E05] md:text-[1.5vw]">
        {title}
      </h3>

      <p
        className={`font-editorial ssm:text-[6vw] text-center text-[6vw] font-extrabold text-[#F4E4B8] md:text-[4vw] lg:text-[4vw] ${hasTextShadow ? '[text-shadow:1px_1px_0_#000] lg:[text-shadow:3px_3px_0_#000]' : ''} `}
      >
        {price}
      </p>
    </article>
  );
}

export default PricingCard;
