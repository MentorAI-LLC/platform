'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import HeaderButtons from './HeaderButtons';
import Container from './Container';
import HamMenu from './HamMenu';

/**
 * Header Component
 *
 * A functional component that serves as the header of the application. It includes the logo, navigation menu, header buttons, and a hamburger menu for responsive design.
 */
function Header() {
  // State to manage the checkbox value which controls the menu visibility
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <header>
      <Container className="flex justify-between items-center min-h-16">
        <Logo />
        <Navbar isOpen={checkboxValue} toggleMenu={setCheckboxValue} />
        <HeaderButtons isOpen={checkboxValue} />
        <HamMenu toggleMenu={setCheckboxValue} isOpen={checkboxValue} />
      </Container>
    </header>
  );
}

export default Header;
