import React from 'react';
import Profile from '../img/profilepic.png';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAddressCard, 
  faCopy,
  faFileDownload,
  faGem  } from '@fortawesome/free-solid-svg-icons'
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
            <FontAwesomeIcon className='cv-icon' icon={faFileDownload} />
              <FontAwesomeIcon className='cv-icon' icon={faCopy} />
          </div>
          <span className='cv-download-text'>Download / Print</span>
        </div>
        <img className='profile-pic' src={Profile} alt='profile pic' />
        <div className='github-linkedin'>
          <div className='follow-icons'>
            <FontAwesomeIcon className='cv-icon' icon={faGithubSquare} />
            <FontAwesomeIcon className='cv-icon' icon={faLinkedinIn} />
          </div>
          <span className='follow-me'>Follow Me On</span>
        </div>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='diamond-icon' icon={faGem} /><hr className='line-break' />
      </div>
      <div className='skills-title-text'>
        <span className='skills-title'>Main Skills</span>
        <span className='skills-text'>Here are some technologies I am proficient in.</span>
      </div>
      <div className='skills'>
        <span className='skill'>JavaScript</span>
        <Progress percent={80} />
        <span className='skill'>React</span>
        <Progress percent={90} />
        <span className='skill'>Redux</span>
        <Progress percent={60} />
        <span className='skill'>Java</span>
        <Progress percent={90} />
        <span className='skill'>Spring</span>
        <Progress percent={90} />
        <span className='skill'>PostgreSQL</span>
        <Progress percent={80} />
        <span className='skill'>LESS</span>
        <Progress percent={90} />
        <span className='skill'>HTML/CSS</span>
        <Progress percent={90} />
      </div>
    </div>
  );
};

export default About;