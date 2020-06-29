import React from 'react';
import Profile from '../img/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAddressCard, 
  faPrint, 
  faDownload } from '@fortawesome/free-solid-svg-icons'
import { 
  faGithubSquare,
  faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-banner'>
        <FontAwesomeIcon className='about-icon' icon={faAddressCard} />
        <span className='about-title'>About</span>
      </div>
      <div className='introduction-container'>
        <span className='name'>My name is Stephen Gary</span>
        <span className='title'>I am a Web Developer</span>
      </div>
      <div className='profile-cv-follow'>
        <div className='cv-download'> 
          <div className='cv-icons'>       
            <FontAwesomeIcon className='cv-icon' icon={faDownload} />
            <FontAwesomeIcon className='cv-icon' icon={faPrint} />
          </div>
          <span className='cv-download-text'>Print/Download</span>
        </div>
        <img className='profile-pic' src={Profile} alt='profile pic' />
        <div className='github-linkedin'>
          <div className='follow-icons'>
            <FontAwesomeIcon className='cv-icon' icon={faGithubSquare} />
            <FontAwesomeIcon className='cv-icon' icon={faLinkedinIn} />
          </div>
          <span className='follow-me'>Follow Me</span>
        </div>
      </div>
    </div>
  );
};

export default About;