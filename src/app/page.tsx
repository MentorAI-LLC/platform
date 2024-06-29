import React from 'react';
import FooterSection from '../sections/FooterSection';

/**
 * Home Component
 *
 * A functional component that represents the home page of the application. 
 * It currently includes only the FooterSection.
 *
 * @returns {JSX.Element} A JSX element representing the home page.
 */
const Home: React.FC = () => {
  return (
    <div>
      
      <FooterSection />
    </div>
  );
};

export default Home;
