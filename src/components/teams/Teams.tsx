'use client';
import Image from 'next/image';
import TeamMembersGrid from './TeamMember';

function Teams() {
  return (
    <div className="relative mx-0 flex min-h-screen w-full flex-col overflow-x-hidden bg-[#F4E4B8] px-0">
      {/* Film Strip Element */}
      <div className="ssm:-mt-[11vw] cmd:-mt-[8vw] lmd:-mt-[5.3vw] relative z-20 -mt-[11vw] -ml-[2%] w-[104%] md:-mt-[5vw]">
        <Image
          src="/Group 1321317692.png"
          alt="Film Tape"
          width={1920}
          height={180}
          priority
          className="pointer-events-none relative z-10 block h-auto w-full select-none"
        />
      </div>

      {/* Main Grid */}
      <main className="z-10 mx-auto flex w-full max-w-6xl flex-grow flex-col items-center justify-center px-4 pt-2 pb-12">
        <div className="relative mb-8 w-full max-w-xl px-2 text-center md:mb-16">
          <h1 className="font-canopee text-5xl leading-none tracking-wide text-[#1C4E5E] uppercase sm:text-9xl md:text-[9rem]">
            Our Team
          </h1>
          <div className="mt-2 h-1.5 bg-[#1C4E5E] md:mt-2 md:h-3"></div>
        </div>
        <TeamMembersGrid />
      </main>

      {/* Footer Red Tape */}
      <div className="relative z-20 mt-auto flex w-[104%] flex-col items-center justify-center">
        <Image
          src="/redtape.png"
          alt="Red Tape Footer"
          width={1920}
          height={180}
          priority
          className="pointer-events-none relative z-10 block h-auto w-full select-none"
        />
      </div>
    </div>
  );
}

export default Teams;
