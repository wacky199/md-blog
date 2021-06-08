import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header style={{ alignItems: "center" }}>
    <h1>Wacky's Portfolio</h1>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact me
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About me
          </Link>
        </li>
        <li>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            Blogs
          </Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
