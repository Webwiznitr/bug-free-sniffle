import Statistics from './Statistics';
import WhatIsHO from './WhatIsHO';
import { images } from '@/config';
import Image from 'next/image';

function WhatAndStatistics() {
  return (
    <div
      className="flex bg-cover bg-center"
      style={{
        backgroundImage: `url(${images.WhatAndStatisticsBg})`,
      }}
    >
      <div className="py-0">
        <WhatIsHO />
        <div className="my-20 h-2 w-[50%] bg-[linear-gradient(90deg,#20160d_0%,#4a3420_15%,#7a5c3d_30%,#a88a64_50%,#cbb28a_70%,#e3d0a6_85%,#f4e4b8_100%)]" />
        <Statistics />
      </div>
      <Image
        src={images.rightImgAbout}
        height={100}
        width={400}
        alt=""
        className="h-ful ml-auto w-fit"
      />
    </div>
  );
}

export default WhatAndStatistics;
