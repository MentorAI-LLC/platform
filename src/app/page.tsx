import HeroSection from '@/Sections/HeroSection';
import StartSection from '@/Sections/StartSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StartSection />
      </main>
    </>
  );
}
