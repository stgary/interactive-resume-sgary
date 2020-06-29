import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-banner'>
        <FontAwesomeIcon className='portfolio-icon' icon={faPaintRoller} />
        <span className='portfolio-title'>Portfolio</span>
      </div>
    </div>
  );
};

export default Portfolio;