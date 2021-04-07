import React, { useCallback, useState } from 'react'
import { Modal } from 'rsuite';
import PortfolioItem from '.';


const PortfolioButton = ({ icon,title,description,codeURL,siteURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])
  return (
    <>
      <button onClick={open} className="portfolio-frame">
        
      <img className="img" src={icon} />
      </button>
      <PortfolioItem show={isOpen} title={title} description={description} codeURL={codeURL} siteURL={siteURL} image={icon} close={() => close()}/>
    </>
  )
}

export default PortfolioButton
