// Define the props interface
interface HamMenuProps {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
}

/**
 * HamMenu Component
 *
 * A hamburger menu icon component that toggles based on a checkbox state.
 *
 * @param {boolean} isOpen - Indicates whether the menu is open.
 * @param {function} toggleMenu - Function to toggle the menu's open state.
 */
const HamMenu: React.FC<HamMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <label
      htmlFor="menu"
      className="w-10 h-10 flex items-center justify-center flex-col gap-1 lg:hidden"
    >
      <input
        type="checkbox"
        name="menu"
        id="menu"
        className="hidden"
        checked={isOpen}
        onChange={() => {
          toggleMenu(!isOpen);
        }}
      />
      <span
        className={`w-8 h-1 rounded-sm bg-black block transition-transform ${
          isOpen ? 'rotate-45 absolute' : ''
        }`}
      ></span>
      <span
        className={`w-8 h-1 rounded-sm bg-black block transition-transform ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`w-8 h-1 rounded-sm bg-black block transition-transform ${
          isOpen ? '-rotate-45 absolute' : ''
        }`}
      ></span>
    </label>
  );
};

export default HamMenu;
