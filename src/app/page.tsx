import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
import Faq from '@/components/faq/Faq';
import Sponsors from '@/components/sponsors/Sponsors';
export default function Home() {
  return (
    <div>
      <Hero />
      <Timeline />
      <Sponsors />
      <Faq />
    </div>
  );
}
