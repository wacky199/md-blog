import React from "react"
import NavBar from './navbar'
import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.heading}>
      <div>
        <h1>Wacky's Portfolio</h1>
        <NavBar/>
      </div>
    </header>
  )
}
export default Header
