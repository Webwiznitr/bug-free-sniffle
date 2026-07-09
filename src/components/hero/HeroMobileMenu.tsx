import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { heroConfig } from '@/config';

type HeroMobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function HeroMobileMenu({ isOpen, onClose }: HeroMobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="cmd:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="text-foreground fixed inset-0 z-50 flex h-screen w-screen flex-col bg-[#F4E4B8] md:hidden"
          >
            <div className="bg-primary flex h-[70px] w-full shrink-0 items-center justify-between border-b-4 border-[#1A0E05] px-6">
              <Image
                src={heroConfig.assets.navLogo}
                alt="Logo"
                width={198}
                height={29}
                priority
                className="ssm:w-[198px] h-auto w-[140px]"
              />

              <button
                onClick={onClose}
                className="relative flex h-11 w-11 items-center justify-center border-4 border-[#1A0E05] bg-[#2A5266] shadow-[3px_3px_0px_#1A0E05] transition-all hover:scale-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[#E8DDB5]" />
              </button>
            </div>

            <div className="relative flex flex-grow flex-col items-center justify-start gap-6 overflow-y-auto bg-[linear-gradient(rgba(26,14,5,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,14,5,0.04)_1px,transparent_1px)] bg-[size:20px_20px] px-8 py-10">
              <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
                <Image
                  src={heroConfig.assets.pattern}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <ul className="font-canopee relative z-10 flex w-full max-w-sm flex-col gap-4 text-center">
                {heroConfig.navItems.map((item, idx) => {
                  const theme =
                    heroConfig.mobileMenuThemes[
                      idx % heroConfig.mobileMenuThemes.length
                    ];

                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block w-full border-4 border-[#1A0E05] py-3.5 text-center text-3xl tracking-wider uppercase shadow-[5px_5px_0px_#1A0E05] transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0px_#1A0E05] ${theme.bgClass} ${theme.textClass} ${theme.rotateClass} hover:rotate-0`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (heroConfig.navItems.length + 1) * 0.05 }}
                className="relative z-10 mt-2 flex w-full justify-center"
              >
                <a
                  href={heroConfig.social.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="font-canopee flex h-14 w-full max-w-sm cursor-pointer items-center justify-center gap-3 border-4 border-[#1A0E05] bg-[#2A5266] px-6 text-[#E8DDB5] shadow-[5px_5px_0px_#1A0E05] transition-all duration-300 hover:scale-105 hover:bg-[#1A0E05] active:scale-95"
                >
                  <Image
                    src={heroConfig.assets.discordIcon}
                    alt="Discord"
                    width={24}
                    height={24}
                    className="h-auto w-auto"
                  />
                  <span className="text-2xl tracking-tight">
                    {heroConfig.social.mobileDiscordLabel}
                  </span>
                </a>
              </motion.div>

              <div className="relative z-10 mt-auto pt-6 text-center font-sans text-xs tracking-widest text-[#1A0E05]/60 uppercase">
                © {new Date().getFullYear()} HACK ODISHA • ALL RIGHTS RESERVED
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
