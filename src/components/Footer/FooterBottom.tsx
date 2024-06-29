import React from 'react';
import styles from './FooterBottom.module.css';

/**
 * FooterBottom Component
 *
 * A functional component that represents the bottom section of the footer.
 * It includes a list of navigation links and a copyright notice.
 *
 * @returns {JSX.Element} A JSX element representing the footer bottom section.
 */
const FooterBottom: React.FC = () => {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.links}>
        {/* Navigation links in the footer bottom section */}
        <a href="#about-us">About us</a>
        <a href="#contact">Contact</a>
        <a href="#privacy-policy">Privacy policy</a>
        <a href="#sitemap">Sitemap</a>
        <a href="#terms-of-use">Terms of Use</a>
      </div>
      {/* Copyright notice */}
      <p>&copy; 2024, All Rights Reserved</p>
    </div>
  );
};

export default FooterBottom;
