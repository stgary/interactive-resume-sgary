import React from 'react';
import Profile from '../img/profilepic.png';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAddressCard, 
  faCopy,
  faFileDownload,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneSquare,
  faAngleDoubleDown,
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
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faAngleDoubleDown} /><hr className='line-break' />
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
      <div className='gtkm-c'>
        <span className='gtkm-t'>Get to know me</span>
        <p className='gtkm-p'>I have a background in robotic programming, PLC programming, and web development. I am most passionate about web development and I'm currently looking for work as a developer. I spent the past year working on my education and I am ready to re-enter the work force. If you're a hiring manager please contact me below.</p>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faAngleDoubleDown} /><hr className='line-break' />
      </div>
      <div className='ctc'>
        <span className='ct'>My contact information</span>
      </div>
      <div className='cinfo'>
        <FontAwesomeIcon className='map-icon' icon={faMapMarkerAlt} />
        <span className='location'>Detroit, MI 48226</span>
        <div className='email-phone'>
          <FontAwesomeIcon className='mail-icon' icon={faEnvelope} />
          <span className='email'>sgary0@protonmail.com</span>
          <FontAwesomeIcon className='phone-icon' icon={faPhoneSquare} />
          <span className='phone'>(615) 678-3231</span>
        </div>
      </div>
    </div>
  );
};

export default About;