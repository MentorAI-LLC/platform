import AboutUs from '@/Sections/about-us';
import HeroSection from '@/Sections/HeroSection';
import SolutionSection from '@/Sections/SolutionSection';
import StartSection from '@/Sections/StartSection';
import { ProductSection } from '@/app/components';



export default function Home() {
  return (
    <main className="flex flex-col gap-8">
        <HeroSection />
        <ProductSection />
        <SolutionSection />
        <AboutUs />
        <StartSection />
    </main>
  );
}

