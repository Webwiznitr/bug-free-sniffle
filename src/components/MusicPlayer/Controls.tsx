import { Shuffle, SkipBack, SkipForward } from 'lucide-react';

function Controls() {
  return (
    <div className="flex w-full flex-row justify-center gap-6 border-b-2 border-black px-6 pt-10 pb-10 sm:gap-10 sm:px-10 xl:w-auto xl:flex-col-reverse xl:border-b-0">
      <div className="flex flex-col items-center gap-2">
        <div className="text-background flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[#D4A017] shadow-[-4px_3px_0_2px_black] active:scale-90 sm:h-20 sm:w-20">
          <SkipBack className="fill-background h-8 w-8 sm:h-9 sm:w-9" />
        </div>
        <p className="font-editorial font-bold">PREV</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-background bg-secondary flex h-16 w-16 items-center justify-center rounded-full border-2 border-black shadow-[-4px_3px_0_2px_black] active:scale-90 sm:h-20 sm:w-20">
          <SkipForward className="fill-background h-8 w-8 sm:h-9 sm:w-9" />
        </div>
        <p className="font-editorial font-bold">NEXT</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-background flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[#E3442E] shadow-[-4px_3px_0_2px_black] active:scale-90 sm:h-20 sm:w-20">
          <Shuffle className="h-8 w-8 sm:h-9 sm:w-9" />
        </div>
        <p className="font-editorial font-bold">SHUFFLE</p>
      </div>
    </div>
  );
}

export default Controls;
