import SolutionBox from '@/components/SolutionBox';
import Image from 'next/image';
import Section, { Title } from '@/components/ui/Section';

/**
 * SolutionSection Component
 *
 * A functional component that represents the solution section of the webpage. It includes multiple `SolutionBox` components and decorative arrow images.
 *
 * @returns {JSX.Element} A JSX element representing the solution section.
 */
function SolutionSection() {
  return (
    <Section name="solution" className="min-h-screen">
      <Title>Solution</Title>
      <div className="relative flex flex-col gap-6">
        <SolutionBox className="static md:absolute top-10 left-6 lg:top-20 lg:left-36 md:-rotate-12">
          <p className="text-xl">
            Get personalized learning using the latest technology of AI
          </p>
        </SolutionBox>
        <Image
          src="/images/arrow05.svg"
          alt="Decorative arrow"
          width={200}
          height={200}
          className="absolute top-48 left-10 rotate-45 lg:top-72 lg:w-[160px] xl:w-[200px] lg:left-36 lg:rotate-[30deg] xl:left-56 skew-x-12 hidden md:block"
        />
        <SolutionBox className="static md:absolute top-96 right-1/2 md:translate-x-1/2">
          <p className="text-xl">
            Engage with open-minded community and share or learn from peers and
            mentors
          </p>
        </SolutionBox>
        <Image
          src="/images/arrow05.svg"
          alt="Decorative arrow"
          width={200}
          height={200}
          className="absolute top-60 right-20 lg:top-72 lg:w-[160px] xl:w-[200px] lg:right-40 xl:right-56 -rotate-90 skew-x-12 hidden md:block z-10"
        />
        <SolutionBox className="static md:absolute top-10 right-6 lg:top-20 lg:right-36 md:rotate-12">
          <p className="text-xl">
            Earn currency to exchange with books, features or even 1 on 1
            sessions with professional mentors
          </p>
        </SolutionBox>
      </div>
    </Section>
  );
}

export default SolutionSection;
