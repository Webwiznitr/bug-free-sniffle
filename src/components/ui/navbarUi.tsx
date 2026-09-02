'use client';
import { cn } from '@/lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Discord from '../hero/discord';
import { heroConfig } from '@/config/index';

import React, { useRef, useState } from 'react';

export const NavbarUi = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      id="navbar"
      className={cn('fixed inset-x-0 z-40 w-full', className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement<{ visible?: boolean }>(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(50px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      style={{
        width: '100%',
      }}
      className={cn(
        'lmd:px-10 relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start border-b-3 border-[#1A0E05] bg-[#E3442E] px-5 py-4 md:flex',
        visible && 'bg-[#E3442E]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

type NavItem = {
  name: string;
  link: string;
  type?: 'special' | string;
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center font-medium transition duration-200 md:flex lg:gap-6',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={`relative px-4 py-2 ${
            item.type === 'special'
              ? 'text-[#000000] hover:text-[#F4E4B8]'
              : 'text-[#000000] hover:text-[#F4E4B8]'
          }`}
          key={`link-${idx}`}
          href={item.link}
          {...(item.type === 'special' && {
            target: '_blank',
          })}
        >
          <span className="lmd:text-[2vw] font-canopee relative z-20 text-[2.25vw] leading-none font-normal not-italic transition-all duration-300 hover:text-[#F4E4B8]">
            {item.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: '100%',
        paddingRight: visible ? '12px' : '12px',
        paddingLeft: visible ? '12px' : '12px',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 flex w-full max-w-full flex-col items-center justify-between border-b-2 border-[#1A0E05] bg-[#E3442E] px-3 py-4 md:hidden',
        // visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#F4E4B8] px-4 py-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-[#F4E4B8]" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-[#F4E4B8]" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link href="/#home" className="relative z-20 px-2">
      <Image
        src={heroConfig.assets.navLogo}
        alt="logo"
        width={600}
        height={600}
        className="ssm:w-[30vw] w-[34vw] sm:w-[25vw] md:w-[18vw] lg:w-[16vw]"
      ></Image>
    </Link>
  );
};

export const DiscordButton = () => {
  return <Discord />;
};
