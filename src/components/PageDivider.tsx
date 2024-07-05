import React from 'react';
import { cn } from '@/lib/utils';

// Define the props for the PageDivider component
type PageDividerProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the PageDivider component
function PageDivider({ children, className }: PageDividerProps) {
  return (
    <div className={cn('flex flex-col md:flex-row w-full h-full', className)}>
      {children}
    </div>
  );
}

// Define the props for the FirstSide component
type FirstSideProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the FirstSide component
function FirstSide({ children, className }: FirstSideProps) {
  return (
    <div
      className={cn(
        'w-full lg:w-1/2 flex justify-center items-center',
        className
      )}
    >
      {children}
    </div>
  );
}

// Define the props for the ImageSide component
type ImageSideProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the ImageSide component
function ImageSide({ children, className }: ImageSideProps) {
  return (
    <div
      className={cn(
        'w-1/3 hidden lg:flex justify-center items-center bg-cover bg-center',
        className
      )}
    >
      {children}
    </div>
  );
}

// Attach the Form and SideImage components to the PageDivider component
PageDivider.FirstSide = FirstSide;
PageDivider.SideImage = ImageSide;

export default PageDivider;
export { FirstSide, ImageSide };
