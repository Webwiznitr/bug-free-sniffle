import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  tiltClass: string;
}

export const teamMember: TeamMember[] = [
  {
    id: 1,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:-rotate-2 -rotate-1',
  },
  {
    id: 2,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:rotate-1 rotate-1',
  },
  {
    id: 3,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:-rotate-1 -rotate-2',
  },
  {
    id: 4,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:rotate-2 rotate-1',
  },
  {
    id: 5,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:rotate-1 -rotate-1',
  },
  {
    id: 6,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:-rotate-2 rotate-2',
  },
  {
    id: 7,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:rotate-2 -rotate-2',
  },
  {
    id: 8,
    name: 'JANE COOPER',
    role: 'DESIGN HEAD',
    imageUrl: '/teamMember.png',
    tiltClass: 'md:-rotate-1 rotate-1',
  },
];

export default function TeamMembersGrid() {
  return (
    <div className="mx-auto w-full px-2 py-4 sm:px-4">
      <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-10">
        {teamMember.map((m) => (
          <div
            key={m.id}
            className={`w-full max-w-[281px] transform drop-shadow-[4px_4px_0px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out hover:z-30 hover:scale-105 hover:rotate-0 md:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.9)] ${m.tiltClass} `}
          >
            {/* Native design aspect ratio containment */}
            <div className="relative aspect-[281/316] w-full overflow-hidden rounded-sm">
              <Image
                src={m.imageUrl}
                alt={`${m.name} - ${m.role}`}
                fill
                sizes="(max-w-768px) 50vw, 25vw"
                className="pointer-events-none object-contain select-none"
                priority={m.id <= 4}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
