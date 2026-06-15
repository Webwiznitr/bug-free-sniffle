import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
import Faq from '@/components/faq/Faq';
import Sponsors from '@/components/sponsors/Sponsors';
import WhatAndStatistics from '@/components/whatAndStatistics/WhatAndStatistics';
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatAndStatistics />
      <Timeline />
      <Sponsors />
      <Faq />
      <MusicPlayer />
    </div>
  );
}
