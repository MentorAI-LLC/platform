import HeroBackground from '@/app/_components/hero-background';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/buttons';
import Image from 'next/image';
import heroImage from '/public/images/hero-image.svg';

/**
 * HeroSection Component
 *
 * A functional component that represents the hero section of the webpage. It includes a background image, a heading, and a call-to-action button.
 *
 * @returns {JSX.Element} A JSX element representing the hero section.
 */
export default function HeroSection() {
  return (
    <Section
      name="home"
      className="flex md:flex-row flex-col-reverse md:justify-around gap-10 mb-16 min-h-screen"
    >
      <HeroBackground className="absolute top-16 left-0 right-0 -z-10 md:h-auto h-screen" />
      <div className="md:w-1/3 w-full flex flex-col justify-center items-center">
        <p className="font-black text-[#17284C] md:text-2xl text-base text-center md:mb-16 mb-8">
          Unlock your potential with Mentor.ai <br /> personalized roadmaps
          guiding your <br /> tech journey, one step at a time.
        </p>
        <Button color="primary" className="w-48 font-bold text-white">
          Start Now
        </Button>
      </div>
      <div className="md:w-1/3 w-full">
        <Image
          src={heroImage}
          priority={true}
          width={1000}
          height={760}
          className="w-full h-full"
          alt="Illustration of a person working on a computer"
        />
      </div>
    </Section>
  );
}
