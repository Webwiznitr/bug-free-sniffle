import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center">
      <Hero />
      <Timeline />
    </div>
  );
}
