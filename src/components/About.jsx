import React from 'react';
import Profile from '../img/profilepic.png';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAddressCard, 
  faMapMarkerAlt,
  faEnvelopeOpen,
  faPhone,
  faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <img className='profile-pic' src={Profile} alt='profile pic' />
        <div className='github-linkedin'>
          <div className='icons'>
            <FontAwesomeIcon className='cv-icon' icon={faGithub} />
            <FontAwesomeIcon className='cv-icon' icon={faLinkedinIn} />
            <FontAwesomeIcon className='cv-icon' icon={faTwitter} />
            <FontAwesomeIcon className='cv-icon' icon={faFacebook} />
          </div>
          {/* <span className='follow-me'>Follow Me On</span> */}
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
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faAngleDoubleDown} /><hr className='line-break' />
      </div>
      <div className='ctc'>
        <span className='ct'>My contact information</span>
      </div>
      <div className='cinfo'>
        <FontAwesomeIcon className='map-icon' icon={faMapMarkerAlt} />
        <span className='location'>Detroit, MI 48226</span>
        <FontAwesomeIcon className='mail-icon' icon={faEnvelopeOpen} />
        <span className='email'>sgary0@protonmail.com</span>
        <FontAwesomeIcon className='phone-icon' icon={faPhone} />
        <span className='phone'>(615) 678-3231</span>
      </div>
    </div>
  );
};

export default About;