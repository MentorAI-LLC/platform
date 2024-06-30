import HeroSection from '@/Sections/HeroSection';
import StartSection from '@/Sections/StartSection';
import Header from '@/components/Header';
import { ProductSection } from '@/app/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <HeroSection />
        <ProductSection />
        <StartSection />
      </main>
    </>
  );
}

