import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function About() {
  return (
    <div className='about-wrapper component-wrapper' id="about">
      <div className='about-info-container container-left'>
        <p>
          A passionate developer and a quick learner with experience in mobile development, Internet of Things, and in back-end and front-end web development. I am always looking to better myself and learn new things. Consistently growing, I bring a high quality value to any team by bringing positive energy, exceptional problem solving skills, and high Self-Efficacy.
        </p>
      </div>
      <div className='about-highlight-container container-right column-center-center'>
        <h3>TRISTAN PERERA</h3>
        <h5>Full Stack Web Developer | Whittier, California</h5>
        <div className='about-highlight-social'><a href="https://www.linkedin.com/in/tristan-perera/" target="_blank"><FaLinkedin /></a> <a href="https://github.com/trizmo" target="_blank"><FaGithub /></a></div>
      </div>
    </div>
  )
}
