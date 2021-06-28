import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <ul>
        <li className={navbarStyles.navItem}>
          <Link to="/" activeStyle={{ color: "#ffb2b2", fontSize: "1.2em" }}>
            Home
          </Link>
        </li>
        <li className={navbarStyles.navItem}>
          <Link
            to="/blog"
            activeStyle={{ color: "#ffb2b2", fontSize: "1.2em" }}
          >
            Blogs
          </Link>
        </li>
        <li className={navbarStyles.navItem}>
          <Link
            to="/about"
            activeStyle={{ color: "#ffb2b2", fontSize: "1.2em" }}
          >
            About me
          </Link>
        </li>
        <li className={navbarStyles.navItem}>
          <Link
            to="/contact"
            activeStyle={{ color: "#ffb2b2", fontSize: "1.2em" }}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
