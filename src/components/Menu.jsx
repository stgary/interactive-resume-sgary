import React, { useState } from 'react';
import { Drawer } from 'antd';
import Logo from '../img/logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Menu() {

  const [visible, setVisible] = useState(false);
  
  const img = <img src={Logo} alt='logo' /> 

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
      placement="top"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#resume'>Resume</a>
      <a href='#portfolio'>Portfolio</a>
      <a href='#contact'>Contact</a>
    </Drawer>
  </div>
  );
}