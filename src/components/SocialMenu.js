import React from 'react'
import { Link } from 'react-router-dom'

import GithubIcon from './GithubIcon'
import LinkedInIcon from './LinkedInIcon'
import ResumeIcon from './ResumeIcon'
const SocialMenu = ({ theme }) => {
  return (
    <footer>
      <ul>
        <li><Link><LinkedInIcon /></Link></li>
        <li><Link><GithubIcon /></Link></li>
        <li><Link><ResumeIcon/></Link></li>
      </ul>
    </footer>
  )
}

export default SocialMenu