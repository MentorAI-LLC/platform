import React from 'react';
import styles from './FooterBottom.module.css';

const FooterBottom: React.FC = () => {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.links}>
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy policy</a>
        <a href="#">Sitemap</a>
        <a href="#">Terms of Use</a>
      </div>
      <div className={styles.copyright}>
        © 2024, All Rights Reserved
      </div>
    </div>
  );
};

export default FooterBottom;
