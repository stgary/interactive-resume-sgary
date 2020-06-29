import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
// import Footer from './Footer';

function App() {
  return (
    <div className="main-container">
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
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
