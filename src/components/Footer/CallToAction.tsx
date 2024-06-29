import React from 'react';
import styles from './CallToAction.module.css';

/**
 * CallToAction Component
 *
 * A functional component that represents a call-to-action section. 
 * It includes a heading, a paragraph, and a call-to-action button.
 *
 * @returns {JSX.Element} A JSX element representing the call-to-action section.
 */
const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      {/* Heading for the call-to-action */}
      <h2>Are you ready to get started?</h2>
      {/* Supporting text for the call-to-action */}
      <p>We got you covered!</p>
      {/* Call-to-action button */}
      <button className={styles.ctaButton}>Sign Up — Free</button>
    </div>
  );
};

export default CallToAction;
