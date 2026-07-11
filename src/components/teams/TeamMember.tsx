import Image from 'next/image';
import { teamMember } from '@/config/team';

export default function TeamMembersGrid() {
  return (
    <div className="mx-[2vw] my-[2rem] px-[8vw] py-[1rem] sm:my-[3rem] lg:my-[5rem] lg:px-[2vw]">
      <div className="grid grid-cols-2 gap-10 md:gap-10 lg:grid-cols-4 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-24">
        {teamMember.map((m) => (
          <div
            key={m.id}
            className={`ssm:w-[32vw] relative w-[34vw] -rotate-4 transform border-black/10 bg-[#E3442E] p-1 pb-0 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out hover:z-30 hover:scale-105 hover:rotate-0 sm:p-2 sm:pb-0 md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)] lg:w-[18vw] lg:py-4 lg:pb-0`}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="ssm:top-[12vw] absolute top-[12.5vw] left-0 flex w-full items-end justify-center lg:top-[6vw]">
                <Image
                  src={'/teamdisc.svg'}
                  alt="Disc Background"
                  width={500}
                  height={500}
                  className="size-[23vw] object-cover lg:size-[16vw]"
                />
              </div>
            </div>
            {/* Render Detail */}
            <div className="z-10 flex w-full flex-col items-center py-1">
              <h2
                className={`font-canopee ${m.size} rotate-4 leading-none tracking-wide text-[#F4E4B8] uppercase`}
              >
                {m.name}
              </h2>
              <p className="font-canopee my-1 rotate-4 text-[2.5vw] leading-1 tracking-wide text-black/90 uppercase lg:text-[1vw]">
                {m.role}
              </p>
            </div>

            <div className="relative flex w-full items-end justify-center">
              <Image
                src={m.avatarUrl}
                alt="Avatar"
                width={500}
                height={500}
                className="aspect-square w-[21vw] overflow-hidden object-cover transition-transform duration-300 select-none group-hover:scale-105 lg:w-[16vw]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
