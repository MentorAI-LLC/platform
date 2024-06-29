import HeroSection from '@/Sections/HeroSection';
import AboutUs from '@/Sections/about-us';
import WorkWithUs from '@/Sections/work-with-us';

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
        <HeroSection />
        <WorkWithUs />
        <AboutUs />
    </main>
  );
}
