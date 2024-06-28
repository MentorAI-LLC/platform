import React from 'react';
import styles from './Footer.module.css';
import CallToAction from './CallToAction';
import FooterContent from './FooterContent';
import FooterBottom from './FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <CallToAction />
      <div className={styles.footerMain}>
        <FooterContent />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
