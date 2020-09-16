import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiMongodb } from 'react-icons/si'

const frontEnd = [
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },

]

const backEnd = [

  { name: "Javascript", icon: <SiJavascript /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "ExpressJS", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },

]

export default function Skills() {
  return (
    <div className='skills-wrapper component-wrapper' id="skill">
      <div className='skills-front container-left'>
        <h3>FRONT END DEVELOPMENT</h3>
        <div className='skill-cards-container'>

          {frontEnd.map(item => (
            <div className='skill-card' key="item.name">
              {item.icon}{item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='skills-back container-right'>
        <h3>BACK END DEVELOPMENT</h3>
        <div className='skill-cards-container'>

          {backEnd.map(item => (
            <div className='skill-card' key="item.name">
              {item.icon}{item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
