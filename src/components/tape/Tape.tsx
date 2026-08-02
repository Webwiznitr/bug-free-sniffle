import Image from 'next/image';
const Tape = () => {
  return (
    <div className="relative top-[-22vw] z-20 w-full sm:top-[-12vw] md:top-[-8vw]">
      <Image
        src="/footertape.png"
        alt="Tape"
        width={1920}
        height={1080}
        className="hidden h-full w-full sm:block"
      />
      <Image
        src="/mobiletape.svg"
        alt="Mobile Tape"
        width={1920}
        height={1080}
        className="h-full w-full sm:hidden"
      />
    </div>
  );
};

export default Tape;
