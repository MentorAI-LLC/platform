// FooterBottom.tsx
import React from 'react';
import styles from './FooterBottom.module.css';

const FooterBottom: React.FC = () => {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.links}>
        <a href="#about-us">About us</a>
        <a href="#contact">Contact</a>
        <a href="#privacy-policy">Privacy policy</a>
        <a href="#sitemap">Sitemap</a>
        <a href="#terms-of-use">Terms of Use</a>
      </div>
      <p>&copy; 2024, All Rights Reserved</p>
    </div>
  );
};

export default FooterBottom;
