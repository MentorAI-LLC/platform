// Define the props interface
interface NavbarProps {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
}

// Define the list of navigation items
const items = [
  'Home',
  'Product',
  'Solution',
  'Why Us',
  'About Us',
  'Contact Us',
];

/**
 * Navbar Component
 *
 * A functional component that displays a navigation menu with links. The menu visibility is controlled by the isOpen prop.
 *
 * @param {boolean} isOpen - Indicates whether the navigation menu is open (true) or closed (false).
 * @param {function} toggleMenu - Function to toggle the menu's open state. Takes a boolean indicating the new state.
 */
function Navbar({ isOpen, toggleMenu }: NavbarProps) {
  const handleHideNav = () => {
    toggleMenu(false);
  };

  return (
    <nav
      className={`lg:block lg:static absolute top-16 right-0 left-0 lg:w-auto w-full ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <ul
        className={`flex gap-8 items-center lg:flex-row flex-col ${
          isOpen ? 'py-5 bg-white gap-4' : 'py-0 bg-transparent'
        }`}
        onClick={() => handleHideNav()}
      >
        {items.map((item) => {
          const link = `#${item.split(' ')[0].toLowerCase()}`;
          return (
            <li
              key={item}
              className="border-b-2 border-transparent hover:border-[#17284C] transition-colors duration-300"
            >
              <a href={link}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
