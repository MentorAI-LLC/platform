import React from 'react';

// TypeScript interfaces for the component props
interface ButtonProps {
  className?: string;
  label: string;
  type: 'primary' | 'outline' | 'custom';
}

interface CustomButtonProps {
  className?: string;
  label: string;
}

/**
 * Button Component
 *
 * A customizable button component that supports different styles based on the `type` prop.
 *
 * @param {string} className - Additional CSS classes to apply to the button. Default is an empty string.
 * @param {string} label - The text label to display on the button.
 * @param {string} type - The style type of the button. Must be one of 'primary', 'outline', or 'custom'.
 */
const Button: React.FC<ButtonProps> = ({ className = '', label, type }) => {
  // Common classes for all button types
  const baseClasses = 'min-w-36 max-h-16 px-4 py-2 rounded-full duration-300';

  // Classes specific to each button type
  const typeClasses = {
    primary: `${className} font-semibold bg-primary border-2 border-primary text-white hover:bg-white hover:border-secondary hover:text-secondary`,
    outline: `${className} font-semibold text-black border-2 border-primary hover:bg-secondary hover:text-white`,
    custom: `${className}`,
  };

  // Combine base and type-specific classes
  const buttonClasses = typeClasses[type] || className;

  // Render the button with combined classes and label
  return (
    <CustomButton className={`${baseClasses} ${buttonClasses}`} label={label} />
  );
};

/**
 * CustomButton Component
 *
 * A simple button component that accepts class names and a label.
 *
 * @param {string} className - CSS classes to apply to the button. Default is an empty string.
 * @param {string} label - The text label to display on the button.
 */
const CustomButton: React.FC<CustomButtonProps> = ({
  className = '',
  label,
}) => {
  return <button className={className}>{label}</button>;
};

export default Button;
