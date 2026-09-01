export interface TierConfig {
  id: string;
  title: string;
  price: string;
  bgClasses: string;
  layoutClasses: string;
  hasTextShadow?: boolean;
}

export const pricingTiers: TierConfig[] = [
  {
    id: 'platinum',
    title: 'PLATINUM',
    price: '₹30,000',
    bgClasses: 'bg-[#E3442E] lg:bg-[#2A5266]',
    layoutClasses: ' w-[48vw] md:w-[50vw] ',
    hasTextShadow: true,
  },
  {
    id: 'gold',
    title: 'GOLD RECORD',
    price: '₹15,000',
    bgClasses: 'bg-[#2A5266] lg:bg-[#E3442E]',
    layoutClasses:
      ' w-[48vw] md:w-[56vw] md:h-[18rem] lg:h-[20rem] xl:h-[22rem] 2xl:h-[24rem] ',
    hasTextShadow: true,
  },
  {
    id: 'bronze',
    title: 'BRONZE BEAT',
    price: '₹10,000',
    bgClasses: 'bg-[#E3442E] lg:bg-[#2A5266]',
    layoutClasses: ' justify-self-start w-[48vw] md:w-[50vw] ',
    hasTextShadow: true,
  },
];
