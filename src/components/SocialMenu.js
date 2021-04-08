import React from 'react'
// import { Link } from 'react-router-dom'

import GithubIcon from './GithubIcon'
import LinkedInIcon from './LinkedInIcon'
// import ResumeIcon from './ResumeIcon'
const SocialMenu = ({ theme }) => {
  return (
    <footer>
      <ul>
        <li><a href="https://www.linkedin.com/in/alfonso-martinez-dev" target="_blank" rel="noreferrer"><LinkedInIcon /></a></li>
        <li><a href="https://github.com/shrikefound" target="_blank" rel="noreferrer"><GithubIcon /></a></li>
        {/* <li><Link><ResumeIcon/></Link></li> */}
      </ul>
    </footer>
  )
}

export default SocialMenu