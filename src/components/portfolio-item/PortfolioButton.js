import React, { useCallback, useState } from 'react'
import PortfolioItem from '.';


const PortfolioButton = ({ icon,title,description,codeURL,siteURL,bottom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])
  return (
    <>
      <button onClick={open} className="portfolio-frame has-tooltip">
        <span className={`tooltip ${bottom ? "tooltip-bottom" : ""}`}>{title}</span>
      <img className="img" src={icon} />
      </button>
      <PortfolioItem show={isOpen} title={title} description={description} codeURL={codeURL} siteURL={siteURL} image={icon} close={() => close()}/>
    </>
  )
}

export default PortfolioButton
