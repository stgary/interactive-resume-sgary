import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-banner'>
        <FontAwesomeIcon className='contact-icon' icon={faPaperPlane} />
        <span className='contact-title'>Contact</span>
      </div>
      <div className='git'>
        <span className='gitwm'>Get in touch with me!</span>
      </div>
      <div className='contact-form'>
      </div>
    </div>
  );
};

export default Contact;