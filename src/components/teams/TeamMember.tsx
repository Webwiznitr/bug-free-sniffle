import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  avatarUrl: string;
  tiltClass: string;
}

export const teamMember: TeamMember[] = [
  {
    id: 1,
    name: 'tilak',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 2,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 3,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 4,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 5,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 6,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 7,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 8,
    name: 'JANE COPPER',
    role: 'DESIGN HEAD',
    imageUrl: '/blackdisc.png',
    avatarUrl: '/person.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
];

export default function TeamMembersGrid() {
  return (
    <div className="mx-auto w-full px-2 py-4 sm:px-4">
      <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-10">
        {teamMember.map((m) => (
          <div
            key={m.id}
            className={`relative flex aspect-[281/316] w-full max-w-[281px] transform flex-col items-center justify-between overflow-hidden border-2 border-black/10 bg-[#E3442E] p-3 text-center text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out hover:z-30 hover:scale-105 hover:rotate-0 sm:p-4 md:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.9)] ${m.tiltClass} `}
          >
            {/* Render Detail */}
            <div className="z-10 flex w-full flex-col items-center pt-1 select-none">
              <h2 className="font-canopee text-2xl leading-none tracking-wide text-[#F4E4B8] uppercase sm:text-3xl md:text-[2.2rem]">
                {m.name}
              </h2>
              <p className="mt-0.5 font-sans text-[9px] font-bold tracking-widest text-black/90 uppercase sm:mt-1 sm:text-[11px]">
                {m.role}
              </p>
            </div>

            <div className="relative mt-2 flex max-h-[70%] w-full flex-grow items-end justify-center">
              {/* Disc Image */}
              <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center p-2">
                <div className="relative aspect-square h-[150%] w-full">
                  <Image
                    src={m.imageUrl}
                    alt="Disc Background"
                    fill
                    sizes="(max-w-868px) 50vw, 25vw"
                    className="pointer-events-none object-contain select-none"
                    priority={m.id <= 4}
                  />
                </div>
              </div>

              {/* Avatar Image */}
              <div className="relative top-0 z-10 h-[150%] w-full">
                <Image
                  src={m.avatarUrl}
                  alt="Avatar"
                  fill
                  sizes="(max-w-768px) 50vw, 25vw"
                  className="pointer-events-none translate-y-4 object-contain object-bottom transition-transform duration-300 select-none group-hover:scale-105"
                  priority={m.id <= 4}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
