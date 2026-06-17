'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

function CD() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="bg-secondary relative flex min-h-[350px] w-full items-center justify-center overflow-hidden xl:min-h-0 xl:flex-1">
      <div className="absolute top-4 right-0 z-40 origin-top-right scale-[0.6] sm:right-4 sm:scale-75 xl:top-10 xl:right-10 xl:origin-top xl:scale-100">
        <motion.img
          animate={{
            rotate: isOn ? 50 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          src="/disk-pin.png"
          alt=""
          className="w-40 origin-top"
        />
      </div>
      <div className="absolute top-4 left-4 z-40 flex origin-top-left scale-[0.6] flex-col items-center gap-1 sm:scale-75 xl:top-10 xl:left-10 xl:scale-100">
        <p className="font-editorial text-xl font-semibold">ON</p>
        <motion.div className="flex h-40 gap-1">
          <div className="bg-background w-1" />
          <div className="bg-background flex h-full w-25 items-center justify-center px-4 py-2.5">
            <div className="h-full w-full border-3 border-red-700 p-0.5">
              <div
                className="relative h-full w-full cursor-pointer bg-[#201106]"
                onClick={() => setIsOn((prev) => !prev)}
              >
                <motion.div
                  className="absolute top-21 left-0 w-full"
                  animate={{
                    top: isOn ? 0 : '84px',
                  }}
                >
                  <div className="h-6 w-full translate-x-0.75 skew-x-14 bg-[#241407]"></div>
                  <div className="top-6 h-6 w-full translate-x-0.75 -skew-x-14 bg-[#361d0b]"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="font-editorial text-xl font-semibold">OFF</p>
      </div>
      <motion.img
        src="/vector.png"
        draggable={false}
        alt=""
        animate={{}}
        className="h-auto w-[200px] sm:w-[280px] xl:w-[500px]"
        style={{
          animation: 'spin 2s linear infinite',
          animationPlayState: isOn ? 'running' : 'paused',
        }}
      />
      <Image
        src={'/ho6.png'}
        width={100}
        height={100}
        draggable={false}
        className="absolute z-0 h-auto w-[40px] sm:w-[56px] xl:w-[100px]"
        alt=""
      />
    </div>
  );
}

export default CD;
