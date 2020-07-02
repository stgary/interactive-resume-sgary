import React from 'react';
import Logo from '../img/logo.png';
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
        <img className='footer-logo' src={Logo} alt='logo' />
        <span className='footer-name'>Detroit, MI</span>
        <span className='footer-name'>sgary0@protonmail.com</span>
        <span className='footer-name'>(615) 678-3231</span>
        <div className='fr'>
          <div className='footer-icons'>
          <a href='https://github.com/stgary'>
              <FontAwesomeIcon className='cv-icon' icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/'>
              <FontAwesomeIcon className='cv-icon' icon={faLinkedinIn} />
            </a>
            <a href='https://twitter.com/explore'>
              <FontAwesomeIcon className='cv-icon' icon={faTwitter} />
            </a>
            <a href='https://www.facebook.com/stephen.gary.566'> 
              <FontAwesomeIcon className='cv-icon' icon={faFacebook} />
            </a> 
          </div>
        </div>
      </footer> 
    </div>
  );
};

export default Footer;