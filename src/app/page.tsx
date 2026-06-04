import Hero from '@/components/hero/Hero';
import Timeline from '@/components/timeline/Timeline';
export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center">
      <Hero />
      <div className="font-canopee bg-secondary text-background text-shadow hack-shadow mx-auto w-2xl py-4 text-center text-5xl">
        happy coding!
      </div>
      <div className="font-canopee bg-secondary text-background text-shadow hack-shadow mx-auto my-10 w-2xl py-4 text-center text-5xl">
        hello everyone!
      </div>
      <Timeline />
    </div>
  );
}
