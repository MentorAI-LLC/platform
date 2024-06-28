import React from 'react';
import styles from './FooterContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterContent: React.FC = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.logoColumn}>
        <h3 className={styles.logo}>MENTOR AI</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.</p>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      <div className={styles.companyColumn}>
        <h4>COMPANY</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div className={styles.contactColumn}>
        <div><FontAwesomeIcon icon={faPhone} /> Tel</div>
        <div><FontAwesomeIcon icon={faEnvelope} /> Mail</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</div>
      </div>
    </div>
  );
};

export default FooterContent;
