import React from 'react'

import irisIcon from '../images/iris_icon.svg'
import cupcakeIcon from '../images/cupcake_icon.svg'
import firesideIcon from '../images/fireside_icon.svg'
import hiveIcon from '../images/hive_icon.svg'
import shieldIcon from '../images/shield_icon.svg'
import PortfolioButton from '../components/portfolio-item/PortfolioButton'

const Work = () => {
  return (
    <div className="container full-height work-page">
      <div className="title-container">
        <h1 className="title">Alfonso Martinez</h1>
        <p className="subtitle">
          I create things for the web using <strong>
            <span >HTML</span></strong>, <strong>
            <span>CSS</span>
          </strong>
          , and <strong className="rotating-word">
            <span>Javascript.</span>
            <span>React.</span>
            <span>Node.js.</span>
            <span>Ruby.</span>
            <span>PostGreSQL.</span>
            <span>Ruby.</span>
          </strong>
        </p>
      </div>

      <div className="grid gallery">
        {/* <button className="portfolio-frame">
          <img className="img" src={irisIcon} />
        </button> */}

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={irisIcon} 
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>
      
        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={cupcakeIcon} 
            title="Cupcake | Birthday Tracker"
            description="<p>A birthday tracker so I can remember birthdays. Uses Google for authentication, firebase for storage and hosting. Presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={firesideIcon} 
            title="Fireside | Chat App"
            description="<p>A fullstack chatroom app. Users can sign in, create chat rooms, and chat in real time with others.</p>
              <p>I took advantage of Firebase for its storage,hosting, and database. The frontend is presented using React.js and the react framework React Suite. I used Sass for styling.</p>"
            codeURL=""
            siteURL=""
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={hiveIcon} 
            title="NYT Bee Solver"
            description="<p>A puzzle solver for the NYT Spelling Bee Game. Acceptable word list fetched using AJAX, solved and presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>


        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={shieldIcon}
            title="Gwendolyn | Character Tracker"
            description="<p>Gwendolyn is a platform built to help Players create, update, and share their character sheets either publically or to members of their own gaming group. It features an inventory tracking system for easily keeping track of your progress.</p>

<p>Frontend built using HTML, CSS, and Javascript. Backend built using Ruby on Rails and hosted using Heroku & AWS.</p>"
            codeURL=""
            siteURL=""
            bottom={true}
          />
        </div>
      
      
      
        {/* <div className="portfolio-frame">
          <img className="img" src={cupcakeIcon} />
        </div>

        <div className="portfolio-frame">
          <img className="img" src={firesideIcon} />
        </div>

        <div className="portfolio-frame">
          <img className="img" src={hiveIcon} />
        </div>

        <div className="portfolio-frame">
          <img className="img" src={shieldIcon} />
        </div> */}

      </div>
      
    </div>
  )
}

export default Work
