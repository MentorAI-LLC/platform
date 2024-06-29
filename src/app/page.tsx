import HeroSection from '@/Sections/HeroSection';
import AboutUs from '@/Sections/about-us';

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
        <HeroSection />
        <AboutUs />
    </main>
  );
}
