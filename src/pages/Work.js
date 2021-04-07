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
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={firesideIcon} 
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={hiveIcon} 
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL=""
            siteURL=""
          />
        </div>


        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={shieldIcon} 
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL=""
            siteURL=""
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
