import React from 'react';
import { Steps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFile, 
  faCode,
  faAngleDoubleDown,
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
            <Step active={false} title="Lambda School" subTitle='2019-2020' description="GitHub, HTML, CSS, LESS, JavaScript, React, Redux, Java, Spring, PostgreSQL, Python, and Computer Science. Live instruction from accredited professionals, Daily projects, Build-Weeks creating apps with cross functional teams." />
            <Step title="KVCC" subTitle='2009-2011' description="Visual Basic, PHP, Programming Logic, HTML, CSS, C#, DataBase/SQL, Web Page Coding, Java Programming, Operating Systems." />
            <Step title="Michigan State University" subTitle='2007-2009' description="Electrical Technology, AC and DC Machines, Automation and Controls, Technical Drawing, Base Electricity, Electrical Wiring I - III." />
          </Steps>
          <FontAwesomeIcon className='terminal-icon' icon={faTerminal} />
        </div>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faAngleDoubleDown} /><hr className='line-break' />
      </div>
      <div className='work-container'>
        <div className='work-title'>
          <span className='work-title-text'>My Work Experience</span>
        </div>
        <div className='work'>
          <FontAwesomeIcon className='code-icon' icon={faCode} />
          <Steps progressDot direction="vertical">
            <Step active={false} title="Clemens Food Group" subTitle='2017-2019' description="Clemens is the fifth largest pork producer in the world. My job consisted of electrical maintenance, PLC programming, device calibration, and project work." />
            <Step title="Vijon Labratories" subTitle='2014-2017' description="Vijon is a mojor manufacturer of cleaning and cosmetic products. My job consisted of electrical maintenance, PLC programming, integration, and installation." />
            <Step title="Benteler Automotive" subTitle='2013-2014' description="Benteler is an automotive parts manufacturer. My job consisted of electrical maintenance and robotic programming." />
            <Step title="Traumasoft" subTitle='2012-2013' description="Traumasoft Built a call intake system for ambulances and web applications. My job consisted of using HTML, CSS, JavaScript, PHP, and MySQL for the design and modification of web applications." />
            <Step title="Challenge MFG" subTitle='2011-2012' description="Challenge Mfg. is an automotive parts manufacturer. My job consisted of electrical maintenance and robotic programming." />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default Resume;