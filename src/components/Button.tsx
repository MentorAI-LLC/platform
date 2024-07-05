import React from 'react';
import Link from 'next/link';

// TypeScript interfaces for the component props
interface BaseButtonProps {
  className?: string;
  variant: 'primary' | 'outline' | 'custom';
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends BaseButtonProps {
  type: 'button';
  onClick: () => void;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  type: 'link';
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Button Component
 *
 * A customizable button component that supports different styles based on the `variant` prop.
 * It can be rendered as either a button or a link based on the `type` prop.
 *
 * @param {string} className - Additional CSS classes to apply to the button. Default is an empty string.
 * @param {React.ReactNode} children - The content to display inside the button.
 * @param {string} variant - The style variant of the button. Must be one of 'primary', 'outline', or 'custom'.
 * @param {string} type - Specifies whether the component should be rendered as a 'button' or a 'link'.
 * @param {string} [href] - The URL to link to, if the button should function as a link.
 * @param {() => void} [onClick] - The function to call when the button is clicked.
 */
const Button: React.FC<ButtonProps> = (props) => {
  const { className = '', variant, children } = props;

  // Common classes for all button types
  const baseClasses = 'min-w-36 max-h-16 px-4 py-2 rounded-full duration-300';

  // Classes specific to each button variant
  const variantClasses = {
    primary: `${className} text-center font-semibold bg-primary border-2 border-primary text-white hover:bg-white hover:border-secondary hover:text-secondary`,
    outline: `${className} text-center font-semibold text-black border-2 border-primary hover:bg-secondary hover:text-white`,
    custom: `${className}`,
  };

  // Combine base and variant-specific classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]}`;

  // Render the button as either a link or a button based on the type prop
  if (props.type === 'link') {
    return (
      <Link href={props.href} passHref className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
