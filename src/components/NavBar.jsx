import React from 'react';

export default function NavBar() {
  return (
  <div className='nav-container'>
      <header>
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}