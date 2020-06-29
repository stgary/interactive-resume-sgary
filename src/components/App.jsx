import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import About from './About';
import Footer from './Footer';

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
