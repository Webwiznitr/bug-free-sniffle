function Statistics() {
  return (
    <div className="ssm:mb-24 mt-12 mb-12 py-6 md:my-20 md:py-16">
      <div className="flex flex-col gap-8 p-2 md:gap-10">
        <div className="">
          <h1 className="font-canopee text-secondary text-[12vw] leading-normal underline underline-offset-12 [text-shadow:1px_1px_0_var(--foreground)] sm:text-[9vw] md:text-[8vw] lg:[text-shadow:3px_3px_0_var(--foreground)]">
            STATISTICS
          </h1>
        </div>
        <div className="grid grid-cols-2 space-y-4 sm:space-y-8 md:space-y-12">
          {[1, 2, 3, 4].map((val, index) => {
            return (
              <div
                key={index}
                className={`size-[26vw] -rotate-4 shadow-[2px_2px_0_black] sm:shadow-[4px_4px_0_black] md:size-[24vw] ${index == 0 || index == 3 ? 'bg-primary' : 'bg-secondary'}`}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
