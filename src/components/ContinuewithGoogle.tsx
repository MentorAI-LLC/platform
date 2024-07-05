import React from 'react';
import SmallGoogleLogo from '/public/images/SmallGoogleLogo.svg';
import Image from 'next/image';

/**
 * ContinueWithGoogle Component
 *
 * This component renders a button that allows users to continue with their Google account.
 * The button is styled to be responsive and includes a Google logo on the left side of the text.
 *
 * @returns {JSX.Element} A styled button for Google authentication.
 */
function ContinueWithGoogle() {
  return (
    <button
      className="w-full bg-white border-2 hover:bg-gray-100 text-text text-sm md:text-base font-bold py-2 px-4 rounded flex items-center justify-center gap-2 md:gap-4"
      type="button"
    >
      {/* Renders the Google logo using next/image for optimized loading */}
      <Image src={SmallGoogleLogo} alt="Google Logo" />
      {/* Button text */}
      Continue with Google
    </button>
  );
}

export default ContinueWithGoogle;
