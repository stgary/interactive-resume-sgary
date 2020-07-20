import React from 'react';
import Profile from '../img/profilepic.png';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown,
  faAddressCard, 
  faGlobeAmericas,
  faPaperPlane,
  faMobileAlt } from '@fortawesome/free-solid-svg-icons'
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
        <span className='name'>Stephen Gary</span>
        <span className='title'>Web Developer</span>
      </div>
      <div className='profile-cv-follow'>
        <img className='profile-pic' src={Profile} alt='profile pic' />
        <div className='github-linkedin'>
          <div className='icons'>
            <a href='https://github.com/stgary'>
              <FontAwesomeIcon className='cv-icon' icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/'>
              <FontAwesomeIcon className='cv-icon' icon={faLinkedinIn} />
            </a>
            <a href='https://twitter.com/explore'>
              <FontAwesomeIcon className='cv-icon' icon={faTwitter} />
            </a>
            <a href='https://m.facebook.com/stephen.gary.566'> 
              <FontAwesomeIcon className='cv-icon' icon={faFacebook} />
            </a> 
          </div>
        </div>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faChevronDown} /><hr className='line-break' />
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
        <Progress percent={70} />
        <span className='skill'>Node.js</span>
        <Progress percent={90} /> 
        <span className='skill'>PostgreSQL</span>
        <Progress percent={80} />
        <span className='skill'>LESS</span>
        <Progress percent={90} />
        <span className='skill'>HTML/CSS</span>
        <Progress percent={90} />
      </div>
      <div className='get-to-know-me'>
        <span className='get-to-know-title'>Get to know me</span>
        <p className='get-to-know-paragraph'>I’ve always had a penchant for solving puzzles and problems, especially when it comes to technology. I love writing code and I'm always looking to better myself. Feel free to contact me about any opportunities!  </p>
      </div>
      <div id='contact' className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faChevronDown} /><hr className='line-break' />
      </div>
      <div className='ctc'>
        <span className='ct'>My contact information</span>
        <span className='cm'>I am willing to relocate</span>
      </div>
      <div className='cinfo'>
        <FontAwesomeIcon className='map-icon' icon={faGlobeAmericas} />
        <span className='location'>Detroit, MI</span>
        <FontAwesomeIcon className='mail-icon' icon={faPaperPlane} />
        <span className='email'>sgary0@protonmail.com</span>
        <FontAwesomeIcon className='phone-icon' icon={faMobileAlt} />
        <span  className='phone'>(615) 678-3231</span>
        <div id='resume'></div>
      </div>
    </div>
  );
};

export default About;