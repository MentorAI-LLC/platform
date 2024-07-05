import Button from '@/components/Button';
import React from 'react';

/**
 * StartSection Component
 *
 * A functional component that represents the start section of the webpage. It includes a heading and a call-to-action button, prompting users to sign up.
 *
 * @returns {JSX.Element} A JSX element representing the start section.
 */
function StartSection() {
  return (
    <section className="bg-[#9BD6E7] w-full h-[350px] flex flex-col items-center justify-center gap-6 md:gap-10">
      <h2 className="text-white text-xl md:text-5xl font-bold text-center">
        Are you ready to get started?
        <br /> We got you covered!
      </h2>
      <Button
        variant="outline"
        className="font-semibold bg-white text-primary text-center py-4 px-12 max-h-max border-white"
        type="link"
        href="/register"
      >
        Sign Up — Free
      </Button>
    </section>
  );
}

export default StartSection;
