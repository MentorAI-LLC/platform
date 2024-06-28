import Button from '@/components/Button';
import React from 'react';

function StartSection() {
  return (
    <section className="bg-[#9BD6E7] mt-80 w-full h-[350px] flex flex-col items-center justify-center gap-6 md:gap-10">
      <h2 className="text-white text-xl md:text-5xl font-bold text-center">
        Are you ready to get started?
        <br /> We got you covered!
      </h2>
      <Button
        label="Sign Up — Free"
        type="outline"
        className="font-semibold bg-white text-primary text-center py-4 px-12 max-h-max border-white"
      />
    </section>
  );
}

export default StartSection;
