import React from 'react';
import Menu from './Menu';
import Logo from '../img/logo.png';

export default function NavBar() {
  return (
  <div className='nav-container'>
      <header>
        <nav>
          <div className='menu'>
            <Menu />
          </div>
          <div className='nav-logo'>
            <img className='logo-img' src={Logo} alt='logo' />
          </div>
          <div className='nav-bar'>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#resume'>Resume</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}