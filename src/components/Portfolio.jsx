import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import BerrienCounty from '../img/berriencounty.png';
import MedCabinet from '../img/medcabinet.png';
import HoodKitchen from '../img/hoodkitchen.png';
import { Card } from 'antd';

const { Meta } = Card;

const Portfolio = () => {
  return (
    <div  className='portfolio-container'>
      <div id='portfolio' className='portfolio-banner'>
        <FontAwesomeIcon className='portfolio-icon' icon={faPaintRoller} />
        <span className='portfolio-title'>Portfolio</span>
      </div>
      <div className='portfolio-title'>
        <span className='portfolio-title-text'>Check out my work</span>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faAngleDoubleDown} /><hr className='line-break' />
      </div>
      <div className='sites-container'>
        <Card
          hoverable
          style={{ width: 600, marginBottom: 50 }}
          cover={<img alt="example" src={HoodKitchen} />}
        >
        < a href='https://www.thehoodkitchen.com/'> <Meta title="The Hood Kitchen" description="https://www.thehoodkitchen.com/" /></a>
        </Card>
        <Card
          hoverable
          style={{ width: 600, marginBottom: 50 }}
          cover={<img alt="example" src={BerrienCounty} />}
        >
          <a href='https://berriencounty.org/' ><Meta title="Berrien County" description="https://berriencounty.org/" /></a>
        </Card>
        <Card
          hoverable
          style={{ width: 600, marginBottom: 50 }}
          cover={<img alt="example" src={MedCabinet} />}
        >
          <a href='https://marketing-ha7mpeweg.now.sh/'> <Meta title="Med Cabinet" description="https://marketing-ha7mpeweg.now.sh/" /></a>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;