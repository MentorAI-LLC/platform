import React, { ReactNode } from 'react';

// Define the props interface
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container Component
 *
 * A reusable React functional component designed to wrap its children with a div that has specific styling classes applied.
 * Helps in maintaining consistent layout and spacing across different parts of the application.
 *
 * @param {ReactNode} children - The content that will be rendered inside the container. This prop is required.
 * @param {string} [className] - Additional custom class names to be applied to the container. This prop is optional and defaults to an empty string.
 */
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full my-0 mx-auto px-4 xl:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
