import SolutionBox from '@/components/SolutionBox';
import Image from 'next/image';

function SolutionSection() {
  return (
    <section
      id="solution"
      className="mt-36 md:mt-20 lg:mt-40 xl:mt-80 h-screen"
    >
      <h2 className="text-4xl text-center font-bold mb-8">Solution</h2>
      <div className="relative flex flex-col gap-6">
        <SolutionBox className="static md:absolute top-10 left-6 lg:top-20 lg:left-36 md:-rotate-12">
          <p className="text-xl">
            We provide the best solution for your business 1
          </p>
        </SolutionBox>
        <Image
          src="/images/arrow05.svg"
          alt="arrow"
          width={200}
          height={200}
          className="absolute top-48 left-10 rotate-45 lg:top-72 lg:w-[160px] xl:w-[200px]  lg:left-36 lg:rotate-[30deg] xl:left-56 skew-x-12 hidden md:block"
        />
        <SolutionBox className="static md:absolute top-96 right-1/2 md:translate-x-1/2">
          <p className="text-xl">
            We provide the best solution for your business 2
          </p>
        </SolutionBox>
        <Image
          src="/images/arrow05.svg"
          alt="arrow"
          width={200}
          height={200}
          className="absolute top-60 right-20 lg:top-72 lg:w-[160px] xl:w-[200px] lg:right-40 xl:right-56 -rotate-90 skew-x-12 hidden md:block"
        />
        <SolutionBox className="static md:absolute top-10 right-6 lg:top-20 lg:right-36 md:rotate-12">
          <p className="text-xl">
            We provide the best solution for your business 3
          </p>
        </SolutionBox>
      </div>
    </section>
  );
}

export default SolutionSection;
