import React from 'react'
import "../styles/main.scss"
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

const ThemeToggler = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div>
      <button style={{ display: "grid", placeItems: "center", border: "none", backgroundColor: "inherit" }} onClick={toggleTheme}>{theme === "light" ? <MoonIcon /> : <SunIcon />}</button>
    </div>
  )
}

export default ThemeToggler
