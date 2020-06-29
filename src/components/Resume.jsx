import React from 'react';
import { Steps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFile, 
  faLaptopCode, 
  faGem,
  faTerminal } from '@fortawesome/free-solid-svg-icons'

const { Step }= Steps;

const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='resume-banner'>
        <FontAwesomeIcon className='resume-icon' icon={faFile} />
        <span className='resume-title'>Resume</span>
      </div>
      <div className='education'>
        <div className='education-title'>
          <span className='education-text'>My Education</span>
        </div>
        <div className='school-list'>
          <Steps progressDot direction="vertical">
            <Step active={false} title="Lambda School" description="GitHub, HTML, CSS, LESS, JavaScript, React, Redux, Java, Spring, PostgreSQL, Python, and Computer Science. Live instruction from accredited professionals, Daily projects, Build-Weeks creating apps with cross functional teams." />
            <Step title="KVCC" description="Visual Basic, PHP, Programming Logic, HTML, CSS, C#, DataBase/SQL, Web Page Coding, Java Programming, Operating Systems." />
            <Step title="Michigan State University" description="Electrical Technology, AC and DC Machines, Automation and Controls, Technical Drawing, Base Electricity, Electrical Wiring I - III." />
          </Steps>
          <FontAwesomeIcon className='terminal-icon' icon={faTerminal} />
        </div>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='diamond-icon' icon={faGem} /><hr className='line-break' />
      </div>
    </div>
  );
};

export default Resume;