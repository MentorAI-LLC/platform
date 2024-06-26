import Button from './Button';

// Define the props interface
interface HeaderButtonsProps {
  isOpen: boolean;
}

/**
 * HeaderButtons Component
 *
 * A functional component that displays a set of buttons (Register and Sign in) which are conditionally shown based on the isOpen prop.
 *
 * @param {boolean} isOpen - Indicates whether the buttons should be displayed (true) or hidden (false).
 */
function HeaderButtons({ isOpen }: HeaderButtonsProps) {
  return (
    <div
      className={`justify-center bg-white lg:gap-8 gap-2 lg:flex lg:static absolute top-80 py-4 lg:py-0 right-0 left-0 lg:w-auto w-full ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <Button label="Register" type="primary" />
      <Button label="Sign in" type="outline" />
    </div>
  );
}

export default HeaderButtons;
