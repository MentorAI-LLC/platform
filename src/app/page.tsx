import AboutUs from '@/Sections/about-us';
import HeroSection from '@/Sections/HeroSection';
import SolutionSection from '@/Sections/SolutionSection';
import StartSection from '@/Sections/StartSection';
import { ProductSection } from './_components';
import WorkWithUs from '@/Sections/work-with-us';
import FooterSection from '../sections/FooterSection';

/**
 * Home Component
 *
 * A functional component that represents the home page of the application. 
 * It currently includes only the FooterSection.
 *
 * @returns {JSX.Element} A JSX element representing the home page.
 */

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
