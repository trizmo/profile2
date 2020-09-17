import React, { Component } from 'react'
import { FaHtml5, FaCss3, FaGithub, FaNodeJs, FaArrowCircleRight, FaInfoCircle } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiMongodb } from 'react-icons/si'

const portfolio = [

  {
    name: "Ramcast",
    icon: <FaNodeJs />,
    path: "https://www.ramcaststeel.net/",
    details: "A steel distribution company still using a paper catalog for their customers decided to upgrade their site.",
  },
  {
    name: "Shopkeepers ToolBox",
    icon: <FaNodeJs />,
    path: "http://calitechco.com/",
    details: "Merchant services offering more than lowest rates went from no web presence to a beautiful WordPress site.",
  },
  {
    name: "California Pools",
    icon: <SiMongodb />,
    path: "https://california-pools.herokuapp.com/",
    details: "A sample site created to show a simple site made from ReactJS.",
    githubPath: "https://github.com/trizmo/californiaPools"
  },
  {
    name: "Verigate",
    icon: <SiMongodb />,
    path: null,
    details: "A Web based Prototype Wifi Gate Opener",
    githubPath: "https://github.com/quipsquaff/VERIGATE"
  },
  {
    name: "Ginger Red Naturals",
    icon: <SiMongodb />,
    path: "https://www.gingerrednaturals.com/",
    details: "A Beautiful WordPress site displaying clients products along with a blog for their thoughts.",
    githubPath: "https://github.com/MrStevenNg/GingerRed-Naturals"
  },
  {
    name: "Battle-Tactics",
    icon: <SiMongodb />,
    path: null,
    details: "A fully Mobile strategy planning app for table-top games.",
    githubPath: "https://github.com/MrStevenNg/Battle-Tactics"
  },

]

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnmore: null
    };
    this.handleLearnMore = this.handleLearnMore.bind(this)

  }

  handleLearnMore(port) {
    this.setState({
      learnmore: port
    }, () => {
      window.location.href = `/#learnmore`
    })
  }
  render() {
    return (
      <div className='portfolio-wrapper component-wrapper column-center-center' id="portfolio">
        <h3>PORTFOLIO</h3>

        <div className='skill-cards-container'>

          {portfolio.map(item => (
            <div className='portfolio-card' key="item.name">
              <div className='portfolio-card-upper'>
                {item.name}
              </div>
              <div className='portfolio-card-lower'>
                <div onClick={() => this.handleLearnMore(item)}>
                  <p>LEARN MORE</p> <FaInfoCircle />
                </div>
                {item.githubPath ? (
                  <a href={item.githubPath} target="_blank">
                    <p>Repo</p> <FaGithub />
                  </a>
                ) : (null)}
                {item.path ? (
                  <a href={item.path} target="_blank">
                    <p>VISIT</p> <FaArrowCircleRight />
                  </a>
                ) : (null)}

              </div>
            </div>
          ))}
        </div>

        {this.state.learnmore ? (
          <div className='component-wrapper' id="learnmore">
            <div className='container-left'>
              <h4>{this.state.learnmore.name}</h4>
            </div>
            <div className='container-right column-center-center'>
              <p>{this.state.learnmore.details}</p>
            </div>
          </div>
        ) : (null)}

      </div>
    )

  }
}

export default Portfolio
