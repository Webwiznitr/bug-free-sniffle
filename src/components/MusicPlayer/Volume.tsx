'use client';

import { useEffect, useRef, useState } from 'react';

function Volume() {
  const [vol, setVol] = useState(50);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const volumeTicks = Array.from(
    { length: 11 },
    (_, index) => 100 - index * 10
  );

  const thumbSize = 56;
  const trackHeight = 400; // Desktop track height

  const updateVolumeFromClient = (clientX: number, clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const isHorizontal = rect.width > rect.height;

    if (isHorizontal) {
      const maxTravel = rect.width - thumbSize;
      const offsetX = clientX - rect.left - thumbSize / 2;
      const nextVol = (offsetX / maxTravel) * 100;
      setVol(Math.max(0, Math.min(100, nextVol)));
    } else {
      const maxTravel = rect.height - thumbSize;
      const offsetY = clientY - rect.top - thumbSize / 2;
      const nextVol = 100 - (offsetY / maxTravel) * 100;
      setVol(Math.max(0, Math.min(100, nextVol)));
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isGrabbed) return;
      updateVolumeFromClient(event.clientX, event.clientY);
    };

    const handleMouseUp = () => {
      setIsGrabbed(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isGrabbed]);

  return (
    <div className="bg-background flex h-fit w-full shrink-0 flex-col items-center justify-center gap-2 border-b-2 border-black px-6 pt-10 pb-10 sm:px-16 xl:w-auto xl:border-r-2 xl:border-b-0 xl:px-30">
      <p className="font-editorial mb-8 text-2xl font-bold xl:hidden">VOLUME</p>

      <div className="relative flex h-16 w-full max-w-[400px] flex-col items-center justify-center xl:h-[400px] xl:w-16 xl:flex-row">
        {/* Vertical Ticks (Desktop) */}
        <div className="pointer-events-none absolute top-0 left-6 hidden h-full w-10 xl:block">
          {volumeTicks.map((tick) => (
            <div
              key={tick}
              className="absolute left-0 h-1 rounded-full bg-black"
              style={{
                top: `${((100 - tick) / 100) * (trackHeight - thumbSize) + thumbSize / 2}px`,
                width: tick % 50 === 0 ? '2.5rem' : '1.5rem',
              }}
            />
          ))}
        </div>

        {/* Horizontal Ticks (Mobile) */}
        <div className="pointer-events-none absolute top-12 left-0 h-10 w-full xl:hidden">
          {volumeTicks.map((tick) => {
            const val = 100 - tick;
            return (
              <div
                key={tick}
                className="absolute top-0 flex w-1 flex-col items-center rounded-full bg-black"
                style={{
                  left: `calc(${val}% - 2px)`,
                  height: val % 50 === 0 ? '1.5rem' : '0.75rem',
                }}
              >
                {val % 50 === 0 && (
                  <span className="font-editorial mt-8 text-sm font-semibold">
                    {val / 10}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div
          ref={trackRef}
          className="bg-secondary relative h-4 w-full rounded-full xl:h-[400px] xl:w-4"
          onMouseDown={(event) => {
            setIsGrabbed(true);
            updateVolumeFromClient(event.clientX, event.clientY);
          }}
        />

        {/* Desktop Thumb */}
        <div
          className={`absolute right-1 hidden h-14 w-44 translate-x-20 items-center justify-center rounded-2xl border-2 bg-[#E3442E] shadow-[-6px_6px_0px_2px_black] xl:flex ${isGrabbed ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            top: `${((100 - vol) / 100) * (trackHeight - thumbSize)}px`,
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
            setIsGrabbed(true);
            updateVolumeFromClient(event.clientX, event.clientY);
          }}
        >
          <div className="h-5 w-40 translate-x-8 rounded-2xl border-2 bg-[#E3442E] shadow-[-3px_3px_0px_1px_black]" />
        </div>

        {/* Mobile Thumb */}
        <div
          className={`absolute top-1/2 flex h-44 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border-2 bg-[#E3442E] shadow-[4px_4px_0px_2px_black] xl:hidden ${isGrabbed ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            left: `calc(${vol}% - ${(vol * thumbSize) / 100}px)`,
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
            setIsGrabbed(true);
            updateVolumeFromClient(event.clientX, event.clientY);
          }}
        >
          <div className="h-40 w-5 -translate-y-8 rounded-2xl border-2 bg-[#E3442E] shadow-[2px_2px_0px_1px_black]" />
        </div>
      </div>
      <p className="font-editorial mt-8 hidden font-bold xl:block">VOLUME</p>
    </div>
  );
}

export default Volume;
