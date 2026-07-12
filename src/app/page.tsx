import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
import Faq from '@/components/faq/Faq';
import Sponsors from '@/components/sponsors/Sponsors';
import WhatAndStatistics from '@/components/whatAndStatistics/WhatAndStatistics';
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import Prizes from '@/components/prizes/Prizes';
import Footer from '@/components/footer/Footer';
import Teams from '@/components/teams/Teams';
import Tape from '@/components/tape/Tape';
import FaqSection from '@/components/faq/Faq';
export default function Home() {
  return (
    <div className="m-0 p-0">
      <Hero />
      <Tape />
      <WhatAndStatistics />
      <Timeline />
      <Prizes />
      <Teams />
      <FaqSection />
      <Footer />
    </div>
  );
}
