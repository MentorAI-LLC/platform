import HeroSection from '@/Sections/HeroSection';
import SolutionSection from '@/Sections/SolutionSection';
import StartSection from '@/Sections/StartSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolutionSection />
        <StartSection />
      </main>
    </>
  );
}
