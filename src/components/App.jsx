import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div id='home' className="main-container">
      <NavBar />
      <main>
        <div className='landing-wrapper'>
          <LandingPage />
        </div>
        <div className='about-wrapper'>
          <About />
        </div>
        <div className='resume-wrapper'>
          <Resume />
        </div>
        <div className='portfolio-wrapper'>
          <Portfolio />
        </div>
        <div className='contact-wrapper'>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
