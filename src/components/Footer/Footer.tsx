import React from 'react';
import styles from './Footer.module.css';
import CallToAction from './CallToAction';
import FooterContent from './FooterContent';
import FooterBottom from './FooterBottom';

/**
 * Footer Component
 *
 * A functional component that represents the footer of the webpage.
 * It includes a call-to-action section, main footer content, and footer bottom section.
 *
 * @returns {JSX.Element} A JSX element representing the footer.
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Call-to-action section in the footer */}
      <div className={styles.footerMain}>
        {/* Main content of the footer */}
        <FooterContent />
      </div>
      {/* Bottom section of the footer */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
