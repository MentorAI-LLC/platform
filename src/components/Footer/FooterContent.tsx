import React from 'react';
import styles from './FooterContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * FooterContent Component
 *
 * A functional component that represents the main content of the footer.
 * It includes the company logo and description, social media icons, company links, and contact information.
 *
 * @returns {JSX.Element} A JSX element representing the footer content.
 */
const FooterContent: React.FC = () => {
  return (
    
    <div className={styles.footerContent}>
      {/* Column for the company logo and description */}
      <div className={styles.logoColumn}>
        
        <h3 className={styles.logo}>MENTOR AI</h3>
        <p style={{textAlign: "left"}}>Lorem ipsum dolor, consectetur <br/>adipiscing. accumsan <br/>porta idiculus in mattis.</p>
        {/* Social media icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      {/* Column for company links */}
      <div className={styles.companyColumn}>
        <h4>COMPANY</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      {/* Column for contact information */}
      <div className={styles.contactColumn}>
        <div><FontAwesomeIcon icon={faPhone} /> +20 1033468669</div>
        <div><FontAwesomeIcon icon={faEnvelope} /> ab2arabi22@gmail.com</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</div>
      </div>
    </div>
  );
};

export default FooterContent;
