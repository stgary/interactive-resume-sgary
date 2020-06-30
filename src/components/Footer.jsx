import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
      <span className='footer-name'>©Stephen Gary</span>
        <div className='fr'>
          <div className='footer-icons'>
            <FontAwesomeIcon className='footer-icon' icon={faGithub} />
            <FontAwesomeIcon className='footer-icon' icon={faLinkedinIn} />
            <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
            <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
          </div>
        </div>
      </footer> 
    </div>
  );
};

export default Footer;