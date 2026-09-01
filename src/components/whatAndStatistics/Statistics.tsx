import React from 'react';

function Statistics() {
  const statsData = [
    { label: 'Registrations', value: '5K+' },
    { label: 'Communities', value: '50+' },
    { label: 'Sponsors', value: '25+' },
    { label: 'Speakers', value: '5+' },
  ];

  return (
    <div className="ssm:mb-24 mt-12 mb-12 py-6 md:my-20 md:py-16">
      <div className="flex flex-col gap-8 p-2 md:gap-10">
        <div className="">
          <h1 className="font-canopee text-secondary text-[12vw] leading-normal underline underline-offset-12 [text-shadow:1px_1px_0_var(--foreground)] sm:text-[9vw] md:text-[8vw] lg:[text-shadow:3px_3px_0_var(--foreground)]">
            STATISTICS
          </h1>
        </div>
        <div className="grid grid-cols-2 space-y-4 sm:space-y-8 md:space-y-12">
          {statsData.map((stat, index) => {
            return (
              <div
                key={index}
                className={`flex size-[26vw] -rotate-4 flex-col items-center justify-center gap-1 p-2 shadow-[2px_2px_0_black] sm:gap-2 sm:shadow-[4px_4px_0_black] md:size-[24vw] md:gap-4 ${
                  index === 0 || index === 3 ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {/* Standard text label using your Canopee font (no pill) */}
                <div
                  className={`text-foreground font-canopee text-[3vw] leading-none font-extrabold tracking-wide whitespace-nowrap sm:text-[2vw] md:text-[3vw]`}
                >
                  {stat.label}
                </div>

                {/* Large text for the number using your Canopee font */}
                <div className="font-canopee text-foreground text-[7vw] leading-none [text-shadow:1px_1px_0_var(--foreground)] sm:text-[6.5vw] sm:[text-shadow:2px_2px_0_var(--foreground)] md:text-[6vw] md:[text-shadow:3px_3px_0_var(--foreground)]">
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
