import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      <h2>Are you ready to get started?</h2>
      <p>We got you covered!</p>
      <button className={styles.ctaButton}>Sign Up — Free</button>
    </div>
  );
};

export default CallToAction;
