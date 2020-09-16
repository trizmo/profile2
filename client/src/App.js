import React from 'react';
import './App.css';
import './mobileStyle.css'

// COMPONENTS
import NavBar from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App app-wrapper">
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
