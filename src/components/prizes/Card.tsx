import { pricingTiers } from '@/config/prize';
import PricingCard from './PriceCard';

export default function PricingCards() {
  return (
    <section className="mt-5 flex flex-3 flex-col items-center gap-5 p-2 md:flex-row md:items-end">
      {pricingTiers.map((tier) => (
        <PricingCard key={tier.id} config={tier} />
      ))}
    </section>
  );
}
