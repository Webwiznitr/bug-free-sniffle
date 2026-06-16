function WhatIsHO() {
  return (
    <div className="flex w-full flex-col gap-10 pl-10">
      <div className={`text-primary w-fit flex-col`}>
        <h1 className="font-canopee text-shadow text-[140px] leading-none [@media(max-width:1046px)_and_(min-width:885px)]:text-[100px] [@media(max-width:1207px)_and_(min-width:1046px)]:text-[120px] [@media(max-width:563px)]:text-[30px] [@media(max-width:724px)_and_(min-width:563px)]:text-[60px] [@media(max-width:885px)_and_(min-width:724px)]:text-[80px]">
          WHAT IS HACKODISHA ?
        </h1>
        <div className="bg-primary h-2 w-full pr-2 shadow-[4px_4px_black]" />
      </div>
      <div className="font-editorial text-foreground flex max-w-300 flex-col gap-10 text-[30px] font-extrabold [@media(max-width:1046px)_and_(min-width:885px)]:text-[25px] [@media(max-width:1207px)_and_(min-width:1046px)]:text-[25px] [@media(max-width:563px)]:text-[20px] [@media(max-width:724px)_and_(min-width:563px)]:text-[25px] [@media(max-width:885px)_and_(min-width:724px)]:text-[25px]">
        <p>
          HackOdisha- a thrilling{' '}
          <span className="text-secondary">36-hour online hackathon</span>{' '}
          organized by{' '}
          <span className="text-secondary">Webwiz, Nit Rourkela</span> — an
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
