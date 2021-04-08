import React from 'react'
import { Link } from 'react-router-dom'
// import SunIcon from './SunIcon'
// import ThemeToggler from './ThemeToggler'

const Header = ({ theme,toggleTheme }) => {
  return (
    <header>
      <p className="logo"><Link to="/">Alfonso Martinez</Link></p>
      <nav>
        <ul>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://docs.google.com/document/d/1NTodNePFNfCYaKZqalaNPdSruAi6u5hCra88-Evrb1s/edit" target="_blank" rel="noreferrer">Resume</a></li>
          {/* <li><ThemeToggler theme={theme} toggleTheme={() => toggleTheme()}/></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
