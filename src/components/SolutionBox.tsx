import React from 'react';

interface SolutionBoxProps {
  className?: string;
  children: React.ReactNode;
}

const SolutionBox: React.FC<SolutionBoxProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`bg-white border-2 w-4/6 md:w-[350px] shadow-lg p-8 text-center mx-auto skew-x-[10deg] ${className} rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default SolutionBox;
