'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollingTape() {
  const tape1Ref = useRef<HTMLDivElement>(null);
  const tape2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tape 1: Moves Left to Right
      const anim1 = gsap.fromTo(
        tape1Ref.current,
        { xPercent: -50 },
        { xPercent: 0, duration: 15, ease: 'none', repeat: -1 }
      );

      // Tape 2: Moves Right to Left
      const anim2 = gsap.fromTo(
        tape2Ref.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 25, ease: 'none', repeat: -1 }
      );

      // Scroll Velocity
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          let timeScale = 1 + Math.abs(velocity / 300);
          timeScale = Math.min(timeScale, 5); //

          gsap.to([anim1, anim2], {
            timeScale: timeScale,
            duration: 0.2,
            overwrite: true,
          });

          gsap.to([anim1, anim2], {
            timeScale: 1,
            duration: 0.8,
            delay: 0.1,
            overwrite: 'auto',
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* LAYER 1: Tilted at 4 degrees */}
      <div className="absolute top-0 -left-[10%] w-[120%] origin-center rotate-[4deg]">
        <div ref={tape1Ref} className="flex w-[200%]">
          <div className="w-1/2 flex-shrink-0">
            <Image
              src="/straighttape.svg"
              alt="Tilted Tape"
              width={1920}
              height={1080}
              className="hidden h-full w-full md:block"
            />
            <Image
              src="/straighttapemobile.svg"
              alt="Mobile Tilted Tape"
              width={1920}
              height={1080}
              className="h-full w-full md:hidden"
            />
          </div>
          <div className="w-1/2 flex-shrink-0">
            <Image
              src="/straighttape.svg"
              alt="Tilted Tape"
              width={1920}
              height={1080}
              className="hidden h-full w-full md:block"
            />
            <Image
              src="/straighttapemobile.svg"
              alt="Mobile Tilted Tape"
              width={1920}
              height={1080}
              className="h-full w-full md:hidden"
            />
          </div>
        </div>
      </div>

      {/* LAYER 2: Straight / Alternative Angle */}
      <div className="absolute top-4 -left-[5%] w-[110%] origin-center">
        <div ref={tape2Ref} className="flex w-[200%]">
          <div className="w-1/2 flex-shrink-0">
            <Image
              src="/straighttape.svg"
              alt="Straight Tape"
              width={1920}
              height={1080}
              className="hidden h-full w-full md:block"
            />
            <Image
              src="/straighttapemobile.svg"
              alt="Mobile Straight Tape"
              width={1920}
              height={1080}
              className="h-full w-full md:hidden"
            />
          </div>
          <div className="w-1/2 flex-shrink-0">
            <Image
              src="/straighttape.svg"
              alt="Straight Tape"
              width={1920}
              height={1080}
              className="hidden h-full w-full md:block"
            />
            <Image
              src="/straighttapemobile.svg"
              alt="Mobile Straight Tape"
              width={1920}
              height={1080}
              className="h-full w-full md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
