import Button from '@/components/Button';
import Image from 'next/image';

/**
 * HeroSection Component
 *
 * A functional component that represents the hero section of the webpage. It includes a background image, a heading, and a call-to-action button.
 *
 * @returns {JSX.Element} A JSX element representing the hero section.
 */
function HeroSection() {
  return (
    <section
      className="flex md:flex-row flex-col-reverse md:justify-around gap-10 mb-16 md:pt-16 pt-8"
      id="home"
    >
      <div className="absolute top-16 left-0 right-0 -z-10 md:h-auto h-screen">
        <Image
          src="/images/hero-rectangle.svg"
          priority={true}
          width={1000}
          height={760}
          className="w-full h-full object-cover"
          alt="Hero section background rectangle"
        />
      </div>
      <div className="md:w-1/3 w-full flex flex-col justify-center items-center">
        <p className="font-black text-[#17284C] md:text-2xl text-base text-center md:mb-16 mb-8">
          Unlock your potential with Mentor.ai <br /> personalized roadmaps
          guiding your <br /> tech journey, one step at a time.
        </p>
        <Button label="Start Now" type="primary" className="w-48 font-bold" />
      </div>
      <div className="md:w-1/3 w-full">
        <Image
          src="/images/hero-image.svg"
          priority={true}
          width={1000}
          height={760}
          className="w-full h-full"
          alt="Illustration of a person working on a computer"
        />
      </div>
    </section>
  );
}

export default HeroSection;
