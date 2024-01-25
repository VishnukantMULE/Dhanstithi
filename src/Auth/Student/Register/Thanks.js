import React, { useState } from 'react';
import './Thanks.css';

export default function Thanks() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };

  return (
    <div className="thanks-container">
      <h2 className="thanks-heading">Thank You for Registering!</h2>
      <p className="thanks-message">Your registration was successful.</p>
      <p className="thanks-message">Your data privacy is important to us. We use the information provided for analysis purposes only.</p>
      <p className="thanks-message">Soon, you will receive login credentials on your registered email address.</p>

      <div className="privacy-info">
        <button className="toggle-privacy-btn" onClick={togglePrivacy}>
          {showPrivacy ? 'Hide Privacy Information' : 'Show Privacy Information'}
        </button>
        {showPrivacy && (
          <>
            <h3 className="privacy-heading">Data Privacy Information:</h3>
            <p className="privacy-paragraph">
              We prioritize the security and privacy of your data. Your information is used solely for the purpose of improving our services and providing you with a better experience on our platform.
            </p>
            <p className="privacy-paragraph">
              We do not share your personal data with third parties without your consent. Our privacy policy ensures that your information is handled securely and in compliance with data protection regulations.
            </p>
            <p className="privacy-paragraph">
              The data collected is intended for use in our major project. We have obtained permission from APSIT for this purpose.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
