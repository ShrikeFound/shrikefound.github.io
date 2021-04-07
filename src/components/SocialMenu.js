import React from 'react'
import { Link } from 'react-router-dom'

const SocialMenu = () => {
  return (
    <footer>
      <ul>
        <li><Link>LinkedIn</Link></li>
        <li><Link>Github</Link></li>
        <li><Link>Resume</Link></li>
      </ul>
    </footer>
  )
}

export default SocialMenu
