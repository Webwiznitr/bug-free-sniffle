import { Shuffle, SkipBack, SkipForward } from 'lucide-react';

function Controls() {
  return (
    <div className="flex flex-col gap-10 px-10 pt-10 pb-10">
      <div className="flex flex-col items-center gap-2">
        <div className="text-background flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-[#E3442E] shadow-[-4px_3px_0_2px_black] active:scale-90">
          <Shuffle size={37} />
        </div>
        <p className="font-editorial font-semibold">SHUFFLE</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-background bg-secondary flex h-20 w-20 items-center justify-center rounded-full border-2 border-black shadow-[-4px_3px_0_2px_black] active:scale-90">
          <SkipForward className="fill-background" size={37} />
        </div>
        <p className="font-editorial font-semibold">NEXT</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-background flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-[#D4A017] shadow-[-4px_3px_0_2px_black] active:scale-90">
          <SkipBack className="fill-background" size={37} />
        </div>
        <p className="font-editorial font-semibold">PREVIOUS</p>
      </div>
    </div>
  );
}

export default Controls;
