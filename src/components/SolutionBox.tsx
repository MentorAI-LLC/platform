interface SolutionBoxProps {
  className?: string;
  children: React.ReactNode;
}

const SolutionBox: React.FC<SolutionBoxProps> = ({ className, children }) => {
  return (
    <div
      className={`bg-white border-2 w-full md:w-[350px] shadow-lg p-8 text-center mx-auto md:skew-x-[10deg] ${className} rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default SolutionBox;
