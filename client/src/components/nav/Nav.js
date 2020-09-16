import React from 'react'

export default function Nav() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
        <h3>Tristan Perera | Full Stack Web Developer</h3>
      </div>
      <div className='navbar-links'>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skill">SKILL</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}
