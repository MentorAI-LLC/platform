import AboutUs from '@/Sections/about-us';
import HeroSection from '@/Sections/HeroSection';
import SolutionSection from '@/Sections/SolutionSection';
import StartSection from '@/Sections/StartSection';
import { ProductSection } from './_components';
import WorkWithUs from '@/Sections/work-with-us';



export default function Home() {
  return (
    <main className="flex flex-col gap-8">
        <HeroSection />
        <ProductSection />
        <SolutionSection />
        <WorkWithUs />
        <AboutUs />
        <StartSection />
    </main>
  );
}

