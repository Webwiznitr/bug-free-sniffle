function WhatIsHO() {
  return (
    <div className="flex w-full flex-col gap-5 px-4 sm:px-6 lg:gap-10 lg:pr-0 lg:pl-10">
      <div className="text-primary w-fit flex-col">
        <h1 className="font-canopee text-shadow text-[clamp(2.25rem,8vw,8.75rem)] leading-[0.9]">
          WHAT IS HACKODISHA ?
        </h1>
        <div className="bg-primary h-1.5 w-full max-w-[32rem] pr-2 shadow-[4px_4px_black]" />
      </div>
      <div className="font-editorial text-foreground flex max-w-none flex-col gap-5 text-[clamp(1rem,2.4vw,1.875rem)] leading-snug font-extrabold sm:gap-6 lg:max-w-[37.5rem] lg:gap-10">
        <p>
          HackOdisha- a thrilling{' '}
          <span className="text-secondary">36-hour online hackathon</span>{' '}
          organized by{' '}
          <span className="text-secondary">Webwiz, Nit Rourkela</span> - an
          event dedicated to fostering community collaboration. With an
          impressive turnout of over 1600 participants across India, this
          hackathon promises to be a platform where innovation knows no bounds
        </p>
        <p>
          We celebrate the power of technology and the indomitable spirit of our
          participants. Together, we&apos;re shaping a brighter future through{' '}
          <span className="text-secondary">innovation and collaboration.</span>
        </p>
      </div>
    </div>
  );
}

export default WhatIsHO;
