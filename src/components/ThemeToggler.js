import React from 'react'
import { Button } from 'rsuite'
import "../styles/main.scss"

const ThemeToggler = ({ toggleTheme }) => {

  return (
    <div>
      <Button onClick={toggleTheme}>hello</Button>
    </div>
  )
}

export default ThemeToggler
