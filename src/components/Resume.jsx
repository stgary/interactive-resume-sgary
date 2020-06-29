import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFile, 
  } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='resume-banner'>
        <FontAwesomeIcon className='resume-icon' icon={faFile} />
        <span className='resume-title'>Resume</span>
      </div>
    </div>
  );
};

export default Resume;