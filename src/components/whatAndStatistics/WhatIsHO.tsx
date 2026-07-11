import Image from 'next/image';

function WhatIsHO() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="p-1">
        <h1 className="font-canopee text-[10vw] leading-tight font-normal text-[#E3442E] underline underline-offset-6 [text-shadow:1px_1px_0_var(--foreground)] sm:[text-shadow:2px_2px_0_var(--foreground)] md:text-[8vw] md:underline-offset-12 md:[text-shadow:2px_2px_0_var(--foreground)] lg:[text-shadow:3px_3px_0_var(--foreground)]">
          WHAT IS HACKODISHA ?
        </h1>
      </div>
      <div className="p-1 pr-[5vw]">
        <p className="font-editorial text-foreground text-[2.5vw] leading-[120%] font-extrabold md:text-[2vw]">
          HackOdisha- a thrilling{' '}
          <span className="text-secondary">36-hour online hackathon</span>{' '}
          organized by{' '}
          <span className="text-secondary">Webwiz, Nit Rourkela</span> - an
          event dedicated to fostering community collaboration. With an
          impressive turnout of over 1600 participants across India, this
          hackathon promises to be a platform where innovation knows no bounds
        </p>
        <p className="font-editorial text-foreground mt-4 text-[2.5vw] leading-[120%] font-extrabold md:mt-5 md:text-[2vw]">
          We celebrate the power of technology and the indomitable spirit of our
          participants. Together, we&apos;re shaping a brighter future through{' '}
          <span className="text-secondary">innovation and collaboration.</span>
        </p>
      </div>
    </div>
  );
}

export default WhatIsHO;
