import React from 'react'
// import { Link } from 'react-router-dom'

const PortfolioItem = ({ show,close,image,title,description,codeURL,siteURL,small }) => {

  return (
    <div className={`portfolio-modal ${show ? "show" : ""}`}>
      
      <div className={`portfolio-a ${small ===true ? "small" : ""}`}  style={{ backgroundImage: `url(${image})`}}>
      </div>
      <div className="portfolio-b">
        <div className="project-text">
        <h1 className="project-title">{title}</h1>
        <div dangerouslySetInnerHTML={{__html: description}}>
            
        </div>
          <a className="mt-1 block w-max project-link" href={codeURL} target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a className="mt-1 block w-max project-link" href={siteURL} target="_blank" rel="noopener noreferrer">View Live Site</a>
        </div>
      </div>
      <button className="close-button" onClick={close}></button>
    </div>
  )
}

export default PortfolioItem
