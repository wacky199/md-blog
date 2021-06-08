import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.heading}>
      <div>
        <h1>Wacky's Portfolio</h1>
        <nav>
          <ul>
            <li>
              <Link className={headerStyles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className={headerStyles.link}>
                Contact me
              </Link>
            </li>
            <li>
              <Link to="/about" className={headerStyles.link}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/blog" className={headerStyles.link}>
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
