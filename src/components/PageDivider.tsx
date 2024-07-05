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

// Define the props for the Form component
type FormProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the Form component
function Form({ children, className }: FormProps) {
  return (
    <div
      className={cn(
        'w-full md:w-1/2 flex justify-center items-center',
        className
      )}
    >
      {children}
    </div>
  );
}

// Define the props for the SideImage component
type SideImageProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the SideImage component
function SideImage({ children, className }: SideImageProps) {
  return (
    <div
      className={cn(
        'w-1/3 hidden md:flex justify-center items-center bg-cover bg-center',
        className
      )}
    >
      {children}
    </div>
  );
}

// Attach the Form and SideImage components to the PageDivider component
PageDivider.Form = Form;
PageDivider.SideImage = SideImage;

export default PageDivider;
export { Form, SideImage };
