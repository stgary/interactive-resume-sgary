import React, { useState } from 'react';
import { Drawer } from 'antd';
import Logo from '../img/logo.png';
import { 
  faBars, 
  faHome,
  faAddressCard,
  faPaintRoller,
  faFile,
  faPaperPlane,
  faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Menu() {

  const [visible, setVisible] = useState(false);
  
  const img = <img className='menu-logo' src={Logo} alt='logo' />;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  return (
  <div className='drawer-container'>
    <FontAwesomeIcon onClick={showDrawer} className='menu-button' icon={faBars} />
    <Drawer
      title={img}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    > 
      <a onClick={onClose} href='#home'>
      <FontAwesomeIcon className='drawer-icon' icon={faHome} />  
      <span>Home</span>
      </a>
      <a onClick={onClose} href='#about'>
      <FontAwesomeIcon className='drawer-icon' icon={faAddressCard} /> 
        <span>About</span>
      </a>
      <a onClick={onClose} href='#resume'>
      <FontAwesomeIcon className='drawer-icon' icon={faFile} /> 
        <span>Resume</span>
        </a>
      <a onClick={onClose} href='#portfolio'>
      <FontAwesomeIcon className='drawer-icon' icon={faPaintRoller} /> 
        <span>Portfolio</span>
      </a>
      <a onClick={onClose} href='#contact'>
        <FontAwesomeIcon className='drawer-icon' icon={faPaperPlane} /> 
        <span>Contact</span>
      </a>
    </Drawer>
  </div>
  );
}