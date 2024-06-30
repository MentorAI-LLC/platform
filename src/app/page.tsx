import AboutUs from '@/Sections/about-us';
import StartSection from '@/Sections/StartSection';
import { ProductSection } from '@/app/components';
import HeroSection from '@/Sections/HeroSection';


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
        <HeroSection />
        <ProductSection />
        <AboutUs />
        <StartSection />
    </main>
  );
}

