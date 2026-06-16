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

  const thumbHeight = 56;
  const trackHeight = 400;
  const maxTravel = trackHeight - thumbHeight;

  const updateVolumeFromClientY = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const offsetY = clientY - rect.top - thumbHeight / 2;
    const nextVol = 100 - (offsetY / maxTravel) * 100;

    setVol(Math.max(0, Math.min(100, nextVol)));
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isGrabbed) return;
      updateVolumeFromClientY(event.clientY);
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
    <div className="bg-background flex h-fit shrink-0 flex-col items-center justify-center gap-2 border-r-2 border-black px-10 pt-10 pb-10 sm:px-16 lg:px-30">
      <div className="relative flex h-100 items-center">
        <div className="pointer-events-none absolute top-0 left-6 h-full w-10">
          {volumeTicks.map((tick) => (
            <div
              key={tick}
              className="absolute left-0 h-1 rounded-full bg-black"
              style={{
                top: `${((100 - tick) / 100) * maxTravel + thumbHeight / 2}px`,
                width: tick % 50 === 0 ? '2.5rem' : '1.5rem',
              }}
            />
          ))}
        </div>
        <div
          ref={trackRef}
          className="bg-secondary relative h-100 w-4 rounded-t-full rounded-b-full"
          onMouseDown={(event) => {
            setIsGrabbed(true);
            updateVolumeFromClientY(event.clientY);
          }}
        />
        <div
          className={`absolute right-1 flex h-14 w-44 translate-x-20 items-center justify-center rounded-2xl border-2 bg-[#E3442E] shadow-[-6px_6px_0px_2px_black] ${isGrabbed ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            top: `${((100 - vol) / 100) * maxTravel}px`,
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
            setIsGrabbed(true);
            updateVolumeFromClientY(event.clientY);
          }}
        >
          <div className="h-5 w-40 translate-x-8 rounded-2xl border-2 bg-[#E3442E] shadow-[-3px_3px_0px_1px_black]" />
        </div>
      </div>
      <p className="font-editorial font-semibold">VOLUME</p>
    </div>
  );
}

export default Volume;
