import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPaintRoller, 
  faChevronDown } from '@fortawesome/free-solid-svg-icons'
import BerrienCounty from '../img/berriencounty.png';
import MedCabinet from '../img/medcabinet.png';
import HoodKitchen from '../img/hoodkitchen.png';
import Login from '../img/login.png';
import { Card } from 'antd';

const { Meta } = Card;

const Portfolio = () => {
  return (
    <div  className='portfolio-container'>
      <div className='portfolio-banner'>
        <FontAwesomeIcon className='portfolio-icon' icon={faPaintRoller} />
        <span className='portfolio-title'>Portfolio</span>
      </div>
      <div className='portfolio-title'>
        <span className='portfolio-title-text'>Check out my work</span>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faChevronDown} /><hr className='line-break' />
      </div>
      <div className='sites-container'>
        <Card
          hoverable
          style={{ width: 800, marginBottom: 50 }}
          cover={<img alt="the hood kitchen" src={HoodKitchen} />}
        >
        < a href='https://www.thehoodkitchen.com/'> <Meta title="The Hood Kitchen" description="https://www.thehoodkitchen.com/" /></a>
        </Card>
        <Card
          hoverable
          style={{ width: 800, marginBottom: 50 }}
          cover={<img alt="berrien county" src={BerrienCounty} />}
        >
          <a href='https://berriencounty.org/' ><Meta title="Berrien County" description="https://berriencounty.org/" /></a>
        </Card>
        <Card
          hoverable
          style={{ width: 800, marginBottom: 50 }}
          cover={<img alt="med cabinet" src={MedCabinet} />}
        >
          <a href='https://marketing.stgary01.now.sh/'> <Meta title="Med Cabinet" description="https://marketing.stgary01.now.sh/" /></a>
        </Card>
        <Card
          hoverable
          style={{ width: 800, marginBottom: 50 }}
          cover={<img alt="login" src={Login} />}
        >
          <a href='/'> <Meta title="MaterialUI" description="Login page dark theme" /></a>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;