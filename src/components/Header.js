import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <p className="logo">Alfonso Martinez</p>
      <nav>
        <ul>
          <li><Link>Work</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
