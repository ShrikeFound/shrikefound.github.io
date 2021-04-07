import React from 'react'
import { Link } from 'react-router-dom'
import SunIcon from './SunIcon'
import ThemeToggler from './ThemeToggler'

const Header = ({ theme,toggleTheme }) => {
  return (
    <header>
      <p className="logo">Alfonso Martinez</p>
      <nav>
        <ul>
          <li><Link>Work</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Contact</Link></li>
          <li><ThemeToggler theme={theme} toggleTheme={() => toggleTheme()}/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
