import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({ show,close,image,title,description,codeURL,siteURL }) => {

  return (
    <div className={`portfolio-modal ${show ? "show" : ""}`}>
      
      <div className="portfolio-a" style={{ backgroundImage: `url(${image})`}}>
      </div>
      <div className="portfolio-b">
        <div className="project-text">
        <h1 className="project-title">{title}</h1>
        <div dangerouslySetInnerHTML={{__html: description}}>
            
        </div>
          <Link to={codeURL}>View Source Code</Link>
          <br/>
          <Link to={siteURL}>View Live Site</Link>
        </div>
      </div>
      <button className="close-button" onClick={close}></button>
    </div>
  )
}

export default PortfolioItem
