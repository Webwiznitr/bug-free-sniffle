import { div } from 'framer-motion/client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="font-canopee bg-primary text-background text-shadow hack-shadow mx-auto my-auto w-2xl py-4 text-center text-5xl">
        welcome everyone
      </div>
    </div>
  );
}
