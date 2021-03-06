import React, { useState } from 'react';
import { Drawer } from 'antd';
import Logo from '../img/logo.png';
import { 
  faBars, 
  faHome,
  faAddressCard,
  faPaintRoller,
  faFile,
  faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
      <a href='#home' onClick={onClose}>
        <FontAwesomeIcon className='drawer-icon' icon={faHome} />  
          <span>Home</span>
      </a>
      <a href='#about' onClick={onClose}>
        <FontAwesomeIcon className='drawer-icon' icon={faAddressCard} /> 
          <span>About</span>
      </a>
      <a href='#resume' onClick={onClose}>
        <FontAwesomeIcon className='drawer-icon' icon={faFile} /> 
          <span>Resume</span>
      </a>
      <a href='#portfolio' onClick={onClose}>
        <FontAwesomeIcon className='drawer-icon' icon={faPaintRoller} /> 
          <span>Portfolio</span>
      </a>
      <a href='#contact' onClick={onClose}>
        <FontAwesomeIcon className='drawer-icon' icon={faPaperPlane} /> 
          <span>Contact</span>
      </a>
    </Drawer>
  </div>
  );
}