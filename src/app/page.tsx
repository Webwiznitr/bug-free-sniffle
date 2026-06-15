import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
import Faq from '@/components/faq/Faq';
import Sponsors from '@/components/sponsors/Sponsors';
import WhatAndStatistics from '@/components/whatAndStatistics/WhatAndStatistics';
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';

import Prizes from '@/components/prizes/Prizes';
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatAndStatistics />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Faq />
      <div className="mt-89">
        <MusicPlayer />
      </div>
    </div>
  );
}
