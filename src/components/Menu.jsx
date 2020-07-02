import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../img/logo.png';

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
    <Button onClick={showDrawer}>
        <MenuOutlined className='menu-button' />
    </Button>
    <Drawer
      title={img}
      placement="top"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <a href='#home'>Home</a>
      <a href='#about'>About Me</a>
      <a href='#resume'>Resume</a>
      <a href='#portfolio'>Portfolio</a>
      <a href='#contact'>Contact</a>
    </Drawer>
  </div>
  );
}