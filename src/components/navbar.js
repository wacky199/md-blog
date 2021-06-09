import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <ul>
        <li>
          <Link
            to="/"
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={navbarStyles.navItem}
            activeClassName={navbarStyles.navItemActive}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
